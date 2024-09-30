var colors = ["red", "#0a0b0e", "transparent"];
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
    $("#layer3").css({"animation-name": "cycleBackground", "animation-duration": "7s", "animation-iteration-count": "infinite"});
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;

        $(this).remove(); // Remove the clicked button


// Create a new button
$("#showAlertButton").html("<button id='showAlert'>Trying to Wake Up?</button>");
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
        alert('Do not do that yet. You are just getting started.');

        // After showing the initial alert, create three new buttons using createElement and append them to the body of your HTML document        
        for(let i=1;i<=3; i++){
        // var secondButton = $("#myDiv").html("<button></button>")
            var secondButton=document.createElement('button');
            secondButton.textContent="Dream Cycle"+i;
        
                secondButton.onclick=function(){alert('What if this is all made up?'+i);};

                $("#myDiv").append(secondButton)
                // document.myDiv.appendChild(secondButton);

        }

        $("#myDiv").append("<button id='factButton1'>Need</button>")
            $("#factButton1").click(function(){
                alert("Insufficient sleep can impact your brain’s functioning, including your ability to remember, regulate emotion and attention, the speed you process information and the ability to have insight. Even short-term sleep deprivation can impair these functions.");
            })

        $("#myDiv").append("<button id='factButton2'>To</button>")
            $("#factButton2").click(function(){
                alert("The recommended amount of sleep is 9-11 hours for school age children, 8-10 for teens, 7-9 for adults aged 18-64 and 7-8 for older adults (65 and over)");
            })

        $("#myDiv").append("<button id='factButton3'>Wake</button>")
            $("#factButton3").click(function(){
                alert("Shift work can alter our natural circadian rhythms (our biological clock that regulates alertness and sleepiness, hunger, temperature and hormone levels).");
            }) 

        $("#myDiv").append("<button id='factButton4'>Up</button>")
            $("#factButton4").click(function(){
                alert("Sleep is a vital physiological process that allows the body and brain to rest, recover and perform essential functions including memory consolidation, emotional regulation, immune function and general health maintenance.");
            })
    },1000);

    setTimeout(function(){
        $("#myDiv").append("<button id='theStupidResetButton'>Try this dream?</button>");
        $("#theStupidResetButton").click(function(){
            $("#buttonLayer4").removeAttr("disabled").css("color","#FF0000");
            $("#buttonLayer5").removeAttr("disabled").css("color","#FF0000");
        })
    }, 15000);
})


// Add your new button to the page 
// var layer3 = document.getElementById('layer3');
// layer3.appendChild(newButton);

    }
}

// // Create a reset button that appears after 30 seconds
// setTimeout(function(){
//     var resetButton=document.createElement('button');
//     resetButton.textContent ="Reset";


//     resetButton.onclick=function(){
//     let existingButtons=document.querySelectorAll('button');

//     for(let i=0;i<existingButtons.length;i++){
//     document.body.removeChild(existingButtons[i]);
// }

// // startFlashing();


// };

//  document.body.appendChild(resetButton);

// },30000);