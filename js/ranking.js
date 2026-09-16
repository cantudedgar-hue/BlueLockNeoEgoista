var rowsEl = document.getElementById('rowsEl');

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

detailCloseBtn.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', function(ev){ if(ev.target === detailOverlay) closeDetail(); });
document.addEventListener('keydown', function(ev){ if(ev.key === 'Escape') closeDetail(); });

renderRanking();