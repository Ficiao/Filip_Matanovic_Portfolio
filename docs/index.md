<a href="index.md" style="padding:6px 12px; border:1px solid #333; border-radius:4px; text-decoration:none;">🇭🇷 HR</a>
<a href="en.md" style="padding:6px 12px; border:1px solid #333; border-radius:4px; text-decoration:none;">🇬🇧 EN</a>
# Portfolio
Napomena: Naslovi projekata su ujedno i poveznice na git repositorije projekata. Ako priroda projekta ne zahtijeva repozitorij ili mi iz drugih razloga nije dopušteno javno dijeljenje koda, poveznice neće biti.

Disclaimer: Project headlines are also links to project git repositories. If the nature of the project doesn't require a repository or if I am for some other reasons not allowed to share the code publicly, the link will be missing.

# [Projekt 1: Prototip MMO igre sa vlastitim netcode-om, klijentskim predviđanjem, serverskom pomirdbom i interpolacijom objekata](https://github.com/Ficiao/KnjiznicarLinks)
* Napravljena je klijentska aplikacija igre, te serverske aplikacije za login server, overworld server i instance
* Izrađen je vlasititi protokol za komunikaciju preko TCP-a i UDP-a
* Izrađeni su asseti za igru
* Napravljen je gameloop kretanja u svijetu, te ulaska u PvP i PvE mečeve
* Napravljen je gamloop mečeva gdje igrač spaja riječi od pnuđenih šesnaest slučajnih slova, te čini štetu ovisno o duljini riječi
* Igra također sadrži PvP i PvE leaderboard-ove
* Za igru je napravljen launcher koji ju automatski drži ažuriranom, te prikazuje patch notes-e i verziju

# [Project 1: MMO vertical slice with custom netcode, client side prediction, server reconciliation and entity interpolation](https://github.com/Ficiao/KnjiznicarLinks)
* The client application of the game, as well as server applications for the login server, overworld server and instances were created
* Custom cummunication protocol via TCP and UDP was developed
* Game assets have been created
* The gameloop of movement in the world and entering PvP and PvE matches was created
* Match gameloop was created where the player combines words from random sixteen letters that are offered to him and does damage depending on the length of the word
* The game also features PvP and PvE leaderboards
* Laucher was made for the game, that keeps the game updated and shows patchnotes and version

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tTIj7t3eByw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>
<br/>

---
# [Projekt 2: Umrežena igra pucanja iz trećeg lica arhitekture domaćin-klijenti koja koristi Photon Fusion 2 biblioteku](https://github.com/Ficiao/SpellFlinger)
* Umrežena igra pucanja iz trećeg lica
* Izrađeni potrebni vizualni elementi
* Funkcionalnosti stvaranja i spajanja u sobe za igru, odabir borbene čarolije i mape za igru
* Mogućnosti timskog igranja ili svatko za sebe
* Mrežna komunikacija i sinkronizacija objekata ostvarena pomoću Photon Fusion 2 biblioteke
* Na temelju projekta izrađene upute za učenje za svrhe laboratorijske vježbe

# [Project 2: Multiplayer third person shooter game with host-client architecture made using Photon Fusion 2 library](https://github.com/Ficiao/SpellFlinger)
* Multiplayer third person shooter game
* Necessary visual elements have been made for the project
* Game contains functionalities for creating and joining game rooms, choosing battle spells and choosing battle maps
* Game can be played in team mode of free for all
* Photon Fusion 2 has been used for network communication and object synchronization
* Instructions for the purposes of the laboratory exercises were created based on the project

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8XTLASs7C0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>
<br/>

---
<br/>

# [Projekt 3: Igra šah u 3D-u](https://github.com/Ficiao/Chess3D)
* Igra šaha u 3D-u za lokalno dva igrača
* Logika igre, potezi, upravljanje figurama
* Sistem spremanja igara, te ponovnog izvođenja snimaka

# [Project 3: Chess game in 3D](https://github.com/Ficiao/Chess3D)
* Chess game in 3D for two local players
* Game logic, turn and controlling pieces
* System for saving and replaying games

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/79TN8W0w-HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </p>
<br/>

---
<br/>

# [Projekt 4: Unity simulacija robota za online bin skupljanje i sortiranje objekata](https://github.com/Ficiao/RobotBinSimulator)
* Simulacija robotske ruke s inverznom kinematikom
* Izrađena pokretna traka na kojoj dolaze objekti nasumičnih dimenzija i čvrstoća
* Čvrstoće:
* Žuta - ne može podnijeti niti jedan objekt iznad sebe 
* Narančasta - smije imati samo jedan objekt iznad sebe
* Crvena - može podnijeti koliko god objekata iznad sebe
* Robot ih skuplja s pokretne trake, te algoritmom optimizirano stavlja u kutiju kako bi na kraju popunjenost bila što veća 

