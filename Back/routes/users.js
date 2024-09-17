import express from "express";
import { getUsers, addUser, updateUser, deleteUser, getUsersm, addUserm, updateUserm, deleteUserm } from "../controllers/user.js";

const router = express.Router()

router.get("/rapido/", getUsers)

router.post("/rapido/", addUser)

router.put("/rapido/:id", updateUser)

router.delete("/rapido/:id", deleteUser)

//Mensalistas

router.get("/mensalista/", getUsersm)

router.post("/mensalista/", addUserm)

router.put("/mensalista/:id", updateUserm)

router.delete("/mensalista/:id", deleteUserm)

export default router;