"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Appointment_1 = __importDefault(require("../models/Appointment"));
var date_fns_1 = require("date-fns");
var AppointmentRepository = /** @class */ (function () {
    function AppointmentRepository() {
        this.appointments = [];
    }
    AppointmentRepository.prototype.create = function (_a) {
        var provider = _a.provider, date = _a.date;
        var appointment = new Appointment_1.default({
            provider: provider,
            date: date
        });
        this.appointments.push(appointment);
        return appointment;
    };
    AppointmentRepository.prototype.findByDate = function (date) {
        var findAppointment = this.appointments.find(function (appointment) {
            return date_fns_1.isEqual(date, appointment.date);
        });
        return findAppointment || null;
    };
    AppointmentRepository.prototype.all = function () {
        return this.appointments;
    };
    return AppointmentRepository;
}());
exports.default = AppointmentRepository;
