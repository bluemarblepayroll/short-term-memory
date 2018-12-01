/**
 * Copyright (c) 2018-present, Blue Marble Payroll, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IStore } from "./istore";

export class HashStore implements IStore {
  private hash: object;

  constructor() {
    this.clear();
  }

  // Return null, not undefined in order to be consistent with localStorage API.
  public getItem(key: string): string {
    return this.hash[key] || null;
  }

  public setItem(key: string, value: string): void {
    this.hash[key] = value;
  }

  public removeItem(key: string): void {
    delete this.hash[key];
  }

  public clear(): void {
    this.hash = {};
  }
}
