"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
var Room_1 = require("../model/Room");
var RoomService = /** @class */ (function () {
    function RoomService() {
        this.rooms = [];
        // Preload rooms
        this.rooms = [
            new Room_1.Room(1, 'Single Room', 100),
            new Room_1.Room(2, 'Double Room', 150),
            new Room_1.Room(3, 'Suite', 300),
        ];
    }
    RoomService.prototype.listRooms = function () {
        return this.rooms;
    };
    RoomService.prototype.checkAvailability = function (roomId) {
        var room = this.rooms.find(function (r) { return r.id === roomId; });
        return room ? room.isAvailable : false;
    };
    RoomService.prototype.bookRoom = function (roomId) {
        var room = this.rooms.find(function (r) { return r.id === roomId; });
        if (room && room.isAvailable) {
            room.isAvailable = false;
            return true;
        }
        return false;
    };
    RoomService.prototype.getRoomById = function (roomId) {
        return this.rooms.find(function (r) { return r.id === roomId; });
    };
    return RoomService;
}());
exports.RoomService = RoomService;
