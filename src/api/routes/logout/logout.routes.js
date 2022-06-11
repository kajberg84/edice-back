import express from "express"
import { logout } from "./logout.controller.js"

export const logoutRouter = express.Router()

logoutRouter.post("/", logout)
