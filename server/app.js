import express from 'express';
import * as url from 'url';
import * as path from 'path';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();
const __dirname = url.fileURLToPath(new URL ('.', import.meta.url));

//to handle cross origin request
app.use(cors());

//configuration to extract request body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//configuration to extract request file content
app.use(fileUpload());

//application level url routes

import index from './routes/IndexRoute.js';

//route level middleware
app.use("/webapi", index);

app.listen(3001);

console.log("Server Invoked at link http://localhost:3001");