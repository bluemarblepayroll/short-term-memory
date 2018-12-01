/**
 * Copyright (c) 2018-present, Blue Marble Payroll, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HashStore } from "./hash_store";
import { IStore } from "./istore";

class StorageManager implements IStore {
  private store: IStore;

  constructor() {
    this.store = this.makeStore();
  }

  public getItem(key: string): string {
    return this.store.getItem(key);
  }

  public setItem(key: string, value: string): void {
    this.store.setItem(key, value);
  }

  public removeItem(key: string): void {
    this.store.removeItem(key);
  }

  public clear(): void {
    this.store.clear();
  }

  private makeStore(): IStore {
    if (typeof window !== "undefined" &&
        typeof window.sessionStorage !== "undefined" &&
        window.sessionStorage) {
      return window.sessionStorage as IStore;
    } else {
      return new HashStore();
    }
  }
}

export default new StorageManager();
