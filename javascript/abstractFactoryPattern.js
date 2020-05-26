"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstractFactoryPattern = void 0;
var factoryProducer_1 = require("./abstractFactory/factory/factoryProducer");
function abstractFactoryPattern() {
    var roundedFactory = factoryProducer_1.FactoryProducer.getFactory(true);
    var factory = factoryProducer_1.FactoryProducer.getFactory(false);
    var roundedRectangle = roundedFactory.getShape('RoundedRectangle');
    var roundedSquare = roundedFactory.getShape('RoundedSquare');
    var rectangle = factory.getShape('Rectangle');
    var square = factory.getShape('Square');
    if (roundedRectangle != null) {
        roundedRectangle.draw();
    }
    if (roundedSquare != null) {
        roundedSquare.draw();
    }
    if (rectangle != null) {
        rectangle.draw();
    }
    if (square != null) {
        square.draw();
    }
}
exports.abstractFactoryPattern = abstractFactoryPattern;
//# sourceMappingURL=abstractFactoryPattern.js.map