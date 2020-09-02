import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);
app.use(express.json);

// app.get('/', (request, response)=> {
    
//     return response.json('hello d');
// })

app.listen(3333, () => {
    console.log('server started.')
});