var colors = ["red", "white"];
var currentColor = 0;
var intervalId;
var flashCount = 0;

function startFlashing() {
    if (!intervalId) {
        // reset the counter
        flashCount = 0;

        intervalId = setInterval(function () {
            // change the color of the border
            document.getElementById("myDiv").style.borderColor = colors[currentColor];
            currentColor = (currentColor + 1) % colors.length;

            flashCount++;

            if (flashCount >=12) { // stop after X flashes
                stopFlashing();
                document.getElementById("showAlertButton").style.display="block"; 
                }
        },500); // call the function every .5 seconds

    }
}

function stopFlashing() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; // clear the stored ID
    }
}  