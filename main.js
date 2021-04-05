// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
// 1A-1 Setup 'tock' sound
const tock = new Audio('sounds/tock.mp3');

// 2C load the other instruments, then, update the update() function to play if that instruments checkbox is checked
const kickDrum = new Audio('sounds/kick-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

//1A-2 create global variable to keep count;
let metronomeCount = 0;

// This function is called every 600ms
function update() {

    // 1A-3 will add one to metronomeCount everytime update function runs
    metronomeCount++;

    // 1B-2 & 1B-3
    // Query the metronome html
    const metronomeDisplay = document.querySelector(".metronome-count");

    metronomeDisplay.innerText = metronomeCount;

    // 2B query the metronome checkbox to see if it is checked
    const metronomeCheck = document.querySelector("#metronome-checkbox");


    // 2C query each instruments checkbox to see if it is checked
    const kickDrumChecked = document.querySelector("#kick-drum");
    const hiHatChecked = document.querySelector("#hi-hat");
    const snareDrumChecked = document.querySelector("#snare-drum");

    // 2B see if metronome checkbox is checked
    if (metronomeCheck.checked) {
         // Play the 'tick' sound
        tick.play();

        // 1A-3 will add one to metronomeCount everytime update function runs

        if (metronomeCount % 4 === 0) {
            tock.play();
        }
    }

    // 2C see if each other instrument is checked
    if (kickDrumChecked.checked) {
        kickDrum.play();
    }

    if (hiHatChecked.checked) {
        hiHat.play();
    }

    if (snareDrumChecked.checked) {
        snareDrum.play();
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
