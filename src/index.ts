//import {generate} from 'shortid';
//generate;

import express from 'express';

const app = express();

const add = (a: number, b?: number): number => {
    // return a + (b || 0);     
    return a + b!;   
}

app.get('/test-add', (req, res) => {
    add(1);
});

app.get('/', (req, res) => {
    (req as any).name = 'bob';
});

app.listen(3001, () => {
    console.log('started');
});