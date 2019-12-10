function createDropTower(scene) {

    //materials/textures
    //flag
    var americanFlag = new BABYLON.StandardMaterial("battle", scene);
    americanFlag.diffuseTexture = new BABYLON.Texture("assets/textures/flag.jpg", scene);
    //wire texture
    var wireMat = new BABYLON.StandardMaterial("mat", scene);
    wireMat.emissiveColor = BABYLON.Color3.White();
    wireMat.wireframe = true;

    var pillarMatRed = new BABYLON.StandardMaterial("mat", scene);
    pillarMatRed.alpha = 1;
    pillarMatRed.diffuseColor = new BABYLON.Color3(0.7, 0, 0);

    var pillarMatBlue = new BABYLON.StandardMaterial("mat", scene);
    pillarMatBlue.alpha = 1;
    pillarMatBlue.diffuseColor = new BABYLON.Color3(0, 0, 0.7);


    //pillars for tower
    var box = BABYLON.MeshBuilder.CreateBox("box", {height: 65}, scene);
    box.position = new BABYLON.Vector3(38, 1, -14);
    box.material = pillarMatRed;

    var box1 = BABYLON.MeshBuilder.CreateBox("box", {height: 65}, scene);
    box1.position = new BABYLON.Vector3(43, 1, -14);
    box1.material = pillarMatBlue;

    var box3 = BABYLON.MeshBuilder.CreateBox("box", {height: 65}, scene);
    box3.position = new BABYLON.Vector3(38, 1, -18);
    box3.material = pillarMatBlue;

    var box4 = BABYLON.MeshBuilder.CreateBox("box", {height: 65}, scene);
    box4.position = new BABYLON.Vector3(43, 1, -18);
    box4.material = pillarMatRed;

    //top of the tower(box + ball)
    var box5 = BABYLON.MeshBuilder.CreateBox("box", {height: 2, width: 7, depth: 7}, scene);
    box5.position = new BABYLON.Vector3(40.5, 33, -16);

    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 12}, scene);
    sphere.position = new BABYLON.Vector3(40.5, 40, -16);
    sphere.material = americanFlag;

    var axis = new BABYLON.Vector3(-2, -1, -1);
    var theta = Math.PI;
    var quaternion = new BABYLON.Quaternion.RotationAxis(axis, theta);
    sphere.rotationQuaternion = quaternion;

    //cylinders/wiring
    //front side
    var testcone = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    testcone.position = new BABYLON.Vector3(38, 1, -16);
    testcone.rotation.x = Math.PI/2 + (0.5);
    testcone.material = wireMat;
    var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone.position = new BABYLON.Vector3(38, 1, -16);
    cone.rotation.x = Math.PI/2 + (0.5);
    cone.material = wireMat;
    var cone1 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone1.position = new BABYLON.Vector3(38, 3, -16);
    cone1.rotation.x = Math.PI/2 + (0.5);
    cone1.material = wireMat;
    var cone2 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone2.position = new BABYLON.Vector3(38, 5, -16);
    cone2.rotation.x = Math.PI/2 + (0.5);
    cone2.material = wireMat;
    var cone3 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone3.position = new BABYLON.Vector3(38, 7, -16);
    cone3.rotation.x = Math.PI/2 + (0.5);
    cone3.material = wireMat;
    var cone4 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone4.position = new BABYLON.Vector3(38, 9, -16);
    cone4.rotation.x = Math.PI/2 + (0.5);
    cone4.material = wireMat;
    var cone5 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone5.position = new BABYLON.Vector3(38, 11, -16);
    cone5.rotation.x = Math.PI/2 + (0.5);
    cone5.material = wireMat;
    var cone6 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone6.position = new BABYLON.Vector3(38, 13, -16);
    cone6.rotation.x = Math.PI/2 + (0.5);
    cone6.material = wireMat;
    var cone7 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone7.position = new BABYLON.Vector3(38, 15, -16);
    cone7.rotation.x = Math.PI/2 + (0.5);
    cone7.material = wireMat;
    var cone8 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone8.position = new BABYLON.Vector3(38, 17, -16);
    cone8.rotation.x = Math.PI/2 + (0.5);
    cone8.material = wireMat;
    var cone9 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone9.position = new BABYLON.Vector3(38, 19, -16);
    cone9.rotation.x = Math.PI/2 + (0.5);
    cone9.material = wireMat;
    var cone10 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone10.position = new BABYLON.Vector3(38, 21, -16);
    cone10.rotation.x = Math.PI/2 + (0.5);
    cone10.material = wireMat;
    var cone11 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone11.position = new BABYLON.Vector3(38, 23, -16);
    cone11.rotation.x = Math.PI/2 + (0.5);
    cone11.material = wireMat;
    var cone12 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone12.position = new BABYLON.Vector3(38, 25, -16);
    cone12.rotation.x = Math.PI/2 + (0.5);
    cone12.material = wireMat;
    var cone13 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone13.position = new BABYLON.Vector3(38, 27, -16);
    cone13.rotation.x = Math.PI/2 + (0.5);
    cone13.material = wireMat;
    var cone14 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone14.position = new BABYLON.Vector3(38, 29, -16);
    cone14.rotation.x = Math.PI/2 + (0.5);
    cone14.material = wireMat;
    var cone15 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone15.position = new BABYLON.Vector3(38, 31, -16);
    cone15.rotation.x = Math.PI/2 + (0.5);
    cone15.material = wireMat;

    //*** FRONT *** OPPOSITE
    var cone16 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone.position = new BABYLON.Vector3(38, 1, -16);
    cone.rotation.x = Math.PI/2 - (0.5);
    cone.material = wireMat;
    var cone17 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone17.position = new BABYLON.Vector3(38, 3, -16);
    cone17.rotation.x = Math.PI/2 - (0.5);
    cone17.material = wireMat;
    var cone18 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone18.position = new BABYLON.Vector3(38, 5, -16);
    cone18.rotation.x = Math.PI/2 - (0.5);
    cone18.material = wireMat;
    var cone19 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone19.position = new BABYLON.Vector3(38, 7, -16);
    cone19.rotation.x = Math.PI/2 - (0.5);
    cone19.material = wireMat;
    var cone20 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone20.position = new BABYLON.Vector3(38, 9, -16);
    cone20.rotation.x = Math.PI/2 - (0.5);
    cone20.material = wireMat;
    var cone21 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone21.position = new BABYLON.Vector3(38, 11, -16);
    cone21.rotation.x = Math.PI/2 - (0.5);
    cone21.material = wireMat;
    var cone22 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone22.position = new BABYLON.Vector3(38, 13, -16);
    cone22.rotation.x = Math.PI/2 - (0.5);
    cone22.material = wireMat;
    var cone23 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone23.position = new BABYLON.Vector3(38, 15, -16);
    cone23.rotation.x = Math.PI/2 - (0.5);
    cone23.material = wireMat;
    var cone24 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone24.position = new BABYLON.Vector3(38, 17, -16);
    cone24.rotation.x = Math.PI/2 - (0.5);
    cone24.material = wireMat;
    var cone25 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone25.position = new BABYLON.Vector3(38, 19, -16);
    cone25.rotation.x = Math.PI/2 - (0.5);
    cone25.material = wireMat;
    var cone26 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone26.position = new BABYLON.Vector3(38, 21, -16);
    cone26.rotation.x = Math.PI/2 - (0.5);
    cone26.material = wireMat;
    var cone27 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone27.position = new BABYLON.Vector3(38, 23, -16);
    cone27.rotation.x = Math.PI/2 - (0.5);
    cone27.material = wireMat;
    var cone28 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone28.position = new BABYLON.Vector3(38, 25, -16);
    cone28.rotation.x = Math.PI/2 - (0.5);
    cone28.material = wireMat;
    var cone29 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone29.position = new BABYLON.Vector3(38, 27, -16);
    cone29.rotation.x = Math.PI/2 - (0.5);
    cone29.material = wireMat;
    var cone30 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone30.position = new BABYLON.Vector3(38, 29, -16);
    cone30.rotation.x = Math.PI/2 - (0.5);
    cone30.material = wireMat;
    var cone31 = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone31.position = new BABYLON.Vector3(38, 31, -16);
    cone31.rotation.x = Math.PI/2 - (0.5);
    cone31.material = wireMat;
    //**END OF FRONT SIDE**
    //BACK SIDE
    var cone1b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone1b.position = new BABYLON.Vector3(43, 1, -16);
    cone1b.rotation.x = Math.PI/2 - (0.5);
    cone1b.material = wireMat;
    var cone2b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone2b.position = new BABYLON.Vector3(43, 3, -16);
    cone2b.rotation.x = Math.PI/2 - (0.5);
    cone2b.material = wireMat;
    var cone3b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone3b.position = new BABYLON.Vector3(43, 5, -16);
    cone3b.rotation.x = Math.PI/2 - (0.5);
    cone3b.material = wireMat;
    var cone4b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone4b.position = new BABYLON.Vector3(43, 7, -16);
    cone4b.rotation.x = Math.PI/2 - (0.5);
    cone4b.material = wireMat;
    var cone5b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone5b.position = new BABYLON.Vector3(43, 9, -16);
    cone5b.rotation.x = Math.PI/2 - (0.5);
    cone5b.material = wireMat;
    var cone6b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone6b.position = new BABYLON.Vector3(43, 11, -16);
    cone6b.rotation.x = Math.PI/2 - (0.5);
    cone6b.material = wireMat;
    var cone7b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone7b.position = new BABYLON.Vector3(43, 13, -16);
    cone7b.rotation.x = Math.PI/2 - (0.5);
    cone7b.material = wireMat;
    var cone8b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone8b.position = new BABYLON.Vector3(43, 15, -16);
    cone8b.rotation.x = Math.PI/2 - (0.5);
    cone8b.material = wireMat;
    var cone9b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone9b.position = new BABYLON.Vector3(43, 17, -16);
    cone9b.rotation.x = Math.PI/2 - (0.5);
    cone9b.material = wireMat;
    var cone10b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone10b.position = new BABYLON.Vector3(43, 19, -16);
    cone10b.rotation.x = Math.PI/2 - (0.5);
    cone10b.material = wireMat;
    var cone11b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone11b.position = new BABYLON.Vector3(43, 21, -16);
    cone11b.rotation.x = Math.PI/2 - (0.5);
    cone11b.material = wireMat;
    var cone12b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone12b.position = new BABYLON.Vector3(43, 23, -16);
    cone12b.rotation.x = Math.PI/2 - (0.5);
    cone12b.material = wireMat;
    var cone13b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone13b.position = new BABYLON.Vector3(43, 25, -16);
    cone13b.rotation.x = Math.PI/2 - (0.5);
    cone13b.material = wireMat;
    var cone14b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone14b.position = new BABYLON.Vector3(43, 27, -16);
    cone14b.rotation.x = Math.PI/2 - (0.5);
    cone14b.material = wireMat;
    var cone15b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone15b.position = new BABYLON.Vector3(43, 29, -16);
    cone15b.rotation.x = Math.PI/2 - (0.5);
    cone15b.material = wireMat;
    var cone16b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone16b.position = new BABYLON.Vector3(43, 31, -16);
    cone16b.rotation.x = Math.PI/2 - (0.5);
    cone16b.material = wireMat;
    //**BACK SIDE** OPPOSITE
    var cone17b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone17b.position = new BABYLON.Vector3(43, 3, -16);
    cone17b.rotation.x = Math.PI/2 + (0.5);
    cone17b.material = wireMat;
    var cone18b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone18b.position = new BABYLON.Vector3(43, 5, -16);
    cone18b.rotation.x = Math.PI/2 + (0.5);
    cone18b.material = wireMat;
    var cone19b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone19b.position = new BABYLON.Vector3(43, 7, -16);
    cone19b.rotation.x = Math.PI/2 + (0.5);
    cone19b.material = wireMat;
    var cone20b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone20b.position = new BABYLON.Vector3(43, 9, -16);
    cone20b.rotation.x = Math.PI/2 + (0.5);
    cone20b.material = wireMat;
    var cone21b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone21b.position = new BABYLON.Vector3(43, 11, -16);
    cone21b.rotation.x = Math.PI/2 + (0.5);
    cone21b.material = wireMat;
    var cone22b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone22b.position = new BABYLON.Vector3(43, 13, -16);
    cone22b.rotation.x = Math.PI/2 + (0.5);
    cone22b.material = wireMat;
    var cone23b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone23b.position = new BABYLON.Vector3(43, 15, -16);
    cone23b.rotation.x = Math.PI/2 + (0.5);
    cone23b.material = wireMat;
    var cone24b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone24b.position = new BABYLON.Vector3(43, 17, -16);
    cone24b.rotation.x = Math.PI/2 + (0.5);
    cone24b.material = wireMat;
    var cone25b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone25b.position = new BABYLON.Vector3(43, 19, -16);
    cone25b.rotation.x = Math.PI/2 + (0.5);
    cone25b.material = wireMat;
    var cone26b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone26b.position = new BABYLON.Vector3(43, 21, -16);
    cone26b.rotation.x = Math.PI/2 + (0.5);
    cone26b.material = wireMat;
    var cone27b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone27b.position = new BABYLON.Vector3(43, 23, -16);
    cone27b.rotation.x = Math.PI/2 + (0.5);
    cone27b.material = wireMat;
    var cone28b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone28b.position = new BABYLON.Vector3(43, 25, -16);
    cone28b.rotation.x = Math.PI/2 + (0.5);
    cone28b.material = wireMat;
    var cone29b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone29b.position = new BABYLON.Vector3(43, 27, -16);
    cone29b.rotation.x = Math.PI/2 + (0.5);
    cone29b.material = wireMat;
    var cone30b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone30b.position = new BABYLON.Vector3(43, 29, -16);
    cone30b.rotation.x = Math.PI/2 + (0.5);
    cone30b.material = wireMat;
    var cone31b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone31b.position = new BABYLON.Vector3(43, 31, -16);
    cone31b.rotation.x = Math.PI/2 + (0.5);
    cone31b.material = wireMat;
    var cone32b = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 4, diameter: 0.3, tessellation: 7}, scene);
    cone32b.position = new BABYLON.Vector3(43, 1, -16);
    cone32b.rotation.x = Math.PI/2 + (0.5);
    cone32b.material = wireMat;

    //seat
    var seat1= BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 9, depth: 9}, scene);
    seat1.position = new BABYLON.Vector3(40.5, 30, -16);
    var seat2= BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 6, depth: 6}, scene);
    seat2.position = new BABYLON.Vector3(40.5, 30, -16);

    var aCSG = BABYLON.CSG.FromMesh(seat2);
    var bCSG = BABYLON.CSG.FromMesh(seat1);
    var subCSG = bCSG.subtract(aCSG);
    seat1.dispose();
    seat2.dispose();
    var seat = subCSG.toMesh("csg", new BABYLON.StandardMaterial("mat", scene), scene);

    var animation = new BABYLON.Animation("animation", "position.y", 15, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var slider = null;

    var keys = [];

    keys.push({
        frame: 0,
        value: 3
    });
    keys.push({
        frame: 60,
        value: 30
    });
    keys.push({
        frame: 80,
        value: 3
    });

    animation.setKeys(keys);
    seat.animations.push(animation);
    var easingFunction = new BABYLON.BackEase(0.5);
    easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    animation.setEasingFunction(easingFunction);
    slider = scene.beginAnimation(seat, 0, 100, true);

    //Particle System
    var radius = 3;
    var angle = Math.PI / 2;
    var height = radius / Math.tan(angle / 2);

    var particleSystem1 = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem1.particleTexture = new BABYLON.Texture("assets/textures/fire.png", scene);
    particleSystem1.emitter = sphere;
    particleSystem1.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem1.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem1.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
    particleSystem1.minSize = 1.1;
    particleSystem1.maxSize = 2.2;
    particleSystem1.minLifeTime = 0.3;
    particleSystem1.maxLifeTime = 2.5;
    particleSystem1.emitRate = 2000;
    particleSystem1.createConeEmitter(radius, angle);
    particleSystem1.minEmitPower = 12;
    particleSystem1.maxEmitPower = 14;
    particleSystem1.updateSpeed = 0.008;
    particleSystem1.start();

    scene.registerBeforeRender(function () {

    });








}