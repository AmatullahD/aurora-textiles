const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/products/GccTextileSupplier.jsx',
  'src/pages/products/FabricSuppliers.jsx',
  'src/pages/products/HighQualityUniformFabricSuppliers.jsx',
];

for (const relPath of files) {
  const fullPath = path.join(process.cwd(), relPath);
  let text = fs.readFileSync(fullPath, 'utf8');
  const pattern = /<h2\b[^>]*style=\{\{([\s\S]*?)\}\}>/g;
  let changed = 0;

  text = text.replace(pattern, (match, styleBlock) => {
    if (/marginTop\s*:/.test(styleBlock)) return match;

    const indentMatch = styleBlock.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : '    ';
    const marginBottomMatch = styleBlock.match(/(\n\s*marginBottom\s*:\s*"[^"]+",)/);

    let updatedBlock = styleBlock;
    if (marginBottomMatch) {
      const lineIndent = marginBottomMatch[0].match(/^\s*/)[0];
      updatedBlock = updatedBlock.replace(
        marginBottomMatch[0],
        `${marginBottomMatch[0]}\n${lineIndent}marginTop: "0",`
      );
    } else {
      updatedBlock = updatedBlock.replace(/\s*$/, '');
      updatedBlock += `\n${indent}marginTop: "0",`;
    }

    changed += 1;
    return match.replace(styleBlock, updatedBlock);
  });

  if (changed > 0) {
    fs.writeFileSync(fullPath, text, 'utf8');
    console.log(`${relPath}: updated ${changed} h2 block(s)`);
  } else {
    console.log(`${relPath}: already up to date`);
  }
}
