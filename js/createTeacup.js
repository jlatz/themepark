
function createTeacup(scene,camera) {
    var hemiLight = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 1, 0), scene);
    hemiLight.intensity = 0;
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

    var g = new BABYLON.StandardMaterial(scene);
    g.alpha = 1;
    g.diffuseColor = new BABYLON.Color4(1, 1, 1, 1);


    var baseCircle = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 12, height: .5, diameterBottom: 12}, scene);
    baseCircle.position.x = -40;
    baseCircle.position.z = -17;
    baseCircle.position.y = 1;
    baseCircle.material = baseColor;


    var base = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 16, height: 1, diameterBottom: 16.6}, scene);
    base.position.x = -40;
    base.position.z = -17;
    base.position.y = 0;
    base.material = g;

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



    var cup2 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup2.position.x = -35.4;
    cup2.position.y = 1.8;
    cup2.position.z = -18.5;
    cup2.material = red;

    var cup1  = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 1.5, diameterBottom: 1.4, height: 1, tessellation: 0}, scene);
    cup1.position.x= -38.2;
    cup1.position.y = 1.8;
    cup1.position.z = -18.2;
    cup1.material = white;

    var cuppps  = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: .0000001, diameterBottom: .000000001, height: .0000001, tessellation: 0}, scene);
    cuppps.position.x= -38.2;
    cuppps.position.y = 5.2;
    cuppps.position.z = -18.2;
    cuppps.material = white;

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


    var flag = BABYLON.MeshBuilder.CreateBox("floor", {height: .8, width: 1, depth: .1}, scene);
    flag.position.x = -40;
    flag.position.z = -16.7;
    flag.position.y = 5.65;
    flag.material = blue;
    flag.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe13 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 2.4, depth: .1}, scene);
    stripe13.position.x = -40;
    stripe13.position.z = -15.0;
    stripe13.position.y = 5.323166;
    stripe13.material = red;
    stripe13.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe12 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 2.4, depth: .1}, scene);
    stripe12.position.x = -40;
    stripe12.position.z = -15.0;
    stripe12.position.y = 5.477012;
    stripe12.material = white;
    stripe12.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe11 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 2.4, depth: .1}, scene);
    stripe11.position.x = -40;
    stripe11.position.z = -15.0;
    stripe11.position.y = 5.630858;
    stripe11.material = red;
    stripe11.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe10  = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 2.4, depth: .1}, scene);
    stripe10.position.x = -40;
    stripe10.position.z = -15.0;
    stripe10.position.y = 5.784704;
    stripe10.material = white;
    stripe10.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe9 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 2.4, depth: .1}, scene);
    stripe9.position.x = -40;
    stripe9.position.z = -15.0;
    stripe9.position.y = 5.93855;
    stripe9.material = red;
    stripe9.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe1 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 3.4, depth: .1}, scene);
    stripe1.position.x = -40;
    stripe1.position.z = -15.5;
    stripe1.position.y = 4.4;
    stripe1.material = red;
    stripe1.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe3  = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 3.4, depth: .1}, scene);
    stripe3.position.x = -40;
    stripe3.position.z = -15.5;
    stripe3.position.y = 4.553846;
    stripe3.material = white;
    stripe3.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe4 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 3.4, depth: .1}, scene);
    stripe4.position.x = -40;
    stripe4.position.z = -15.5;
    stripe4.position.y = 4.707692;
    stripe4.material = red;
    stripe4.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe5 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 3.4, depth: .1}, scene);
    stripe5.position.x = -40;
    stripe5.position.z = -15.5;
    stripe5.position.y = 4.861538;
    stripe5.material = white;
    stripe5.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe6 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 3.4, depth: .1}, scene);
    stripe6.position.x = -40;
    stripe6.position.z = -15.5;
    stripe6.position.y = 5.015384;
    stripe6.material = red;
    stripe6.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);

    var stripe2 = BABYLON.MeshBuilder.CreateBox("floor", {height: .153846, width: 3.4, depth: .1}, scene);
    stripe2.position.x = -40;
    stripe2.position.z = -15.5;
    stripe2.position.y = 5.16923;
    stripe2.material = white;
    stripe2.rotate(BABYLON.Axis.Y, .5 * Math.PI, BABYLON.Space.LOCAL);


    var CoR_At = new BABYLON.Vector3(-36.9, 1.8, -19);
    var axis = new BABYLON.Vector3(0, 10, 0);
    var pilotStart = new BABYLON.Vector3(-1.5, 0, .5);
    var pilotStarts = new BABYLON.Vector3(-1.5, .4, .5);
    var pilotStart2 = new BABYLON.Vector3(1.3, 0, .8);
    var pilotStart3 = new BABYLON.Vector3(-.05, 0, -1.6);

    var CoR_At2 = new BABYLON.Vector3(-40, 1.8, -17);
    var axis2 = new BABYLON.Vector3(0, 10, 0);
    var Start1 = new BABYLON.Vector3(3.1, 0, -2);
    var Start1n = new BABYLON.Vector3(3.1, -.79, -2);

    var pivot = new BABYLON.TransformNode("root");
    pivot.position = CoR_At;
    cup1.parent = pivot;
    cup1.position = pilotStart;
    cuppps.parent = pivot;
    cuppps.position = pilotStarts
    cup2.parent = pivot;
    cup2.position = pilotStart2;
    cup3.parent = pivot;
    cup3.position = pilotStart3;

    var pivot2 = new BABYLON.TransformNode("root");
    pivot2.position = CoR_At2;
    pivot.parent = pivot2;
    pivot.position = Start1;
    cupBase3.parent = pivot2;
    cupBase3.position = Start1n;


