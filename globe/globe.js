// Assuming you already have a Three.js scene, camera, and globe set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
// ...

// Create a globe mesh (replace with your globe creation code)
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Define variables to handle mouse interaction
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

// Add mouse event listeners
renderer.domElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y
    };

    const rotationSpeed = 0.005; // Adjust the speed of rotation

    globe.rotation.y += deltaMove.x * rotationSpeed;
    globe.rotation.x += deltaMove.y * rotationSpeed;

    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
});

renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
});

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
