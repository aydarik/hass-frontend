import { assert, describe, it } from "vitest";
import { brandsUrl } from "../../src/util/brands-url";

describe("Generate brands Url", () => {
  it("Generate brand icon url for google component", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl(
        { brand: true, domain: "google", type: "icon" },
        "http://homeassistant.local:8123"
      ),
      "https://brands.home-assistant.io/brands/google/icon.png"
    );
  });

  it("Generate logo brands url for cloud component", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl(
        { domain: "cloud", type: "logo" },
        "http://homeassistant.local:8123"
      ),
      "http://homeassistant.local:8123/brands/cloud/logo.png"
    );
  });
  it("Generate icon brands url for cloud component", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl(
        { domain: "cloud", type: "icon" },
        "http://homeassistant.local:8123"
      ),
      "http://homeassistant.local:8123/brands/cloud/icon.png"
    );
  });

  it("Generate dark theme optimized logo brands url for cloud component", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl(
        { domain: "cloud", type: "logo", darkOptimized: true },
        "http://homeassistant.local:8123"
      ),
      "http://homeassistant.local:8123/brands/cloud/dark_logo.png"
    );
  });
});
