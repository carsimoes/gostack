import express from 'express';
import routes from './routes';
const cors = require("cors");

// import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

//app.use(cors());

// app.get('/', (request, response)=> {
    
//     return response.json('hello d');
// })

app.listen(3333, () => {
    console.log('server started.')
});