"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
var configure_1 = require("./configure");
exports.Configure = configure_1.Configure;
var facebook_sdk_1 = require("./facebook-sdk");
exports.FB = facebook_sdk_1.FB;
function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(configure_1.Configure);
    if (configCallback !== undefined && typeof (configCallback) === 'function') {
        configCallback(instance);
    }
    aurelia.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./facebook-sdk')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map