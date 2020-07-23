let particles = [];

function setup() {
    createCanvas(100, 100);
    for (let i = 0; i < 6; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function draw() {

    // change pixel color
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let dist = getDistances(x, y, particles)[0];
            dist = map(dist, 0, 25, 255, 0);
            set(x, y, color(dist, dist/2, dist/4));
        }
    }
    updatePixels();

    // move the particles
    for (let p of particles) {
        p.move();
    }
}

// input a location and array of partices, get array of sorted distance to all particles
function getDistances(x, y, particles) {
    let distances = [];
    for (let p of particles) {
        let d = dist(x, y, p.x, p.y);
        distances.push(d);
    }
    distances.sort(function(a, b) {return a - b;});
    return distances;
}