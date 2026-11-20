import json,re,time,urllib.request,urllib.parse,os,io
from PIL import Image
UA={'User-Agent':'SweetLivingRoomImageResearch/1.0 (editorial research)'}
PICK={
 'mattress-corner':'Soho Mattress.jpg',
 'child-drawing-age-3':'Child drawing age 3 crayon on paper.jpg',
 'toddler-bead-toy':'Toddler with wire bead toy (Unsplash).jpg',
 'toddler-blocks-play':'Follow my lead (6623478).jpg',
 'bathtub-prague':'Bathtub in bathroom of premier room in Buddha bar hotel Prague.jpg',
 'sewing-machine-needle':'A sewing machine needle on pink & white fabric.jpg',
 'pool-noodles':'Pool noodles for sale 01.jpg',
 'bed-with-side-pillow':'Door open; empty bed with pillow and side pillow 01.jpg',
 
 'memory-foam-recovery':'MemoryFoam-slow.jpg',
 'coccyx-cushion':'Coccix Cushion.jpg',
 'woman-stretching-living-room':'Woman stretches and relaxes at home in living room.jpg',
}
OUT='../../public/images/articles'
os.makedirs(OUT,exist_ok=True)
man=json.load(open('images.json')) if os.path.exists('images.json') else {}
strip=lambda s:re.sub('<[^>]+>','',s or '').strip()
for key,title in PICK.items():
  if key in man: continue
  u='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({'action':'query','format':'json','titles':'File:'+title,'prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':1400})
  d=None
  for a in range(4):
    try:
      d=json.load(urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=30)); break
    except Exception as e: print('retry',key,e); time.sleep(10)
  p=list(d['query']['pages'].values())[0]
  if 'imageinfo' not in p: print('MISSING',key,title); continue
  ii=p['imageinfo'][0]; m=ii['extmetadata']
  time.sleep(2)
  raw=None
  for a in range(4):
    try:
      raw=urllib.request.urlopen(urllib.request.Request(ii.get('thumburl') or ii['url'],headers=UA),timeout=60).read(); break
    except Exception as e: print('retry img',key,e); time.sleep(15)
  if not raw: continue
  im=Image.open(io.BytesIO(raw)).convert('RGB'); im.thumbnail((1400,1400))
  im.save(f'{OUT}/{key}.webp','WEBP',quality=82,method=5)
  g=lambda k:strip((m.get(k,{}) or {}).get('value'))
  man[key]={'file':f'/images/articles/{key}.webp','title':title,'license':g('LicenseShortName'),'artist':g('Artist')[:90],'page':ii.get('descriptionurl'),'w':im.width,'h':im.height}
  print('ok',key,man[key]['license'],im.width,'x',im.height)
  time.sleep(2)
json.dump(man,open('images.json','w'),indent=1)
