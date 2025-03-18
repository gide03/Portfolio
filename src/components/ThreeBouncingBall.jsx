const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Create the box
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Create axes (X: red, Y: green, Z: blue)
const arrowLength = 3;
const xAxis = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), arrowLength, 0xff0000);
const yAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), arrowLength, 0x00ff00);
const zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), arrowLength, 0x0000ff);
box.add(xAxis);
box.add(yAxis);
box.add(zAxis);

// Function to create a text sprite
function createTextSprite(text, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 64;
    canvas.height = 64;
    context.font = '20px Arial';
    context.fillStyle = color;
    context.fillText(text, 10, 40);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5, 0.5, 1); // Small size for the tag
    return sprite;
}

// Create axis tags
const xTag = createTextSprite('X', '#ff0000');
xTag.position.set(arrowLength + 0.2, 0, 0); // Position near the end of X-axis
box.add(xTag);

const yTag = createTextSprite('Y', '#00ff00');
yTag.position.set(0, arrowLength + 0.2, 0); // Position near the end of Y-axis
box.add(yTag);

const zTag = createTextSprite('Z', '#0000ff');
zTag.position.set(0, 0, arrowLength + 0.2); // Position near the end of Z-axis
box.add(zTag);

// Mouse controls
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

renderer.domElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };
        const rotationSpeed = 0.005;
        if (event.shiftKey) {
            // Shift + drag rotates Z-axis
            box.rotation.z += deltaMove.x * rotationSpeed;
        } else {
            // Normal drag rotates X and Y axes
            box.rotation.y += deltaMove.x * rotationSpeed;
            box.rotation.x += deltaMove.y * rotationSpeed;
        }
        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
});

renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
});

// Ensure rotations stay within 0 to 360 degrees
function normalizeAngle(radians) {
    let degrees = THREE.MathUtils.radToDeg(radians) % 360;
    return degrees < 0 ? degrees + 360 : degrees;
}

// Text display for rotation degrees
const textCanvas = document.createElement('canvas');
const textContext = textCanvas.getContext('2d');
textCanvas.width = 256;
textCanvas.height = 128;
const texture = new THREE.CanvasTexture(textCanvas);
const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(4, 2, 1);
sprite.position.set(-window.innerWidth / 400, window.innerHeight / 400, -1); // Top-left corner
scene.add(sprite);

function updateText() {
    textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textContext.font = '20px Arial';
    textContext.fillStyle = 'white';
    textContext.fillText(`X: ${normalizeAngle(box.rotation.x).toFixed(1)}°`, 10, 30);
    textContext.fillText(`Y: ${normalizeAngle(box.rotation.y).toFixed(1)}°`, 10, 60);
    textContext.fillText(`Z: ${normalizeAngle(box.rotation.z).toFixed(1)}°`, 10, 90);
    texture.needsUpdate = true;
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sprite.position.set(-window.innerWidth / 400, window.innerHeight / 400, -1);
});

function animate() {
    requestAnimationFrame(animate);
    updateText();
    renderer.render(scene, camera);
}
animate();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Create the box
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Create axes (X: red, Y: green, Z: blue)
const arrowLength = 3;
const xAxis = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), arrowLength, 0xff0000);
const yAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), arrowLength, 0x00ff00);
const zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), arrowLength, 0x0000ff);
box.add(xAxis);
box.add(yAxis);
box.add(zAxis);

// Function to create a text sprite
function createTextSprite(text, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 64;
    canvas.height = 64;
    context.font = '20px Arial';
    context.fillStyle = color;
    context.fillText(text, 10, 40);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5, 0.5, 1); // Small size for the tag
    return sprite;
}

// Create axis tags
const xTag = createTextSprite('X', '#ff0000');
xTag.position.set(arrowLength + 0.2, 0, 0); // Position near the end of X-axis
box.add(xTag);

const yTag = createTextSprite('Y', '#00ff00');
yTag.position.set(0, arrowLength + 0.2, 0); // Position near the end of Y-axis
box.add(yTag);

const zTag = createTextSprite('Z', '#0000ff');
zTag.position.set(0, 0, arrowLength + 0.2); // Position near the end of Z-axis
box.add(zTag);

// Mouse controls
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

renderer.domElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };
        const rotationSpeed = 0.005;
        if (event.shiftKey) {
            // Shift + drag rotates Z-axis
            box.rotation.z += deltaMove.x * rotationSpeed;
        } else {
            // Normal drag rotates X and Y axes
            box.rotation.y += deltaMove.x * rotationSpeed;
            box.rotation.x += deltaMove.y * rotationSpeed;
        }
        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
});

renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
});

// Ensure rotations stay within 0 to 360 degrees
function normalizeAngle(radians) {
    let degrees = THREE.MathUtils.radToDeg(radians) % 360;
    return degrees < 0 ? degrees + 360 : degrees;
}

// Text display for rotation degrees
const textCanvas = document.createElement('canvas');
const textContext = textCanvas.getContext('2d');
textCanvas.width = 256;
textCanvas.height = 128;
const texture = new THREE.CanvasTexture(textCanvas);
const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(4, 2, 1);
sprite.position.set(-window.innerWidth / 400, window.innerHeight / 400, -1); // Top-left corner
scene.add(sprite);

function updateText() {
    textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textContext.font = '20px Arial';
    textContext.fillStyle = 'white';
    textContext.fillText(`X: ${normalizeAngle(box.rotation.x).toFixed(1)}°`, 10, 30);
    textContext.fillText(`Y: ${normalizeAngle(box.rotation.y).toFixed(1)}°`, 10, 60);
    textContext.fillText(`Z: ${normalizeAngle(box.rotation.z).toFixed(1)}°`, 10, 90);
    texture.needsUpdate = true;
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sprite.position.set(-window.innerWidth / 400, window.innerHeight / 400, -1);
});

function animate() {
    requestAnimationFrame(animate);
    updateText();
    renderer.render(scene, camera);
}
animate();