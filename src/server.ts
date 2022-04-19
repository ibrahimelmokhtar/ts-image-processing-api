import { app, port, host } from './server/config';

// express app will listen to specific port:
app.listen(port, (): void => {
    console.log(`Server is running at ${host}:${port}/`);
});
