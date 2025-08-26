<a href="index.html" style="padding:6px 12px; border:1px solid #333; border-radius:4px; text-decoration:none;">🇭🇷 HR</a>
<a href="en.html" style="padding:6px 12px; border:1px solid #333; border-radius:4px; text-decoration:none;">🇬🇧 EN</a>
# Portfolio
Napomena: Naslovi projekata su ujedno i poveznice na git repositorije projekata. Ako priroda projekta ne zahtijeva repozitorij ili mi iz drugih razloga nije dopušteno javno dijeljenje koda, poveznice neće biti.

<style>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 1rem 0;
}

.card {
  border: 1px solid #d0d7de;
  border-radius: 10px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.06);
}

.card h3 { margin-top: 0; }
.card ul { margin: .5rem 0 0 1.25rem; }

.video {
  position: relative; width: 100%;
  aspect-ratio: 16/9; 
  overflow: hidden; border-radius: 8px;
}
.video iframe {
  position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
}
</style>

  <div class="card" markdown="1">
# [Projekt 1: Prototip MMO igre sa vlastitim netcode-om, klijentskim predviđanjem, serverskom pomirdbom i interpolacijom objekata](https://github.com/Ficiao/KnjiznicarLinks)
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
# [Projekt 2: Umrežena igra pucanja iz trećeg lica arhitekture domaćin-klijenti koja koristi Photon Fusion 2 biblioteku](https://github.com/Ficiao/SpellFlinger)
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
# [Projekt 3: Igra šah u 3D-u](https://github.com/Ficiao/Chess3D)
* Igra šaha u 3D-u za lokalno dva igrača
* Logika igre, potezi, upravljanje figurama
* Sistem spremanja igara, te ponovnog izvođenja snimaka

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/79TN8W0w-HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
# [Projekt 4: Unity simulacija robota za online bin skupljanje i sortiranje objekata](https://github.com/Ficiao/RobotBinSimulator)
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
