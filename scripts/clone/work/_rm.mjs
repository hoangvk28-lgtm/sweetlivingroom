import fs from 'fs';
const f=`scripts/clone/work/${process.argv[2]}.spec.json`;const s=JSON.parse(fs.readFileSync(f,'utf8'));
for(const [p,t] of JSON.parse(fs.readFileSync(0,'utf8'))){const k=p.split('.');let o=s;for(let i=0;i<k.length-1;i++)o=o[k[i]];const l=k[k.length-1];if(!o[l].includes(t))console.log('MISSING',p);o[l]=o[l].replace(t,'');}
fs.writeFileSync(f,JSON.stringify(s,null,1));
