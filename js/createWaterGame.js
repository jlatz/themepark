let leftBotCorner = new BABYLON.Vector3(-10,0,5);
let leftTopCorner = new BABYLON.Vector3(-10,0,15);
let rightBotCorner = new BABYLON.Vector3(10,0,5);
let rightTopCorner = new BABYLON.Vector3(10,0,15);
let middleOfArea = new BABYLON.Vector3(0,0,10);

let bmb = BABYLON.MeshBuilder;
let v3 = BABYLON.Vector3;
let watergun;

let direction;
let particleSystem;
let target;
let stand;

function createWaterGame(scene){
    let camera = scene.getCameraByName("UniversalCamera");
    camera.minZ = .01;

    /*
    let middleBox = BABYLON.MeshBuilder.CreateBox("middleBox", {size: .5}, scene);
    middleBox.position = middleOfArea;

    let leftBotBox = BABYLON.MeshBuilder.CreateBox("leftBotBox", {size: .5}, scene);
    leftBotBox.position = leftBotCorner;
    let leftTopBox = BABYLON.MeshBuilder.CreateBox("leftTopBox", {size: .5}, scene);
    leftTopBox.position = leftTopCorner;
    let rightBotBox = BABYLON.MeshBuilder.CreateBox("rightBotBox", {size: .5}, scene);
    rightBotBox.position = rightBotCorner;
    let rightTopBox = BABYLON.MeshBuilder.CreateBox("rightTopBox", {size: .5}, scene);
    rightTopBox.position = rightTopCorner;

    let plane = BABYLON.MeshBuilder.CreatePlane("plane", {width: 20, height: 10}, scene);
    plane.material = new B.StandardMaterial("box_mat", scene);
    plane.material.diffuseTexture = new BABYLON.Texture("assets/textures/game/PatrickArea.png", scene);
    plane.material.diffuseTexture.hasAlpha = true;
    plane.position = middleOfArea;
    plane.position.y += .1;
    plane.rotation = new BABYLON.Vector3(Math.PI/2,0,0);
    */

    stand = createStand(scene);
    stand.position = middleOfArea;
    stand.checkCollisions = true;

    watergun = createWaterGun(scene);
    watergun.position = new v3(0,1.75, 8);

    let forward = new BABYLON.Vector3(0,0,1);
    forward = vecToLocal(forward, watergun);

    direction = forward.subtract(watergun.absolutePosition);
    direction = BABYLON.Vector3.Normalize(direction);

    let particleObj = particle(watergun.position, direction, scene);
    particleSystem = particleObj.particleSystem;

    setParent(particleObj, watergun);

    target = createWaterTarget(scene);
    target.position = new v3(0, 2.25, 12.3);
    watergun.actionManager = new BABYLON.ActionManager(scene);
    watergun.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            {
                trigger: BABYLON.ActionManager.OnPickTrigger
            },
            function(){
                activateGame(scene);
            }
        )
    )
        .then(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function(){
                    deactivateGame(scene);
                }
            )
        );
    {
        scene.actionManager = new BABYLON.ActionManager(scene);
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: 'a'
                },
                function () {
                    movX = -1;
                }
            )
        );
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyUpTrigger,
                    parameter: 'a'
                },
                function () {
                    movX = 0;
                }
            )
        );
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: 'd'
                },
                function () {
                    movX = 1;
                }
            )
        );
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyUpTrigger,
                    parameter: 'd'
                },
                function () {
                    movX = 0;
                }
            )
        );
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: 'w'
                },
                function () {
                    movY = 1;
                }
            )
        );
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyUpTrigger,
                    parameter: 'w'
                },
                function () {
                    movY = 0;
                }
            )
        );
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: 's'
                },
                function () {
                    movY = -1;
                }
            )
        );
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnKeyUpTrigger,
                    parameter: 's'
                },
                function () {
                    movY = 0;
                }
            )
        );
    }

}

function createStand(scene){
    let mat = new BABYLON.StandardMaterial("standMat", scene);
    mat.diffuseTexture = new BABYLON.Texture("assets/textures/game/redwhiteblue.jpg", scene);
    mat.hasAlpha = true;

    let mat1 = new BABYLON.StandardMaterial("standMat", scene);
    mat1.diffuseTexture = new BABYLON.Texture("assets/textures/game/US_Flag.png", scene);
    mat1.hasAlpha = true;

    let frontBox = bmb.CreateBox("frontStand", {height: 1.4, width: 7.5, depth: 1.4}, scene);
    frontBox.position = new v3(0,.7,-1.7);
    frontBox.material = mat;

    let leftPole = bmb.CreateBox("leftPole", {height: 2.6, width: .2, depth: .2});
    leftPole.position = new v3(3.15, 2.7, -1.6);
    leftPole.material = mat;

    let rightPole = bmb.CreateBox("rightPole", {height: 2.6, width: .2, depth: .2});
    rightPole.position = new v3(-3.15, 2.7, -1.6);
    rightPole.material = mat;

    let roof = bmb.CreateBox("roof", {height: .2, width: 7.5, depth: 5});
    roof.position = new v3(0,3.9,0);
    roof.material = mat;

    let backWall = bmb.CreateBox("backWall", {height: 4, width: 7.5, depth: .2});
    backWall.position = new v3(0,2,2.4);
    backWall.material = mat1;

    return BABYLON.Mesh.MergeMeshes([frontBox, leftPole, rightPole, roof, backWall], true, false, false, true, true);
}

