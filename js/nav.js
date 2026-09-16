document.querySelectorAll('.nav-item').forEach(function(item){
  item.addEventListener('click', function(ev){
    var id = item.getAttribute('data-target');
    var target = document.getElementById(id);
    if(target){
      ev.preventDefault();
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  });
});