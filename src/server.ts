import express, { Application } from 'express';

const port: string = (process.env.PORT || '5000');
const host: string = 'http://127.0.0.1';

const app: Application = express();

app.get('/', (req, res): void => {
    console.log('inside (/) route ...');
    res.end();
});

app.listen(port, (): void => {
    console.log(`Server is running at ${host}:${port}/`);
});
