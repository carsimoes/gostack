import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response)=>{
    return response.json({message: "hello 1"});
})

app.listen(3333, () => {
    console.log('server started.')
});