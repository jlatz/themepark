function createCarousel(scene) {

    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.emissiveTexture = new BABYLON.Texture("assets/carouselAsset/flag.jpg", scene);
    myMaterial.diffuseTexture = new BABYLON.Texture("assets/carouselAsset/flag.jpg", scene);

    // var floor = BABYLON.MeshBuilder.CreateSphere("sphere", {diameterX: 14, diameterY: 2, diameterZ: 14}, scene);
    // floor.position.y = .1;
    // floor.position.x = -1;
    // floor.position.z = -10;

    var pillar = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, height: 7, diameterBottom: 1.5}, scene);
    pillar.position.x = -1;
    pillar.position.y = 3;
    pillar.position.z = -10;
    pillar.material=myMaterial;

   var ceiling = BABYLON.MeshBuilder.CreateSphere("sphere", {diameterX: 14, diameterY: .3, diameterZ: 14}, scene);
  //  var ceiling = BABYLON.MeshBuilder.CreateSphere("sphere", {diameterX: 7, diameterY: .3, diameterZ: 12}, scene);
    ceiling.position.y = 6.5;
   // ceiling.position.y = 2.5;
    ceiling.position.x = -1;
    ceiling.position.z = -10;

    var ceiling1 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 0, height: 4, diameterBottom: 14}, scene);
    ceiling1.position.y = 8.5;
    ceiling1.position.x = -1;
    ceiling1.position.z = -10;
    ceiling1.material=myMaterial;

    var myMaterial2 = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial2.diffuseTexture = new BABYLON.Texture("assets/carouselAsset/floor2.jpg", scene);


    var torus = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: 0.4, diameter:14}, scene);
    torus.position.y = .3;
    torus.position.x = -1;
    torus.position.z = -10;
    torus.material =myMaterial2;


    var floor2 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameterX: 14, diameterY: .3, diameterZ: 14}, scene);
    floor2.position.y =.5;
    floor2.position.x = -1;
    floor2.position.z = -10;
    floor2.material =myMaterial2;


    var pillar2 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar3 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar4 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar5 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar6 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar7 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar8 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar9 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var pillar10 = BABYLON.MeshBuilder.CreateCylinder("cone2", {diameterTop: .1, height: 5, diameterBottom: .1}, scene);
    var CoR_At = new BABYLON.Vector3(-1, 3, -10);
    var Axis1 = new BABYLON.Vector3(0,1, 0);
    var angle1=.01;
    var pilotStart11 = new BABYLON.Vector3(2.5, 2, -4.4);
    var pilotStart12 = new BABYLON.Vector3(4.55, 2, -2.4);
    var pilotStart3 = new BABYLON.Vector3(2.5, 2, 3.7);
    var pilotStart4 = new BABYLON.Vector3(4.5, 2, 1.5);
    var pilotStart5 = new BABYLON.Vector3(-.7, 2, 4);
    var pilotStart6 = new BABYLON.Vector3(-3.5, 2, 3.3);
    var pilotStart7 = new BABYLON.Vector3(-4.8, 2, 0);
    var pilotStart8 = new BABYLON.Vector3(-4.4, 2, -3);
    var pilotStart9 = new BABYLON.Vector3(-1.2, 2, -4.9);

    var pivot1 = new BABYLON.TransformNode("root");
    pivot1.position = CoR_At;

    pillar2.parent = pivot1;
    pillar2.position = pilotStart11;

    pillar3.parent=pivot1;
    pillar3.position=pilotStart12;

    pillar4.parent=pivot1;
    pillar4.position=pilotStart3;

    pillar5.parent=pivot1;
    pillar5.position=pilotStart4;

    pillar6.parent=pivot1;
    pillar6.position=pilotStart5;

    pillar7.parent=pivot1;
    pillar7.position=pilotStart6;

    pillar8.parent=pivot1;
    pillar8.position=pilotStart7;

    pillar9.parent=pivot1;
    pillar9.position=pilotStart8;


    pillar10.parent=pivot1;
    pillar10.position=pilotStart9;


    scene.registerBeforeRender(function() {
        pivot1.rotate(Axis1, angle1, BABYLON.Space.WORLD);
    });

    BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
        container.addAllToScene();
        container.meshes[0].rotate(BABYLON.Axis.Y, 1.2, BABYLON.Space.LOCAL);
        container.meshes[0].scaling = new BABYLON.Vector3(.010, .010,.010);
        container.meshes[0].material=myMaterial;

        var CoR_At = new BABYLON.Vector3(-1, 3, -10);
        var Axis = new BABYLON.Vector3(0,1, 0);
        var angle=.01;
        var pilotStarta = new BABYLON.Vector3(3.5 , -2.0, -4);
        var pivot = new BABYLON.TransformNode("root1");
        pivot.position = CoR_At;
        container.meshes[0].parent = pivot;
      container.meshes[0].position = pilotStarta;
        scene.registerBeforeRender(function() {
            pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
        })

    });
    BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
        container.addAllToScene();
        container.meshes[0].rotate(BABYLON.Axis.Y, 1.9, BABYLON.Space.LOCAL);
        container.meshes[0].scaling = new BABYLON.Vector3(.010, .010,.010);
        var CoR_At = new BABYLON.Vector3(-1, 3, -10);
        var Axis = new BABYLON.Vector3(0,1, 0);
        var angle=.01;
        var pilotStartb = new BABYLON.Vector3(-.1, -2.0, -5.2);
        var pivot = new BABYLON.TransformNode("root2");
        pivot.position = CoR_At;
        container.meshes[0].parent = pivot;
        container.meshes[0].position = pilotStartb;

        scene.registerBeforeRender(function() {
            pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
        })

    });


    BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
        container.addAllToScene();
