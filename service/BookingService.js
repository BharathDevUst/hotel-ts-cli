"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
var BookingService = /** @class */ (function () {
    function BookingService() {
        this.bookings = [];
    }
    BookingService.prototype.addBooking = function (booking) {
        this.bookings.push(booking);
    };
    BookingService.prototype.listBookings = function () {
        return this.bookings;
    };
    return BookingService;
}());
exports.BookingService = BookingService;
