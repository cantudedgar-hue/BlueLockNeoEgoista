(function(){
  'use strict';
  var ADMIN_PASS = 'onlytrans';

  var adminLoginSection = document.getElementById('adminLogin');
  var adminPanelSection = document.getElementById('adminPanel');
  var adminLoginForm = document.getElementById('adminLoginForm');
  var adminPassInput = document.getElementById('adminPass');
  var adminLoginError = document.getElementById('adminLoginError');
  var adminLogoutBtn = document.getElementById('adminLogoutBtn');

  if (sessionStorage.getItem('blAdminAuth') === '1'){
    showPanel();
  }

  function showPanel(){
    if (adminLoginSection) adminLoginSection.hidden = true;
    if (adminPanelSection) adminPanelSection.hidden = false;
  }
  function showLogin(){
    if (adminLoginSection) adminLoginSection.hidden = false;
    if (adminPanelSection) adminPanelSection.hidden = true;
  }

  if (adminLoginForm){
    adminLoginForm.addEventListener('submit', function(ev){
      ev.preventDefault();
      var pass = adminPassInput.value;
      if (pass === ADMIN_PASS){
        sessionStorage.setItem('blAdminAuth', '1');
        adminLoginError.textContent = '';
        adminPassInput.value = '';
        showPanel();
      } else {
        adminLoginError.textContent = 'Clave incorrecta. Inténtalo de nuevo.';
        adminPassInput.value = '';
        adminPassInput.focus();
      }
    });
  }

  if (adminLogoutBtn){
    adminLogoutBtn.addEventListener('click', function(){
      sessionStorage.removeItem('blAdminAuth');
      showLogin();
    });
  }

  if (!adminPanelSection) return;

  if (typeof entries === 'undefined'){
    console.error('[admin.js] FATAL: `entries` no está definido. ¿Cargaste data.js ANTES que admin.js?');
    return;
  }
  if (typeof saveEntries !== 'function' || typeof escapeHtml !== 'function'){
    console.error('[admin.js] FATAL: faltan helpers de data.js (saveEntries / escapeHtml).');
    return;
  }

  function $(id){
    var el = document.getElementById(id);
    if (!el) console.error('[admin.js] No existe #' + id);
    return el;
  }

  var playerForm        = $('playerForm');
  var playerNameInput   = $('playerName');
  var playerValueInput  = $('playerValue');
  var playerImgFile     = $('playerImgFile');
  var playerBigImgFile  = $('playerBigImgFile');
  var playerImgPreview  = $('playerImgPreview');
  var playerBigImgPrev  = $('playerBigImgPreview');
  var playerFormTitle   = $('playerFormTitle');
  var playerSubmitBtn   = $('playerSubmitBtn');
  var playerCancelBtn   = $('playerCancelBtn');
  var playersGrid       = $('playersGrid');
  var exportJsonBtn     = $('exportJsonBtn');
  var importJsonFile    = $('importJsonFile');

  if (!playerForm || !playersGrid || !exportJsonBtn || !importJsonFile){
    console.error('[admin.js] Faltan elementos clave del DOM. Abortando CRUD.');
    return;
  }

  var editIndex = -1;
  var currentImgData = '';
  var currentBigImgData = '';

  function readImageFile(fileInput, previewEl, onDone){
    var file = fileInput.files && fileInput.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e){
      onDone(e.target.result);
      if (previewEl){
        previewEl.src = e.target.result;
        previewEl.style.display = 'block';
      }
    };
    reader.readAsDataURL(file);
  }

  if (playerImgFile && playerImgPreview){
    playerImgFile.addEventListener('change', function(){
      readImageFile(playerImgFile, playerImgPreview, function(dataUrl){ currentImgData = dataUrl; });
    });
  }
  if (playerBigImgFile && playerBigImgPrev){
    playerBigImgFile.addEventListener('change', function(){
      readImageFile(playerBigImgFile, playerBigImgPrev, function(dataUrl){ currentBigImgData = dataUrl; });
    });
  }

  function renderPlayers(){
    var sorted = entries
      .map(function(e, i){ return { entry: e, index: i }; })
      .sort(function(a, b){ return a.entry.name.localeCompare(b.entry.name, 'es'); });

    if (sorted.length === 0){
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
    if (playerImgFile) playerImgFile.value = '';
    if (playerBigImgFile) playerBigImgFile.value = '';
    currentImgData = e.img || '';
    currentBigImgData = e.bigImg || '';
    if (currentImgData){ playerImgPreview.src = currentImgData; playerImgPreview.style.display = 'block'; }
    else { playerImgPreview.style.display = 'none'; }
    if (currentBigImgData){ playerBigImgPrev.src = currentBigImgData; playerBigImgPrev.style.display = 'block'; }
    else { playerBigImgPrev.style.display = 'none'; }
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
    playerBigImgPrev.style.display = 'none';
    playerFormTitle.textContent = 'NUEVO JUGADOR';
    playerSubmitBtn.textContent = 'Agregar';
    playerCancelBtn.style.display = 'none';
  }

  playersGrid.addEventListener('click', function(ev){
    var editBtn = ev.target.closest('.player-edit-btn');
    if (editBtn){
      startEdit(parseInt(editBtn.getAttribute('data-i'), 10));
      return;
    }
    var delBtn = ev.target.closest('.player-del-btn');
    if (delBtn){
      var i = parseInt(delBtn.getAttribute('data-i'), 10);
      if (confirm('¿Eliminar a ' + entries[i].name + ' del ranking?')){
        entries.splice(i, 1);
        saveEntries();
        renderPlayers();
        if (editIndex === i) resetPlayerForm();
      }
    }
  });

  if (playerCancelBtn){
    playerCancelBtn.addEventListener('click', resetPlayerForm);
  }

  playerForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    var name = playerNameInput.value.trim();
    var value = parseFloat(playerValueInput.value);
    var img = currentImgData;
    var bigImg = currentBigImgData;
    if (!name || isNaN(value) || value < 0){
      alert('Nombre y valor son obligatorios.');
      return;
    }
    if (!img){
      img = 'https://via.placeholder.com/64/0d2530/33f3ff?text=' + encodeURIComponent(name.slice(0,2).toUpperCase());
    }
    if (editIndex >= 0){
      entries[editIndex].name = name.toUpperCase();
      entries[editIndex].value = value;
      entries[editIndex].img = img;
      entries[editIndex].bigImg = bigImg;
    } else {
      entries.push({ name: name.toUpperCase(), value: value, img: img, bigImg: bigImg });
    }
    saveEntries();
    renderPlayers();
    resetPlayerForm();
  });

  exportJsonBtn.addEventListener('click', function(){
    try {
      var blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'players.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch(err){
      alert('Error al exportar: ' + err.message);
    }
  });

  importJsonFile.addEventListener('change', function(){
    var file = importJsonFile.files && importJsonFile.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e){
      var data;
      try {
        data = JSON.parse(e.target.result);
      } catch(err){
        alert('El archivo no es un JSON válido.');
        importJsonFile.value = '';
        return;
      }
      if (!Array.isArray(data)){
        alert('El JSON debe ser una lista de jugadores.');
        importJsonFile.value = '';
        return;
      }
      var valid = data.every(function(item){
        return item && typeof item.name === 'string' && typeof item.value === 'number';
      });
      if (!valid){
        alert('Cada jugador debe tener al menos "name" (texto) y "value" (número).');
        importJsonFile.value = '';
        return;
      }
      if (!confirm('Esto reemplazará el ranking actual con ' + data.length + ' jugador(es). ¿Continuar?')){
        importJsonFile.value = '';
        return;
      }
      entries.length = 0;
      data.forEach(function(item){ entries.push(item); });
      saveEntries();
      renderPlayers();
      resetPlayerForm();
      importJsonFile.value = '';
      alert('Importados ' + entries.length + ' jugadores correctamente.');
    };
    reader.readAsText(file);
  });

  renderPlayers();

})();