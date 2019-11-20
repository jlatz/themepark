function createThemeParkMap(scene) {

  var box = BABYLON.MeshBuilder.CreateBox("box", {height: 2, width: 1, depth: 0.01}, scene);
  box.material = new B.StandardMaterial("box_mat", scene);
  box.material.diffuseTexture = new BABYLON.Texture("assets/textures/janidy.png", scene);
  box.material.diffuseTexture.hasAlpha = true;

  box.translate(new BABYLON.Vector3(0, 0.5, 25), 1, BABYLON.Space.WORLD);

  return box;

}