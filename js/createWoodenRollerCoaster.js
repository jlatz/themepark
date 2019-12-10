function createWoodenRollerCoaster(scene) {
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


    // Create array of points to describe the track
    var currentPoint
    var points = [];

    /*// Create array of points to describe the curve
    var points = [];
    var n = 1040; // number of points
    var r = 20; //radius
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            20 + r * Math.cos(i * Math.PI * 2/n),
            35,
            r * Math.sin(i * Math.PI * 2/n)
        ));
    }
    points.push(points[0]); // push to close path
    */

    //Straight section (0)
    var n = 30; // number of points
    var railLength = 0.5
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            i* railLength,
            .5,
            28
        ));
    }
    currentPoint = points[points.length - 1];

    //Curve up section (1)
    n = 20; // number of points
    var r = 10; //radius
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x + r * Math.cos(3 * Math.PI / 2 + (i + 1)  * Math.PI / (4 * n)),
            currentPoint.y + r * Math.sin(3 * Math.PI / 2 + (i + 1) * Math.PI / (4 * n)) + r,
            28
        ));
    }
    currentPoint = points[points.length - 1];

    //Straight up section (2)
    n = 35; // number of points
    railLength = 0.27
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x + (i + 1) * railLength,
            currentPoint.y + (i + 1) * railLength,
            28
        ));
    }
    currentPoint = points[points.length - 1];

    //Curve to flat section (3)
    n = 15; // number of points
    var r = 10; //radius
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x + r * Math.cos(3 * Math.PI / 4 - (i + 1)  * Math.PI / (4 * n)) + r / Math.sqrt(2),
            currentPoint.y + r * Math.sin(3 * Math.PI / 4 - (i + 1) * Math.PI / (4 * n)) - r / Math.sqrt(2),
            28
        ));
    }
    currentPoint = points[points.length - 1];

    //Curve to change direction (4)
    n = 30; // number of points
    var r = 10; //radius
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x + r * Math.cos(3 * Math.PI / 2 + (i + 1)  * Math.PI / (2 * n)),
            currentPoint.y,
            currentPoint.z + r * Math.sin(3 * Math.PI / 2 + (i + 1) * Math.PI / (2 * n)) + r
        ));
    }
    currentPoint = points[points.length - 1];

    //Straight section (5)
    n = 5; // number of points
    railLength = 0.5
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x,
            currentPoint.y,
            currentPoint.z + (i + 1)* railLength
        ));
    }
    currentPoint = points[points.length - 1];

    //Curve to change direction (6)
    n = 20; // number of points
    r = 5; //radius
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x + r * Math.cos((i + 1)  * Math.PI / (2 * n)) - r,
            currentPoint.y,
            currentPoint.z + r * Math.sin((i + 1) * Math.PI / (2 * n))
        ));
    }
    currentPoint = points[points.length - 1];

    //Curve down (7)
    n = 35; // number of points
    railLength = 0.30;
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x - (i + 1) * railLength,
            currentPoint.y - (i + 1) * (i + 1) * railLength * railLength / 20,
            currentPoint.z
        ));
    }
    currentPoint = points[points.length - 1];

    //Curve up (8)
    n = 50; // number of points
    railLength = 0.30;
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x - (i + 1) * railLength,
            currentPoint.y + ((44 - i) * (44 - i) - 45 * 45) * railLength * railLength / 20,
            currentPoint.z
        ));
    }
    currentPoint = points[points.length - 1];

    //Straight section (9)
    n = 35; // number of points
    railLength = 0.5
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x - (i + 1) * railLength ,
            currentPoint.y,
            currentPoint.z
        ));
    }
    currentPoint = points[points.length - 1];

    //Semi circle section (10)
    n = 50; // number of points
    r = 9.05; //radius
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x + r * Math.cos(Math. PI / 2 + (i + 1)  * Math.PI / n),
            currentPoint.y,
            currentPoint.z + r * Math.sin(Math. PI / 2 + (i + 1) * Math.PI / n) - r
        ));
    }
    currentPoint = points[points.length - 1];

    //Close gap (11)
    n = 1.05; // number of points
    railLength = 0.5
    for (var i = 0; i < n ; i++) {
        points.push( new BABYLON.Vector3(
            currentPoint.x + (i + 1) * railLength ,
            currentPoint.y - (i + 1) * railLength /10,
            currentPoint.z
        ));
    }

    currentPoint = points[points.length - 1];
    console.log(currentPoint)

    points.push(points[0]); // push to close path

    // Creation of a lines mesh
    //var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: points}, scene);

    points.pop(); // remove for car directions

    var options0 = {
        lean: 0,
        leanTwists: 0,
        leanWaves: 0,
        leanWaveAngle: 0,
        turn: 0,
        turnTwists: 0,
        turnWaves: 2,
        turnWaveAngle: 0
    }

    var options1 = {
        lean: Math.PI / 2,
        leanTwists: 0,
        leanWaves: 0,
        leanWaveAngle: 0,
        turn: 0,
        turnTwists: 0,
        turnWaves: 2,
        turnWaveAngle: 0
    }

    var section0 = new sectionData(0, options0); //<---------------------------------------------------------------------------------------
    var section1 = new sectionData(30, {});
    var section2 = new sectionData(50, {});
    var section3 = new sectionData(85, {});
    var section4 = new sectionData(100, {});
    var section5 = new sectionData(130, {});
    var section6 = new sectionData(135, {});
    var section7 = new sectionData(155, {});
    var section8 = new sectionData(190, {});
    var section9 = new sectionData(240, {});
    var section10 = new sectionData(275, {});
    //var section10 = new sectionData(275, options1);
    var section11 = new sectionData(281, {});

    var sections = [section0, section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11];

    var track = createTrack(points, sections);

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
    sleeper.material.diffuseColor = new BABYLON.Color3(103/255, 49/255, 3/255);
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

    plusTube.freezeWorldMatrix();
    negTube.freezeWorldMatrix();

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 100, width: 100, subdivisions: 1}, scene);
    ground.material = new BABYLON.StandardMaterial("ground_mat", scene);
    ground.material.ambientColor = new BABYLON.Color3(1, 0, 0);

    var fence1 = BABYLON.MeshBuilder.CreateBox("fence1", {height: 1.5, width: 85, depth: .01}, scene);
    fence1.position.x = 8;
    fence1.position.y = .5;
    fence1.position.z = 50;

    //Fence on the west-side
    var fence2 = BABYLON.MeshBuilder.CreateBox("fence2", {height: 1.5, width: 6.5, depth: .01}, scene);
    fence2.position.x = -34.5;
    fence2.position.y = .5;
    fence2.position.z = 48;
    fence2.rotation.y = Math.PI / 2;

    //Diagonal west-side Fence
    var fence3 = BABYLON.MeshBuilder.CreateBox("fence3", {height: 1.5, width: 35, depth: .01}, scene);
    fence3.position.x = -22;
    fence3.position.y = .5;
    fence3.position.z = 35;
    fence3.rotation.y = Math.PI / 4.75;

    //Parallel to Back-side Fence (Left Front-side)
    //var fence4 = BABYLON.MeshBuilder.CreateBox("fence4", {height: 1.5, width: 25, depth: .01}, scene);
    var fence4 = BABYLON.MeshBuilder.CreateBox("fence4", {height: 1.5, width: 13, depth: .01}, scene);
    //fence4.position.x = 4;
    fence4.position.x = -2;
    fence4.position.y = .5;
    fence4.position.z = 24;

    //Parallel to Back-side Fence (Right Front-side)
    //var fence5 = BABYLON.MeshBuilder.CreateBox("fence5", {height: 1.5, width: 25, depth: .01}, scene);
    var fence5 = BABYLON.MeshBuilder.CreateBox("fence5", {height: 1.5, width: 36.5, depth: .01}, scene);
    //fence5.position.x = 38;
    fence5.position.x = 32;
    fence5.position.y = .5;
    fence5.position.z = 24;

    //East-side Fence
    var fence6 = BABYLON.MeshBuilder.CreateBox("fence6", {height: 1.5, width: 26, depth: .01}, scene);
    fence6.position.x = 50;
    fence6.position.y = .5;
    fence6.position.z = 37;
    fence6.rotation.y = Math.PI / 2;

    var p1 = BABYLON.MeshBuilder.CreateBox("poll 1", {height: 2, width: .25, depth: .5}, scene);
    p1.position.x = 21;
    p1.position.y = 1;
    p1.position.z = 27;

    var p2 = BABYLON.MeshBuilder.CreateBox("poll 2", {height: 2, width: .25, depth: .5}, scene);
    p2.position.x = 21;
    p2.position.y = 1;
    p2.position.z = 29;

    var p3 = BABYLON.MeshBuilder.CreateBox("poll 3", {height: 7, width: .25, depth: .5}, scene);
    p3.position.x = 26;
    p3.position.y = 3.5;
    p3.position.z = 27;

    var p4 = BABYLON.MeshBuilder.CreateBox("poll 4", {height: 7, width: .25, depth: .5}, scene);
    p4.position.x = 26;
    p4.position.y = 3.5;
    p4.position.z = 29;

    var p5 = BABYLON.MeshBuilder.CreateBox("poll 5", {height: 12, width: .25, depth: .5}, scene);
    p5.position.x = 30.5;
    p5.position.y = 5.5;
    p5.position.z = 27;

    var p6 = BABYLON.MeshBuilder.CreateBox("poll 6", {height: 12, width: .25, depth: .5}, scene);
    p6.position.x = 30.5;
    p6.position.y = 5.5;
    p6.position.z = 29;

    var p7 = BABYLON.MeshBuilder.CreateBox("poll 7", {height: 16, width: .25, depth: .5}, scene);
    p7.position.x = 35;
    p7.position.y = 7;
    p7.position.z = 27;

    var p8 = BABYLON.MeshBuilder.CreateBox("poll 8", {height: 16, width: .25, depth: .5}, scene);
    p8.position.x = 35;
    p8.position.y = 7;
    p8.position.z = 29;

    var p9 = BABYLON.MeshBuilder.CreateBox("poll 9", {height: 16, width: .25, depth: .5}, scene);
    p9.position.x = 40;
    p9.position.y = 7;
    p9.position.z = 27;

    var p10 = BABYLON.MeshBuilder.CreateBox("poll 10", {height: 16, width: .25, depth: .5}, scene);
    p10.position.x = 40;
    p10.position.y = 7;
    p10.position.z = 29;

    var p11 = BABYLON.MeshBuilder.CreateBox("poll 11", {height: 16, width: .25, depth: .5}, scene);
    p11.position.x = 45;
    p11.position.y = 7;
    p11.position.z = 30;

    var p12 = BABYLON.MeshBuilder.CreateBox("poll 12", {height: 16, width: .25, depth: .5}, scene);
    p12.position.x = 46;
    p12.position.y = 7;
    p12.position.z = 31;

    var p13 = BABYLON.MeshBuilder.CreateBox("poll 13", {height: 16, width: .25, depth: .5}, scene);
    p13.position.x = 45;
    p13.position.y = 7;
    p13.position.z = 32;

    var p14 = BABYLON.MeshBuilder.CreateBox("poll 14", {height: 16, width: .25, depth: .5}, scene);
    p14.position.x = 46;
    p14.position.y = 7;
    p14.position.z = 34;

    var p15 = BABYLON.MeshBuilder.CreateBox("poll 15", {height: 16, width: .25, depth: .5}, scene);
    p15.position.x = 47;
    p15.position.y = 7;
    p15.position.z = 36;

    var p16 = BABYLON.MeshBuilder.CreateBox("poll 16", {height: 16, width: .25, depth: .5}, scene);
    p16.position.x = 49;
    p16.position.y = 7;
    p16.position.z = 36;

    var p17 = BABYLON.MeshBuilder.CreateBox("poll 17", {height: 16, width: .25, depth: .5}, scene);
    p17.position.x = 47;
    p17.position.y = 7;
    p17.position.z = 39;

    var p18 = BABYLON.MeshBuilder.CreateBox("poll 18", {height: 16, width: .25, depth: .5}, scene);
    p18.position.x = 49;
    p18.position.y = 7;
    p18.position.z = 39;

    var p19 = BABYLON.MeshBuilder.CreateBox("poll 19", {height: 16, width: .25, depth: .5}, scene);
    p19.position.x = 47;
    p19.position.y = 7;
    p19.position.z = 41;

    var p20 = BABYLON.MeshBuilder.CreateBox("poll 20", {height: 16, width: .25, depth: .5}, scene);
    p20.position.x = 49;
    p20.position.y = 7;
    p20.position.z = 41;

    var p21 = BABYLON.MeshBuilder.CreateBox("poll 21", {height: 16, width: .25, depth: .5}, scene);
    p21.position.x = 47;
    p21.position.y = 7;
    p21.position.z = 41;

    var p22 = BABYLON.MeshBuilder.CreateBox("poll 22", {height: 16, width: .25, depth: .5}, scene);
    p22.position.x = 45;
    p22.position.y = 7;
    p22.position.z = 45;

    var p23 = BABYLON.MeshBuilder.CreateBox("poll 23", {height: 16, width: .25, depth: .5}, scene);
    p23.position.x = 40;
    p23.position.y = 7;
    p23.position.z = 45;

    var p24 = BABYLON.MeshBuilder.CreateBox("poll 24", {height: 16, width: .25, depth: .5}, scene);
    p24.position.x = 45;
    p24.position.y = 7;
    p24.position.z = 46.5;

    var p25 = BABYLON.MeshBuilder.CreateBox("poll 25", {height: 16, width: .25, depth: .5}, scene);
    p25.position.x = 40;
    p25.position.y = 7;
    p25.position.z = 46.5;

    var p26 = BABYLON.MeshBuilder.CreateBox("poll 26", {height: 2, width: .25, depth: .5}, scene);
    p26.position.x = 25;
    p26.position.y = 1;
    p26.position.z = 46.5;

    var p27 = BABYLON.MeshBuilder.CreateBox("poll 27", {height: 2, width: .25, depth: .5}, scene);
    p27.position.x = 25;
    p27.position.y = 1;
    p27.position.z = 44.5;

    var p28 = BABYLON.MeshBuilder.CreateBox("poll 28", {height: 7, width: .25, depth: .5}, scene);
    p28.position.x = 30.5;
    p28.position.y = 3.5;
    p28.position.z = 46.5;

    var p29 = BABYLON.MeshBuilder.CreateBox("poll 29", {height: 7, width: .25, depth: .5}, scene);
    p29.position.x = 30.5;
    p29.position.y = 3.5;
    p29.position.z = 44.5;

    var p30 = BABYLON.MeshBuilder.CreateBox("poll 30", {height: 12, width: .25, depth: .5}, scene);
    p30.position.x = 35.5;
    p30.position.y = 5.5;
    p30.position.z = 46.5;

    var p31 = BABYLON.MeshBuilder.CreateBox("poll 31", {height: 12, width: .25, depth: .5}, scene);
    p31.position.x = 35.5;
    p31.position.y = 5.5;
    p31.position.z = 44.5;

    //Creation of Entrance Sign
    var Lside = BABYLON.MeshBuilder.CreateBox("Left Side Stand", {height: 5, width: .5, depth: .5}, scene);
    //Lside.position.x = 16.5;
    Lside.position.x = 4.5;
    Lside.position.y = 2.25;
    Lside.position.z = 23.5;

    var Rside = BABYLON.MeshBuilder.CreateBox("Right Side Stand", {height: 5, width: .5, depth: .5}, scene);
    //Rside.position.x = 25.5;
    Rside.position.x = 13.5;
    Rside.position.y = 2.25;
    Rside.position.z = 23.5;

    var Etop = BABYLON.MeshBuilder.CreateBox("Top of Stand", {height: 1, width: 10, depth: 1}, scene);
    //Etop.position.x = 21;
    Etop.position.x = 9;
    Etop.position.y = 5;
    Etop.position.z = 23.5;

    /*var StandM = new BABYLON.StandardMaterial("postmaterial", scene);
    StandM.diffuseTexture = new BABYLON.Texture("assets/textures/WoodenRollerCoaster/wood/post.png", scene);
    Lside.material = StandM;*/

    // a closed curve, we hide this junction with a little house
    var house = BABYLON.MeshBuilder.CreateBox("house", {height: 4, width:4.5, depth: 4}, scene);
    house.position.y = 1.5;
    house.position.z = 28;
    house.freezeWorldMatrix();

    //var hole  = BABYLON.Mesh.CreateBox("hole", 2.5, scene);
    var hole = BABYLON.MeshBuilder.CreateBox("hole", {height: 3, width:8, depth: 3}, scene);
    hole.position.x = .5;
    hole.position.y = 1.5;
    hole.position.z = 28;

    //CSG to create tunnel
    var houseCSG= BABYLON.CSG.FromMesh(house);
    var holeCSG = BABYLON.CSG.FromMesh(hole);
    var tunnel = houseCSG.subtract(holeCSG);
    house.dispose();
    hole.dispose();
    tunnel.toMesh("csg", new BABYLON.StandardMaterial("mat",scene),scene);

    var roof = BABYLON.Mesh.CreateCylinder("roof", 5, 5, 5, 3, 1, scene);
    roof.rotation.z = Math.PI / 2;
    roof.position.x = house.position.x;
    roof.position.y = 4.75;
    roof.position.z = house.position.z;
    roof.freezeWorldMatrix();

    var box1 = BABYLON.MeshBuilder.CreateBox("box1", {height: 1, width:1, depth: 1}, scene);
    box1.position.z = 31;
    box1.position.x = 2.5;
    box1.position.y = .5;

    //SPS for box1
    var radiusM = .5;
    var angleM = Math.PI/3;
    var heightM = radiusM/Math.tan(angleM/2);

    var psM = new BABYLON.ParticleSystem("particle System Box 1", 2000, scene);
    psM.particleTexture = new BABYLON.Texture("C:\Users\Janidy\WebstormProjects\themepark\assets\textures\WoodenRollerCoaster\Effects\flare.png", scene);
    psM.emitter = new BABYLON.Vector3(2.5,.5,31);
    psM.color1 = new BABYLON.Color4(.7,.8,1,1);
    psM.color2 = new BABYLON.Color4(.2,.5,1,1);
    psM.colorDead = new BABYLON.Color4(0,0,.2,0);
    psM.minSize = 0.1;
    psM.maxSize = 0.3;
    psM.minLifeTime = 0.3;
    psM.maxLifeTime = .5;
    psM.emitRate = 1000;
    psM.createConeEmitter(radiusM,angleM);
    psM.minEmitPower =2;
    psM.maxEmitPower = 4;
    psM.updateSpeed = 0.005;
    psM.start();


    var box2 = BABYLON.MeshBuilder.CreateBox("box2", {height: 1, width:1, depth: 1}, scene);
    box2.position.z = 25;
    box2.position.x = 2.5;
    box2.position.y = .5;

    var radiusB = .5;
    var angleB = Math.PI/3;
    var heightB = radiusM/Math.tan(angleM/2);

    var psB = new BABYLON.ParticleSystem("particle System Box 2", 2000, scene);
    psB.particleTexture = new BABYLON.Texture("C:\Users\Janidy\WebstormProjects\themepark\assets\textures\WoodenRollerCoaster\Effects\flare.png", scene);
    psB.emitter = new BABYLON.Vector3(2.5,.5,25);
    psB.color1 = new BABYLON.Color4(.7,.8,1,1);
    psB.color2 = new BABYLON.Color4(.2,.5,1,1);
    psB.colorDead = new BABYLON.Color4(0,0,.2,0);
    psB.minSize = 0.1;
    psB.maxSize = 0.3;
    psB.minLifeTime = 0.3;
    psB.maxLifeTime = .5;
    psB.emitRate = 1000;
    psB.createConeEmitter(radiusB,angleB);
    psB.minEmitPower =2;
    psB.maxEmitPower = 4;
    psB.updateSpeed = 0.005;
    psB.start();

    //Car Body Material
    var bodyMaterial = new BABYLON.StandardMaterial("body_mat", scene);
    bodyMaterial.diffuseColor = new BABYLON.Color3(0.61, 0.46, 0.1);

    //Create body and apply material
    var car = BABYLON.MeshBuilder.CreateBox("car", {width: 3, height:0.5, depth: 2}, scene);
    car.material = bodyMaterial;

    //passenger
    var body = BABYLON.MeshBuilder.CreateBox("body", {width: 1, height:1, depth: 1}, scene);
    body.material = bodyMaterial;
    body.position.y = 0.5;
    body.position.x = -1;

    body.parent = car;

    var grey  = new BABYLON.StandardMaterial(scene);
    grey.alpha = 1;
    grey.diffuseColor = new BABYLON.Color3(0.81, 0.57, 0.07); //actually a brown color
    fence1.material = grey;
    fence2.material = grey;
    fence3.material = grey;
    fence4.material = grey;
    fence5.material = grey;
    fence6.material = grey;

    var red  = new BABYLON.StandardMaterial(scene);
    red.alpha = 1;
    red.diffuseColor = new BABYLON.Color3(0.8, 0.14, 0.05);
    box1.material = red;
    box2.material = red;

    var brown = new BABYLON.StandardMaterial(scene);
    brown.alpha = 1;
    brown.diffuseColor = new BABYLON.Color3(0.47, 0.37, 0.06);
    tunnel.toMesh("csg",brown,scene);

    var brown2  = new BABYLON.StandardMaterial(scene);
    brown2.alpha = 1;
    brown2.diffuseColor = new BABYLON.Color3(0.63, 0.37, 0.04);
    roof.material = brown2;
    Lside.material = brown2;
    Rside.material = brown2;
    Etop.material = brown2;
    //hole.material = brown2;

    var brown3  = new BABYLON.StandardMaterial(scene);
    brown3.alpha = 1;
    brown3.diffuseColor = new BABYLON.Color3(0.63, 0.5, 0.04);
    p1.material = brown3;
    p2.material = brown3;
    p3.material = brown3;
    p4.material = brown3;
    p5.material = brown3;
    p6.material = brown3;
    p7.material = brown3;
    p8.material = brown3;
    p9.material = brown3;
    p10.material = brown3;
    p11.material = brown3;
    p12.material = brown3;
    p13.material = brown3;
    p14.material = brown3;
    p15.material = brown3;
    p16.material = brown3;
    p17.material = brown3;
    p18.material = brown3;
    p19.material = brown3;
    p20.material = brown3;
    p21.material = brown3;
    p22.material = brown3;
    p23.material = brown3;
    p24.material = brown3;
    p25.material = brown3;
    p26.material = brown3;
    p27.material = brown3;
    p28.material = brown3;
    p29.material = brown3;
    p30.material = brown3;
    p31.material = brown3;

    var deltaI = 0;
    var speed = 1;
    var drag = Math.round(1 / speed);
    var pace = Math.round(speed);
    var count = 0;
    var nbPoints = points.length;

    //store looped positions and orientations
    var cpos = [];
    var crot = [];
    var brot = [];
    var carPosition = BABYLON.Vector3.Zero();

    var i=0;
    while (i < nbPoints) {
        if(speed >= 1) {
            body.rotationQuaternion = BABYLON.Quaternion.FromRotationMatrix(track.passengerRotations[i]);
            cpos.push(points[i]);
            crot.push(BABYLON.Quaternion.FromRotationMatrix(track.carriageRotations[i]));
            brot.push(BABYLON.Quaternion.FromRotationMatrix(track.passengerRotations[i]))

            i += pace;
        }
        else {
            carPosition.x = points[i].x + deltaI * (points[(i + 1) % nbPoints].x - points[i]. x) / drag;
            carPosition.y = points[i].y + deltaI * (points[(i + 1) % nbPoints].y - points[i]. y) / drag;
            carPosition.z = points[i].z + deltaI * (points[(i + 1) % nbPoints].z - points[i]. z) / drag;

            cpos.push(carPosition.clone());

            crot.push(BABYLON.Quaternion.FromRotationMatrix(track.carriageRotations[i]));
            brot.push(BABYLON.Quaternion.FromRotationMatrix(track.passengerRotations[i]));

            i = (Math.floor(i + (deltaI + 1) / drag))
            deltaI = (deltaI + 1) % drag;
        }
    }

    i = 0;
    var nbSteps = cpos.length;
    scene.registerAfterRender(function() {
        car.position = cpos[i];
        car.rotationQuaternion = crot[i];
        body.rotationQuaternion = brot[i];

        i += 1;
        i %= nbSteps;
    });

    CreateFountain(10, 1, 36, scene);

    return scene;

}

