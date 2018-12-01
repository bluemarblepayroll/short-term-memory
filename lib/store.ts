/**
 * Copyright (c) 2018-present, Blue Marble Payroll, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HashStore } from "./hash_store";
import { IStore } from "./istore";

function makeStore(): IStore {
  if (typeof window !== "undefined" &&
      typeof window.sessionStorage !== "undefined" &&
      window.sessionStorage) {
    return window.sessionStorage as IStore;
  } else {
    return new HashStore();
  }
}

const store = makeStore();

export function getItem(key: string): string {
  return store.getItem(key);
}

export function setItem(key: string, value: string): void {
  store.setItem(key, value);
}

export function removeItem(key: string): void {
  store.removeItem(key);
}

export function clear(): void {
  store.clear();
}
