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
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); }catch(e){}
}

var entries = loadEntries();

var rowsEl = document.getElementById('rowsEl');

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, function(c){
    return ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c];
  });
}

function tierClass(rank){
  if(rank === 1) return 'gold';
  if(rank === 2) return 'silver';
  if(rank === 3) return 'bronze';
  return 'plain';
}

function renderRanking(){
  entries.sort(function(a,b){ return b.value - a.value; });
  var topCount = 23;
  var top = entries.slice(0, topCount);
  var rest = entries.slice(topCount);

  var html = '';
  top.forEach(function(e, i){
    var rank = i + 1;
    if(rank === 4){
      html += '<div class="divider-line"></div>';
    }
    var iconUrl = e.img || 'https://via.placeholder.com/64/0d2530/33f3ff?text=' + encodeURIComponent(e.name.slice(0,2));
    var bigUrl = e.bigImg || iconUrl;
    html += '' +
      '<div class="plate-row clickable" data-i="' + i + '" data-rank="' + rank + '" data-name="' + escapeHtml(e.name) + '" data-value="' + e.value + '" data-img="' + escapeHtml(iconUrl) + '" data-bigimg="' + escapeHtml(bigUrl) + '">' +
        '<div class="badge"><span>' + rank + '</span></div>' +
        '<div class="icon-slot">' +
          '<div class="pent-border"></div>' +
          '<div class="pent-fill" role="img" aria-label="icono">' +
            '<img src="' + iconUrl + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">' +
          '</div>' +
        '</div>' +
        '<div class="name-plate ' + tierClass(rank) + '">' +
          '<span class="name">' + escapeHtml(e.name) + '</span>' +
          '<span class="yen">¥ ' + Number(e.value).toLocaleString('es-MX') + '</span>' +
        '</div>' +
      '</div>';
  });

  if(rest.length > 0){
    html += '<div class="compact-section">';
    html += '<div class="compact-title">CLASIFICACIÓN COMPACTA · 24 — ' + (entries.length) + '</div>';
    html += '<div class="compact-grid">';

    rest.forEach(function(e, idx){
      var rank = topCount + idx + 1;
      var realIndex = topCount + idx;
      var iconUrl = e.img || 'https://via.placeholder.com/32/0d2530/33f3ff?text=' + encodeURIComponent(e.name.slice(0,2));
      var bigUrl = e.bigImg || iconUrl;
      html += '' +
        '<div class="compact-item" data-i="' + realIndex + '" data-rank="' + rank + '" data-name="' + escapeHtml(e.name) + '" data-value="' + e.value + '" data-img="' + escapeHtml(iconUrl) + '" data-bigimg="' + escapeHtml(bigUrl) + '">' +
          '<span class="c-rank">' + rank + '</span>' +
          '<span class="c-name">' + escapeHtml(e.name) + '</span>' +
          '<span class="c-yen">¥' + Number(e.value).toLocaleString('es-MX') + '</span>' +
        '</div>';
    });

    html += '</div></div>';
  }

  rowsEl.innerHTML = html;
}

rowsEl.addEventListener('click', function(ev){
  var row = ev.target.closest('.plate-row') || ev.target.closest('.compact-item');
  if(row){
    openDetail({
      rank: row.getAttribute('data-rank'),
      name: row.getAttribute('data-name'),
      value: row.getAttribute('data-value'),
      img: row.getAttribute('data-img') || '',
      bigImg: row.getAttribute('data-bigimg') || ''
    });
  }
});

var detailOverlay = document.getElementById('detailOverlay');
var detailCloseBtn = document.getElementById('detailCloseBtn');
var detailRankEl = document.getElementById('detailRank');
var detailNameEl = document.getElementById('detailName');
var detailYenEl = document.getElementById('detailYen');
var detailIcon = document.getElementById('detailIcon');
var detailBigImage = document.getElementById('detailBigImage');

