import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve("out");
if (!existsSync(root)) throw new Error("out/ does not exist. Run npm run build first.");
const htmlFiles = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) walk(file);
    else if (name.endsWith(".html")) htmlFiles.push(file);
  }
}
walk(root);
const failures = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const clean = href.split(/[?#]/)[0].replace(new RegExp(`^${basePath}(?=/|$)`), "") || "/";
    const target = clean.startsWith("/") ? join(root, clean) : resolve(dirname(file), clean);
    const candidates = [target, `${target}.html`, join(target, "index.html")];
    if (!candidates.some(existsSync)) failures.push(`${file.replace(root, "out")}: ${href}`);
  }
}
if (failures.length) { console.error("Broken internal links:\n" + failures.join("\n")); process.exit(1); }
console.log(`Checked ${htmlFiles.length} HTML files: all internal links resolve.`);
