<html>
  <head>
    <title>Esko Janatuinen GitHub Pages</title>
    <style>
      body {
        margin: 0;
      }
      canvas {
        display: block;
      }
    </style>
  </head>
  <body>
    <script src="js/three.js"></script>
    <script>
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      let geometry = new THREE.BoxGeometry(1, 1, 1);
      let loader = new THREE.TextureLoader();
      let materialArray = [
        new THREE.MeshBasicMaterial({
          map: loader.load("s1.jpg"),
        }),
        new THREE.MeshBasicMaterial({
          map: loader.load("s4.jpg"),
        }),
        new THREE.MeshBasicMaterial({
          map: loader.load("s2.jpg"),
        }),
        new THREE.MeshBasicMaterial({
          map: loader.load("s3.jpg"),
        }),
        new THREE.MeshBasicMaterial({
          map: loader.load("666.jpg"),
        }),
        new THREE.MeshBasicMaterial({
          map: loader.load("666.jpg"),
        }),
      ];
      let cube = new THREE.Mesh(geometry, materialArray);

      //---

      scene.add(cube);

      camera.position.z = 2;

      var animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.006;
        cube.rotation.y += 0.006;
        cube.rotation.z += 0.003;

        renderer.render(scene, camera);
      };

      animate();
    </script>

  </body>
</html>
