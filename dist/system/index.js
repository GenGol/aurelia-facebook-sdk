System.register(["aurelia-pal", "./configure", "./facebook-sdk"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, configCallback) {
        var instance = aurelia.container.get(configure_1.Configure);
        if (configCallback !== undefined && typeof (configCallback) === 'function') {
            configCallback(instance);
        }
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./facebook-sdk')
        ]);
    }
    exports_1("configure", configure);
    var aurelia_pal_1, configure_1, facebook_sdk_1;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (configure_1_1) {
                configure_1 = configure_1_1;
            },
            function (facebook_sdk_1_1) {
                facebook_sdk_1 = facebook_sdk_1_1;
            }
        ],
        execute: function () {
            exports_1("Configure", configure_1.Configure);
            exports_1("FB", facebook_sdk_1.FB);
        }
    };
});
//# sourceMappingURL=index.js.map