/**
 * Copyright (c) 2018-present, Blue Marble Payroll, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from "chai";
import { clear, getItem, removeItem, setItem } from "../lib/store";

describe("when running without global window object", () => {
  it("should get and set key value entries", () => {
    const key = "Name";
    const value = "Frankie Two Times";

    setItem(key, value);

    expect(getItem(key)).to.equal(value);
  });

  it("should remove individual entries", () => {
    const key = "Name";
    const value = "Frankie Two Times";

    setItem(key, value);

    expect(getItem(key)).to.equal(value);

    removeItem(key);

    expect(getItem(key)).to.equal(null);
  });

  it("should clear all entries", () => {
    const key = "Name";
    const value = "Frankie Two Times";

    setItem(key, value);

    expect(getItem(key)).to.equal(value);

    clear();

    expect(getItem(key)).to.equal(null);
  });
});
