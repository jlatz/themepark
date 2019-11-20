/*
 * Copyright 2016 Eric McGregor
 */

var B = BABYLON;

/* Get the canvas element from the HTML page */
var canvas = document.getElementById("renderCanvas");

/* Load the B 3D engine */
var engine = new B.Engine(canvas, true);

var createScene = function() {

  /* Scene */
  let scene = new B.Scene(engine);
  //scene.clearColor = new B.Color3(255,255,255);

  /* Camera */
  var camera = new B.UniversalCamera("UniversalCamera", new B.Vector3(0, 0, -10), scene);
  camera.setTarget(B.Vector3.Zero());
  camera.attachControl(canvas, true);

  /* Create Lights */
  var sunlight = new B.DirectionalLight("sunlight", new B.Vector3(0,-1,1), scene);

  /* Create Ground */
  var ground = new B.Mesh.CreateGround("ground", 974.5, 430, 0, scene);
  ground.material = new B.StandardMaterial("ground_mat", scene);
  ground.material.
  ground.setPivotMatrix(B.Matrix.Translation(487.25, 0, -214));  //Translate local origin


  /* Enable gravity */
  scene.gravity = new B.Vector3(0, -9.81, 0);

  camera.ellipsoid = new B.Vector3(1, 1, 1);
  camera.applyGravity = true;

  scene.collisionsEnabled = true;
  camera.checkCollisions = true;
  ground.checkCollisions = true;

  /* Create shadows */


  return scene;
};


/****************************************************************************
 *                               Render the Scene
 ****************************************************************************/

var shadowGenerator = null;
scene = createScene();

var loop = function() {
  scene.render();
};

engine.runRenderLoop(loop);

var resize = function() {
  engine.resize();
}

window.addEventListener("resize", resize);

window.addEventListener("click", function () {
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  if (pickResult.hit) {
    var mesh = pickResult.pickedMesh;


  }
});


/*** END OF FILE ***/