function createWaterGun(scene){
    let material = new BABYLON.StandardMaterial("waterGunMat", scene);

    material.diffuseColor = new BABYLON.Color3(.1, .1, .1);

    let leftCyl = bmb.CreateCylinder("leftCyl", {height:.2, diameter: .05}, scene);
    leftCyl.position = new v3(-.25,0,-.25);
    leftCyl.material = material;

    let rightCyl = bmb.CreateCylinder("rightCyl", {height:.2, diameter: .05}, scene);
    rightCyl.position = new v3(.25,0,-.25);
    rightCyl.material = material;

    let leftConnect = bmb.CreateBox("leftCon", {height: .15, width: .25, depth:.025}, scene);
    leftConnect.rotation.y += Math.PI /4;
    leftConnect.position = new v3(.15,0,-.15);
    leftConnect.material = material;

    let rightConnect = bmb.CreateBox("rightCon", {height: .15, width: .25, depth:.025}, scene);
    rightConnect.rotation.y -= Math.PI / 4;
    rightConnect.position = new v3(-.15,0,-.15);
    rightConnect.material = material;

    let body = bmb.CreateBox("body", {height: .2, width: .2, depth:.2}, scene);
    body.position = new v3(0,0,0);
    body.material = material;

    let barrel = bmb.CreateCylinder("barrel", {height:.35, diameter: .1}, scene);
    barrel.rotation.x += Math.PI / 2;
    barrel.position.z += .35/2 + .1;
    barrel.material = material;

    return BABYLON.Mesh.MergeMeshes([leftCyl, rightCyl, leftConnect, rightConnect, body, barrel]);
}

let movX = 0;
let movY = 0;
let gameActive = false;

function activateGame(scene){
    if(!gameActive) {
        hitAmount = 0;
        let camera = scene.getCameraByName("UniversalCamera");
        camera.speed = 0;
        camera.position = new v3(0, 2.25, 7);
        gameActive = true;
        watergun.rotation = new v3(0, 0, 0);
        particleSystem.start();
    }
}
function deactivateGame(scene){
    if(gameActive) {
        let camera = scene.getCameraByName("UniversalCamera");
        camera.speed = 1;
        camera.position = new v3(0, 2, 6);
        gameActive = false;
        particleSystem.stop();
    }
}

function createWaterTarget(scene){
    let box = BABYLON.MeshBuilder.CreateBox("mcg", {height: 1, width: 1, depth: 0.1}, scene);
    box.material = new B.StandardMaterial("mcg_mat", scene);
    box.material.diffuseTexture = new BABYLON.Texture("assets/textures/game/mcgregor.jpg", scene);
    box.material.diffuseTexture.hasAlpha = true;

    let hat = BABYLON.MeshBuilder.CreateBox("mcg", {height: 1, width: 1, depth: 0.1}, scene);
    hat.material = new B.StandardMaterial("mcg_mat", scene);
    hat.material.diffuseTexture = new BABYLON.Texture("assets/textures/game/hat.png", scene);
    hat.material.diffuseTexture.hasAlpha = true;
    hat.position.y += .6;
    hat.position.x -= .1;
    hat.position.z -= .01;

    return BABYLON.Mesh.MergeMeshes([box, hat], true, false, false, true, true);
}
let hitAmount = 0;
let mcgX = Math.random();
let mcgY = Math.random();

function waterGunLoop(){
    if(gameActive){
        watergun.rotation.x += movY * -1/100;
        watergun.rotation.y += movX * 1/100;
        for(p of particleSystem._particles){
            if(target.intersectsPoint(p.position)){
                hitAmount++;
            }
        }
        if(hitAmount >= 1000){
            deactivateGame(scene);
        }
        target.position.x += mcgX/25;
        target.position.y += mcgY/25;
        if(target.position.y >= 3){
            mcgY = -Math.random();
        }else if(target.position.y <= 1){
            mcgY = Math.random();
        }
        if(target.position.x > 3){
            mcgX = -Math.random();
        }else if(target.position.x < -3){
            mcgX = Math.random();
        }
    }
    else{
        watergun.rotation.x = 0;
    }
}


function particle(originPosition, targetPosition, scene){
    let empty = createEmpty("particleHolder", scene);
    empty.position = new v3(originPosition.x, originPosition.y/1, originPosition.z);
    let particleSystem = new BABYLON.ParticleSystem("particles", 200, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("assets/textures/game/water.png", scene);

    // Where the particles come from
    particleSystem.emitter = empty; // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1.0);
    particleSystem.color2 = new BABYLON.Color4(.9, .9, .9, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(.8, .8, .8, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.15;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.4;
    particleSystem.maxLifeTime = .5;

    // Emission rate
    particleSystem.emitRate = 200;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -100, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(targetPosition.x + .01, targetPosition.y + .01, targetPosition.z + .0);
    particleSystem.direction2 = new BABYLON.Vector3(targetPosition.x -.01, targetPosition.y - .01, targetPosition.z - .0);

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI;

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 30;
    particleSystem.maxEmitPower = 50;
    particleSystem.updateSpeed = 0.005;

    empty.particleSystem = particleSystem;
    particleSystem.empty = empty;
    return empty;
}

function setParent(child, parent, alternate = false){
    child.parent = parent;
    if(!alternate) {
        child.setParent(parent);
        parent.addChild(child);
    }
}

function vecToLocal(vector, mesh){
    let m = mesh.getWorldMatrix();
    let v = BABYLON.Vector3.TransformCoordinates(vector, m);
    return v;
}

function createEmpty(name, scene){
    let vertexData = new BABYLON.VertexData();
    vertexData.positions = [0,0,0];
    vertexData.indices = [];
    vertexData.colors = [1,1,1,0];
    vertexData.normals = [0,0,0];

    let customMesh = new BABYLON.Mesh("custom", scene);
    vertexData.applyToMesh(customMesh);

    return customMesh;
}