let horse = container.meshes[0];
        horse.rotate(BABYLON.Axis.Y, .4, BABYLON.Space.LOCAL);
        horse.scaling = new BABYLON.Vector3(.010, .010,.010);
        var CoR_At = new BABYLON.Vector3(-1, 3, -10);
        var Axis = new BABYLON.Vector3(0,1, 0);
        var angle=.01;
        var pilotStartc = new BABYLON.Vector3(5, -2.0, -1.3);
        var pivot = new BABYLON.TransformNode("root3");
        pivot.position = CoR_At;
      horse.parent = pivot;
        horse.position = pilotStartc;
        scene.registerBeforeRender(function() {
            pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
        })

    });



BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
    container.addAllToScene();
    let horse = container.meshes[0];
    horse.rotate(BABYLON.Axis.Y, -10, BABYLON.Space.LOCAL);
//khojeko horse
    horse.scaling = new BABYLON.Vector3(.010, .010,.010);
    var CoR_At = new BABYLON.Vector3(-1, 3, -10);
    var Axis = new BABYLON.Vector3(0,1, 0);
    var angle=.01;
    var pilotStartd = new BABYLON.Vector3(-3.7, -2.0, -4);
    var pivot = new BABYLON.TransformNode("root4");
    pivot.position = CoR_At;
    horse.parent = pivot;
    horse.position = pilotStartd;
    scene.registerBeforeRender(function() {
        pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
    })

});

BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
    container.addAllToScene();
    let horse = container.meshes[0];
    horse.rotate(BABYLON.Axis.Y, 3.4, BABYLON.Space.LOCAL);
    horse.scaling = new BABYLON.Vector3(.010, .010,.010);
    var CoR_At = new BABYLON.Vector3(-1, 3, -10);
    var Axis = new BABYLON.Vector3(0,1, 0);
    var angle=.01;
    var pilotStarte = new BABYLON.Vector3(-5, -2.0, -1.);
    var pivot = new BABYLON.TransformNode("root");
    pivot.position = CoR_At;
    horse.parent = pivot;
    horse.position = pilotStarte;
    scene.registerBeforeRender(function() {
        pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
    })

});

    BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
        container.addAllToScene();
        let horse = container.meshes[0];
        horse.rotate(BABYLON.Axis.Y, 4.7, BABYLON.Space.LOCAL);

        horse.scaling = new BABYLON.Vector3(.010, .010,.010);
        var CoR_At = new BABYLON.Vector3(-1, 3, -10);
        var Axis = new BABYLON.Vector3(0,1, 0);
        var angle=.01;
        var pilotStartf = new BABYLON.Vector3(-2, -2.0, 4);
        var pivot = new BABYLON.TransformNode("root");
        pivot.position = CoR_At;
        horse.parent = pivot;
        horse.position = pilotStartf;
        scene.registerBeforeRender(function() {
            pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
        })

    });

    BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
        container.addAllToScene();
        let horse = container.meshes[0];
        horse.rotate(BABYLON.Axis.Y, -.9, BABYLON.Space.LOCAL);
//siddai ko ho yo.. mathi ko chai paxadi hary
        horse.scaling = new BABYLON.Vector3(.010, .010,.010);
        var CoR_At = new BABYLON.Vector3(-1, 3, -10);
        var Axis = new BABYLON.Vector3(0,1, 0);
        var angle=.01;
        var pilotStartg = new BABYLON.Vector3(1.5, -2.0, 4.5);
        var pivot = new BABYLON.TransformNode("root");
        pivot.position = CoR_At;
        horse.parent = pivot;
        horse.position = pilotStartg;
        scene.registerBeforeRender(function() {
            pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
        })

    });
    BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
        container.addAllToScene();
        let horse = container.meshes[0];
        horse.rotate(BABYLON.Axis.Y, 0, BABYLON.Space.LOCAL);

        horse.scaling = new BABYLON.Vector3(.010, .010,.010);
        var CoR_At = new BABYLON.Vector3(-1, 3, -10);
        var Axis = new BABYLON.Vector3(0,1, 0);
        var angle=.01;
        var pilotStarth = new BABYLON.Vector3(4.5, -2.0, 2.5);
        var pivot = new BABYLON.TransformNode("root");
        pivot.position = CoR_At;
        horse.parent = pivot;
        horse.position = pilotStarth;
        scene.registerBeforeRender(function() {
            pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
        })

    });
    BABYLON.SceneLoader.LoadAssetContainerAsync("", "assets/carouselAsset/horse2.babylon", scene).then(function (container) {
        container.addAllToScene();
        let horse = container.meshes[0];
        horse.rotate(BABYLON.Axis.Y, 10, BABYLON.Space.LOCAL);

        horse.scaling = new BABYLON.Vector3(.010, .010,.010);
        var CoR_At = new BABYLON.Vector3(-1, 3, -10);
        var Axis = new BABYLON.Vector3(0,1, 0);
        var angle=.01;
        var pilotStarti = new BABYLON.Vector3(-4, -2.0, 2.4);
        var pivot = new BABYLON.TransformNode("root");
        pivot.position = CoR_At;
        horse.parent = pivot;
        horse.position = pilotStarti;
        scene.registerBeforeRender(function() {
          pivot.rotate(Axis, angle, BABYLON.Space.WORLD);
        });
    });


}