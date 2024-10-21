"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelController = void 0;
var inquirer_1 = require("inquirer");
var RoomService_1 = require("../service/RoomService");
var BookingService_1 = require("../service/BookingService");
var Booking_1 = require("../model/Booking");
var roomService = new RoomService_1.RoomService();
var bookingService = new BookingService_1.BookingService();
var HotelController = /** @class */ (function () {
    function HotelController() {
    }
    HotelController.prototype.manageRooms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var choices, shouldExit, action, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        choices = [
                            'List Available Rooms',
                            'Check Room Availability',
                            'Book a Room',
                            'Exit'
                        ];
                        shouldExit = false;
                        _b.label = 1;
                    case 1:
                        if (!!shouldExit) return [3 /*break*/, 10];
                        return [4 /*yield*/, inquirer_1.default.prompt([
                                {
                                    type: 'list',
                                    name: 'action',
                                    message: 'What do you want to do?',
                                    choices: choices
                                }
                            ])];
                    case 2:
                        action = (_b.sent()).action;
                        _a = action;
                        switch (_a) {
                            case 'List Available Rooms': return [3 /*break*/, 3];
                            case 'Check Room Availability': return [3 /*break*/, 4];
                            case 'Book a Room': return [3 /*break*/, 6];
                            case 'Exit': return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 9];
                    case 3:
                        this.listAvailableRooms();
                        return [3 /*break*/, 9];
                    case 4: return [4 /*yield*/, this.checkRoomAvailability()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, this.bookRoom()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        shouldExit = true;
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    HotelController.prototype.listAvailableRooms = function () {
        console.log('Available Rooms:');
        var rooms = roomService.listRooms();
        rooms.forEach(function (room) {
            if (room.isAvailable) {
                console.log("".concat(room.id, ". ").concat(room.name, " - $").concat(room.pricePerNight, "/night"));
            }
        });
    };
    HotelController.prototype.checkRoomAvailability = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roomId, isAvailable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'number',
                                name: 'roomId',
                                message: 'Enter the room ID:',
                                validate: function (input) { return input ? !isNaN(input) ? true : 'Please enter a valid number' : 'Please enter a valid number'; },
                            }
                        ])];
                    case 1:
                        roomId = (_a.sent()).roomId;
                        isAvailable = roomService.checkAvailability(roomId);
                        console.log(isAvailable ? 'Room is available' : 'Room is not available');
                        return [2 /*return*/];
                }
            });
        });
    };
    HotelController.prototype.bookRoom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roomId, isAvailable, _a, customerName, days, room, totalPrice, booking;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'number',
                                name: 'roomId',
                                message: 'Enter the room ID to book:',
                                validate: function (input) { return input ? !isNaN(input) ? true : 'Please enter a valid number' : 'Please enter a valid number'; },
                            }
                        ])];
                    case 1:
                        roomId = (_b.sent()).roomId;
                        isAvailable = roomService.checkAvailability(roomId);
                        if (!isAvailable) return [3 /*break*/, 3];
                        return [4 /*yield*/, inquirer_1.default.prompt([
                                {
                                    type: 'input',
                                    name: 'customerName',
                                    message: 'Enter customer name:',
                                },
                                {
                                    type: 'number',
                                    name: 'days',
                                    message: 'How many days will the customer stay?',
                                    validate: function (input) { return input ? input > 0 ? true : 'Please enter a valid number of days' : 'Please enter a valid number'; },
                                }
                            ])];
                    case 2:
                        _a = _b.sent(), customerName = _a.customerName, days = _a.days;
                        room = roomService.getRoomById(roomId);
                        if (room) {
                            totalPrice = room.pricePerNight * days;
                            booking = new Booking_1.Booking(roomId, customerName, days, totalPrice);
                            roomService.bookRoom(roomId);
                            bookingService.addBooking(booking);
                            console.log("Room booked successfully for ".concat(days, " days. Total: $").concat(totalPrice));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        console.log('Room is not available.');
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return HotelController;
}());
exports.HotelController = HotelController;
