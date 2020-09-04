import Appointment from '../models/Appointment';
import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
    provider: string; 
    date: Date;
}

//Dependency inversion

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository){
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({date, provider}: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSamedate = this.appointmentsRepository.findByDate(
            appointmentDate
        );
    
        if(findAppointmentInSamedate){
            throw Error('This appointment is alreadt booked.');
        }
    
        const appointment = this.appointmentsRepository.create({
            provider, 
            date: appointmentDate
        });

        return appointment;
    }
}

export default CreateAppointmentService;