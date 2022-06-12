/**
 * Home Router.
 * Denna är egentligen överflödig men ger en response på / i webbläsaren när man kollar in den så det kan va bra att behålla den då det blir en tydlig kontrast jämför med herokus meddelanden som kan komma fram vid en krasch.
 */

import express from 'express';

export const homeRouter = express.Router();

// Get homepage
homeRouter.get('/', (req, res, next) => {
  res.send('HomeRouter works');
  next();
});
