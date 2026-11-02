// Barra travessão (U+2014) e meia-risca (U+2013) no HTML/TXT gerado e nas fontes de copy.
// Uso: npm run check:copy (rode depois do build).
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const roots = ["dist", "src"].filter((r) => existsSync(r));
const exts = new Set([".html", ".txt", ".xml", ".astro", ".ts", ".md", ".json"]);
const bad = /[–—]/;
const hits = [];

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (exts.has(extname(p))) {
      readFileSync(p, "utf8").split("\n").forEach((line, i) => {
        if (bad.test(line)) hits.push(`${p}:${i + 1}: ${line.trim().slice(0, 120)}`);
      });
    }
  }
};
roots.forEach(walk);

if (hits.length) {
  console.error(`Travessão encontrado em ${hits.length} linha(s):\n` + hits.join("\n"));
  process.exit(1);
}
console.log(`OK: zero travessão em ${roots.join(", ")}.`);
