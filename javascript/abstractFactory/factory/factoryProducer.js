"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryProducer = void 0;
var roundedShapeFactory_1 = require("./roundedShapeFactory");
var shapeFactory_1 = require("./shapeFactory");
var FactoryProducer = /** @class */ (function () {
    function FactoryProducer() {
    }
    FactoryProducer.getFactory = function (isRounded) {
        if (isRounded) {
            return new roundedShapeFactory_1.RoundedShapeFactory();
        }
        return new shapeFactory_1.ShapeFactory();
    };
    return FactoryProducer;
}());
exports.FactoryProducer = FactoryProducer;
//# sourceMappingURL=factoryProducer.js.map