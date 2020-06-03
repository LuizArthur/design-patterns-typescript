"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleObject = void 0;
var SingleObject = /** @class */ (function () {
    function SingleObject() {
    }
    SingleObject.getInstance = function () {
        return this.instance;
    };
    SingleObject.prototype.showMessage = function () {
        console.log("Hello World");
    };
    SingleObject.instance = new SingleObject();
    return SingleObject;
}());
exports.SingleObject = SingleObject;
//# sourceMappingURL=singleObject.js.map