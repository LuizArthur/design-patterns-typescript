"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryPattern = void 0;
var shapeFactory_1 = require("./factory/shapeFactory");
function factoryPattern() {
    var shapeFacotry = new shapeFactory_1.ShapeFactory();
    var shape1 = shapeFacotry.getShape('Circle');
    if (shape1 != null) {
        shape1.draw();
    }
    var shape2 = shapeFacotry.getShape('Rectangle');
    if (shape2 != null) {
        shape2.draw();
    }
    var shape3 = shapeFacotry.getShape('Square');
    if (shape3 != null) {
        shape3.draw();
    }
}
exports.factoryPattern = factoryPattern;
//# sourceMappingURL=factoryPattern.js.map