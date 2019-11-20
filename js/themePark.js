var B = BABYLON;

/* Get the canvas element from the HTML page */
var canvas = document.getElementById("renderCanvas");

/* Load the B 3D engine */
var engine = new B.Engine(canvas, true);

var createScene = function() {

  /* Scene */
  let scene = new B.Scene(engine);
  scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);

  /* Camera */
  var camera = new B.UniversalCamera("UniversalCamera", new B.Vector3(0, 2, 0), scene);
  //camera.setTarget(B.Vector3.Zero());
  camera.attachControl(canvas, true);

  /* Create Lights */
  var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);

  /* Create Skybox */
  let skyMaterial = new B.SkyMaterial("skyMaterial", scene);
  skyMaterial.backFaceCulling = false;

  var skybox = B.Mesh.CreateBox("skyBox", 100.0, scene);
  skybox.material = skyMaterial;
  skyMaterial.turbidity = 1;
  skyMaterial.luminance = 0.5;
  skyMaterial.useSunPosition = true;
  skyMaterial.sunPosition = new B.Vector3(0, 100, 500);

  /* Create Ground */
  var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 100, width: 100, subdivisions: 1}, scene);

  ground.material = new B.StandardMaterial("ground_mat", scene);
  //ground.material.ambientColor = new B.Color3(1, 0, 0);
  ground.material.ambientTexture = new BABYLON.Texture("assets/textures/themeParkLayout.png", scene);


  /* Enable gravity */
  scene.gravity = new B.Vector3(0, -9.81, 0);

  camera.ellipsoid = new B.Vector3(1, 1, 1);
  camera.applyGravity = true;

  scene.collisionsEnabled = true;
  camera.checkCollisions = true;
  ground.checkCollisions = true;

  /* Create shadows */

  /* Load assets */
  let themeParkMap = createThemeParkMap(scene);


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
