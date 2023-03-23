# Creating a project from scratch

1. Initialize a new Node.js project
    ~~~
    npm init -y
    ~~~
2. Install the required dependencies by running the following command:
    ~~~
    npm install express cors @types/express @types/cors ts-node typescript nodemon --save-dev
    ~~~
3. Init typescript. Might work without npx
   ~~~
   npx tsc --init
   ~~~
4. Set tsconfig.json file. This tells TypeScript to transpile your code to ES6 and output the compiled files to the ./dist directory.
    ~~~
    {
        "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "esModuleInterop": true,
        "outDir": "./dist",
        "sourceMap": true
        },
        "include": [
        "./src/**/*"
        ]
    }
    ~~~
5. Add .gitignore file, add node_modules and whatever else to it
   ~~~
   touch .gitignore
   ~~~
6. Create a new src directory in the root of your project, and create a new file called index.ts inside it.
    ~~~
    import express, { Application, Request, Response } from 'express';
    import cors from 'cors';
    
    const app: Application = express();
    const port = 3000;
    
    app.use(cors());
    
    app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
    });
    
    app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });
    
    export { app };
    ~~~
7. Add a new script to your package.json file to start the server using ts-node and nodemon:
    ~~~
    "scripts": {
        "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
    }
    ~~~
8. Run the server by executing npm run start in your terminal. You should see the message "Server running on port 3000" in your console.
9. Visit http://localhost:3000 in your web browser to see the "Hello, world!" message displayed.
10. In src/index.ts add a ping endpoint that accepts a message param and call it via curl 
   ~~~
   curl http://localhost:3000/ping\?message\=hello
   ~~~