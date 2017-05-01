import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM, DOM } from 'aurelia-pal';

import { Configure } from './configure';
import { FB } from './facebook-sdk';

export function configure(aurelia: FrameworkConfiguration, configCallback?: (config: Configure) => Promise<any>) {
    let instance = aurelia.container.get(Configure) as Configure;

    // Do we have a callback function?
    if (configCallback !== undefined && typeof(configCallback) === 'function') {
        configCallback(instance);
    }

    aurelia.globalResources([
        PLATFORM.moduleName('./facebook-sdk')
    ]);
}

export { Configure };
export { FB };
