import { pool } from "../database/conexion.js"

export const setUser = async (req, res) => {
    try {
        const { nombre, telefono, email, password } = req.body
        const [ result ] = await pool.query("insert into usuarios(nombre, telefono, email, password) VALUE (?, ?, ?, ?)", [ nombre, telefono, email, password ])

        if (result.affectedRows > 0) {
            return res.status(200).json({
                "mensaje": "Usuario creado"
            })
        } else {
            return res.status(404).json({
                "mensaje": "No se pudo crear el usuario"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}