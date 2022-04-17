import express, { Application, Request, Response } from 'express';
import fullImagesNames from './modules/img-collect-names';

const port: string = (process.env.PORT || '5000');
const host: string = 'http://127.0.0.1';

const app: Application = express();

app.get('/', (req: Request, res: Response): void => {
    console.log('inside (/) route ...');
    res.end();
});

app.get('/resize', async (req: Request, res: Response): Promise<void> => {
    console.log('inside (/resize) route ...');

    const imagesList = await fullImagesNames('../images');
    console.log(imagesList);

    res.end();
});

app.listen(port, (): void => {
    console.log(`Server is running at ${host}:${port}/`);
});
