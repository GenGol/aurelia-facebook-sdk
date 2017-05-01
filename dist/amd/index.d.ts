import { FrameworkConfiguration } from 'aurelia-framework';
import { Configure } from './configure';
import { FB } from './facebook-sdk';
export declare function configure(aurelia: FrameworkConfiguration, configCallback?: (config: Configure) => Promise<any>): void;
export { Configure };
export { FB };
