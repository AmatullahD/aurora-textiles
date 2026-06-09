const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', 'src');
const replacements = [
  ['textAlign: "center",', ''],
  ["textAlign: 'center',", ''],
  ['textAlign: "center"', ''],
  ["textAlign: 'center'", ''],
];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
      let text = fs.readFileSync(fullPath, 'utf8');
      let newText = text;
      for (const [oldVal, newVal] of replacements) {
        newText = newText.split(oldVal).join(newVal);
      }
      if (newText !== text) {
        fs.writeFileSync(fullPath, newText, 'utf8');
        console.log('updated', fullPath);
      }
    }
  }
}

walk(root);
