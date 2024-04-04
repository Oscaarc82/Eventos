/*import { Router } from 'express';
import citasControllers from '../controllers/citasControllers';

class CitasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', citasControllers.list);
        this.router.get('/:id', citasControllers.getOne);
        this.router.post('/', citasControllers.create);
        this.router.delete('/:id', citasControllers.delete);
        this.router.put('/:id', citasControllers.update);

    }
}
const citasRoutes = new CitasRoutes();
export default citasRoutes.router;*/