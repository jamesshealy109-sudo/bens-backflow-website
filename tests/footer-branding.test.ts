import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const layout = readFileSync("src/app/layout.tsx", "utf8");

test("footer partner marks use translucent button styling instead of opaque square image backings", () => {
  assert.match(layout, /import "\.\/footer-logo-buttons\.css";/);

  const css = readFileSync("src/app/footer-logo-buttons.css", "utf8");

  assert.match(
    css,
    /\.footer-grid \.strata-credit[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.\d+\)/,
  );
  assert.match(
    css,
    /\.strata-credit img,[\s\S]*\.f3-mark img\s*\{[\s\S]*background:\s*transparent/,
  );
  assert.match(
    css,
    /\.f3-mark\s*\{[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.\d+\)/,
  );
});
