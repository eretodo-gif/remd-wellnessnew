
 const button=document.querySelector('.menu-btn');
 const nav=document.querySelector('#primary-navigation');
 if(!button || !nav) return;
 function closeMenu(returnFocus=false){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation menu');button.textContent='Menu';if(returnFocus)button.focus();}
 button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');button.textContent=open?'Close':'Menu';});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open'))closeMenu(true)});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
 document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!button.contains(e.target))closeMenu()});
})();
