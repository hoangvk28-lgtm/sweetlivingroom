import fs from 'fs';
const used={};for(const f of fs.readdirSync('data/guides')){const t=fs.readFileSync('data/guides/'+f,'utf8');for(const m of t.matchAll(/B0[0-9A-Z]{8}/g))(used[m[0]]??=new Set()).add(f.replace('.ts','').replace('best-',''));}
const c=JSON.parse(fs.readFileSync(`scripts/clone/work/${process.argv[2]}.compact.json`,'utf8'));
console.log(c.categorySlug,'|',c.mainKeyword,'|',c.items.length);
for(const i of c.items){const u=used[i.asin];console.log(i.asin,'|',i.title.slice(0,100),'|',i.priceTier.split(' ')[0],i.underCap??'',u?'USED:'+[...u].slice(0,2).join(','):'');}
