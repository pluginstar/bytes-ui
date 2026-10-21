import fs from 'fs';
import path from 'path';

const compsDir = path.join('src', 'routes', 'docs', 'components');
const dirs = fs.readdirSync(compsDir);
let count = 0;

for (const dir of dirs) {
  const filePath = path.join(compsDir, dir, '+page.svelte');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // 1. remove border-b on page header
    content = content.replace(/<div class="space-y-3 pb-2 border-b border-border-card">/g, '<div class="space-y-3 pb-2">');

    // 2. update description font classes
    content = content.replace(/class="text-foreground\/50 mt-3 text-balance text-lg font-normal leading-7 tracking-\[-0\.01em\] sm:text-\[20px\]"/g, 'class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8"');
    content = content.replace(/class="text-foreground\/70 mt-3 text-balance text-lg font-normal leading-7 tracking-\[-0\.01em\] sm:text-\[20px\]"/g, 'class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8"');

    // 3. remove <section class="space-y-4"> / <h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
    content = content.replace(/<section class="space-y-4">\s*<h2 class="text-2xl font-semibold tracking-tight">Preview<\/h2>\s*(<ComponentPreview)/g, '$1');
    content = content.replace(/(<\/ComponentPreview>)\s*<\/section>/g, '$1');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      count++;
    }
  }
}
console.log(`Updated ${count} component pages.`);
