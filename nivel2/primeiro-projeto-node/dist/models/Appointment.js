"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Appointment = /** @class */ (function () {
    function Appointment(_a) {
        var provider = _a.provider, date = _a.date;
        this.id = uuidv4_1.uuid();
        this.provider = provider;
        this.date = date;
    }
    return Appointment;
}());
exports.default = Appointment;
