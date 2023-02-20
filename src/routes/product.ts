import { Router } from 'express';
import { deleteRegitrer, getDatos, getProducts, newregistrer, updateRegistrer } from '../controllers/product';
import validateToken from './validate-token';

const router = Router();
// rutas de nuestro metodos CRUD
router.get('/',getProducts)
router.get('/:id', getDatos)
router.post('/add', newregistrer)
router.delete('/:id', deleteRegitrer)
router.put('/:id', updateRegistrer);

export default router;  