//////////////////////////////////////////////////////

    var CoR_At3 = new BABYLON.Vector3(-43.1, 1.8, -19);
    var pilotStart4 = new BABYLON.Vector3(-1.5, 0, .5);
    var pilotStart5 = new BABYLON.Vector3(1.3, 0, .8);
    var pilotStart6 = new BABYLON.Vector3(-.05, 0, -1.6);

    var CoR_At4 = new BABYLON.Vector3(-40, 1.8, -17);
    var Start2 = new BABYLON.Vector3(-3.1, 0, -2);
    var Start2n = new BABYLON.Vector3(-3.1, -.79, -2);

    var pivot3 = new BABYLON.TransformNode("root");
    pivot3.position = CoR_At3;
    cup4.parent = pivot3;
    cup4.position = pilotStart4;
    cup5.parent = pivot3;
    cup5.position = pilotStart5;
    cup6.parent = pivot3;
    cup6.position = pilotStart6;

    var pivot4 = new BABYLON.TransformNode("root");
    pivot4.position = CoR_At4;
    pivot3.parent = pivot4;
    pivot3.position = Start2;
    cupBase2.parent = pivot4;
    cupBase2.position = Start2n;


    //////////////////////////////////////////////////////
    var CoR_At5 = new BABYLON.Vector3(-40, 1.8, -13.5);
    var pilotStart7 = new BABYLON.Vector3(-.5, 0, .5);
    var pilotStart8 = new BABYLON.Vector3(1.3, 0, .8);
    var pilotStart9 = new BABYLON.Vector3(-.05, 0, -1.6);

    var CoR_At6 = new BABYLON.Vector3(-40, 1.8, -17);
    var Start3 = new BABYLON.Vector3(0, 0, 3.5);
    var Start3n = new BABYLON.Vector3(0, -.79, 3.5);

    var pivot5 = new BABYLON.TransformNode("root");
    pivot5.position = CoR_At5;
    cup7.parent = pivot5;
    cup7.position = pilotStart7;
    cup8.parent = pivot5;
    cup8.position = pilotStart8;
    cup9.parent = pivot5;
    cup9.position = pilotStart9;

    var pivot6 = new BABYLON.TransformNode("root");
    pivot6.position = CoR_At6;
    pivot5.parent = pivot6;
    pivot5.position = Start3;
    cupBase1.parent = pivot6;
    cupBase1.position = Start3n;


    var myPath = [
        new BABYLON.Vector3(-48, 1.3, -24),
        new BABYLON.Vector3(-30, 1.3, -24),
        new BABYLON.Vector3(-30, 1.3, -10),
        new BABYLON.Vector3(-48, 1.3, -10),
    ];

    //var tube = BABYLON.MeshBuilder.CreateTube("tube", {path: myPath, radius: .1, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true}, scene);













    baseCircle.actionManager = new BABYLON.ActionManager(scene);
    baseCircle.actionManager
        .registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPickTrigger,
                hemiLight,
                'diffuse',
                BABYLON.Color3.Black(),
                1000
            )
        )
        .then(
            new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.NothingTrigger},
                function(){
                    scene.activeCamera = new BABYLON.FollowCamera("tunnelCam", new BABYLON.Vector3(0,-10,0), scene);
                    scene.activeCamera.lockedTarget = cuppps;
                    scene.activeCamera.Acceleration = 0.001;
                    scene.activeCamera.radius = .3;
                    scene.activeCamera.rotationOffset = -10000;
                    scene.activeCamera.heightOffset = 0;

                }
            )
        )

        .then(
            new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.NothingTrigger},
                function(){
                    var angle = 0.02;
                    scene.registerAfterRender(function () {
                        pivot.rotate(axis, angle, BABYLON.Space.WORLD);
                        pivot2.rotate(axis, angle, BABYLON.Space.WORLD);

                        pivot3.rotate(axis, angle, BABYLON.Space.WORLD);
                        pivot4.rotate(axis, angle, BABYLON.Space.WORLD);

                        pivot5.rotate(axis, angle, BABYLON.Space.WORLD);
                        pivot6.rotate(axis, angle, BABYLON.Space.WORLD);

                    });
                }
            )
        );

    cup1.actionManager = new BABYLON.ActionManager(scene);
    cup1.actionManager
        .registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPickTrigger,
                hemiLight,
                'diffuse',
                BABYLON.Color3.Black(),
                1000
            )
        )

        .then(
            new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.NothingTrigger},
                function(){
                    scene.activeCamera = camera;
                }
            )
        );
}