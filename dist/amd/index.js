define(["require", "exports", "aurelia-pal", "./configure", "./facebook-sdk"], function (require, exports, aurelia_pal_1, configure_1, facebook_sdk_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Configure = configure_1.Configure;
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
});
//# sourceMappingURL=index.js.map