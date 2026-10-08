/**
 * Visoraix — Image Inventory Check
 * Run: node scripts/check-images.mjs
 */
import { existsSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');
const required = [
  'images/hero/product.jpg',
  'images/features/01.jpg',
  'images/features/02.jpg',
  'images/features/03.jpg',
  'images/features/04.jpg',
  'images/features/05.jpg',
  'images/features/06.jpg',
  'images/og.jpg',
];

console.log('Checking Visoraix local images...');
let missing = 0;
for (const rel of required) {
  const filepath = join(PUBLIC_DIR, rel);
  if (existsSync(filepath)) console.log(`  ✓ ${rel}`);
  else {
    console.error(`  ✗ missing: ${rel}`);
    missing += 1;
  }
}
if (missing) {
  console.error(`\n${missing} image(s) missing. See IMAGE-GUIDE.md.`);
  process.exit(1);
}
console.log('\nAll local images present.');
