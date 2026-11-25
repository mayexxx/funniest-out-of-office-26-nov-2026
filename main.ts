import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = "I'm OOO. If this is an emergency, dial 911. If this is a work emergency, please lower your standards.";
if (text.includes('\r') || text.split('\n').length !== 1 || Array.from(text).length < 1 || Array.from(text).length > 139) throw new Error('Invalid entry');
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt.tmp', text + '\n');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') throw new Error('Output verification failed');
