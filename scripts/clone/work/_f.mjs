import fs from 'fs';
const c=JSON.parse(fs.readFileSync(`scripts/clone/work/${process.argv[2]}.compact.json`,'utf8'));
const ids=process.argv.slice(3);
for(const i of c.items.filter(i=>ids.includes(i.asin)))console.log(i.asin,i.title.slice(0,160),'\n ',i.features.map(f=>f.slice(0,140)).join('\n  '));
