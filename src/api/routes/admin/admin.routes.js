//Admin routes
import express from 'express';
import AdminController from './admin.controller.js';

export const adminRouter = express.Router();

adminRouter.get('/', AdminController.getAllAdminUsers);
adminRouter.get('/:id', AdminController.getAdminUserWithId);

adminRouter.post('/', AdminController.createAdminUser);

adminRouter.put('/:id', AdminController.updateAdminUser);
adminRouter.delete('/:id', AdminController.deleteAdminUser);
