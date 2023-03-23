import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const port = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

app.get('/ping', (req: Request, res: Response) => {
    const msg = req.query.message as string;
    const env = process.env.NODE_ENV || 'TEST';
    const version = process.env.npm_package_version || 'unknown';

    const response = {
        "message": msg,
        "timestamp": Date.now(),
        "env": env,
        "version": version,
    };
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export { app };