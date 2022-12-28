import express from 'express';
import { AddUser, getUser, deleatUser, pagination } from '../controller/UserController.js';
const router = express.Router();

router.post("/add", AddUser)
router.get("/all", getUser)
router.delete("/all", deleatUser)
router.get("/pagination", pagination)

export default router