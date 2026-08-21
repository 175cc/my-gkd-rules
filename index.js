const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");

const rootDir = __dirname;
const sourceDir = path.join(rootDir, "src");
const appsDir = path.join(sourceDir, "apps");
const outputFile = path.join(rootDir, "dist", "gkd.json5");

function readJson5(filePath) {
  return JSON5.parse(fs.readFileSync(filePath, "utf8"));
}

const subscription = readJson5(path.join(sourceDir, "subscription.json5"));
const appFiles = fs
  .readdirSync(appsDir)
  .filter((fileName) => fileName.endsWith(".json5"))
  .sort();
const apps = appFiles.map((fileName) =>
  readJson5(path.join(appsDir, fileName)),
);

const appIds = new Set();
for (const app of apps) {
  if (!app.id) {
    throw new Error("每个应用规则文件都必须包含 id");
  }
  if (appIds.has(app.id)) {
    throw new Error(`发现重复的应用 id: ${app.id}`);
  }
  appIds.add(app.id);
}

const output = { ...subscription, apps };
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(`${outputFile}`, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Built ${outputFile} from ${appFiles.length} app rule files.`);
