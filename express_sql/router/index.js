import express from 'express';
import ListController from '../controllers/index.js';

const router = express.Router();

router.get('/', ListController.list);

export default router;
