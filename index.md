<html>
  <head>
    <title></title>
    <style>
      body {
        background-color: black;
        margin: 0;
      }
      h1 {
        font: 2.2em Arial, sans-serif;
        margin-top: 0.6em;
        margin-bottom: 0.1em;
        margin-left: 0.7em;
        margin-right: 0;
        color: white;
        background-color: black;
      }
      h2 {
        font: italic 1.6em Arial, sans-serif;
        margin-left: 1.4em;
        margin-right: 0;
        color: white;
      }
      a {
        font: 1.2em Arial, sans-serif;
        margin-left: 1.6em;
        color: white;
      }
      canvas {
        display: block;
      }
    </style>
  </head>
  <body>
    <h1>Esko Janatuinen</h1>
    <a href="https://github.com/eskojanatuinen">GitHub</a>
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
          map: loader.load("6.jpg"),
        }),
        new THREE.MeshBasicMaterial({
          map: loader.load("6.jpg"),
        }),
      ];
      let cube = new THREE.Mesh(geometry, materialArray);

      scene.add(cube);

      camera.position.z = 2;
      cube.position.y = 0.3;

      var animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.004;
        cube.rotation.y += 0.004;
        cube.rotation.z += 0.001;

        renderer.render(scene, camera);
      };

      animate();
    </script>

  </body>
</html>
