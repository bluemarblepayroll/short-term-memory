/**
 * Copyright (c) 2018-present, Blue Marble Payroll, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from "chai";
import StorageManager from "../lib/storage_manager";

describe("when running without global window object", () => {
  it("should get and set key value entries", () => {
    const key = "Name";
    const value = "Frankie Two Times";

    StorageManager.setItem(key, value);

    expect(StorageManager.getItem(key)).to.equal(value);
  });

  it("should remove individual entries", () => {
    const key = "Name";
    const value = "Frankie Two Times";

    StorageManager.setItem(key, value);

    expect(StorageManager.getItem(key)).to.equal(value);

    StorageManager.removeItem(key);

    expect(StorageManager.getItem(key)).to.equal(null);
  });

  it("should clear all entries", () => {
    const key = "Name";
    const value = "Frankie Two Times";

    StorageManager.setItem(key, value);

    expect(StorageManager.getItem(key)).to.equal(value);

    StorageManager.clear();

    expect(StorageManager.getItem(key)).to.equal(null);
  });
});
