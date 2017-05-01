import { inject } from 'aurelia-dependency-injection';
import { noView } from 'aurelia-templating';

import { Configure } from './configure';

@noView()
@inject(Configure)
export class FB {
  private _scriptPromise = null;
  private _config;
  private _fb;

  constructor(config) {
    this._config = config;
    this.initAPI();
  }

  getScript() {
    // Script has already been set, so return promise straight away
    if (this._scriptPromise !== null) {
      return this._scriptPromise;
    }

    if ((<any>window).FB === undefined) {
      // facebook sdk has not been defined yet
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = `//connect.facebook.net/${this._config.get('lang')}/sdk.js`;
      document.body.appendChild(script);

      // Lets setup the promise so that it resolves when the callback is called
      this._scriptPromise = new Promise((resolve, reject) => {
        (<any>window).fbAsyncInit = () => {
          resolve();
        };

        script.onerror = error => {
          reject(error);
        };
      });

      return this._scriptPromise;
    }
    return false;
  }

  initAPI() {
    this.getScript()
      .then(() => {
        this._fb = (<any>window).FB;
        this._fb.init({
          appId: this._config.get('appId'),
          version: 'v2.9'
        })
      });
  }

  getLoginStatus(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._fb.getLoginStatus((response) => {
        resolve(response);
      });
    });
  }

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._fb.login((response) => {
        if (response.authResponse) {
          resolve(response);
        } else {
          reject(response);
        }
      }, {
        scope: 'public_profile,user_events'
      })
    })
  }
}