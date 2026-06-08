const fs = require('fs');
const path = require('path');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(dirent => {
    const res = path.join(dir, dirent.name);
    return dirent.isDirectory() ? walk(res) : [res];
  });
}
const files = walk(path.join(__dirname, '..', 'src')).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
let total = 0;
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  const original = text;

  // Convert direct Contact Us buttons with JS navigation to anchors
  text = text.replace(/<button([^>]*?)onClick=\{\(\) => \(window.location.href = \"\/contact-us\"\)\}([^>]*)>/g, '<a$1$2 href="/contact-us">');

  // Convert any Contact Us button to anchor if not already an anchor
  text = text.replace(/<button([^>]*?)>([\s\S]*?Contact Us[\s\S]*?)<\/button>/g, (match, attrs, inner) => {
    if (/href=/.test(attrs)) return match;
    return `<a${attrs} href="/contact-us">${inner}</a>`;
  });

  // Convert Read More buttons that navigate to Contact Us to anchors
  text = text.replace(/<button([^>]*?)>([\s\S]*?Read More[\s\S]*?)<\/button>/g, (match, attrs, inner) => {
    if (/href=/.test(attrs)) return match;
    if (/window\.location\.href = \"\/contact-us\"/.test(match) || /contact-us/.test(inner)) {
      return `<a${attrs} href="/contact-us">${inner}</a>`;
    }
    return match;
  });

  // Add textDecoration none to contact-us anchors with style objects if missing
  text = text.replace(/<a([^>]*href=\"\/contact-us\"[^>]*style=\{\{)([\s\S]*?)(\}\})>/g, (match, pre, body, post) => {
    if (/textDecoration\s*:/m.test(body)) return match;
    return `<a${pre}textDecoration: \"none\",${body}${post}>`;
  });

  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    console.log('Updated', file);
    total += 1;
  }
}
console.log('Done', total, 'files updated');
