/*import { Request, Response } from "express-serve-static-core";
import pool from '../database'
import { request } from "http";
class CitasController {
    public async list(req: Request, resp: Response) {
        const citas = await pool.query('SELECT * FROM cita INNER JOIN usuarios where idUsuarioC=idUsuario');
        resp.json(citas)
    }
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const citas = await pool.query('SELECT * FROM cita,usuarios WHERE id=? and correo', [id]);
        if (citas.length > 0) {
            return res.json(citas[0]);
        }
        res.status(404).json({ text: 'La cita no existe, lo sentimos' });
    }

    public async create(req: Request, resp: Response): Promise<void> {
        await pool.query('INSERT INTO cita set ?', [req.body]);
        // console.log(req.body);
        resp.json({ message: 'CITA GUARDADA CON EXITO' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        pool.query('DELETE FROM cita WHERE id=?', [id]);
        res.json({ message: 'LA CITA HA SIDO ELIMINADA' });
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE cita set ? WHERE id=?', [req.body, id]);
        res.json({ message: 'EL JUEGO HA SIDO ACTUALIZADO' })
    }


}

const citasControllers = new CitasController();
export default citasControllers;*/