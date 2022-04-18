import express, { Application, Request, Response } from 'express';
import validateQuery from './middlewares/validator-middleware';
import resizeValidationRules from './schemas/query-schema';
import createImageName from './modules/img-create-name';
import checkImageExistence from './modules/img-exists';
import checkOutputDirectory from './modules/dir-exists';
import resizeImage from './modules/process-resize';
import path from 'path';


const port: string = (process.env.PORT || '5000');
const host: string = 'http://127.0.0.1';

const app: Application = express();

// express app will use json format:
app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
    console.log('inside (/) route ...');

    res.sendStatus(200);
});

app.get(
    '/resize',
    resizeValidationRules,
    validateQuery,
    async (req: Request, res: Response): Promise<void> => {

        console.log('inside (/resize) route ...\n');

        // set the desired parameters:
        const fileName: string = (req.query.filename as unknown) as string;
        const width: number = (req.query.width as unknown) as number;
        const height: number = (req.query.height as unknown) as number;

        // construct the new filename:
        const newFileName = createImageName(fileName, width, height);

        // check /out directory existence:
        const isDirectoryFound = checkOutputDirectory('../../out');

        // check processed image existence:
        const isProcessedImageFound: boolean = checkImageExistence('../../out', newFileName);

        if (isProcessedImageFound) {
            // return the processed image ...
            console.log('return the processed image ...');
        } else {
            // apply resizing process to the image.
            console.log('apply resizing process to the image.');
            resizeImage(fileName, width, height, newFileName);
        }

        // set delay before responding with the result:
        setTimeout(() => {
            res.sendFile(path.resolve(__dirname, `../out/${newFileName}.jpg`));
        }, 200);
});

// express app will listen to specific port:
app.listen(port, (): void => {
    console.log(`Server is running at ${host}:${port}/`);
});
