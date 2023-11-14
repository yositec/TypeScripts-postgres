import { Router } from "express";

import {getUser,getUserbyId,createUser,delateUser} from '../controllers/index.controllers';

const router = Router();

router.get('/users',getUser);
router.get('/users/:id',getUserbyId);
router.post('/users',createUser);
//router.put('/users/:id',getUser);
router.delete('/users/:id',delateUser);

export default router;