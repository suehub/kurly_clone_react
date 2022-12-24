import { rest } from "msw";
import data from '../db/data.json';

export const handlers = [

    rest.get('/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    }),     

    rest.get('/product/:id', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    })
    
]
