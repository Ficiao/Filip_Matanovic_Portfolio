<style>
:root{ --g: 20px; }
  
.fullbleed{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
}

.projects{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: var(--g);
  padding: var(--g);         
  margin: 1rem 0;
}
@media (min-width: 1200px){
  .projects{ grid-template-columns: repeat(3, 1fr); }
}
  
.card{border:1px solid #d0d7de; border-radius:10px; padding:14px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,.06); }
  
.card h3 { margin-top: 0; margin-bottom: 0; }

.contact-bar.fullbleed{
  position: relative; left:50%; transform:translateX(-50%);
  width:100vw; box-sizing:border-box; padding:0 var(--g); margin: .5rem 0 1rem;
}
.contact-inner{
  max-width:1280px; margin:0 auto; display:flex; gap:8px; flex-wrap:wrap; justify-content:center;
}

.video {
  position: relative; width: 100%;
  aspect-ratio: 16/9; 
  overflow: hidden; border-radius: 8px;
}
.video iframe {
  position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
}
  
.btn{display:inline-block; padding:6px 12px; border:1px solid #333; border-radius:6px; text-decoration:none; background:#f1f5f9; color:#111; font-weight:600;}
.btn:hover{background:#e2e8f0;}
.btn:focus{outline:2px solid #60a5fa; outline-offset:2px;}
.btn--primary{background:#2563eb; border-color:#2563eb; color:#fff;}
.btn--primary:hover{background:#e2e8f0; color:#111; border-color:#333;}
.btn-group{display:flex; gap:8px; flex-wrap:wrap;}

.linklike{
  background: none;
  display:inline;          
  margin:0;              
  padding:0;
  border:0;
  background:transparent;
  font:inherit;
  color: #0969da;       
  text-decoration: none;
  vertical-align:baseline;
  line-height:inherit;
  -webkit-appearance:none;
  appearance:none;
  cursor: pointer;
}
  
.linklike:hover{text-decoration: underline;} 
  
.linklike:focus{outline: 2px solid #60a5fa; outline-offset: 2px;}
  
button.linklike{ margin:0 !important; }

.copy-msg{ margin-left:0; }
.copy-msg:not(:empty){ margin-left:8px; }
</style>

<script>
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
</script>

<div class="btn-group">
  <a href="index.html" class="btn">🇭🇷 HR</a>
  <a href="en.html" class="btn btn--primary">🇬🇧 EN</a>
</div>
<div id="contact" class="contact-bar fullbleed contact-inner">
<button type="button"
        class="linklike js-copy"
        data-copy="filipmtvn@gmail.com"
        aria-label="Copy email to clipboard">
  filipmtvn@gmail.com
</button>
<span class="copy-msg" aria-live="polite"></span>
    <a href="https://www.linkedin.com/in/filip-matanovi%C4%87-43503b235/" target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://github.com/Ficiao" target="_blank" rel="noopener">GitHub</a>
    <a href="cv_fm.pdf" target="_blank" rel="noopener">CV (PDF)</a>
</div>
Napomena: Naslovi projekata su ujedno i poveznice na git repositorije projekata. Ako priroda projekta ne zahtijeva repozitorij ili mi iz drugih razloga nije dopušteno javno dijeljenje koda, poveznice neće biti.

<div class="projects fullbleed">

  <div class="card" markdown="1">
## [Prototip MMO igre sa vlastitim netcode-om, klijentskim predviđanjem, serverskom pomirdbom i interpolacijom objekata](https://github.com/Ficiao/KnjiznicarLinks)
* Napravljena je klijentska aplikacija igre, te serverske aplikacije za login server, overworld server i instance
* Izrađen je vlasititi protokol za komunikaciju preko TCP-a i UDP-a
* Izrađeni su asseti za igru
* Napravljen je gameloop kretanja u svijetu, te ulaska u PvP i PvE mečeve
* Napravljen je gamloop mečeva gdje igrač spaja riječi od pnuđenih šesnaest slučajnih slova, te čini štetu ovisno o duljini riječi
* Igra također sadrži PvP i PvE leaderboard-ove
* Za igru je napravljen launcher koji ju automatski drži ažuriranom, te prikazuje patch notes-e i verziju

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tTIj7t3eByw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Umrežena igra pucanja iz trećeg lica arhitekture domaćin-klijenti koja koristi Photon Fusion 2 biblioteku](https://github.com/Ficiao/SpellFlinger)
* Umrežena igra pucanja iz trećeg lica
* Izrađeni potrebni vizualni elementi
* Funkcionalnosti stvaranja i spajanja u sobe za igru, odabir borbene čarolije i mape za igru
* Mogućnosti timskog igranja ili svatko za sebe
* Mrežna komunikacija i sinkronizacija objekata ostvarena pomoću Photon Fusion 2 biblioteke
* Na temelju projekta izrađene upute za učenje za svrhe laboratorijske vježbe

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8XTLASs7C0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Igra šaha u 3D-u](https://github.com/Ficiao/Chess3D)
* Igra šaha u 3D-u za lokalno dva igrača
* Logika igre, potezi, upravljanje figurama
* Sistem spremanja igara, te ponovnog izvođenja snimaka

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/79TN8W0w-HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Unity simulacija robota za online bin skupljanje i sortiranje objekata](https://github.com/Ficiao/RobotBinSimulator)
* Simulacija robotske ruke s inverznom kinematikom
* Izrađena pokretna traka na kojoj dolaze objekti nasumičnih dimenzija i čvrstoća
* Čvrstoće:
* Žuta - ne može podnijeti niti jedan objekt iznad sebe 
* Narančasta - smije imati samo jedan objekt iznad sebe
* Crvena - može podnijeti koliko god objekata iznad sebe
* Robot ih skuplja s pokretne trake, te algoritmom optimizirano stavlja u kutiju kako bi na kraju popunjenost bila što veća 

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/l7qf6b1iuos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
</div>
  
  <div class="card" markdown="1">
## [Tetris za dva igrača](https://github.com/Ficiao/Tetris2P)
* Izrada tetris igre za lokalno 2 igrača u Unity-u
* Potrebne grafike sam izradio u programu Aseprite
* Sve mehanike su implementirane po službenim tetris standardima
* Trenutno u izradi online multiplayer verzija preko dedicated servera za lobby-e do 9 igrača, kao i pisanje custom dedicated servera preko TCP i UDP socketa

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xVry_iacmUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## Izrada levela za postojeći simulator leta dronom i novi način letenja
* Dizajniranje i izrada jungle levela za već postojeći flight simulator
* Dodavanja novog načina leta gdje dron održava visinu dok igrač ne zadaje nikakve naredbe, dok bi inače padao
* Modeliranje piramide, balvana i stijene u Blenderu, preostali asseti su preuzeti s Unity stora

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pRxmcFNseNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Vertical slice platformerske igre]([https://github.com/Ficiao/ObjectPoolingHorde](https://github.com/Ficiao/WiaP-Head-in-the-Clouds))
* Jednostavna platformerska igra
* Igra sadrži dvije razine: boss rush i platformsku razinu

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xnxrvbYkP3I?si=U9d1jjG1ETDVBLlB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ol4w9KW0r_0?si=_Z-_JXD6RVpH9J73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Izrada horde rush levela za vježbanje optimizacijskih patterna](https://github.com/Ficiao/ObjectPoolingHorde)
* Izrada horde rush levela
* Korištenje object pool patterna za optimizaciju stvaranja i uništavanja velikog broja objekata svake sekunde
* Broj na vrhu je broj ubijenih protivnika
* Asseti su preuzeti s Unity stora

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/R1tz9gZrJkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## 3D modeliranje i animiranje low poly viteza i oružja
* Dizajn low poly viteza, mača i štita
* Modeliranje viteza, mača i štita u Blenderu
* Animiranje viteza kombinacijom Blendera i Mixamo-a
* Importanje tih asseta u Unity i njihovo korištenje

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XrVs29Q25zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
</div>

<div id="contact" class="contact-bar fullbleed contact-inner">
<button type="button"
        class="linklike js-copy"
        data-copy="filipmtvn@gmail.com"
        aria-label="Copy email to clipboard">
  filipmtvn@gmail.com
</button>
<span class="copy-msg" aria-live="polite"></span>
    <a href="https://www.linkedin.com/in/filip-matanovi%C4%87-43503b235/" target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://github.com/Ficiao" target="_blank" rel="noopener">GitHub</a>
    <a href="cv_fm.pdf" target="_blank" rel="noopener">CV (PDF)</a>
</div>