function openDetail(data){
  detailRankEl.textContent = String(data.rank).padStart(2, '0');
  detailNameEl.textContent = data.name;
  detailYenEl.textContent = '¥ ' + Number(data.value).toLocaleString('es-MX');

  var imgSrc = data.img;
  var bigImgSrc = data.bigImg || data.img;
  var altText = data.name.slice(0,2).toUpperCase();

  if (!imgSrc) {
    detailIcon.innerHTML = altText;
  } else {
    detailIcon.innerHTML = '<img src="' + imgSrc + '" alt="' + altText + '" style="width:100%;height:100%;object-fit:cover;display:block;">';
  }

  if (!bigImgSrc) {
    detailBigImage.innerHTML = 'ALT: ' + altText;
    detailBigImage.style.fontSize = '24px';
  } else {
    detailBigImage.innerHTML = '<img src="' + bigImgSrc + '" alt="' + altText + '" style="width:100%;height:100%;object-fit:contain;display:block;background:transparent;">';
    detailBigImage.style.fontSize = '';
  }

  detailOverlay.classList.add('show');
}
function closeDetail(){ detailOverlay.classList.remove('show'); }

detailCloseBtn.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', function(ev){ if(ev.target === detailOverlay) closeDetail(); });
document.addEventListener('keydown', function(ev){ if(ev.key === 'Escape') closeDetail(); });

var playerForm = document.getElementById('playerForm');
var playerNameInput = document.getElementById('playerName');
var playerValueInput = document.getElementById('playerValue');
var playerImgFileInput = document.getElementById('playerImgFile');
var playerBigImgFileInput = document.getElementById('playerBigImgFile');
var playerImgPreview = document.getElementById('playerImgPreview');
var playerBigImgPreview = document.getElementById('playerBigImgPreview');
var playerFormTitle = document.getElementById('playerFormTitle');
var playerSubmitBtn = document.getElementById('playerSubmitBtn');
var playerCancelBtn = document.getElementById('playerCancelBtn');
var playersGrid = document.getElementById('playersGrid');
var editIndex = -1;
var currentImgData = '';
var currentBigImgData = '';

