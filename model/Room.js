"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(id, name, pricePerNight, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.id = id;
        this.name = name;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }
    return Room;
}());
exports.Room = Room;
