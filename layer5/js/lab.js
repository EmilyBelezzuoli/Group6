$(document).ready(function() {
    // Event listener for button clicks
    $('.key').on('click', function() {
        var value = $(this).text(); // Get the text content of the clicked button

        // Check if the clicked button is 'clear'
        if (this.id === 'clear') {
            $('#code').val(''); // Clear the input field
        } 
        // Check if the clicked button is 'enter'
        else if (this.id === 'enter') {
            var enteredCode = $('#code').val(); // Get the entered code from the input field

            // Check if the entered code is '4321'
            if (enteredCode === '4321') {
                endScreen(); // Flash the screen for 5 seconds if the code is '1234'
            }
            $('#code').val(''); // Clear the input field after checking the code
        } 
        // For other buttons (numbers)
        else {
            $('#code').val($('#code').val() + value); // Append the value of the clicked button to the input field
        }
    });

    // // Function to flash the screen
    // function flashScreen() {
    //     var count = 0;
    //     var interval = setInterval(function() {
    //         count++;
    //         $('body').toggleClass('flash'); // Toggle the 'flash' class to change background color
    //         if (count === 25) { // 25 iterations for 5 seconds (200 ms * 25 = 5000 ms)
    //             clearInterval(interval); // Stop the flashing after 5 seconds
    //             $('body').css('background-color', 'black'); // Set background color back to default
    //         }
    //     }, 200);
    // }

    //Function to wake up
    function endScreen() {
       console.log("hi!")
       $(".container5").fadeOut(3000);
       
    setTimeout(function(){
        console.log("hi222!")
        $("#hiddenForNow").css("display","block")
    }, 3000);

    //lin e1
    setTimeout(function(){
        $("#animated1").typeTo("The sunlight shines down on your face. Your eyes feel grimy. Your head feels worse. You don't want to get up. You would rather die than get up.");
    }, 4000);

    //line 2
    setTimeout(function(){
        $("#animated2").typeTo("But the alarm is ringing. There's something you have to do. You can't rest.");
    }, 14000);

    //line 3
    setTimeout(function(){
        $("#animated3").typeTo("It's 7am and you've gotten 4 hours of sleep tonight. You still have work to do...");
    }, 19500);

    //line 4
    setTimeout(function(){
        $("#animated4").typeTo("The end.");
    }, 25500);
    
    }

    // 
    // 
    // 
});


