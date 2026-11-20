import { describe, expect, it } from "vitest";
import { modelLockEnabled } from "./model-lock.js";

describe("modelLockEnabled", () => {
  it.each(["1", "true", "YES", " True "])("enables on %s", (value) => {
    expect(modelLockEnabled({ RAKAZO_MODEL_LOCK: value })).toBe(true);
  });

  it.each(["", "0", "false", "off", undefined])("stays off on %s", (value) => {
    expect(modelLockEnabled(value === undefined ? {} : { RAKAZO_MODEL_LOCK: value })).toBe(false);
  });
});