function CreateFountain(posX, posY, posZ, scene){
    //inner ring
    var fountain = BABYLON.Mesh.CreateTorus("torus", 0.25, 0, 10, scene, false);
    fountain.material = new BABYLON.StandardMaterial("fmat", scene);
    fountain.material.diffuseColor = BABYLON.Color3.Gray();
    fountain.position.x = posX;
    fountain.position.y = posY;
    fountain.position.z = posZ;

    //outter ring
    var fountain2 = BABYLON.Mesh.CreateTorus("torus", 4.5, 0.5, 10, scene, true,true, BABYLON.Texture.BILINEAR_SAMPLINGMODE,null, null);
    fountain2.material = new BABYLON.StandardMaterial("fmat", scene);
    fountain2.material.diffuseColor = BABYLON.Color3.Gray();
    fountain2.position.x = posX;
    fountain2.position.y = posY-0.75;
    fountain2.position.z = posZ;
    fountain2.scaling.y = 3;

    var grey  = new BABYLON.StandardMaterial(scene);
    grey.alpha = 1;
    grey.diffuseColor = new BABYLON.Color3(0.68, 0.79, 0.83); //actually a brown color
    fountain.material = grey;
    fountain2.material = grey;

    //Sprites
    var spriteManagerTreeA = new BABYLON.SpriteManager("TreeA","assets/textures/WoodenRollerCoaster/Sprites/Tree1.png",2,{width:351, height:500}, scene);
    var Tree1 = new BABYLON.Sprite("Tree1", spriteManagerTreeA);
    Tree1.playAnimation(0,149,true,200);
    Tree1.position.x = -15;
    Tree1.position.y = 5;
    Tree1.position.z = 45;
    Tree1.size = 10;

    var Tree2 = new BABYLON.Sprite("TreeA", spriteManagerTreeA);
    Tree2.playAnimation(0,149,true,200);
    Tree2.position.x = -25;
    Tree2.position.y = 5;
    Tree2.position.z = 45;
    Tree2.size = 10;

    var spriteManagerTreeB = new BABYLON.SpriteManager("TreeB","assets/textures/WoodenRollerCoaster/Sprites/Tree2.png",2,{width:391, height:500}, scene);
    var TreeA = new BABYLON.Sprite("TreeB", spriteManagerTreeB);
    TreeA.playAnimation(0,149,true,200);
    TreeA.position.x = -12;
    TreeA.position.y = 5;
    TreeA.position.z = 43;
    TreeA.size = 10;

    var TreeB = new BABYLON.Sprite("TreeB", spriteManagerTreeB);
    TreeB.playAnimation(0,149,true,200);
    TreeB.position.x = -20;
    TreeB.position.y = 5;
    TreeB.position.z = 47;
    TreeB.size = 10;

    // Create a particle system
    var ps1 = new BABYLON.ParticleSystem("particles", 20000, scene);
    ps1.particleTexture = new BABYLON.Texture("textures/flare.png", scene);
    ps1.emitter = fountain; // the starting object, the emitter
    ps1.minEmitBox = new BABYLON.Vector3(.1, 0, 0); // Starting all from
    ps1.maxEmitBox = new BABYLON.Vector3(-.1, 0, 0); // To...
    ps1.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    ps1.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    ps1.colorDead = new BABYLON.Color4(1, 0, 0.2, 0.0);
    ps1.minSize = 0.05;
    ps1.maxSize = 0.1;
    ps1.minLifeTime = 2;
    ps1.maxLifeTime = 3.5;
    ps1.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    ps1.gravity = new BABYLON.Vector3(0, -3, 0);
    ps1.direction1 = new BABYLON.Vector3(-1, 4, 1);
    ps1.direction2 = new BABYLON.Vector3(1, 4, -1);
    ps1.minAngularSpeed = Math.PI /4;
    ps1.maxAngularSpeed = Math.PI;
    ps1.minEmitPower = .5;
    ps1.maxEmitPower = .75;
    ps1.updateSpeed = 0.05;
    ps1.emitRate = 200;
    ps1.start();
    ps1.disposeOnStop = true;
}