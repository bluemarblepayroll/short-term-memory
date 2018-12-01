/**
 * Copyright (c) 2018-present, Blue Marble Payroll, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 export interface IStore {
   getItem(key: string): string;
   setItem(key: string, value: string): void;
   removeItem(key: string): void;
   clear(): void;
 }
