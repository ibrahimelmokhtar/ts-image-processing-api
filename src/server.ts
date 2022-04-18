import express, { Application, Request, Response } from 'express';
import validateQuery from './middlewares/validator-middleware';
import resizeValidationRules from './schemas/query-schema';


const port: string = (process.env.PORT || '5000');
const host: string = 'http://127.0.0.1';

const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
    console.log('inside (/) route ...');
    res.end();
});

app.get(
    '/resize',
    resizeValidationRules,
    validateQuery,
    async (req: Request, res: Response): Promise<void> => {

        console.log('inside (/resize) route ...\n');

        res.end();
});

app.listen(port, (): void => {
    console.log(`Server is running at ${host}:${port}/`);
});
