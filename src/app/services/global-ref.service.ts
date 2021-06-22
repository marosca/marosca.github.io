import { Injectable } from '@angular/core'

/*
 * Why do we need this?
 * Glad you asked: https://medium.com/@laco0416/access-to-global-variables-in-angular-2-b2c395eac1d8
 *
 * tl;dr: Accessing `window` directly will break server-side rendering because node doesn't know about `window`
 * TODO: Refactor to make it SSR-friendly
 */

@Injectable()
export abstract class GlobalRefService {
  abstract nativeGlobal: any
}

/* istanbul ignore next */
@Injectable()
export class BrowserGlobalRefService extends GlobalRefService {
  nativeGlobal: any = window
}

/* istanbul ignore next */
// @Injectable()
// export class NodeGlobalRefService extends GlobalRefService {
//   nativeGlobal: any = global && global['window']
// }

@Injectable()
export abstract class GlobalStorage {
  abstract sessionStorage: Storage
  abstract localStorage: Storage
}

/* istanbul ignore next */
// export function storageFactory() {
//   return {
//     _data: {},
//     setItem: function(id: string, val:string) {
//       return (this._data[id] as sany = String(val))
//     },
//     getItem: function(id) {
//       return this._data.hasOwnProperty(id) ? this._data[id] : undefined
//     },
//     removeItem: function(id) {
//       return delete this._data[id]
//     },
//     clear: function() {
//       return (this._data = {})
//     }
//   }
// }

// const localStoreFallback = storageFactory()
// const sessionStoreFallback = storageFactory()

// export const storage = (persistent?: boolean): Storage => {
//   let store
//   try {
//     store =
//       sessionStorage ||
//       get(window, undefined, 'sessionStorage') ||
//       sessionStoreFallback
//     if (persistent) {
//       store =
//         localStorage ||
//         get(window, undefined, 'localStorage') ||
//         localStoreFallback
//     }
//     return store
//   } catch (e) {
//     /* tslint:disable:no-console */
//     console.log('error loading storage')
//     /* tslint:enable:no-console */
//     return (persistent ? localStoreFallback : sessionStoreFallback) as any
//   }
// }

// @Injectable()
// export class BrowserStorage extends GlobalStorage {
//   sessionStorage = storage()
//   localStorage = storage(true)
// }

// @Injectable()
// export class NodeStorage extends GlobalStorage {
//   sessionStorage = storage()
//   localStorage = storage(true)
// }
