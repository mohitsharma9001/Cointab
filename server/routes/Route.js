import express from 'express';
import { AddUser, getUser, deleatUser } from '../controller/UserController.js';
const router = express.Router();

router.post("/add", AddUser)
router.get("/all", getUser)
router.delete("/all", deleatUser)


export default router