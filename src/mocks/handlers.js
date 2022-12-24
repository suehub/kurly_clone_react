import { rest } from "msw";
import data from '../db/data.json';
import memberData from '../db/memberData.json';

export const handlers = [

    // 데이터 생성
    rest.post('/signup', async(req, res, ctx) => {
        const data = await req.json();
        memberData.memberData.push(data);

        return res(
            ctx.status(200)    
        )
    }),

    rest.post('/login', async(req, res, ctx) => {
        const data = await req.json();
        memberData.userData.push(data);

        return res(
            ctx.status(200)    
        )
    }),


    // 데이터 조회
    rest.get('/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    }),     

    rest.get('/product/:id', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    }),

    rest.get('/signup', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(memberData));
    }),

    rest.get('/login', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(memberData));
    })
    
]
