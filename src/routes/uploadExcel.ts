import { Router } from 'express';
import { uploadExcel } from '../controllers/uploadExcel';
import validateToken from './validate-token';

const router = Router();

router.post('/',uploadExcel)

export default router; 