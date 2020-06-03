"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleton = void 0;
var singleObject_1 = require("./singleton/singleObject");
function singleton() {
    var singleObject = singleObject_1.SingleObject.getInstance();
    singleObject.showMessage();
}
exports.singleton = singleton;
//# sourceMappingURL=singletonPattern.js.map