import { Router } from 'express';
import {uuid } from 'uuidv4'
const appointmentsRouter = Router();

const appointments = [];

// {
// 	'provider': 'Carlos',
// 	'date': '{% now 'iso-8601', '' %}'
// }
appointmentsRouter.post('/', (request, response)=>{
    const {  provider,date } = request.body;

    //console.log(request.body);

    const appointment ={
        id:uuid(),
        provider,
        date,
    }

    //console.log(appointment);
    appointments.push(appointment);
    
    return response.json(appointment);
});

export default appointmentsRouter;