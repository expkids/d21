// export-js-helpers.js
// Usage: node export-js-helpers.js [path/to/config.json] [outFile.js]
// Defaults: config.json -> build-vod-urls.js

const fs = require('fs');
const path = require('path');

const configPath = process.argv[2] || path.join(process.cwd(), 'config.json');
const outFile = process.argv[3] || path.join(process.cwd(), 'build-vod-urls.js');

function defaultBuildVodshow() {
  return `function buildVodshowUrl(opts = {}) {
  const { cateId, area, by, cls, lang, year, hyphensBlock = '--------' } = opts;
  if (!cateId) throw new Error('cateId required');
  const enc = v => (v == null || v === '') ? '' : encodeURIComponent(String(v).trim());
  const parts = [String(cateId), enc(area), enc(by), enc(cls), enc(lang)];
  let path = parts.join('-');
  if (year) {
    path = \`\${path}\${hyphensBlock}\${encodeURIComponent(String(year))}.html\`;
  } else {
    path = \`\${path}\${hyphensBlock}.html\`;
  }
  return \`https://www.mtyy1.cc/vodshow/\${path}\`;
}`;
}

function defaultBuildVodtype() {
  return `function buildVodtypeUrl(opts = {}) {
  const { cateId, area, by, cls, lang, year, catePg } = opts;
  if (!cateId) throw new Error('cateId required');
  const parts = [String(cateId)];
  for (const v of [area, by, cls, lang, year]) {
    if (v != null && String(v).trim() !== '') parts.push(String(v).trim());
  }
  if (parts.length === 1) {
    if (catePg && Number(catePg) > 1) {
      return \`https://mtyy1.cc/vodtype/\${parts[0]}---\${catePg}.html\`;
    }
    return \`https://mtyy1.cc/vodtype/\${parts[0]}.html\`;
  }
  const joined = parts.join('-');
  if (catePg && Number(catePg) > 1) {
    return \`https://mtyy1.cc/vodtype/\${joined}---\${catePg}.html\`;
  }
  return \`https://mtyy1.cc/vodtype/\${joined}.html\`;
}`;
}

try {
  if (!fs.existsSync(configPath)) {
    console.error('config.json not found at', configPath);
    process.exit(2);
  }

  const raw = fs.readFileSync(configPath, 'utf8');
  let cfg;
  try {
    cfg = JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse JSON:', err.message);
    process.exit(3);
  }

  const helpers = cfg.js_helpers || {};
  // if value present and is a string, use it; else fallback to default
  const showStr = (typeof helpers.buildVodshowUrl === 'string' && helpers.buildVodshowUrl.trim().length > 0)
    ? helpers.buildVodshowUrl
    : defaultBuildVodshow();
  const typeStr = (typeof helpers.buildVodtypeUrl === 'string' && helpers.buildVodtypeUrl.trim().length > 0)
    ? helpers.buildVodtypeUrl
    : defaultBuildVodtype();

  // Compose output file
  const header = `/**
 * Generated file - build-vod-urls.js
 * Source: ${path.basename(configPath)}
 * Generated at: ${new Date().toISOString()}
 *
 * Contains: buildVodshowUrl, buildVodtypeUrl
 */\n\n`;

  // Ensure functions are newline-terminated
  const content = header + showStr + '\n\n' + typeStr + '\n\n' +
    'if (typeof module !== "undefined" && module.exports) {\n  module.exports = { buildVodshowUrl, buildVodtypeUrl };\n}\n';

  fs.writeFileSync(outFile, content, 'utf8');
  console.log('Wrote helpers to', outFile);
  console.log('You can require it: const { buildVodshowUrl, buildVodtypeUrl } = require("./' + path.basename(outFile) + '");');

} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}