/**
 * Home Router.
 *
 * @author Kaj Berg
 * @version 0.1.0
 */

import express from "express";

export const homeRouter = express.Router();

// Get homepage
homeRouter.get("/", (req, res, next) => {
  res.send("HomeRouter works");
});
