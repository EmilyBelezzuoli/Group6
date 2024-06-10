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

            // Check if the entered code is '254'
            if (enteredCode === '254') {
                flashScreen(); // Flash the screen for 5 seconds if the code is '1234'
            }
            $('#code').val(''); // Clear the input field after checking the code
        } 
        // For other buttons (numbers)
        else {
            $('#code').val($('#code').val() + value); // Append the value of the clicked button to the input field
        }
    });

    // Function to flash the screen
    function flashScreen() {
        var count = 0;
        var interval = setInterval(function() {
            count++;
            $('body').toggleClass('flash'); // Toggle the 'flash' class to change background color
            if (count === 25) { // 25 iterations for 5 seconds (200 ms * 25 = 5000 ms)
                clearInterval(interval); // Stop the flashing after 5 seconds
                $('body').css('background-color', 'black'); // Set background color back to default
            }
        }, 200);
    }
});


