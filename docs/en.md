<a href="index.html" style="padding:6px 12px; border:1px solid #333; border-radius:4px; text-decoration:none;">🇭🇷 HR</a>
<a href="en.html" style="padding:6px 12px; border:1px solid #333; border-radius:4px; text-decoration:none;">🇬🇧 EN</a>
<br>
<br>
Disclaimer: Project headlines are also links to project git repositories. If the nature of the project doesn't require a repository or if I am for some other reasons not allowed to share the code publicly, the link will be missing.

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
  
.card{ border:1px solid #d0d7de; border-radius:10px; padding:14px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,.06); }
  
.card h3 { margin-top: 0; margin-bottom: 0; }

.video {
  position: relative; width: 100%;
  aspect-ratio: 16/9; 
  overflow: hidden; border-radius: 8px;
}
.video iframe {
  position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
}
</style>

<div class="projects fullbleed">

  <div class="card" markdown="1">
## [MMO vertical slice with custom netcode, client side prediction, server reconciliation and entity interpolation](https://github.com/Ficiao/KnjiznicarLinks)
* The client application of the game, as well as server applications for the login server, overworld server and instances were created
* Custom cummunication protocol via TCP and UDP was developed
* Game assets have been created
* The gameloop of movement in the world and entering PvP and PvE matches was created
* Match gameloop was created where the player combines words from random sixteen letters that are offered to him and does damage depending on the length of the word
* The game also features PvP and PvE leaderboards
* Laucher was made for the game, that keeps the game updated and shows patchnotes and version

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tTIj7t3eByw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Multiplayer third person shooter game with host-client architecture made using Photon Fusion 2 library](https://github.com/Ficiao/SpellFlinger)
* Multiplayer third person shooter game
* Necessary visual elements have been made for the project
* Game contains functionalities for creating and joining game rooms, choosing battle spells and choosing battle maps
* Game can be played in team mode of free for all
* Photon Fusion 2 has been used for network communication and object synchronization
* Instructions for the purposes of the laboratory exercises were created based on the project

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8XTLASs7C0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Chess game in 3D](https://github.com/Ficiao/Chess3D)
* Chess game in 3D for two local players
* Game logic, turn and controlling pieces
* System for saving and replaying games

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/79TN8W0w-HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Unity robot simulation for online bin picking and sorting](https://github.com/Ficiao/RobotBinSimulator)
* Simulation of inverse kinematics robot hand
* Created a conveyor belt that is bringing objects of random dimensions and hardness
* Hardnesses:
* Yellow - can't have any objects above it
* Orange - can only have one object above it
* Red -  can have any number of objects above it
* Robot collects the objects and using the algorithm stacks them in the box in an optimal way, so that the box is as full as possible in the end

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/l7qf6b1iuos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Two player Tetris](https://github.com/Ficiao/Tetris2P)
* Created a local 2 player Tetris game in Unity
* I have made necessary assets in Aseprite
* All game mechanics were implemented according to Tetris official standards
* Currently in development: online multiplayer version of the game for lobby's of up to 9 players over a dedicated server, as well as writing the costume dedicated server using TCP and UDP sockets

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xVry_iacmUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## Level creation for an existing drone flight simulator and a new flight mode
* Designing and developing a jungle level for an already existing drone flight simulator
* Adding new flight mode where drone keeps its altitude while the user isn't giving any inputs, as opposed to free falling
* Modeling the pyramid, the log and the rock in Blender, the rest of the assets were downloaded from Unity store

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pRxmcFNseNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Vertical slice of platformer game]([https://github.com/Ficiao/ObjectPoolingHorde](https://github.com/Ficiao/WiaP-Head-in-the-Clouds))
* Simple platformer game
* Game contains two level: boss rush and a platformer level

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xnxrvbYkP3I?si=U9d1jjG1ETDVBLlB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <br>
<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ol4w9KW0r_0?si=_Z-_JXD6RVpH9J73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## [Horde rush level development for practicing optimization patterns](https://github.com/Ficiao/ObjectPoolingHorde)
* Making a horde mode level
* Using object pool pattern to optimize many objects being destroyed and spawned each second
* Number at the top represents the number of killed enemies
* Assets are downloaded from Unity store

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/R1tz9gZrJkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  <div class="card" markdown="1">
## 3D modeling and animating a low poly knight and weapons
* Design of the low poly knight, shield and sword 
* Modeling the knight, shield and sword in Blender
* Animating the knight with Blender and Mixamo
* Importing it all to Unity 

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XrVs29Q25zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
</div>

