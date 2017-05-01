export declare class FB {
    private _scriptPromise;
    private _config;
    private _fb;
    constructor(config: any);
    getScript(): any;
    initAPI(): void;
    getLoginStatus(): Promise<any>;
    login(): Promise<any>;
}
