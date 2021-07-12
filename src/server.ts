// @ts-ignore
import express, {request, response} from 'express';
import {createCourse} from "./routes";

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
})

app.get('/course', createCourse);

app.listen(3000);