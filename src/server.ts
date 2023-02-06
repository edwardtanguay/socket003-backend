import express from 'express';
import http from 'http';
import cors from 'cors';
import * as config from './config.js';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('test')
});

app.listen(config.port, () => {
	console.log(`listening on port http://localhost:${config.port}`);
});