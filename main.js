// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
// 1A-1 Setup 'tock' sound
const tock = new Audio('sounds/tock.mp3');

//1A-2 create global variable to keep count;
let metronomeCount = 0;

// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
