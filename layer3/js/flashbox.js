var colors = ["red", "black", "transparent"];
var currentColor = 0;
var intervalId; // let's store our interval ID here so we can clear it later
var flashCount = 0;

$("#startFlashButton").click(startFlashing)
$("#startFlashButton").click(function(){
    $("#startFlashButton").remove();
})

function startFlashing() {
    if (!intervalId) { 

        // reset the counter
        flashCount = 0;

        intervalId = setInterval(function () {
            // change the color of the border
            var elem = document.getElementById("myDiv");
            elem.style.borderColor = colors[currentColor];
            currentColor++;
            
            if (currentColor >= colors.length) {
                currentColor = 0; // loop back around to the beginning if we've reached the end
}
        

    flashCount++;

    if (flashCount >=12) { 
// stop after X flashes - avoid infinite flashing that could cause a seizure.
stopFlashing();

      }
     },500); // call the function every .5 seconds

}
}

function stopFlashing() {
    $("#layer3").css({"animation-name": "cycleBackground", "animation-duration": "5s", "animation-iteration-count": "infinite"});
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;

        $(this).remove(); // Remove the clicked button


// Create a new button
$("#showAlertButton").html("<button id='showAlert'>Show Alert</button>");
$("#showAlert").click(function(){
        $("#showAlert").remove();
    })

// var newButton = document.createElement('button');
// newButton.textContent = "Show Alert";
// 

// Set up an onclick handler for showing the alert
$("#showAlert").click(function(){
    // When this button is clicked, show an alert after 3 seconds using setTimeout
    setTimeout(function() {
        // Show an alert message after 3 seconds have passed
        alert('This is triggering another alert!');

        // After showing the initial alert, create three new buttons using createElement and append them to the body of your HTML document        
        for(let i=1;i<=3; i++){
            var secondButton=document.createElement('button');
            secondButton.textContent="New Button "+i;
        
                secondButton.onclick=function(){alert('You have clicked New Button '+i);};

                document.body.appendChild(secondButton);
            
        }
    },1000);
})


// Add your new button to the page 
document.body.appendChild(newButton);

    }
}

// Create a reset button that appears after 30 seconds
setTimeout(function(){
var resetButton=document.createElement('button');
resetButton.textContent ="Go forward";


resetButton.onclick=function(){
let existingButtons=document.querySelectorAll('button');

for(let i=0;i<existingButtons.length;i++){
document.body.removeChild(existingButtons[i]);
}

// startFlashing();


};

 document.body.appendChild(resetButton);

},30000);
