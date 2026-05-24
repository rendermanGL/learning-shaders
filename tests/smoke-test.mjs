import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const index = readFileSync(resolve(root, "index.html"), "utf8");
const main = readFileSync(resolve(root, "main.js"), "utf8");
const styles = readFileSync(resolve(root, "styles.css"), "utf8");

const syntax = spawnSync(process.execPath, ["--check", "main.js"], {
  cwd: root,
  encoding: "utf8",
});

assert.equal(syntax.status, 0, syntax.stderr || syntax.stdout);
assert.match(index, /<script type="module" src="\.\/main\.js"><\/script>/);
assert.match(index, /<link rel="stylesheet" href="\.\/styles\.css"/);
assert.match(styles, /#mathCanvas/);
assert.match(styles, /\.math-grid/);

const referencedIds = [...main.matchAll(/document\.getElementById\("([^"]+)"\)/g)].map(
  ([, id]) => id
);

for (const id of referencedIds) {
  assert.match(index, new RegExp(`id="${id}"`), `Missing DOM element id="${id}"`);
}

const mathButtons = [...index.matchAll(/data-math="([^"]+)"/g)].map(([, key]) => key);
const lessonKeys = [...main.matchAll(/^\s{2}([a-z]+): \{$/gm)].map(([, key]) => key);
assert.deepEqual(mathButtons.sort(), lessonKeys.sort(), "Math tabs must match mathLessons keys");

const stageButtons = [...index.matchAll(/data-stage="([^"]+)"/g)].map(([, key]) => Number(key));
assert.deepEqual(stageButtons, [0, 1, 2, 3], "Expected four shader learning stages");

assert.match(main, /if \(mathDirty \|\| currentMath === "wave"\)/);
assert.match(main, /mathDirty = false;/);

console.log("Smoke tests passed: page assets, DOM ids, lesson wiring, and render throttling look good.");