function readImageFile(fileInput, previewEl, onDone){
  var file = fileInput.files && fileInput.files[0];
  if(!file) return;
  var reader = new FileReader();
  reader.onload = function(e){
    onDone(e.target.result);
    previewEl.src = e.target.result;
    previewEl.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

playerImgFileInput.addEventListener('change', function(){
  readImageFile(playerImgFileInput, playerImgPreview, function(dataUrl){ currentImgData = dataUrl; });
});
playerBigImgFileInput.addEventListener('change', function(){
  readImageFile(playerBigImgFileInput, playerBigImgPreview, function(dataUrl){ currentBigImgData = dataUrl; });
});

function renderPlayers(){
  var sorted = entries
    .map(function(e, i){ return { entry: e, index: i }; })
    .sort(function(a, b){ return a.entry.name.localeCompare(b.entry.name, 'es'); });

  if(sorted.length === 0){
    playersGrid.innerHTML = '<p class="player-empty">No hay jugadores registrados todavía.</p>';
    return;
  }

  var html = '';
  sorted.forEach(function(item){
    var e = item.entry;
    var i = item.index;
    var iconUrl = e.img || 'https://via.placeholder.com/48/0d2530/33f3ff?text=' + encodeURIComponent(e.name.slice(0,2));
    html += '' +
      '<div class="player-card">' +
        '<img class="player-card-img" src="' + iconUrl + '" alt="">' +
        '<div class="player-card-info">' +
          '<div class="player-card-name">' + escapeHtml(e.name) + '</div>' +
          '<div class="player-card-value">¥ ' + Number(e.value).toLocaleString('es-MX') + '</div>' +
        '</div>' +
        '<div class="player-card-actions">' +
          '<button type="button" class="player-edit-btn" data-i="' + i + '">Editar</button>' +
          '<button type="button" class="player-del-btn" data-i="' + i + '">Eliminar</button>' +
        '</div>' +
      '</div>';
  });
  playersGrid.innerHTML = html;
}

function startEdit(i){
  editIndex = i;
  var e = entries[i];
  playerNameInput.value = e.name;
  playerValueInput.value = e.value;
  playerImgFileInput.value = '';
  playerBigImgFileInput.value = '';
  currentImgData = e.img || '';
  currentBigImgData = e.bigImg || '';
  if(currentImgData){ playerImgPreview.src = currentImgData; playerImgPreview.style.display = 'block'; }
  else{ playerImgPreview.style.display = 'none'; }
  if(currentBigImgData){ playerBigImgPreview.src = currentBigImgData; playerBigImgPreview.style.display = 'block'; }
  else{ playerBigImgPreview.style.display = 'none'; }
  playerFormTitle.textContent = 'EDITAR JUGADOR';
  playerSubmitBtn.textContent = 'Actualizar';
  playerCancelBtn.style.display = 'inline-block';
  playerNameInput.focus();
}

function resetPlayerForm(){
  editIndex = -1;
  playerForm.reset();
  currentImgData = '';
  currentBigImgData = '';
  playerImgPreview.style.display = 'none';
  playerBigImgPreview.style.display = 'none';
  playerFormTitle.textContent = 'NUEVO JUGADOR';
  playerSubmitBtn.textContent = 'Agregar';
  playerCancelBtn.style.display = 'none';
}

playersGrid.addEventListener('click', function(ev){
  var editBtn = ev.target.closest('.player-edit-btn');
  if(editBtn){
    startEdit(parseInt(editBtn.getAttribute('data-i'), 10));
    return;
  }
  var delBtn = ev.target.closest('.player-del-btn');
  if(delBtn){
    var i = parseInt(delBtn.getAttribute('data-i'), 10);
    if(confirm('¿Eliminar a ' + entries[i].name + ' del ranking?')){
      entries.splice(i, 1);
      saveEntries();
      renderRanking();
      renderPlayers();
      if(editIndex === i) resetPlayerForm();
    }
  }
});

playerCancelBtn.addEventListener('click', resetPlayerForm);

playerForm.addEventListener('submit', function(ev){
  ev.preventDefault();
  var name = playerNameInput.value.trim();
  var value = parseFloat(playerValueInput.value);
  var img = currentImgData;
  var bigImg = currentBigImgData;
  if(!name || isNaN(value) || value < 0) return;

  if(!img){
    img = 'https://via.placeholder.com/64/0d2530/33f3ff?text=' + encodeURIComponent(name.slice(0,2).toUpperCase());
  }

  if(editIndex >= 0){
    entries[editIndex].name = name.toUpperCase();
    entries[editIndex].value = value;
    entries[editIndex].img = img;
    entries[editIndex].bigImg = bigImg;
  } else {
    entries.push({ name: name.toUpperCase(), value: value, img: img, bigImg: bigImg });
  }

  saveEntries();
  renderRanking();
  renderPlayers();
  resetPlayerForm();
});

var exportJsonBtn = document.getElementById('exportJsonBtn');
var importJsonFile = document.getElementById('importJsonFile');

exportJsonBtn.addEventListener('click', function(){
  var blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'players.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

importJsonFile.addEventListener('change', function(){
  var file = importJsonFile.files && importJsonFile.files[0];
  if(!file) return;
  var reader = new FileReader();
  reader.onload = function(e){
    var data;
    try{
      data = JSON.parse(e.target.result);
    }catch(err){
      alert('El archivo no es un JSON válido.');
      importJsonFile.value = '';
      return;
    }
    if(!Array.isArray(data)){
      alert('El JSON debe ser una lista de jugadores.');
      importJsonFile.value = '';
      return;
    }
    var valid = data.every(function(e){
      return e && typeof e.name === 'string' && typeof e.value === 'number';
    });
    if(!valid){
      alert('Cada jugador debe tener al menos "name" (texto) y "value" (número).');
      importJsonFile.value = '';
      return;
    }
    if(!confirm('Esto reemplazará el ranking actual con ' + data.length + ' jugador(es) del archivo. ¿Continuar?')) {
      importJsonFile.value = '';
      return;
    }
    entries = data;
    saveEntries();
    renderRanking();
    renderPlayers();
    resetPlayerForm();
    importJsonFile.value = '';
  };
  reader.readAsText(file);
});

renderRanking();
renderPlayers();

document.querySelectorAll('.nav-item').forEach(function(item){
  item.addEventListener('click', function(ev){
    ev.preventDefault();
    var id = item.getAttribute('data-target');
    var target = document.getElementById(id);
    if(target){ target.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});