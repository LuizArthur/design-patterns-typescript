"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeFactory = void 0;
var circle_1 = require("./shape/circle");
var rectangle_1 = require("./shape/rectangle");
var square_1 = require("./shape/square");
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.getShape = function (shapeType) {
        if (shapeType == null) {
            return null;
        }
        if (shapeType.toLowerCase() == 'circle') {
            return new circle_1.Circle();
        }
        if (shapeType.toLowerCase() == 'rectangle') {
            return new rectangle_1.Rectangle();
        }
        if (shapeType.toLowerCase() == 'square') {
            return new square_1.Square();
        }
        return null;
    };
    return ShapeFactory;
}());
exports.ShapeFactory = ShapeFactory;
//# sourceMappingURL=shapeFactory.js.map