"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundedShapeFactory = void 0;
var abstractFactory_1 = require("../abstract/abstractFactory");
var roundedRectangle_1 = require("../shape/rounded/roundedRectangle");
var roundedSquare_1 = require("../shape/rounded/roundedSquare");
var RoundedShapeFactory = /** @class */ (function (_super) {
    __extends(RoundedShapeFactory, _super);
    function RoundedShapeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoundedShapeFactory.prototype.getShape = function (shapeType) {
        if (shapeType.toLowerCase() == "roundedrectangle") {
            return new roundedRectangle_1.RoundedRectangle();
        }
        if (shapeType.toLowerCase() == "roundedsquare") {
            return new roundedSquare_1.RoundedSquare();
        }
        return null;
    };
    return RoundedShapeFactory;
}(abstractFactory_1.AbstractFactory));
exports.RoundedShapeFactory = RoundedShapeFactory;
//# sourceMappingURL=roundedShapeFactory.js.map