var defaultEntries = [
  { name:'KIYORA', value:26000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=K', bigImg:'kiyorareal.png' },
  { name:'NANASE', value:25000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=N' },
  { name:'NAGI',   value:24000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=NA' },
  { name:'RIN',    value:23000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=R' },
  { name:'ISAGI',  value:22000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=I' },
  { name:'BACHIRA',value:21000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=B' },
  { name:'CHIGIRI',value:20000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=C' },
  { name:'KUNIGAMI',value:19500000,img:'https://via.placeholder.com/64/0d2530/33f3ff?text=KU' },
  { name:'BARO',   value:19000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=BA' },
  { name:'NARUHAYA',value:18500000,img:'https://via.placeholder.com/64/0d2530/33f3ff?text=NA' },
  { name:'OTONASHI',value:18000000,img:'https://via.placeholder.com/64/0d2530/33f3ff?text=O' },
  { name:'YUKIMIYA',value:17500000,img:'https://via.placeholder.com/64/0d2530/33f3ff?text=Y' },
  { name:'KARASU', value:17000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=KA' },
  { name:'HIMIZU', value:16500000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=H' },
  { name:'TOKITSU',value:16000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=TO' },
  { name:'NIRO',   value:15500000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=NI' },
  { name:'ARIO',   value:15000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=AR' },
  { name:'SENDO',  value:14500000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=SE' },
  { name:'GURIMU', value:14000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=GU' },
  { name:'ZANTETSU',value:13500000,img:'https://via.placeholder.com/64/0d2530/33f3ff?text=ZA' },
  { name:'KURONA', value:13000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=KU' },
  { name:'HIIRAGI',value:12500000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=HI' },
  { name:'MEGURU', value:12000000, img:'https://via.placeholder.com/64/0d2530/33f3ff?text=ME' },
  { name:'SHIDOU', value:11500000, img:'https://via.placeholder.com/32/0d2530/33f3ff?text=SH' },
  { name:'RANZE',  value:11000000, img:'https://via.placeholder.com/32/0d2530/33f3ff?text=RA' },
  { name:'REO',    value:10500000, img:'https://via.placeholder.com/32/0d2530/33f3ff?text=RE' },
  { name:'KUON',   value:10000000, img:'https://via.placeholder.com/32/0d2530/33f3ff?text=KU' },
  { name:'IMAMURA',value:9500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=IM' },
  { name:'HAYATE', value:9000000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=HA' },
  { name:'JINGO',  value:8500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=JI' },
  { name:'KISARAGI',value:8000000, img:'https://via.placeholder.com/32/0d2530/33f3ff?text=KI' },
  { name:'TSUKIMORI',value:7500000,img:'https://via.placeholder.com/32/0d2530/33f3ff?text=TS' },
  { name:'KIRA',   value:7000000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=KI' },
  { name:'HOSHIMI',value:6500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=HO' },
  { name:'YUMI',   value:6000000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=YU' },
  { name:'NATSUKI',value:5500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=NA' },
  { name:'AIBA',   value:5000000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=AI' },
  { name:'MIKAGE', value:4500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=MI' },
  { name:'SHIRO',  value:4000000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=SH' },
  { name:'KURO',   value:3500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=KU' },
  { name:'AKANE',  value:3000000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=AK' },
  { name:'AOI',    value:2500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=AO' },
  { name:'MIDORI', value:2000000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=MI' },
  { name:'KIN',    value:1500000,  img:'https://via.placeholder.com/32/0d2530/33f3ff?text=KI' }
];

var STORAGE_KEY = 'blRankingPlayers';

function loadEntries(){
  try{
    var saved = localStorage.getItem(STORAGE_KEY);
    if(saved) return JSON.parse(saved);
  }catch(e){}
  return JSON.parse(JSON.stringify(defaultEntries));
}

function saveEntries(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }catch(e){}
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, function(c){
    return ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c];
  });
}

var entries = loadEntries();