import express, { Application } from 'express';
import mainRoute from '../routes';
import path from 'path';

// set port and host values:
const port: string = process.env.PORT || '5000';
const host: string = 'http://127.0.0.1';

// create an express application:
const app: Application = express();

// express app will use 'ejs' as its view engine:
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../website/views'));

// express app will use static files from this path:
app.use(express.static(path.resolve(__dirname, '../website')));

// express app will use json format:
app.use(express.json());

app.get('/', (req, res) => {
	console.log('inside (/) route ...');
	res.render('index');
});

// express app will use main route for '/api' route:
app.use('/api', mainRoute);

export { app, port, host };
