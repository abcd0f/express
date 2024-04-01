import express from 'express';
import ListControllers from '../controllers/index.js';

const router = express.Router();

router.get('/', ListControllers.list);

router.delete('/delete/:id', ListControllers.delList);


export default router;
