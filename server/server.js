const express = require("express");
const cors = require("cors");

const { sql, conectarBD } = require("./db");

const app = express();

const PORT = 3000;

// =====================================================
// CONFIGURACIÓN
// =====================================================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// =====================================================
// RUTA DE PRUEBA
// =====================================================

app.get("/", (req, res) => {
    res.send("Servidor BlessedStore funcionando correctamente.");
});


// =====================================================
// GUARDAR CLIENTE
// =====================================================

app.post("/api/clientes", async (req, res) => {

    try {

        const {
            nombre,
            apellido,
            rut,
            telefono,
            email,
            comuna,
            direccion,
            metodo_entrega
        } = req.body;

        // ---------------------------------------------
        // VALIDAR DATOS OBLIGATORIOS
        // ---------------------------------------------

        if (!nombre || !apellido || !telefono) {

            return res.status(400).json({
                ok: false,
                mensaje: "Nombre, apellido y teléfono son obligatorios."
            });

        }

        // ---------------------------------------------
        // CONECTAR CON SQL SERVER
        // ---------------------------------------------

        const pool = await conectarBD();

        // ---------------------------------------------
        // INSERTAR CLIENTE
        // ---------------------------------------------

        const resultado = await pool
            .request()

            .input("nombre", sql.VarChar(100), nombre)
            .input("apellido", sql.VarChar(100), apellido)
            .input("rut", sql.VarChar(20), rut || null)
            .input("telefono", sql.VarChar(20), telefono)
            .input("email", sql.VarChar(150), email || null)
            .input("comuna", sql.VarChar(100), comuna || null)
            .input("direccion", sql.VarChar(255), direccion || null)
            .input("metodo_entrega", sql.VarChar(50), metodo_entrega || null)

            .query(`
                INSERT INTO clientes
                (
                    nombre,
                    apellido,
                    rut,
                    telefono,
                    email,
                    comuna,
                    direccion,
                    metodo_entrega
                )
                OUTPUT INSERTED.id
                VALUES
                (
                    @nombre,
                    @apellido,
                    @rut,
                    @telefono,
                    @email,
                    @comuna,
                    @direccion,
                    @metodo_entrega
                )
            `);

        // ---------------------------------------------
        // OBTENER ID DEL CLIENTE
        // ---------------------------------------------

        const idCliente = resultado.recordset[0].id;

        console.log(`✅ Cliente guardado. ID: ${idCliente}`);

        res.status(201).json({
            ok: true,
            mensaje: "Cliente guardado correctamente.",
            id: idCliente
        });

    } catch (error) {

        console.error("❌ Error guardando cliente:");
        console.error(error.message);

        res.status(500).json({
            ok: false,
            mensaje: "No se pudo guardar el cliente."
        });

    }

});


// =====================================================
// GUARDAR PEDIDO
// =====================================================

