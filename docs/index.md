# Portfolio
Napomena: Naslovi projekata su ujedno i poveznice na git repository-e projekata. Ako priroda projekta ne zahtijeva repozitorij ili mi iz drugih razloga nije dopušteno javno dijeljenje koda, poveznice neće biti.

Disclaimer: Project headlines are also links to project git repositories. If the nature of the project doesn't require a repository or if I am for some other reasons not allowed to share the code publicly, the link will be missing.

# [Projekt 1: Tetris za dva igrača](https://github.com/Ficiao/Tetris2P)
* Izrada tetris igre za lokalno 2 igrača u Unity-u
* Potrebne grafike sam izradio u programu Aseprite
* Sve mehanike su implementirane po službenim tetris standardima
* Trenutno u izradi online multiplayer verzija preko dedicated servera za lobby-e do 9 igrača, kao i pisanje custom dedicated servera preko TCP i UDP socketa

# [Project 1: Two player Tetris](https://github.com/Ficiao/Tetris2P)
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

# [Projekt 2: Unity simulacija robota za online bin skupljanje i sortiranje objekata](https://github.com/Ficiao/RobotBinSimulator)
* Simulacija robotske ruke s inverznom kinematikom
* Izrađena pokretna traka na kojoj dolaze objekti nasumičnih dimenzija i čvrstoća
* Čvrstoće:
* Žuta - ne može podnijeti niti jedan objekt iznad sebe 
* Narančasta - smije imati samo jedan objekt iznad sebe
* Crvena - može podnijeti koliko god objekata iznad sebe
* Robot ih skuplja s pokretne trake, te algoritmom optimizirano stavlja u kutiju kako bi na kraju popunjenost bila što veća 

# [Project 2: Unity robot simulation for online bin picking and sorting](https://github.com/Ficiao/RobotBinSimulator)
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

# [Projekt 3: Multiplayer lobby tech demo arhitekture klijent-server](https://github.com/Ficiao/ClientServerArchitectureUnity)
* Napravljen je dedicated server preko TCP  i UDP socketa s custom serijalizacijom korištenjem smjernica
* Napravljene su serverske aplikacije u obliku .NET aplikacije i Unity server aplikacije
* Napravljena je klijentska igra u Unity-u koja se spaja na server te stvara igrača koji se može kretati, pucati i skupljati iteme

# [Project 3: Multiplayer lobby tech demo using client-server architecture](https://github.com/Ficiao/ClientServerArchitectureUnity)
* Created dedicated server using TCP and UDP sockets with custom serialization using a guide
* Created server versions as .NET application and Unity server application
* Created a client Unity application that connects to the server, spawns a player that can move, shoot and pick up items

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yRZUbu-rByM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
<br/>

---
<br/>

# Projekt 4: Izrada levela za postojeći simulator leta dronom i novi način letenja
* Dizajniranje i izrada jungle levela za već postojeći flight simulator
* Dodavanja novog načina leta gdje dron održava visinu dok igrač ne zadaje nikakve naredbe, dok bi inače padao
* Modeliranje piramide, balvana i stijene u Blenderu, preostali asseti su preuzeti s Unity stora

# Project 4: Level creation for an existing drone flight simulator and a new flight mode
* Designing and developing a jungle level for an already existing drone flight simulator
* Adding new flight mode where drone keeps its altitude while the user isn't giving any inputs, as opposed to free falling
* Modeling the pyramid, the log and the rock in Blender, the rest of the assets were downloaded from Unity store

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pRxmcFNseNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
<br/>

---
<br/>

# [Projekt 5: Izrada horde rush levela za vježbanje optimizacijskih patterna](https://github.com/Ficiao/ObjectPoolingHorde)
* Izrada horde rush levela
* Korištenje object pool patterna za optimizaciju stvaranja i uništavanja velikog broja objekata svake sekunde
* Broj na vrhu je broj ubijenih protivnika
* Asseti su preuzeti s Unity stora

# [Project 5: Horde rush level development for practicing optimization patterns](https://github.com/Ficiao/ObjectPoolingHorde)
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

# Projekt 6: 3D modeliranje i animiranje low poly viteza i oružja
* Dizajn low poly viteza, mača i štita
* Modeliranje viteza, mača i štita u Blenderu
* Animiranje viteza kombinacijom Blendera i Mixamo-a
* Importanje tih asseta u Unity i njihovo korištenje

# Project 6: 3D modeling and animating a low poly knight and weapons
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
