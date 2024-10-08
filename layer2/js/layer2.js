/*
    File: layer2.js
    Author: Jesus Barrios
    Editor: Sean Yabut

*/
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 25;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  };

  // click listener for button
    $(document).ready(function() {
        //code that listens to a click of a button and then sets a timer to generate 4 more buttons 
             // Add a click event to your button
             $('.spawn').click(function() {
                 // Set a timeout of 5 seconds (5000 milliseconds)
                setTimeout(function() {
                     // Create 4 buttons and append them to the #layer2
                     for (var i = 0; i < 7; i++) {
                         const newText = generateRandomText();
                            if (i == 5) {
                                 let button = $('<button class="buttonClick1">').text("where am i");
                                     $('#layer2').append(button);
                                    } else{
                                      var button = $('<button>').text(newText);
                                    $('#layer2').append(button);  
                                    }  
                                }
                            }, 2000);
                        });
    });

        //code that listens to a click of a button and then sets a timer to generate 4 more buttons 
            // Add a click event to your button
            $(document).on('click', '.buttonClick1', function() {
                // Set a timeout of 5 seconds (5000 milliseconds)
                setTimeout(function() {

                    // Create 4 buttons and append them to the #layer2
                    for (var i = 0; i < 21; i++) {
                        const newText = generateRandomText();
                        if (i == 10) {
                            let button = $('<button class="buttonClick2">').text("I need to wake up");
                            $('#layer2').append(button);
                        } else {
                          var button = $('<button>').text(newText);
                        $('#layer2').append(button);  
                        }
                        
                    }
                }, 2000);
            });

            $(document).on('click', '.buttonClick2', function() {
                // Set a timeout of 2 seconds (2000 milliseconds)
                setTimeout(function () {
                    // Create 21 buttons and append them to the #layer2
                    for (var i = 0; i < 21; i++) {
                        const newText = generateRandomText();
                        if (i === 2) { 
                            let button = $('<button class="buttonClick2">').text("I need to wake up");
                            $('#layer2').append(button);
                        } else { 
                            (function(j){ 
                                setTimeout(function(){ 
                                    var button = $('<button>').text("wake up"); $('#layer2').append(button); 
                                }, j * 200); 
                            })(i);
                        }
                    }
                    $("#buttonLayer3").removeAttr("disabled").css("color","#FF0000");
                },2000);
            });