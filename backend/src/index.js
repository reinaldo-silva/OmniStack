const express = require('express');/*pacote*/
const cors = require('cors');
const routes = require('./routes');/*arquivos */

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*Rota / recurso que eu quero usar*/

/* Métodos HTTP:

GET: Buscar uma informação no back-end
POST: Criar uma informação no back-end (Criar usuario)
PUT: Alterar uma informação do back-end
DELETE: deletar uma informação no back-end


TIPOS DE PARAMETROS:
QUERY: parametros nomeados enviados na rota após "?" (Filtros, paginação)
Route params: parametros utilizados para identificar recursos 
Request Body: corpo da requisição usado para criar ou alterar recursos 


SQL: MYSQL, SQLLITE, POSTGRESQL
NOSQL: MONGODB, COUCHDB

DRIVER: SELECT * FROM USERS
QUERY BUILDER: TABLE ('USERS').SELECT('*').WHERE()

*/

