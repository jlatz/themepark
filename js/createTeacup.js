
function createTeacup(scene) {
    var red = new BABYLON.StandardMaterial(scene);
    red.alpha = 1;
    red.diffuseColor = new BABYLON.Color3(1, 0, 0);

    var white = new BABYLON.StandardMaterial(scene);
    white.alpha = 1;
    white.diffuseColor = new BABYLON.Color3(1, 1, 1);

    var blue = new BABYLON.StandardMaterial(scene);
    blue.alpha = 1;
    blue.diffuseColor = new BABYLON.Color3(0, 0, 1);

    var baseColor = new BABYLON.StandardMaterial(scene);
    baseColor.alpha = 1;
    baseColor.diffuseColor = new BABYLON.Color3(0, 0, 0.60784312);

    var gold = new BABYLON.StandardMaterial(scene);
    gold.alpha = 1;
    gold.diffuseColor = new BABYLON.Color3(1, 0.84313725, 0);



    var baseCircle = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 12, height: .5, diameterBottom: 12}, scene);
    baseCircle.position.x = -40;
    baseCircle.position.z = -17;
    baseCircle.position.y = 1;
    baseCircle.material = baseColor;



    var base = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 8, height: 1, diameterBottom: 9}, scene);
    base.position.x = -40;
    base.position.z = -17;
    base.position.y = 0;
    base.material = gold;

    var cupBase1 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 4.5, height: .5, diameterBottom: 4.5}, scene);
    cupBase1.position.x = -40;
    cupBase1.position.z = -13.5;
    cupBase1.position.y = 1.0001;
    cupBase1.material = white;


    var cupBase2 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 4.5, height: .5, diameterBottom: 4.5}, scene);
    cupBase2.position.x = -43.1;
    cupBase2.position.z = -19;
    cupBase2.position.y = 1.0001;
    cupBase2.material = white;


    var cupBase3 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 4.5, height: .5, diameterBottom: 4.5}, scene);
    cupBase3.position.x = -36.9;
    cupBase3.position.z = -19;
    cupBase3.position.y = 1.0001;
    cupBase3.material = white;



    var cup1 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup1.position.x = -35.4;
    cup1.position.y = 1.8;
    cup1.position.z = -18.5;
    cup1.material = red;

    var cup2 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup2.position.x= -38.2;
    cup2.position.y = 1.8;
    cup2.position.z = -18.2;
    cup2.material = white;

    var cup3 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup3.position.x = -36.85;
    cup3.position.y = 1.8;
    cup3.position.z = -20.6;
    cup3.material = blue;


    var cup4 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup4.position.x = -41.6;
    cup4.position.y = 1.8;
    cup4.position.z = -18.5;
    cup4.material = red;

    var cup5 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup5.position.x= -44.4;
    cup5.position.y = 1.8;
    cup5.position.z = -18.2;
    cup5.material = white;

    var cup6 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup6.position.x = -43.05;
    cup6.position.y = 1.8;
    cup6.position.z = -20.6;
    cup6.material = blue;

    var cup7 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup7.position.x = -38.5;
    cup7.position.y = 1.8;
    cup7.position.z = -13;
    cup7.material = red;

    var cup8 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup8.position.x= -41.3;
    cup8.position.y = 1.8;
    cup8.position.z = -12.7;
    cup8.material = white;

    var cup9 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup9.position.x = -39.95;
    cup9.position.y = 1.8;
    cup9.position.z = -15.1;
    cup9.material = blue;



    var pole = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: .1, diameterBottom: .1, height: 5, tessellation: 0}, scene);
    pole.position.x = -40;
    pole.position.z = -17;
    pole.position.y = 1.8;
    pole.material = gold;


    var flag = BABYLON.MeshBuilder.CreateBox("floor", {height: 2, width: 3.4, depth: .1}, scene);
    flag.position.x = -40;
    flag.position.z = -15.4;
    flag.position.y = 5;
    flag.material = blue;
    flag.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL)





















    var axis = new BABYLON.Vector3(0, 0, 0);
    var angle = 0.1;
    scene.registerAfterRender(function () {
       // baseCircle.rotation.y += 0.01;
        //cupBase1.rotation.y += 0.04;
        //cupBase2.rotation.y += 0.04;
        //cupBase3.rotation.y += 0.04;
    });







}