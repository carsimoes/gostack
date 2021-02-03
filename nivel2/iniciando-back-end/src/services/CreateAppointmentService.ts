import Appointment from '../models/Appointment';
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import AppError from '../errors/AppError';

interface Request {
    provider_id: string; 
    date: Date;
}

//Dependency inversion

class CreateAppointmentService {

    public async execute({date, provider_id}: Request): Promise<Appointment> {

        const appointmentsRepository = getCustomRepository(AppointmentsRepository);

        const appointmentDate = startOfHour(date);

        const findAppointmentInSamedate = await appointmentsRepository.findByDate(
            appointmentDate
        );
    
        if(findAppointmentInSamedate){
            throw new AppError('This appointment is already booked');
        }
    
        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate
        });

        await appointmentsRepository.save(appointment);

        return appointment;
    }
}

export default CreateAppointmentService;