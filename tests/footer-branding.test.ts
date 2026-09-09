import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const layout = readFileSync("src/app/layout.tsx", "utf8");

test("footer partner marks are readable on high-contrast translucent buttons", () => {
  assert.match(layout, /import "\.\/footer-logo-buttons\.css";/);

  const css = readFileSync("src/app/footer-logo-buttons.css", "utf8");

  assert.match(
    css,
    /\.footer-grid \.strata-credit,[\s\S]*\.f3-mark\s*\{[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.82\)/,
  );
  assert.match(
    css,
    /\.strata-credit img,[\s\S]*\.f3-mark img\s*\{[\s\S]*background:\s*transparent;[\s\S]*opacity:\s*1;[\s\S]*filter:\s*none/,
  );
  assert.match(
    css,
    /\.strata-credit span\s*\{[\s\S]*color:\s*#152025;[\s\S]*opacity:\s*1/,
  );
});