app.post("/api/pedidos", async (req, res) => {

    let transaction = null;

    try {

        const {
            cliente_id,
            productos,
            estado
        } = req.body;

        // ---------------------------------------------
        // VALIDAR CLIENTE
        // ---------------------------------------------

        if (!cliente_id) {

            return res.status(400).json({
                ok: false,
                mensaje: "El ID del cliente es obligatorio."
            });

        }

        // ---------------------------------------------
        // VALIDAR PRODUCTOS
        // ---------------------------------------------

        if (!Array.isArray(productos) || productos.length === 0) {

            return res.status(400).json({
                ok: false,
                mensaje: "El pedido debe contener al menos un producto."
            });

        }

        // ---------------------------------------------
        // CONECTAR CON SQL SERVER
        // ---------------------------------------------

        const pool = await conectarBD();

        // ---------------------------------------------
        // COMPROBAR QUE EL CLIENTE EXISTA
        // ---------------------------------------------

        const clienteExiste = await pool
            .request()
            .input("cliente_id", sql.Int, cliente_id)
            .query(`
                SELECT id
                FROM clientes
                WHERE id = @cliente_id
            `);

        if (clienteExiste.recordset.length === 0) {

            return res.status(404).json({
                ok: false,
                mensaje: "El cliente no existe."
            });

        }

        // ---------------------------------------------
        // CALCULAR TOTAL DEL PEDIDO
        // ---------------------------------------------

        let total = 0;

        for (const producto of productos) {

            const cantidad = Number(producto.cantidad);
            const precio = Number(producto.precio);

            if (
                !producto.producto ||
                !Number.isInteger(cantidad) ||
                cantidad <= 0 ||
                !Number.isFinite(precio) ||
                precio < 0
            ) {

                return res.status(400).json({
                    ok: false,
                    mensaje: "Uno de los productos tiene datos inválidos."
                });

            }

            total += cantidad * precio;
        }

        // ---------------------------------------------
        // INICIAR TRANSACCIÓN
        // ---------------------------------------------

        transaction = new sql.Transaction(pool);

        await transaction.begin();

        // ---------------------------------------------
        // INSERTAR PEDIDO
        // ---------------------------------------------

        const pedidoResult = await transaction
            .request()

            .input("cliente_id", sql.Int, cliente_id)
            .input("total", sql.Decimal(10, 2), total)
            .input(
                "estado",
                sql.VarChar(50),
                estado || "Pendiente"
            )

            .query(`
                INSERT INTO pedidos
                (
                    cliente_id,
                    total,
                    estado
                )
                OUTPUT INSERTED.id
                VALUES
                (
                    @cliente_id,
                    @total,
                    @estado
                )
            `);

        const idPedido = pedidoResult.recordset[0].id;

        // ---------------------------------------------
        // INSERTAR PRODUCTOS DEL PEDIDO
        // ---------------------------------------------

        for (const producto of productos) {

            await transaction
                .request()

                .input("pedido_id", sql.Int, idPedido)
                .input(
                    "producto",
                    sql.VarChar(255),
                    producto.producto
                )
                .input(
                    "cantidad",
                    sql.Int,
                    Number(producto.cantidad)
                )
                .input(
                    "precio",
                    sql.Decimal(10, 2),
                    Number(producto.precio)
                )

                .query(`
                    INSERT INTO detalle_pedido
                    (
                        pedido_id,
                        producto,
                        cantidad,
                        precio
                    )
                    VALUES
                    (
                        @pedido_id,
                        @producto,
                        @cantidad,
                        @precio
                    )
                `);
        }

        // ---------------------------------------------
        // CONFIRMAR TRANSACCIÓN
        // ---------------------------------------------

        await transaction.commit();

        console.log(
            `✅ Pedido guardado. ID: ${idPedido} | Cliente: ${cliente_id} | Total: $${total.toFixed(2)}`
        );

        res.status(201).json({
            ok: true,
            mensaje: "Pedido guardado correctamente.",
            idPedido: idPedido,
            cliente_id: cliente_id,
            total: total,
            productos: productos.length
        });

    } catch (error) {

        // ---------------------------------------------
        // DESHACER TRANSACCIÓN SI HUBO ERROR
        // ---------------------------------------------

        if (transaction) {

            try {
                await transaction.rollback();
            } catch (rollbackError) {
                console.error(
                    "❌ Error haciendo rollback:",
                    rollbackError.message
                );
            }

        }

        console.error("❌ Error guardando pedido:");
        console.error(error.message);

        res.status(500).json({
            ok: false,
            mensaje: "No se pudo guardar el pedido."
        });

    }

});


// =====================================================
// INICIAR SERVIDOR
// =====================================================

app.listen(PORT, async () => {

    console.log(
        `🚀 Servidor iniciado en http://localhost:${PORT}`
    );

    try {

        await conectarBD();

    } catch (error) {

        console.error(
            "No se pudo conectar con la base de datos."
        );

    }

});