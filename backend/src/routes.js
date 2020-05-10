const express = require('express');

const OngController = require('./controllers/OngController');
const incidentsControllers = require('./controllers/IncidentsControllers');
const ProfileControllers = require('./controllers/ProfileController');
const SessionControllers = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionControllers.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', incidentsControllers.create);
routes.get('/incidents', incidentsControllers.index)
routes.delete('/incidents/:id', incidentsControllers.delete);

routes.get('/profile', ProfileControllers.index);

module.exports = routes;