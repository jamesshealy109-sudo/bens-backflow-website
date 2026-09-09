import { test } from "node:test";
import assert from "node:assert/strict";
import { allPages, pageByPath } from "../src/content/pages.ts";

test("shared About content identifies Kyle and does not publish a disputed founding year", () => {
  const about = pageByPath("/about/");
  assert.match(about?.intro ?? "", /Kyle is the (current )?owner\/operator/);
  assert.match(JSON.stringify(about), /second-generation/i);
  assert.doesNotMatch(
    JSON.stringify(allPages),
    /1999|Ben is (the owner|taking)/i,
  );
});
