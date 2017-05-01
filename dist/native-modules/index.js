import { PLATFORM } from 'aurelia-pal';
import { Configure } from './configure';
import { FB } from './facebook-sdk';
export function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Configure);
    if (configCallback !== undefined && typeof (configCallback) === 'function') {
        configCallback(instance);
    }
    aurelia.globalResources([
        PLATFORM.moduleName('./facebook-sdk')
    ]);
}
export { Configure };
export { FB };
//# sourceMappingURL=index.js.map