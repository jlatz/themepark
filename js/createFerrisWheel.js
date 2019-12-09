function createFerrisWheel(scene) {

    var box = BABYLON.MeshBuilder.CreateBox("box", {height: 2, width: 1, depth: 0.01}, scene);
    box.material = new B.StandardMaterial("box_mat", scene);
    box.material.diffuseTexture = new BABYLON.Texture("assets/textures/janidy.png", scene);
    box.material.diffuseTexture.hasAlpha = true;

    box.translate(new BABYLON.Vector3(0, 0.5, 25), 1, BABYLON.Space.WORLD);

    //materials
    var black = new BABYLON.StandardMaterial(scene);
    black.alpha = 1;
    black.diffuseColor = new BABYLON.Color3(0, 0, 0);

    var white = new BABYLON.StandardMaterial(scene);
    white.alpha = 1;
    white.diffuseColor = new BABYLON.Color3(1, 1, 1);

    var mat = new BABYLON.StandardMaterial("mat", scene);
    mat.emissiveColor = new BABYLON.Color3(.86, .153, .153);
    mat.wireframe = true;

    var supportOne = BABYLON.MeshBuilder.CreateCylinder("supportOne", {diameterTop:1, diameterBottom:1, height: 15, tessellation: 100}, scene);
    supportOne.position = new BABYLON.Vector3(-5, 5, -5);
    supportOne.material = white;
    supportOne.rotation.z = -Math.PI/5;

    var supportTwo = BABYLON.MeshBuilder.CreateCylinder("supportTwo", {diameterTop:1, diameterBottom:1, height: 15, tessellation: 100}, scene);
    supportTwo.position = new BABYLON.Vector3(-5, 5, 5);
    supportTwo.material = white;
    supportTwo.rotation.z = -Math.PI/5;

    var supportThree = BABYLON.MeshBuilder.CreateCylinder("supportThree", {diameterTop:1, diameterBottom:1, height: 15, tessellation: 100}, scene);
    supportThree.position = new BABYLON.Vector3(5, 5, -5);
    supportThree.material = white;
    supportThree.rotation.z = Math.PI/5;

    var supportFour = BABYLON.MeshBuilder.CreateCylinder("supportFour", {diameterTop:1, diameterBottom:1, height: 15, tessellation: 100}, scene);
    supportFour.position = new BABYLON.Vector3(5, 5, 5);
    supportFour.material = white;
    supportFour.rotation.z = Math.PI/5;

    var supportFive = BABYLON.MeshBuilder.CreateCylinder("supportFive", {diameterTop:1.5, diameterBottom:1.5, height: 12, tessellation: 100}, scene);
    supportFive.position = new BABYLON.Vector3(0, 11, 0);
    supportFive.material = white;
    supportFive.rotation.x = Math.PI/2;

    var mySphere = BABYLON.MeshBuilder.CreateSphere("mySphere", {diameter: 30, diameterZ: 11, segments: 4 }, scene);
    mySphere.position = new BABYLON.Vector3(0, 23, 0);
    mySphere.material = mat;

    var mat1 = new BABYLON.StandardMaterial("mat1", scene);
    mat1.diffuseColor.copyFromFloats(0.09, 0.455, 1);
    mat1.backFaceCulling = false;

    var mat2 = new BABYLON.StandardMaterial("mat2", scene);
    mat2.diffuseColor.copyFromFloats(0.984, 0.106, 0.106);
    mat2.backFaceCulling = false;


    var minus = BABYLON.MeshBuilder.CreateBox("myBox", {height: 2, width: 5, depth: 3}, scene);
    minus.position = new BABYLON.Vector3(14.5, 24 , 0);

    var kart1 = BABYLON.MeshBuilder.CreateSphere("kart1", {diameter: 5, diameterZ: 3 }, scene);
    kart1.position = new BABYLON.Vector3(12, 23, 0);

    var aCSG = BABYLON.CSG.FromMesh(minus);
    var bCSG = BABYLON.CSG.FromMesh(kart1);

    var subCSG1 = bCSG.subtract(aCSG);
    var subCSG2 = bCSG.subtract(aCSG);
    var subCSG3 = bCSG.subtract(aCSG);
    var subCSG4 = bCSG.subtract(aCSG);
    var subCSG5 = bCSG.subtract(aCSG);
    var subCSG6 = bCSG.subtract(aCSG);
    var subCSG7 = bCSG.subtract(aCSG);
    var subCSG8 = bCSG.subtract(aCSG);

    minus.dispose();
    kart1.dispose();


    var newMesh1 = subCSG1.toMesh("csg", mat2, scene);
    newMesh1.position = new BABYLON.Vector3(16, 22, 0);

    var newMesh2 = subCSG2.toMesh("csg", white, scene);
    newMesh2.position = new BABYLON.Vector3(-16, 22, 0);

    var newMesh3 = subCSG3.toMesh("csg", white, scene);
    newMesh3.position = new BABYLON.Vector3(12, 12, 0);

    var newMesh4 = subCSG4.toMesh("csg", mat1, scene);
    newMesh4.position = new BABYLON.Vector3(0, 6, 0);

    var newMesh5 = subCSG5.toMesh("csg", mat2, scene);
    newMesh5.position = new BABYLON.Vector3(-11, 11, 0);

    var newMesh6 = subCSG6.toMesh("csg", mat1, scene);
    newMesh6.position = new BABYLON.Vector3(-10, 31, 0);

    var newMesh7 = subCSG7.toMesh("csg", mat2, scene);
    newMesh7.position = new BABYLON.Vector3(0, 35, 0);

    var newMesh8 = subCSG8.toMesh("csg", white, scene);
    newMesh8.position = new BABYLON.Vector3(9, 31, 0);

    var particleSystem1 = new BABYLON.ParticleSystem("particles", 500, scene);
    particleSystem1.particleTexture = new BABYLON.Texture("textures/redring.jpg", scene);
    particleSystem1.emitter = new BABYLON.Vector3(0,11,-6);
    particleSystem1.minEmitBox = new BABYLON.Vector3(-.5, 0, 0); // Starting all from
    particleSystem1.maxEmitBox = new BABYLON.Vector3(.5, 1, -1); // To...
    particleSystem1.maxSize = 2;
    particleSystem1.addSizeGradient(0, 0.5, 0.8);
    particleSystem1.addSizeGradient(1.0, 3, 4);
    particleSystem1.emitRate = 50;
    particleSystem1.start();

    var particleSystem2 = new BABYLON.ParticleSystem("particles", 500, scene);
    particleSystem2.particleTexture = new BABYLON.Texture("textures/redring.jpg", scene);
    particleSystem2.emitter = new BABYLON.Vector3(0,11,6);
    particleSystem2.minEmitBox = new BABYLON.Vector3(-.5, 0, 0); // Starting all from
    particleSystem2.maxEmitBox = new BABYLON.Vector3(.5, 1, -1); // To...
    particleSystem2.maxSize = 2;
    particleSystem2.addSizeGradient(0, 0.5, 0.8);
    particleSystem2.addSizeGradient(1.0, 3, 4);
    particleSystem2.emitRate = 50;
    particleSystem2.start();


    var particleSystem3 = new BABYLON.ParticleSystem("particles", 500, scene);
    particleSystem3.particleTexture = new BABYLON.Texture("textures/redring.jpg", scene);
    particleSystem3.emitter = new BABYLON.Vector3(0, 38, 0);
    particleSystem3.minEmitBox = new BABYLON.Vector3(-.5, 0, 0); // Starting all from
    particleSystem3.maxEmitBox = new BABYLON.Vector3(.5, 1, -1); // To...
    particleSystem3.maxSize = 2;
    particleSystem3.addSizeGradient(0, 0.5, 0.8);
    particleSystem3.addSizeGradient(1.0, 3, 4);
    particleSystem3.emitRate = 50;
    particleSystem3.start();



    return box;

}