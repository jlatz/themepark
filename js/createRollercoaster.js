function createRollerCoaster(scene,camera) {
    var lFence = BABYLON.MeshBuilder.CreateBox("lFence", {height: 0.5, width: 25, depth: 0.25}, scene);
    lFence.position.x = 37.5;
    lFence.position.y = 0.25;
    lFence.position.z = -25;
    var rFence = BABYLON.MeshBuilder.CreateBox("rFence", {height: 0.5, width: 65, depth: 0.25}, scene);
    rFence.position.x = -17.5;
    rFence.position.y = 0.25;
    rFence.position.z = -25;

    //Path Posts
    var startPost = BABYLON.MeshBuilder.CreateBox("startPost", {height: 18.5, width: 1, depth: 1}, scene);
    startPost.position.x = 20;
    startPost.position.y = 0.75;
    startPost.position.z = -30;

    var post2 = BABYLON.MeshBuilder.CreateBox("post2", {height: 19.5, width: 1, depth: 1}, scene);
    post2.position.x = 32.5;
    post2.position.y = 1.25;
    post2.position.z = -30;

    var post3 = BABYLON.MeshBuilder.CreateBox("post3", {height: 23, width: 1, depth: 1}, scene);
    post3.position.x = 34;
    post3.position.y = 10;
    post3.position.z = -42;

    var post4 = BABYLON.MeshBuilder.CreateBox("post4", {height: 16, width: 1, depth: 1}, scene);
    post4.position.x = 20;
    post4.position.y = 7.5;
    post4.position.z = -43;

    var post5 = BABYLON.MeshBuilder.CreateBox("post5", {height: 9, width: 1, depth: 1}, scene);
    post5.position.x = -5;
    post5.position.y = 2;
    post5.position.z = -43;

    var post6 = BABYLON.MeshBuilder.CreateBox("post6", {height: 9, width: 1, depth: 1}, scene);
    post6.position.x = 5;
    post6.position.y = 2.5;
    post6.position.z = -30;

    var post7 = BABYLON.MeshBuilder.CreateBox("post6", {height: 5, width: 1, depth: 1}, scene);
    post7.position.x = -5;
    post7.position.y = 2.5;
    post7.position.z = -30;

    var redPost = BABYLON.MeshBuilder.CreateBox("redPost", {height: 5, width: 1, depth: 1}, scene);
    redPost.position.x = 15;
    redPost.position.y = 2.5;
    redPost.position.z = -35;
    var redMaterial = new BABYLON.StandardMaterial("red_mat", scene);
    redMaterial.diffuseColor = BABYLON.Color3.Red();
    redPost.material = redMaterial;

    var bluePost = BABYLON.MeshBuilder.CreateBox("bluePost", {height: 15, width: 1, depth: 1}, scene);
    bluePost.position.x = -15;
    bluePost.position.y = 7.5;
    bluePost.position.z = -35;
    var blueMaterial = new BABYLON.StandardMaterial("blue_mat", scene);
    blueMaterial.diffuseColor = BABYLON.Color3.Blue();
    bluePost.material = blueMaterial;

    var whitePost = BABYLON.MeshBuilder.CreateBox("whitePost", {height: 10, width: 1, depth: 1}, scene);
    whitePost.position.x = 0;
    whitePost.position.y = 5;
    whitePost.position.z = -35;
    var whiteMaterial = new BABYLON.StandardMaterial("white_mat", scene);
    whiteMaterial.diffuseColor = BABYLON.Color3.White();
    whitePost.material = whiteMaterial;

    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.particleTexture = new BABYLON.Texture("assets/textures/red.jpg", scene);
    particleSystem.emitter = redPost; // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(0, 2.5, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 2.5, 0); // To...
    particleSystem.minSize = 3;
    particleSystem.maxSize = 5;
    particleSystem.minLifeTime = 1;
    particleSystem.maxLifeTime = 5;
    particleSystem.emitRate = 10
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem.direction1 = new BABYLON.Vector3(-1, 5, 0);
    particleSystem.direction2 = new BABYLON.Vector3(1, 5, 0);
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;
    particleSystem.minEmitPower = 0.5;
    particleSystem.maxEmitPower = 1;
    particleSystem.updateSpeed = 0.05;
    particleSystem.start();

    var particleSystem2 = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem2.particleTexture = new BABYLON.Texture("assets/textures/white.jpg", scene);
    particleSystem2.emitter = whitePost; // the starting object, the emitter
    particleSystem2.minEmitBox = new BABYLON.Vector3(-0.5, 5, 0); // Starting all from
    particleSystem2.maxEmitBox = new BABYLON.Vector3(0.5, 5, 0); // To...
    particleSystem2.minSize = 3;
    particleSystem2.maxSize = 5;
    particleSystem2.minLifeTime = 1;
    particleSystem2.maxLifeTime = 5;
    particleSystem2.emitRate = 10
    particleSystem2.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem2.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem2.direction1 = new BABYLON.Vector3(-1, 7.5, 0);
    particleSystem2.direction2 = new BABYLON.Vector3(1, 7.5, 0);
    particleSystem2.minAngularSpeed = 0;
    particleSystem2.maxAngularSpeed = Math.PI;
    particleSystem2.minEmitPower = 0.5;
    particleSystem2.maxEmitPower = 1;
    particleSystem2.updateSpeed = 0.05;
    particleSystem2.start();

    var particleSystem3 = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem3.particleTexture = new BABYLON.Texture("assets/textures/blue.jpg", scene);
    particleSystem3.emitter = bluePost; // the starting object, the emitter
    particleSystem3.minEmitBox = new BABYLON.Vector3(-0.5, 7.5, 0); // Starting all from
    particleSystem3.maxEmitBox = new BABYLON.Vector3(0.5, 7.5, 0); // To...
    particleSystem3.minSize = 3;
    particleSystem3.maxSize = 5;
    particleSystem3.minLifeTime = 1;
    particleSystem3.maxLifeTime = 5;
    particleSystem3.emitRate = 10
    particleSystem3.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem3.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem3.direction1 = new BABYLON.Vector3(-1, 10, 0);
    particleSystem3.direction2 = new BABYLON.Vector3(1, 10, 0);
    particleSystem3.minAngularSpeed = 0;
    particleSystem3.maxAngularSpeed = Math.PI;
    particleSystem3.minEmitPower = 0.5;
    particleSystem3.maxEmitPower = 1;
    particleSystem3.updateSpeed = 0.05;
    particleSystem3.start();

    var sectionData = function (startAt, options) {
        this.start = startAt;
        this.options = options;
    }

    var createTrack = function(points, sections) {

        var directions = [];
        var rotations = [];
        var carriageRotations = [];
        var passengerRotations = [];
        var nbSections = sections.length;

        var looped = (sections[nbSections - 1].start === 0);
        for(var i = 1; i < nbSections - looped; i++) {
            if (sections[i - 1].start > sections[i].start) {
                console.log("sections not in order");
                return;
            }
        }
        if (0 < sections[nbSections - 1].start && sections[nbSections - 2].start > sections[nbSections - 1].start) {
            console.log("last section not in order");
            return;
        }
        var section = sections[0];
        if (section.start > 0) {
            startSection = new sectionData(0, {});
            sections.unshift(startSection);
            nbSections = sections.length;
        }

        if (0 < sections[nbSections - 1].start && sections[nbSections - 1].start < points.length - 1) { //assume need to close loop
            var endSection = new sectionData(0, sections[0].options);
            sections.push(endSection);
        }

        for (var i = 0; i < sections.length - 1; i++) {
            createSection(points, sections[i], sections[i + 1]);
        }

        //return {rotations:rotations, tangents: tangents, normals: normals, binormals: binormals, carriageRotations: carriageRotations, passengerRotations: passengerRotations}
        return {directions: directions, rotations:rotations, carriageRotations: carriageRotations, passengerRotations: passengerRotations}

        function createSection(points, startSection, endSection) {
            var railsFrom = startSection.start;
            var railsTo = endSection.start;
            if(endSection.start === 0) {
                railsTo = points.length;
            }

            var nbRails = railsTo - railsFrom;

            var initialLean = (startSection.options.lean === void 0) ? 0 : startSection.options.lean; //lean of carriage about direction axis at start, a phi variable
            var initialTurn = (startSection.options.turn === void 0) ? 0 : startSection.options.turn; // turn of carriage around upright at start, a theta variable
            var leanTwists  = (startSection.options.leanTwists === void 0) ? 0 : startSection.options.leanTwists; //number of  lean twists (+ve counter clockwise, -ve clockwise)
            var leanWaves  = (startSection.options.leanWaves === void 0) ? 0 : startSection.options.leanWaves; //number of lean waves
            var leanWaveAngle  = (startSection.options.leanWaveAngle === void 0) ? 0 : startSection.options.leanWaveAngle; //angle for lean wave
            var turnTwists  = (startSection.options.turnTwists === void 0) ? 0 : startSection.options.turnTwists; //number of  turn twists (+ve counter clockwise, -ve clockwise)
            var turnWaves  = (startSection.options.turnWaves === void 0) ? 0 : startSection.options.turnWaves; //number of turn waves
            var turnWaveAngle  = (startSection.options.turnWaveAngle === void 0) ? 0 : startSection.options.turnWaveAngle; //angle for turn wave

            var finalLean = (endSection.options.lean === void 0) ? 0 : endSection.options.lean;
            var finalTurn = (endSection.options.turn === void 0) ? 0 : endSection.options.turn;

            //lean waves supersede lean twists unless leanWaveAngle = 0
            if (leanWaves > 0 && Math.abs(leanTwists) > 0) {
                if (leanWaveAngle == 0) {
                    leanWaves = 0;
                }
                else {
                    leanTwists = 0;
                }
            }

            //turn waves supersede turn twists unless turnWaveAngle = 0
            if (turnWaves > 0 && Math.abs(turnTwists) > 0) {
                if (turnWaveAngle == 0) {
                    turnWaves = 0;
                }
                else {
                    turnTwists = 0;
                }
            }

            //rail transformation
            var rotationMatrixY = BABYLON.Matrix.Identity();
            var rotationMatrixZ = BABYLON.Matrix.Identity();
            var rotationMatrix = BABYLON.Matrix.Identity();

            var tilt  = 0; //of rail rotation about (0, 0, 1) gives gradient
            var swivel = 0 //rotation of rail around (0, 1, 0)

            var deltaPhi = (finalLean  + 2 * leanTwists * Math.PI - initialLean) / (nbRails); //increase in phi per rail for lean twist
            var deltaTheta = (finalTurn  + 2 * turnTwists * Math.PI - initialTurn) / (nbRails); //increase in theta per rail for lean twist
            var phi = initialLean;
            var theta = initialTurn;
            var m = BABYLON.Matrix.Identity();
            var initialRailDirection = BABYLON.Axis.X;
            var initialUprightDirection = BABYLON.Axis.Y;
            var initialLevelDirection = BABYLON.Axis.Z;
            var railDirection = BABYLON.Vector3.Zero();
            var uprightDirection = BABYLON.Vector3.Zero();
            var levelDirection = BABYLON.Vector3.Zero();
            var leanDirection = BABYLON.Vector3.Zero();
            var turnDirection = BABYLON.Vector3.Zero();
            var carriageNormal = BABYLON.Vector3.Zero();
            BABYLON.Vector3.TransformNormalToRef(initialRailDirection, rotationMatrix, railDirection);
            var rotationMatrixLean = BABYLON.Matrix.Identity();
            var rotationMatrixTurn = BABYLON.Matrix.Identity();
            var rotationMatrixPassenger = BABYLON.Matrix.Identity();
            var initialPosition = BABYLON.Vector3.Zero();

            var normal = BABYLON.Vector3.Zero();
            var binormal = BABYLON.Vector3.Zero();

            var rotation = BABYLON.Matrix.Identity();
            var gradLean = (finalLean - initialLean) / (nbRails - 1); // lean gradient
            var gradTurn = (finalTurn - initialTurn) / (nbRails - 1); // turn gradient
            var railCount = 0;
            for (var i = railsFrom; i < railsTo; i++) {
                points[(i + 1) % points.length].subtractToRef(points[i], railDirection);
                railDirection.normalize();
                swivel = -Math.atan2(railDirection.z, railDirection.x);
                tilt = Math.atan2(Math.abs(railDirection.y), Math.abs(railDirection.x));
                tilt *= Math.sign(railDirection.y);
                BABYLON.Matrix.RotationAxisToRef(BABYLON.Axis.Y, swivel, rotationMatrixY);
                BABYLON.Matrix.RotationAxisToRef(BABYLON.Axis.Z, tilt, rotationMatrixZ);
                rotationMatrixZ.multiplyToRef(rotationMatrixY, rotationMatrix);
                BABYLON.Vector3.TransformNormalToRef(initialUprightDirection, rotationMatrix, uprightDirection);
                BABYLON.Vector3.TransformNormalToRef(initialLevelDirection, rotationMatrix, levelDirection);
                uprightDirection.normalize();
                levelDirection.normalize();

                if (leanWaves > 0) {
                    phi = initialLean + railCount * gradLean + leanWaveAngle * Math.sin(railCount * leanWaves * Math.PI / (nbRails - 1));
                }
                else {
                    phi += deltaPhi;
                }
                if (turnWaves > 0) {
                    theta = initialTurn + railCount * gradTurn + turnWaveAngle * Math.sin(railCount * turnWaves * Math.PI / (nbRails - 1));
                }
                else {
                    theta += deltaTheta;
                }
                railCount++;
                BABYLON.Matrix.RotationAxisToRef(railDirection, phi, rotationMatrixLean);
                BABYLON.Vector3.TransformNormalToRef(uprightDirection, rotationMatrixLean, carriageNormal);
                BABYLON.Matrix.RotationAxisToRef(carriageNormal, theta, rotationMatrixTurn);

                BABYLON.Matrix.RotationAxisToRef(initialUprightDirection, theta, rotationMatrixPassenger);
                passengerRotations.push(rotationMatrixPassenger.clone());

                rotationMatrix.multiplyToRef(rotationMatrixLean, rotation);
                carriageRotations.push(rotation.clone());
                rotation.multiplyToRef(rotationMatrixTurn, rotation);
                rotations.push(rotation.clone())

                directions.push(railDirection.clone());
            }
        }



    }


    // Create array of points to describe the curve
    var currentPoint

    var points = [];
    //Straight section (0)
    var n = 100; // number of points
    var railLength = 0.5;
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            i * railLength - 25,
            i * 0.1 + 1.5,
            -30
        ));
    }
    for (var i = 0; i < 20 ; i++) {
        points.push( new BABYLON.Vector3(
            i * railLength + 25,
            11.5,
            -30
        ));
    }
    for (var i = 0; i < 30 ; i++) {
        points.push( new BABYLON.Vector3(
            35,
            11.5 + i*railLength,
            -(i * railLength) - 30
        ));
    }
    for (var i = n; i >= 0 ; i--) {
        points.push( new BABYLON.Vector3(
            i * railLength - 17,
            i * 0.2 + 1.5,
            -43
        ));
    }
    for (var i = 0; i < 45 ; i++) {
        points.push( new BABYLON.Vector3(
            -17 - (i * railLength),
            1.5,
            -43
        ));
    }
    for (var i = 0; i < 25 ; i++) {
        points.push( new BABYLON.Vector3(
            -42,
            1.5,
            i * railLength - 43
        ));
    }
    for (var i = 0; i < 30 ; i++) {
        points.push( new BABYLON.Vector3(
            -42 + (i * railLength),
            1.5,
            -30
        ));
    }

    var options0 = {
        lean: 0,
        leanTwists: 3,
        leanWaves: 0,
        leanWaveAngle: 0,
        turn: 0,
        turnTwists: 0,
        turnWaves: 0,
        turnWaveAngle: 0
    }

    var options1 = {
        lean: 0,
        leanTwists: 0,
        leanWaves: 0,
        leanWaveAngle: 0,
        turn: 0,
        turnTwists: 0,
        turnWaves: 0,
        turnWaveAngle: 0
    }

    var section0 = new sectionData(0, options1);
    var section1 = new sectionData(100, options1);
    var section2 = new sectionData(120, options1);
    var section3 = new sectionData(135, options1);
    var section4 = new sectionData(145, options0);
    var section5 = new sectionData(245, options1);

    var sections = [section0, section1, section2, section3,section4,section5];

    var track = createTrack(points, sections);
    var normals = [];
    var binormals = [];

    var isFreight = true;

    //Carriage Material
    var carMaterial = new BABYLON.StandardMaterial("carMat", scene);
    carMaterial.diffuseTexture = new BABYLON.Texture("assets/textures/america.jpg", scene);

    var freightMaterial = new BABYLON.StandardMaterial("freight_mat", scene);
    freightMaterial.diffuseColor = BABYLON.Color3.Blue();

    //Create carriage and apply material
    var car = BABYLON.MeshBuilder.CreateBox("car", {width: 3, height:0.5, depth: 2}, scene);
    car.material = carMaterial;

    //Switch view
    car.actionManager = new BABYLON.ActionManager(scene);
    car.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function(){
                    scene.activeCamera = new BABYLON.FollowCamera("doorCam", new BABYLON.Vector3(0,10,-520), scene);
                    scene.activeCamera.lockedTarget = car;
                    scene.activeCamera.rotationOffset = 90;
                    scene.activeCamera.heightOffset = 2;
                    scene.activeCamera.cameraAcceleration = 0.01;
                    scene.activeCamera.maxCameraSpeed = 5;
                    scene.activeCamera.radius = 1;

                }
            )
        )
        .then(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function(){
                    scene.activeCamera = camera;
                }
            )
        );

    var freight = BABYLON.MeshBuilder.CreateBox("freight", {width: 0.75, height:1, depth: 0.25}, scene);
    freight.material = freightMaterial;
    freight.position.y = 0.5;
    freight.position.x = -1;

    //var car = BABYLON.Mesh.MergeMeshes([carBody, freight]);
    freight.parent = car;

    var deltaI = 0;
    var speed = 0.25;
    var drag = Math.round(1 / speed);
    var pace = Math.round(speed);
    var nbPoints = points.length;

    //store looped positions and orientations
    var cpos = [];
    var crot = [];
    var frot = [];
    var carPosition = BABYLON.Vector3.Zero();

    buildRide = function() {
        var i=0;
        deltaI = 0;
        drag = Math.round(1 / speed);
        pace = Math.round(speed);
        cpos = [];
        crot = [];
        frot = [];
        while (i < nbPoints) {
            if(speed >= 1) {
                cpos.push(points[i]);
                if(isFreight) {
                    crot.push(BABYLON.Quaternion.FromRotationMatrix(track.rotations[i]));
                }
                else {
                    crot.push(BABYLON.Quaternion.FromRotationMatrix(track.carriageRotations[i]));
                    frot.push(BABYLON.Quaternion.FromRotationMatrix(track.passengerRotations[i]));
                }
                i += pace;

            }
            else {
                carPosition.x = points[i].x + deltaI * (points[(i + 1) % nbPoints].x - points[i]. x) / drag;
                carPosition.y = points[i].y + deltaI * (points[(i + 1) % nbPoints].y - points[i]. y) / drag;
                carPosition.z = points[i].z + deltaI * (points[(i + 1) % nbPoints].z - points[i]. z) / drag;

                cpos.push(carPosition.clone());

                if(isFreight) {
                    crot.push(BABYLON.Quaternion.FromRotationMatrix(track.rotations[i]));
                }
                else {
                    crot.push(BABYLON.Quaternion.FromRotationMatrix(track.carriageRotations[i]));
                    frot.push(BABYLON.Quaternion.FromRotationMatrix(track.passengerRotations[i]));
                }
                i = (Math.floor(i + (deltaI + 1) / drag))
                deltaI = (deltaI + 1) % drag;
            }
        }
        nbSteps = cpos.length;
    }

    var buildVectors = function() {
        normals = [];
        binormals = [];
        var normal = BABYLON.Vector3.Zero();
        var binormal = BABYLON.Vector3.Zero();
        for(var i = 0; i < nbPoints; i++) {
            if (isFreight) {
                BABYLON.Vector3.TransformNormalToRef(BABYLON.Axis.Y, track.rotations[i], normal);
                BABYLON.Vector3.TransformNormalToRef(BABYLON.Axis.Z, track.rotations[i], binormal);
            }
            else {
                BABYLON.Vector3.TransformNormalToRef(BABYLON.Axis.Y, track.carriageRotations[i], normal);
                BABYLON.Vector3.TransformNormalToRef(BABYLON.Axis.Z, track.carriageRotations[i], binormal);
            }
            normals.push(normal.clone());
            binormals.push(binormal.clone());
        }
    }

    buildRide();
    buildVectors();
    var normalLines = drawVectors(normals, points, 2, BABYLON.Color3.Red(), false, scene);
    var binormalLines = drawVectors(binormals, points, 2, BABYLON.Color3.Green(), false, scene);

    i = 0;
    var nbSteps = cpos.length;
    var animate = true;
    scene.registerAfterRender(function() {
        if (animate) {
            car.position = cpos[i];
            car.rotationQuaternion = crot[i];
            if(!isFreight) {
                freight.rotationQuaternion = frot[i];
            }

            i += 1;
            i %= nbSteps;
        }
    });

    var normals = [];
    var binormals = [];
    var normal = BABYLON.Vector3.Zero();
    var binormal = BABYLON.Vector3.Zero();

    var offset = 0.9;
    var height = -0.35;
    var plusPoints = [];
    var negPoints = [];

    var sleeper = BABYLON.MeshBuilder.CreateBox("", {width: 0.5, height: 0.25, depth: 2.5}, scene);
    sleeper.material = new BABYLON.StandardMaterial("", scene);
    sleeper.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
    sleeper.position.y = -0.5;

    for (var i = 0; i < points.length; i+=5) {
        BABYLON.Vector3.TransformNormalToRef(BABYLON.Axis.Y, track.carriageRotations[i], normal);
        BABYLON.Vector3.TransformNormalToRef(BABYLON.Axis.Z, track.carriageRotations[i], binormal);
        plusPoints.push(points[i].add(binormal.scale(offset)).add(normal.scale(height)));
        negPoints.push(points[i].subtract(binormal.scale(offset)).add(normal.scale(height)));

        var nsleeper = sleeper.createInstance("")

        nsleeper.position.x = points[i].x;
        nsleeper.position.y = points[i].y;
        nsleeper.position.z = points[i].z;

        nsleeper.rotationQuaternion = BABYLON.Quaternion.FromRotationMatrix(track.carriageRotations[i]);
        nsleeper.position.subtractInPlace(normal.scale(0.5));
        nsleeper.freezeWorldMatrix();
    }

    plusPoints.push(plusPoints[0]);
    negPoints.push(negPoints[0]);

    var plusTube = BABYLON.MeshBuilder.CreateTube("tube", {path: plusPoints, radius: 0.1, tessellation: 4}, scene);
    var negTube = BABYLON.MeshBuilder.CreateTube("tube", {path: negPoints, radius: 0.1, tessellation: 4}, scene);
    plusTube.material = new BABYLON.StandardMaterial("", scene);
    plusTube.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    negTube.material = new BABYLON.StandardMaterial("", scene);
    negTube.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    plusTube.freezeWorldMatrix();
    negTube.freezeWorldMatrix();

    return scene;

};

//Draw vectors function
function drawVectors(vectors, positions, size, color, show, sc) {
    color = color || BABYLON.Color3.White();
    sc = sc || scene;
    size = size || 1;

    var lines = [];
    for (var i = 0; i < vectors.length - 1; i++) {
        var v1 = positions[i];
        var v2 = v1.add(vectors[i].scale(size));
        lines.push([v1, v2]);
    }
    var vectorLines = BABYLON.MeshBuilder.CreateLineSystem("vectorLines", {lines: lines}, sc);
    vectorLines.color = color;
    vectorLines.isVisible = show;
    return vectorLines;
}