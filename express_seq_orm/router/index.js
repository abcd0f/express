import express from 'express';
import ListControllers from '../controllers/index.js';

const router = express.Router();

router.get('/', ListControllers.list);



export default router;
