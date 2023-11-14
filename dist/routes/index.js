"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = require("../controllers/index.controllers");
const router = (0, express_1.Router)();
router.get('/users', index_controllers_1.getUser);
router.get('/users/:id', index_controllers_1.getUserbyId);
router.post('/users', index_controllers_1.createUser);
//router.put('/users/:id',getUser);
router.delete('/users/:id', index_controllers_1.delateUser);
exports.default = router;
