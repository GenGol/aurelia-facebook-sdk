export interface ConfigInterface {
    appId: string;
    lang: string;
    scope: string;
}
export declare class Configure {
    private _config;
    constructor();
    options(obj: ConfigInterface): void;
    get(key: string): any;
    set(key: string, val: any): any;
}
