(function(){
  var TEXT_TO_COPY = 'filipmtvn@gmail.com';

  document.addEventListener('click', function(e){
    var el = e.target.closest('.js-copy');
    if(!el) return;
    e.preventDefault();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(TEXT_TO_COPY);
    } else {
      var ta=document.createElement('textarea');
      ta.value=TEXT_TO_COPY; ta.setAttribute('readonly','');
      ta.style.position='absolute'; ta.style.left='-9999px';
      document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); }catch(e){}
      document.body.removeChild(ta);
    }

    var msg = el.nextElementSibling;
    if (msg && msg.classList.contains('copy-msg')) {
      clearTimeout(el._t);
      msg.textContent = ' Copied to clipboard';
      el._t = setTimeout(function(){ msg.textContent=''; }, 1400);
    }
  });
})();
