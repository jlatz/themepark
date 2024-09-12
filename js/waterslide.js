function createWaterslide(scene){
    var parray = []
    for(var i = 0; i<4; i++){
        var pillar = BABYLON.MeshBuilder.CreateBox("pillar", {height: 40}, scene);
        if(i<2){
            pillar.position.x = -48;
            if(i==0){
                pillar.position.z = 38;
            }else{
                pillar.position.z = -5;
            }
        }else{
            pillar.position.x = -32;
            if(i==3){
                pillar.position.z = 25;
            }else{
                pillar.position.z = -5;
            }
        }
        parray.push(pillar);
    }
/*    var path = [];
    for (var i = 0; i < 2; i++){
        var x = 0;
        var y = 0;
        var z = 0;
        if(i!=1){
            x = Math.abs(parray[0].position.x);
            y = 10;
        }else{
            x = Math.abs(parray[3].position.x);
            y = 8;
        }
        path.push(new BABYLON.Vector3(x,y,z));
    }
    var slide = BABYLON.Mesh.CreateTube("tube", path, 2, 100, null, 0, scene);
 */
    var tube4 = BABYLON.MeshBuilder.CreateCylinder("tube", {diameter: 3, height: (Math.abs(parray[0].position.z)-Math.abs(parray[1].position.z))+12}, scene);
    tube4.position.x = (parray[0].position.x + parray[1].position.x)/2;
    tube4.position.z = (parray[0].position.z + parray[1].position.z)/2;
    tube4.position.y = 5;
    tube4.rotation.z = -Math.PI/2.272;
    tube4.rotation.y = Math.PI/2;

    var innertube4 = BABYLON.MeshBuilder.CreateCylinder("tube", {diameter: 2.8, height: (Math.abs(parray[0].position.z)-Math.abs(parray[1].position.z))+12}, scene);
    innertube4.position.x = (parray[0].position.x + parray[1].position.x)/2;
    innertube4.position.z = (parray[0].position.z + parray[1].position.z)/2;
    innertube4.position.y = 5;
    innertube4.rotation.z = -Math.PI/2.272;
    innertube4.rotation.y = Math.PI/2;

    var tube4csg = BABYLON.CSG.FromMesh(tube4);
    var innertube4csg = BABYLON.CSG.FromMesh(innertube4);
    var pillar4csg = BABYLON.CSG.FromMesh(parray[0]);

    var subtube4 = tube4csg.subtract(innertube4csg);
    var p4 = pillar4csg.subtract(innertube4csg);
    tube4.dispose();
    innertube4.dispose();

    subtube4.toMesh("csg", new BABYLON.StandardMaterial("norm", scene), scene);
    p4.toMesh("csg", new BABYLON.StandardMaterial("norm", scene), scene);

    var tube3 = BABYLON.MeshBuilder.CreateCylinder("tube", {diameter: 3, height: (Math.abs(parray[1].position.x)-Math.abs(parray[2].position.x))+2}, scene);
    tube3.position.x = (parray[1].position.x + parray[2].position.x)/2;
    tube3.position.z = (parray[1].position.z + parray[2].position.z)/2;
    tube3.position.y = 10.5;
    tube3.rotation.z = -Math.PI/2.272;
    //tube3.rotation.y = -Math.PI/4.9;

    var tube2 = BABYLON.MeshBuilder.CreateCylinder("tube", {diameter: 3, height: (Math.abs(parray[3].position.z)-Math.abs(parray[2].position.z))+12}, scene);
    tube2.position.x = (parray[2].position.x + parray[3].position.x)/2;
    tube2.position.z = (parray[2].position.z + parray[3].position.z)/2;
    tube2.position.y = 15;
    tube2.rotation.z = Math.PI/2.272;
    tube2.rotation.y = Math.PI/2;

    var tube1 = BABYLON.MeshBuilder.CreateCylinder("tube", {diameter: 3, height: (Math.abs(parray[0].position.x)-Math.abs(parray[3].position.x))+6}, scene);
    tube1.position.x = (parray[0].position.x + parray[3].position.x)/2;
    tube1.position.z = (parray[0].position.z + parray[3].position.z)/2;
    tube1.position.y = 20;
    tube1.rotation.z = Math.PI/2.272;
    tube1.rotation.y = Math.PI/4.9;

    var innertube1 = BABYLON.MeshBuilder.CreateCylinder("tube", {diameter: 2.8, height: (Math.abs(parray[0].position.x)-Math.abs(parray[3].position.x))+6}, scene);
    innertube1.position.x = (parray[0].position.x + parray[3].position.x)/2;
    innertube1.position.z = (parray[0].position.z + parray[3].position.z)/2;
    innertube1.position.y = 20;
    innertube1.rotation.z = Math.PI/2.272;
    innertube1.rotation.y = Math.PI/4.9;

    var tube1csg = BABYLON.CSG.FromMesh(tube1);
    var innertube1csg = BABYLON.CSG.FromMesh(innertube1);

    var subtube1 = tube1csg.subtract(innertube1csg);

    tube1.dispose();
    innertube1.dispose();

    subtube1.toMesh("csg", new BABYLON.StandardMaterial("norm", scene), scene);

    var water = BABYLON.MeshBuilder.CreateBox("water", {height: 1, width: 5, depth: 5}, scene);
    water.position.x = parray[0].position.x;
    water.position.z = parray[0].position.z + 2.5;
   /* var waterMaterial = new BABYLON.WaterMaterial("water_material", scene);
    waterMaterial.bumpTexture = new BABYLON.Texture("bump.png", scene);
    water.material = waterMaterial;*/

   var platform = BABYLON.MeshBuilder.CreateBox("platform", {height: 0.5, width: 3, depth: 3}, scene);
   platform.position.x = parray[0].position.x - 1.5;
   platform.position.z = parray[0].position.z + 1.5;
   platform.position.y = 21;
   platform.rotation.y = Math.PI/4;

   var joint1 = BABYLON.MeshBuilder.CreateSphere("joint", {diameter: 4}, scene);
   joint1.position.x = parray[3].position.x + .25;
   joint1.position.z = parray[3].position.z;
   joint1.position.y = 18;

    var joint2 = BABYLON.MeshBuilder.CreateSphere("joint", {diameter: 4}, scene);
    joint2.position.x = parray[2].position.x - .25;
    joint2.position.z = parray[2].position.z;
    joint2.position.y = 12;

    var joint3 = BABYLON.MeshBuilder.CreateSphere("joint", {diameter: 4}, scene);
    joint3.position.x = parray[1].position.x;
    joint3.position.z = parray[1].position.z + .25;
    joint3.position.y = 9;
    
    for (var i = 0; i < 4; i++){
        var side = BABYLON.MeshBuilder.CreateBox("side", {height: 1.1, width: .5, depth: 6});
        if( i < 2){
            side.position.z = water.position.z;
            if(i==0){
                side.position.x = water.position.x + 2.5;
            }else{
                side.position.x = water.position.x - 2.5;
            }
        }else{
            side.position.x = water.position.x;
            side.rotation.y = Math.PI/2;
            if( i == 3){
               side.position.z = water.position.z + 2.5;
            }else{
                side.position.z = water.position.z - 2.5;
            }
        }
    }
    parray[0].dispose();
}