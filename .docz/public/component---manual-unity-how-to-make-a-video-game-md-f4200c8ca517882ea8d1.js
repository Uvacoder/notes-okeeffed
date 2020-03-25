(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{"3TZ1":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Unity/How-To-Make-A-Video-Game.md"}});var l={_frontmatter:r},s=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"how-to-make-a-video-game"},"How to make a video game"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#how-to-make-a-video-game"}),"How to make a video game")," - ",Object(a.b)("a",o({parentName:"li"},{href:"#what-is-a-game-engine"}),"What is a game engine?"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#part-2"}),"Part 2"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#unity-interface"}),"Unity Interface"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#prefabs"}),"Prefabs")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#setup-the-project"}),"Setup the project")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#navigating-the-scene-view"}),"Navigating the Scene View")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#position-the-camera"}),"Position the camera")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#image-effects-and-asset-stores"}),"Image effects and asset stores")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#programming-games"}),"Programming Games"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#programming-with-c-with-unity"}),"Programming with C# with Unity")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#gather-player-input"}),"Gather Player Input")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#moving-a-player-with-animation"}),"Moving a player with animation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#quaternions"}),"Quaternions"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#target-rotation"}),"Target rotation")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#making-a-follow-camera"}),"Making a follow camera")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#section-3"}),"Section 3"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#adding-the-flies-to-the-swamp"}),"Adding the flies to the swamp")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#adding-the-fly-pickup"}),"Adding the Fly Pickup"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#pickup-particles"}),"Pickup Particles")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#creating-the-enemy-in-the-game"}),"Creating the enemy in the game")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#monitor-player-health"}),"Monitor Player Health")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#managing-the-game-state"}),"Managing the game state")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#adding-audio"}),"Adding Audio"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#game-audio"}),"Game audio")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#controlling-sounds-on-game-objects"}),"Controlling sounds on game objects")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#audio-mixing"}),"Audio mixing")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#exporting-the-game"}),"Exporting the game"))))))),Object(a.b)("p",null,"How are games made?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Game designers"),Object(a.b)("li",{parentName:"ul"},"Game artists"),Object(a.b)("li",{parentName:"ul"},"Game developers")),Object(a.b)("p",null,"These roles can be between one or thousands of people."),Object(a.b)("p",null,"Game artists deal with what you see and hear in the game."),Object(a.b)("h3",{id:"what-is-a-game-engine"},"What is a game engine?"),Object(a.b)("p",null,"Game engines help deal with things like the physics and rendering graphics."),Object(a.b)("p",null,"A game engine is a framework for building games that helps coordinate things like assets and gives you all the tools you need to start coding."),Object(a.b)("p",null,"A game engine is not a 3D art engine."),Object(a.b)("p",null,"We are Unity as it is easier to learn when you are just getting started."),Object(a.b)("h2",{id:"part-2"},"Part 2"),Object(a.b)("h3",{id:"unity-interface"},"Unity Interface"),Object(a.b)("p",null,"Create a ",Object(a.b)("inlineCode",{parentName:"p"},"_Scenes")," folder."),Object(a.b)("p",null,"Game assets are ",Object(a.b)("inlineCode",{parentName:"p"},"a piece of media for the game"),". This could be sounds, scripts or models etc."),Object(a.b)("h4",{id:"prefabs"},"Prefabs"),Object(a.b)("p",null,"Stores several objects together. An example ",Object(a.b)("inlineCode",{parentName:"p"},"prefab")," is the frog which contains the 3d model, the texture and the animation together."),Object(a.b)("h3",{id:"setup-the-project"},"Setup the project"),Object(a.b)("p",null,"Games use ",Object(a.b)("inlineCode",{parentName:"p"},"real time rendering")," where it is drawn at the frame rate. Generally you want to aim for 60fps or higher. This will make is look as smooth as possible."),Object(a.b)("p",null,"We can go to ",Object(a.b)("inlineCode",{parentName:"p"},"Window > Lighting > Settings")," to adjust things about how the scene is lit."),Object(a.b)("p",null,"To adjust the player settings go to ",Object(a.b)("inlineCode",{parentName:"p"},"Edit > Project Settings > Player"),"."),Object(a.b)("p",null,"For quality, go to ",Object(a.b)("inlineCode",{parentName:"p"},"Edit > Project Settings > Quality"),"."),Object(a.b)("h3",{id:"navigating-the-scene-view"},"Navigating the Scene View"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"environment")," prefab links a bunch of Maya elements and groups them as a prefab."),Object(a.b)("p",null,"Our environment prefab already has a light associated with it. Ensure after adding that you re-generate the light in the settings."),Object(a.b)("p",null,"Anything with a green square is outlining a game object."),Object(a.b)("p",null,"After selecting an object, you can use the 3d axis to change the transform of the axis."),Object(a.b)("p",null,"On the top left, we can change the tools from position to rotation etc and with similar methods to before, we can rotate the axis."),Object(a.b)("p",null,"We can also just use the ",Object(a.b)("inlineCode",{parentName:"p"},"qwer")," keys to change between tools."),Object(a.b)("p",null,"We can also switch between ",Object(a.b)("inlineCode",{parentName:"p"},"global")," and ",Object(a.b)("inlineCode",{parentName:"p"},"local")," space to help move things around."),Object(a.b)("h3",{id:"position-the-camera"},"Position the camera"),Object(a.b)("p",null,"The scenes looks good so far, but it we need to update the camera."),Object(a.b)("p",null,"At the top of the scene window, we have ",Object(a.b)("inlineCode",{parentName:"p"},"scene"),", ",Object(a.b)("inlineCode",{parentName:"p"},"game")," tabs. If we select ",Object(a.b)("inlineCode",{parentName:"p"},"game"),", we get to see how the game will look when we play it. We can either write code to control to camera or change the transform."),Object(a.b)("h3",{id:"image-effects-and-asset-stores"},"Image effects and asset stores"),Object(a.b)("p",null,"An image effect can change things like colours etc."),Object(a.b)("p",null,"Once we click on the asset store, we can build or share models to use."),Object(a.b)("p",null,"Unity is component based so we can add things that way. We can now create a post processing profile to use."),Object(a.b)("h2",{id:"programming-games"},"Programming Games"),Object(a.b)("h3",{id:"programming-with-c-with-unity"},"Programming with C# with Unity"),Object(a.b)("p",null,"JavaScript is also able to be used, but far less adopted by the Unity commmunity."),Object(a.b)("p",null,"After creating a file, you will run into the ",Object(a.b)("inlineCode",{parentName:"p"},"Start")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Update")," methods that are able to run at each frame so that we can edit the code to do specific things."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PlayerMovement : MonoBehaviour {\n    private Animator playerAnimator;\n    private float moveHorizontal;\n    private float moveVertical;\n    private Vector3 movement;\n\n    // Use this for initialization\n    void Start () {\n\n    }\n\n    // Update is called once per frame\n    void Update () {\n\n    }\n}\n")),Object(a.b)("p",null,"Public and private are differing ",Object(a.b)("inlineCode",{parentName:"p"},"accessibility levels"),". The second keyword in a declaration is the ",Object(a.b)("inlineCode",{parentName:"p"},"type"),"."),Object(a.b)("h3",{id:"gather-player-input"},"Gather Player Input"),Object(a.b)("p",null,"We need to record which button they are pressing in each frame."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PlayerMovement : MonoBehaviour {\n    private Animator playerAnimator;\n    private float moveHorizontal;\n    private float moveVertical;\n    private Vector3 movement;\n\n    // Use this for initialization\n    void Start () {\n\n    }\n\n    // Update is called once per frame\n    void Update () {\n        moveHorizontal = Input.GetAxisRaw("Horizontal");\n        moveVertical = Input.GetAxisRaw("Vertical");\n\n        movement = new Vector3(moveHorizontal, 0.0f, moveVertical);\n    }\n}\n')),Object(a.b)("h3",{id:"moving-a-player-with-animation"},"Moving a player with animation"),Object(a.b)("p",null,"After adding the script to update the script, we need to animate the frog."),Object(a.b)("p",null,"The animator components with now be on the inspector for the player."),Object(a.b)("p",null,"We will use the playerAnimator to access to Animator component."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PlayerMovement : MonoBehaviour {\n    private Animator playerAnimator;\n    private float moveHorizontal;\n    private float moveVertical;\n    private Vector3 movement;\n\n    // Use this for initialization\n    void Start () {\n        // special method to get the "Animator" component\n        playerAnimator = GetComponent<Animator>();\n    }\n\n    // Update is called once per frame\n    void Update () {\n        moveHorizontal = Input.GetAxisRaw("Horizontal");\n        moveVertical = Input.GetAxisRaw("Vertical");\n\n        movement = new Vector3(moveHorizontal, 0.0f, moveVertical);\n    }\n\n    // this is code that runs after the `update` method\n    // this method doesn\'t run that often without\n    // significant gameplay slow down\n    void FixedUpdate() {\n        if (movement != Vector3.zero) {\n            playerAnimator.SetFloat("Speed", 3f);\n        } else {\n            playerAnimator.SetFloat("Speed", 0);\n        }\n    }\n}\n')),Object(a.b)("p",null,"So far we haven't told the frog how to change direction or to have the camera follow the movement."),Object(a.b)("h3",{id:"quaternions"},"Quaternions"),Object(a.b)("p",null,"Behind the scenes, Unity stores the rotational values as ",Object(a.b)("inlineCode",{parentName:"p"},"Quaternions"),". Most games ending will use these to solve rotational issues."),Object(a.b)("h4",{id:"target-rotation"},"Target rotation"),Object(a.b)("p",null,"The rigid body and box collider is how the objects like ",Object(a.b)("inlineCode",{parentName:"p"},"Player")," can interact with the physics and turning."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PlayerMovement : MonoBehaviour {\n    private Animator playerAnimator;\n    private float moveHorizontal;\n    private float moveVertical;\n    private Vector3 movement;\n    private float turningSpeed = 20f;\n    private Rigidbody playerRigidBody;\n\n    // Use this for initialization\n    void Start () {\n        // Gather components from the player object\n        // special method to get the "Animator" component\n        playerAnimator = GetComponent<Animator> ();\n        playerRigidBody = GetComponent<Rigidbody> ();\n    }\n\n    // Update is called once per frame\n    void Update () {\n        moveHorizontal = Input.GetAxisRaw ("Horizontal");\n        moveVertical = Input.GetAxisRaw ("Vertical");\n\n        movement = new Vector3(moveHorizontal, 0.0f, moveVertical);\n    }\n\n    // this is code that runs after the `update` method\n    // this method doesn\'t run that often without\n    // significant gameplay slow down\n    void FixedUpdate() {\n        if (movement != Vector3.zero) {\n            playerAnimator.SetFloat ("Speed", 3f);\n        } else {\n            playerAnimator.SetFloat ("Speed", 0);\n        }\n    }\n}\n')),Object(a.b)("p",null,"We need to perform a ",Object(a.b)("inlineCode",{parentName:"p"},"Lerp")," to change the variable from one to another over time."),Object(a.b)("p",null,"Unity also doesn't save any change settings when you are playing the game."),Object(a.b)("h3",{id:"making-a-follow-camera"},"Making a follow camera"),Object(a.b)("p",null,"This will have the camera to always follow the parent."),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"[SerializeField]")," to expose fields from the code into the inspector."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class FollowCamera : MonoBehaviour {\n\n    [SerializeField]\n    private Transform player;\n    [SerializeField]\n    private Vector3 offset;\n    private float cameraFollowSpeed = 5f;\n\n    // Update is called once per frame\n    void Update () {\n        Vector3 newPosition = player.position + offset;\n\n        // Smooth transition\n        transform.position = Vector3.Lerp(transform.position, newPosition, cameraFollowSpeed + Time.deltaTime);\n    }\n}\n")),Object(a.b)("h2",{id:"section-3"},"Section 3"),Object(a.b)("h3",{id:"adding-the-flies-to-the-swamp"},"Adding the flies to the swamp"),Object(a.b)("p",null,"Let's add an objective to the game (pickup)."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class FlyMovement : MonoBehaviour {\n    [SerializeField]\n    private Transform center;\n    private float flySpeed;\n\n    // Use this for initialization\n    void Start () {\n        flySpeed = Random.Range (300f, 700f);\n    }\n\n    // Update is called once per frame\n    void Update () {\n        transform.RotateAround (center.position, Vector3.up, flySpeed * Time.deltaTime);\n    }\n}\n")),Object(a.b)("h3",{id:"adding-the-fly-pickup"},"Adding the Fly Pickup"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class FlyPickup : MonoBehaviour {\n    // Trigger\n    void OnTriggerEnter(Collider other) {\n        // if collider is the player, execute...\n        if (other.CompareTag ("Player")) {\n            Destroy (gameObject);\n        }\n    }\n}\n')),Object(a.b)("h4",{id:"pickup-particles"},"Pickup Particles"),Object(a.b)("p",null,"Particle systems are a game object which generates multiple systems."),Object(a.b)("p",null,"As for their destruction:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PickupParticlesDestruction : MonoBehaviour {\n\n    // Use this for initialization\n    void Start () {\n        Destroy (gameObject, 5f);\n    }\n}\n")),Object(a.b)("p",null,"You can also create scripts that aren't attached to a 3d model in the scene view."),Object(a.b)("p",null,"You can create an empty object from the left hand sidebar. Reset the transform and rename."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'// Fly Spawner\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class FlyPickup : MonoBehaviour {\n    [SerializeField]\n    private GameObject pickupPrefab;\n\n    // Trigger\n    void OnTriggerEnter(Collider other) {\n        // if collider is the player, execute...\n        if (other.CompareTag ("Player")) {\n            // add pickup particles\n            // Quaternion.identity returns no rotation\n            Instantiate (pickupPrefab, transform.position, Quaternion.identity);\n            // Decrement total flies\n            FlySpawner.totalFlies--;\n            Destroy (gameObject);\n        }\n    }\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'// Fly Pickup\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class FlyPickup : MonoBehaviour {\n    [SerializeField]\n    private GameObject pickupPrefab;\n\n    // Trigger\n    void OnTriggerEnter(Collider other) {\n        // if collider is the player, execute...\n        if (other.CompareTag ("Player")) {\n            // add pickup particles\n            // Quaternion.identity returns no rotation\n            Instantiate (pickupPrefab, transform.position, Quaternion.identity);\n            // Decrement total flies\n            FlySpawner.totalFlies--;\n            Destroy (gameObject);\n        }\n    }\n}\n')),Object(a.b)("h3",{id:"creating-the-enemy-in-the-game"},"Creating the enemy in the game"),Object(a.b)("p",null,"The bird game object needs to know where the player is. It's known as path finding."),Object(a.b)("p",null,"Unity makes path finding very easy."),Object(a.b)("p",null,"With the ",Object(a.b)("inlineCode",{parentName:"p"},"Nav Mesh Agent"),", you can set the following for the bird:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"Speed: 5\nAngular Speed: 720\nStopping Distance: 5\nRadius: 1\nHeight: 4\n")),Object(a.b)("p",null,"We now need to create a ",Object(a.b)("inlineCode",{parentName:"p"},"Nav Mesh"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"NavMeshAgent"),' allows us to set a destination target that the "enemy" can follow. It is a component that can be attached to a game object so that it can interact with the ',Object(a.b)("inlineCode",{parentName:"p"},"NavMesh"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),"// BirdMovement.cs\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class BirdMovement : MonoBehaviour {\n\n    [SerializeField]\n    private Transform target;\n    private UnityEngine.AI.NavMeshAgent birdAgent;\n    private Animator birdAnimator;\n\n    // Use this for initialization\n    void Start () {\n        birdAgent = GetComponent<UnityEngine.AI.NavMeshAgent> ();\n        birdAnimator = GetComponent<Animator> ();\n    }\n\n    // Update is called once per frame\n    void Update () {\n        // Set the bird's destination\n        birdAgent.SetDestination (target.position);\n\n        // Measure the magnitude of the NavMeshAgent's velocity\n        float speed = birdAgent.velocity.magnitude;\n\n        // Pass the velocity to the animator component\n        birdAnimator.SetFloat(\"Speed\", speed);\n    }\n}\n")),Object(a.b)("h3",{id:"monitor-player-health"},"Monitor Player Health"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PlayerHealth : MonoBehaviour {\n    public bool alive;\n    [SerializeField]\n    private GameObject pickupPrefab;\n    // Use this for initialization\n    void Start () {\n        alive = true;\n    }\n\n    void OnTriggerEnter(Collider other) {\n        if (other.CompareTag ("Enemy") && alive == true) {\n            alive = false;\n\n            // Create the pickup particles\n            Instantiate(pickupPrefab, transform.position, Quaternion.identity);\n        }\n    }\n}\n')),Object(a.b)("h3",{id:"managing-the-game-state"},"Managing the game state"),Object(a.b)("p",null,"How do we know when the game has started and when we need to restart?"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.UI;\nusing UnityEngine.SceneManagement;\n\npublic class GameState : MonoBehaviour {\n    private bool gameStarted = false;\n    [SerializeField]\n    private Text gameStateText;\n    [SerializeField]\n    private GameObject player;\n    [SerializeField]\n    private BirdMovement birdMovement;\n    [SerializeField]\n    private FollowCamera followCamera;\n    private float restartDelay = 3f;\n    private float restartTimer;\n    private PlayerMovement playerMovement;\n    private PlayerHealth playerHealth;\n\n    // Use this for initialization\n    void Start () {\n        Cursor.visible = false;\n\n        playerMovement = player.GetComponent<PlayerMovement> ();\n        playerHealth = player.GetComponent<PlayerHealth> ();\n\n        // do not allow player to move before the game\n        playerMovement.enabled = false;\n        // prevent bird\n        birdMovement.enabled = false;\n        // prevent follow camear\n        followCamera.enabled = false;\n    }\n\n    // Update is called once per frame\n    void Update () {\n        // If the game is not sarted and the player presses the space bar...\n        if (gameStarted == false && Input.GetKeyUp(KeyCode.Space)) {\n            // ... start the game\n            StartGame();\n        }\n\n        // If player is no longer alive ...\n        if (playerHealth.alive == false) {\n            // ...end the game\n            EndGame();\n\n            // ... increment timer to count up to restarting...\n            restartTimer = restartTimer + Time.deltaTime;\n\n            // ...and if it reaches the restart delay...\n            if (restartTimer >= restartDelay) {\n                // reload scene\n                SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);\n            }\n        }\n    }\n\n    private void StartGame() {\n        gameStarted = true;\n\n        // set main text to see through\n        gameStateText.color = Color.clear;\n\n        // allow player to move\n        playerMovement.enabled = true;\n        birdMovement.enabled = true;\n        followCamera.enabled = true;\n    }\n\n    private void EndGame() {\n        gameStarted = false;\n\n        gameStateText.text = "Game Over";\n        // set main text to see through\n        gameStateText.color = Color.white;\n\n        // remove player from game\n        player.SetActive (false);\n    }\n}\n')),Object(a.b)("h2",{id:"adding-audio"},"Adding Audio"),Object(a.b)("h3",{id:"game-audio"},"Game audio"),Object(a.b)("p",null,"We can add the ",Object(a.b)("inlineCode",{parentName:"p"},"Audio Source")," component and select the sounds."),Object(a.b)("p",null,"We can also randomly generate a sound to help add something natural."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-csharp"}),"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class RandomSoundPlayer : MonoBehaviour {\n    private AudioSource audioSource;\n    [SerializeField]\n    private List<AudioClip> soundClips = new List<AudioClip>();\n    [SerializeField]\n    private float soundTimerDelay = 3f;\n    private float soundTimer;\n\n    // Use this for initialization\n    void Start () {\n        audioSource = GetComponent<AudioSource>();\n    }\n\n    // Update is called once per frame\n    void Update () {\n        // incredment a timer to count up to restarting\n        soundTimer = soundTimer + Time.deltaTime;\n\n        // if the timer reaches the delay...\n        if (soundTimer >= soundTimerDelay) {\n            soundTimer = 0f;\n            // choose a random sound\n            AudioClip randomSound = soundClips[Random.Range(0, soundClips.Count)];\n            audioSource.PlayOneShot (randomSound);\n        }\n    }\n}\n")),Object(a.b)("h3",{id:"controlling-sounds-on-game-objects"},"Controlling sounds on game objects"),Object(a.b)("p",null,"Add another empty game child and add the audio but select ",Object(a.b)("inlineCode",{parentName:"p"},"play on awake")," off."),Object(a.b)("p",null,"To make sounds 3d, we need to change the spatial blend. We also need to make sure the game camera and distance are set correctly."),Object(a.b)("p",null,"We need to update the scripts to ensure that these clips play at the appropriate time."),Object(a.b)("h3",{id:"audio-mixing"},"Audio mixing"),Object(a.b)("p",null,"Use the audio mixer, create groups and assign these groups via the ",Object(a.b)("inlineCode",{parentName:"p"},"AudioComponent")," on the hierarchy or prefab."),Object(a.b)("h3",{id:"exporting-the-game"},"Exporting the game"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Unity/How-To-Make-A-Video-Game.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-unity-how-to-make-a-video-game-md-f4200c8ca517882ea8d1.js.map