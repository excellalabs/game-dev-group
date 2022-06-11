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
    * you associate nodes to each other with Execution pins which specify when a node should be run and what it connects to, those are the arrows that are on the left and right side of nodes
    * the wires that are created between pins are called "connections"
    * productivity tip, you don't have to right click to create new nodes if you are going to connect them to an existing one, just click and drag off of that node's pin, when you release it brings up tha tcontext menu, when you create the nodes will already be connected.
    * There are execution pins at the top of nodes principally for wiring nodes together, but there are also data pins which correspond to the data that is input to or produced from a node.
    * alt + click on a pin that is connected will sever the link between nodes. 
* in the consext menu that lets you pick nodes, there is a checkbox for 'Context Sensitive' This is important because if you are getting to the context menu from an existing node's execution pins, having this box checked means the options the context menu provides for branching nodes will be restricted to those using the node you branched off of.
* just because you have data pins hooked up between nodes, that doesn't mean one will trigger the other, you have to hook up their execution pins as well.


### Connection between blueprints and OO coding
    * you can think of Actors as different types of objects that  Unreal tracks and can be used in levels
    * nodes are the methods on those objects, so functions within their scope
    * other type of object that Unreal has more or less baked in is components. Unreal uses the component object model, so Actor objects have sets of component objects that allow data and behavior encapsulated into these components to be modularly added to the actor. 
    * components are linked to the actor through references, so memory is dynamically allocated to hold portions of these larger more complex objects when it is necessary
    * When you use blueprints to get a reference to a node in your scene (right clik the actor in the viewport and then go to level blueprint and right click and click 'get reference to xx'), that is how runtime will know to go to that address in memory and retrieve the reference to that object you selected, then you can get things off of it using pins and connectors.
    * Classes and Instances
        * in Blueprints you can create classes that share state and behavior. However, instances of blueprint classes are linked and share property values by default. It is important to note that while instances can diverge in the values of their state, if you change the state at the class level in a blueprint editor window, it will set the value for all instances of the BluePrint.
        * going back to unity a little, if you are familiar with prefabs for game objects that analogy probably holds up for a while with the concept of Blueprint Classes, it is a reusable entity with set behavior and default state
        * you do this by clicking the blueprint icon in the detail tab of the outliner panel in your main editor with some actor selected. This will create a new window that is like the level blueprint but it also contains a viewport screen since the actor blueprint has a corresponding 3d model probably. 
        * blueprint classes can be accessed and modified, but all clones at the class level are linked, so if you change some of their properties state it will update across all clones of that blueprint class
        * there is also a components panel in the actor blueprint editor window, and it can show you the same component properties that you'd find if you selected that actor in the main editor window and then went into the outliner and looked at the details.


### Spawning Actors And Transforming Them
    * SpawnActor node allows you to create new actors while the game is running
    * Spawn Actor node has 3 data inputs which are all relating to transforms that can be applied to location, rotation and scale. 

## Simulating Physics For Actors
    * in the outliner view, under the details tab, there are actor properties and components. there are several buttons available to toggle through actor properties
    * one of those buttons is Physics, and within the list that appears under Physics there is a checkbox to 'Simulate Physics', checking that turn on physics simulation for that object
    * other useful basic properties in this view, 'Enable Gravity' and Mass, you can make it heavier or lighter. 
    * careful to make sure that all actors that you want to behave like part of the physical world have physics enabled, or you might see some intersting behavior (objects moving through others and bouncing back out, for example).
    * you can get the static mesh component for actors inside a blueprint and then get some of the properties off of these copmonents directly and change them based on events. 
        * example, you can get the static mesh component for a cube object that has mass of 100.0 and then you can add a node for 'add impulse' to apply immediate force to the object corresponding to some vector in (x, y, z) coordinate space. There is also a box you can check on the 'add impulse' node that allows you to directly change the velocity, called 'Vel Change'




