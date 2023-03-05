import express from 'express';
import * as indexController from '../controllers/indexController.js';

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Express Server Working");
});

router.post("/register", indexController.registerUser );

router.post("/login", indexController.userLogin );

router.get("/manageusers", indexController.manageUser );

export default router;