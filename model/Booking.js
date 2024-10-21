"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(roomId, customerName, days, totalPrice) {
        this.roomId = roomId;
        this.customerName = customerName;
        this.days = days;
        this.totalPrice = totalPrice;
    }
    return Booking;
}());
exports.Booking = Booking;
