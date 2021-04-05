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

    // 1A-3 will add one to metronomeCount everytime update function runs
    metronomeCount++;

    if (metronomeCount % 4 === 0) {
        tock.play();
    }

    // 1B-2 & 1B-3
    // Query the metronome html
    const metronomeDisplay = document.querySelector(".metronome-count");

    metronomeDisplay.innerText = metronomeCount;

    // 2B query the metronome checkbox to see if it is checked
    const metronomeCheck = document.querySelector("#metronome-checkbox");

    // 2B see if metronome checkbox is checked
    if (metronomeCheck.checked) {
         // Play the 'tick' sound
        tick.play();

        // 1A-3 will add one to metronomeCount everytime update function runs
        metronomeCount++;

        if (metronomeCount % 4 === 0) {
            tock.play();
        }
    } else {
        
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