# [Project 4: Unity robot simulation for online bin picking and sorting](https://github.com/Ficiao/RobotBinSimulator)
* Simulation of inverse kinematics robot hand
* Created a conveyor belt that is bringing objects of random dimensions and hardness
* Hardnesses:
* Yellow - can't have any objects above it
* Orange - can only have one object above it
* Red -  can have any number of objects above it
* Robot collects the objects and using the algorithm stacks them in the box in an optimal way, so that the box is as full as possible in the end

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/l7qf6b1iuos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </p>
<br/>

---
<br/>

# [Projekt 5: Tetris za dva igrača](https://github.com/Ficiao/Tetris2P)
* Izrada tetris igre za lokalno 2 igrača u Unity-u
* Potrebne grafike sam izradio u programu Aseprite
* Sve mehanike su implementirane po službenim tetris standardima
* Trenutno u izradi online multiplayer verzija preko dedicated servera za lobby-e do 9 igrača, kao i pisanje custom dedicated servera preko TCP i UDP socketa

# [Project 5: Two player Tetris](https://github.com/Ficiao/Tetris2P)
* Created a local 2 player Tetris game in Unity
* I have made necessary assets in Aseprite
* All game mechanics were implemented according to Tetris official standards
* Currently in development: online multiplayer version of the game for lobby's of up to 9 players over a dedicated server, as well as writing the costume dedicated server using TCP and UDP sockets

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xVry_iacmUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

<br/>

---
<br/>

# Projekt 6: Izrada levela za postojeći simulator leta dronom i novi način letenja
* Dizajniranje i izrada jungle levela za već postojeći flight simulator
* Dodavanja novog načina leta gdje dron održava visinu dok igrač ne zadaje nikakve naredbe, dok bi inače padao
* Modeliranje piramide, balvana i stijene u Blenderu, preostali asseti su preuzeti s Unity stora

# Project 6: Level creation for an existing drone flight simulator and a new flight mode
* Designing and developing a jungle level for an already existing drone flight simulator
* Adding new flight mode where drone keeps its altitude while the user isn't giving any inputs, as opposed to free falling
* Modeling the pyramid, the log and the rock in Blender, the rest of the assets were downloaded from Unity store

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pRxmcFNseNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
<br/>

---
<br/>

# [Projekt 7: Vertical slice platformerske igre]([https://github.com/Ficiao/ObjectPoolingHorde](https://github.com/Ficiao/WiaP-Head-in-the-Clouds))
* Jednostavna platformerska igra
* Igra sadrži dvije razine: boss rush i platformsku razinu

# [Project 7: Vertical slice of platformer game]([https://github.com/Ficiao/ObjectPoolingHorde](https://github.com/Ficiao/WiaP-Head-in-the-Clouds))
* Simple platformer game
* Game contains two level: boss rush and a platformer level

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xnxrvbYkP3I?si=U9d1jjG1ETDVBLlB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ol4w9KW0r_0?si=_Z-_JXD6RVpH9J73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
<br/>

---
<br/>

# [Projekt 8: Izrada horde rush levela za vježbanje optimizacijskih patterna](https://github.com/Ficiao/ObjectPoolingHorde)
* Izrada horde rush levela
* Korištenje object pool patterna za optimizaciju stvaranja i uništavanja velikog broja objekata svake sekunde
* Broj na vrhu je broj ubijenih protivnika
* Asseti su preuzeti s Unity stora

# [Project 8: Horde rush level development for practicing optimization patterns](https://github.com/Ficiao/ObjectPoolingHorde)
* Making a horde mode level
* Using object pool pattern to optimize many objects being destroyed and spawned each second
* Number at the top represents the number of killed enemies
* Assets are downloaded from Unity store

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/R1tz9gZrJkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
<br/>

---
<br/>

# Projekt 9: 3D modeliranje i animiranje low poly viteza i oružja
* Dizajn low poly viteza, mača i štita
* Modeliranje viteza, mača i štita u Blenderu
* Animiranje viteza kombinacijom Blendera i Mixamo-a
* Importanje tih asseta u Unity i njihovo korištenje

# Project 9: 3D modeling and animating a low poly knight and weapons
* Design of the low poly knight, shield and sword 
* Modeling the knight, shield and sword in Blender
* Animating the knight with Blender and Mixamo
* Importing it all to Unity 

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XrVs29Q25zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
<br/>

---
<br/>
