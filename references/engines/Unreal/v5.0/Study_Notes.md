# Unreal Engine 5.0 Beginner Notes
*Taken During Self Study*

Personal notes around unreal (dislaimer I'm just starting to look at Unreal v5.0 2022): I had heard that Unreal was more powerful but more unweildy than Unity (mostly from a conversation with a professor at GMU game design
graduate program when I thought about applying so I took it as gospel), but that viewpoint has aged between 2013 and now. 

C++ remains a more difficult language to learn than JS or C#, but Unreal has taken strides to improve its accessibility to game developers, and their roots as the core for a commercial arena FPS game do provide unreal with some advantages in terms of reducing the indie dev's overhead towards getting a professional look to their game and avoiding performance issues. 

A lot of the unity and unreal editor core commands and GUI features have significant overlap, there are just different names for different things at some level. What differs (aside from Unreal's massive hard disk footprint and in some cases higher baseline hardware requirements) are things like overwhelm possibility, like in unity your baseline footprint is smaller and then you have all the plugins and such to add, then nuances like Unity's serialization strategies, how both engines handle patterns you might use to avoid having to have singleton game manager objects or objects that live across levels, and then there is the depth and difference to core engine capabilities like the asset pipeline, the physics. My hot take is, the deeper you go, the more the differences matter, the closer to a larger scale commercial game you get to the more the differences matter. I'm switching to unreal to learn, but any small projects and game jams I've done so far have been in unity. 

## Blueprints v. C++ Development

Blueprints are a cool low code interface Unreal has built on top of its engine, specifically for use by Unreal. Once you get over the initial confusion of:
"hey 

Pros for Blueprints
* Blueprints are good for rapid prototyping, make changes and run again fast
* low code
* access to a lot of prebuilt functionality
* developed on top of Unreal, not a generic scripting language
* you don't have to know as much about game dev specific codery

Pros for C++
* gets more concise
* I mean, it's C++
* very fast at runtime
* some features of unreal only work with C++
* as projects scale you don't have so much messy WYSIWYG

But truth is both should be used in tandem, even for published games. 

a typical way to use these two methods together is to maybe prototype with blueprints that call third party libraries, then write libraries of your own in C++ that wrap or extend the Unreal core libraries, then eventually have Blueprints be a cool visual scripting language that calls down to both your custom C++ libraries and the Unreal core libraries. On a really large project or team maybe eventually you dispense with blueprints altogether.

## Editor Quick Tips

* if you are used to Unity there is quite a bit of overlap actually now.
* Movement: 
    * moving around in the editor you can press down right mouse button and then you pretty much have
    an FPS camera with w,a,s,d keys for walking and then q, e keys for vertical movement, and you look around with mouse
    * using left or middle click will constrain how the mouse movement affects your view through the scene using that same w,a,s,d,q,e scheme
    * if you have a mouse wheel, you can use it to tune how fast your camera moves when you press the keys
* Customization: 
    * all the panels similar to unity, you start with a project outliner for all your 'actors' (unreal speak for unities 'game objects' or the more generic 'entities') and a Viewport which is your rendered 'level' (unity calls them 'scenes') preview.
    * if you delete or move something you can always go to Window > Load Layout > Default Editor Layout to recover. can likely save custom layouts you like too.
* Ctrl + Spacebar opens up the content drawer, which like Unity has the directory structure with all the 'Content' (unity calls this assets)
    * if you want to export your game as a zip but exclude all the build files, in Unreal there is an option for this File > Zip Project that knows what to leave out. How clever.
* the widget ribbon bars top have a lot of what you need. 
    * you can add actors to the project with the icon that looks like a cube with a plus sign
    * inside the top of the viewport you see buttons that look like a cursor, four arrow connected at their tails in the middle pointing outward, two curved arrows chasing each other's tails and a dot with an arrow pointing out of it. These are the grab, transform, rotate, scale controls and when you click them you get different tools on your selected actor. the hotkeys for these are useful because you use them all the time and they are the q, w, e, and r keys (sorry if you are a dvorak person, sure you can remap)

## Progremming With Blueprints Basics

* best way to start for this is to create a new project and select blueprints as the type instead of C++
* when your editor opens up, you can open up the Blueprint view for the editor by clicking the graph looking image next to the add actor button in the top ribbon and selecting 'Open Level Blueprint'
* the Event Graph is the grid that opens up when you are viewing the level blueprint. 
* you can right clidck on the event graph and get a context menu with a bunch of pre built functionality for bluedprints. 
* Nodes
    * selecting from that context menu will usually add a node to your event graph, this is precreated functionality
    * there are different types of nodes, on type is the event node which is a node that will trigger when an event happens
    * you can think of blueprints as connecting together these nodes in like a circuit so that execution flow triggers events that fire nodes and result in funcitonality
    * you associate nodes to each other with pins, those are the arrows that are on the left and right side of nodes
    * the wires that are created between pins are called "connections"
    * productivity tip, you don't have to right click to create new nodes if you are going to connect them to an existing one, just click and drag off of that node's pin, when you release it brings up tha tcontext menu, when you create the nodes will already be connected.

