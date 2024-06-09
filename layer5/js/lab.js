/*
   lab.js - This simple JavaScript/jQuery script makes a sequnce of 200ish  Buttons that creat a maze in a grid of buttons

   Requirements: jQuery must be loaded for this script to work.

   Author: Jesus Barrios
   Date: 5-27-2024
*/


// first i need to creat a button that will initiate the creation of the maze. 
// I'll set the start of the button creation to a single button with class "initiate" if i need it to be called to 

// the creation of the maze should be start form the top left and add buttons to the right of that inital button creating a rectagualr grid of buttons
// ill probbaly set the creation of the button to a for loop that does the same thing as layer 2 wich just creats buttons with a short delay inbetween each one.
        // In order to make the button grid a maze i will have to give the buttons a click listener that will chnage its color when clicked, and there will be two kinds, right button and wrong buttons the right ones will turnr green and the wrong ones will just be deleted.
        //i will some how have to make it so that buttons have to be pressed in a sorten order so that the player can not just get lucky and press the last button in teh maze and move on, 
            // I think i can do this by creating a tying each button to a if statment that will check if the previous button has been clicked in order for its click listener to be active. this will be very uneffecent but it will work, ill ask wes bot about any more efficent ways of doing it. 
// so far we have a rectangle grid of buttons that will each have a click listner that is only active when the previous button in the sequence has been pressed.

// First I need to creat a button at the top that once pressed will creat the grid of buttons

   // Set a timeout of 2 seconds (2000 milliseconds)

   
   
// const creatMaze = function() {
//    for (var i=1; i<35; i++) {
//       $("#output").append("<button id='grid'> path <button>");
//    }
// }

// 1 1 1 1 0 0 0 0 0 0 0 0 0 0
// 0 0 0 1 0 0 1 1 1 1 1 1 0 0
// 0 1 0 1 1 1 1 0 0 0 0 1 1 1
// 0 1 0 0 0 0 1 0 0 0 0 0 0 1
// 0 1 1 1 1 1 1 1 1 1 1 1 0 1



// $(".spawn").click(creatMaze);

// const creatMaze = function() {
//    for (var i = 0; i < 70; i++) {
//       if (i === 0) {
//          $("#output").append("<button id='startButton'> Start Here </button>");
//       } else if (i === 69) {
//          $("#output").append("<button id='endButton'> End Here </button>");
//       } else {
//          $("#output").append("<button id='grid'> path " + i + "</button>");
//       }
//    }
// }
// $(".spawn").click(creatMaze);

const binaryMap = [
    1, 1, 0, 0, 0,
    0, 1, 1, 0, 0,
    0, 0, 1, 1, 0,
    1, 0, 0, 1, 0,
    1, 1, 0, 1, 1,
    0, 1, 0, 0, 1,
    0, 1, 1, 1, 1,
    0, 0, 0, 0, 1,
    1, 1, 1, 0, 1,
    1, 0, 0, 0, 1,
    1, 1, 0, 1, 1,
    0, 1, 0, 0, 1,
    0, 1, 1, 1, 1,
    0, 0, 0, 0, 1
 ];
 
 const createMaze = function() {
    const rows = 14;
    const cols = 5;
    const outputDiv = $("#output").empty();
 
    for (let i = 0; i < rows * cols; i++) {
        const button = $("<button>")
            .attr("id", "button" + i)
            .data("index", i)
            .text(i);
 
        if (i === 0) {
            button.text("Start Here").attr("id", "startButton");
        } else if (i === rows * cols - 1) {
            button.text("End Here").attr("id", "endButton");
        }
 
        outputDiv.append(button);
    }
 
    $(".maze-button").click(function() {
        const index = $(this).data("index");
        if (binaryMap[index] === 1) {
            $(this).removeClass("wrong").addClass("correct");
 
            const nextIndexes = [index + 1, index + 5];
            nextIndexes.forEach(nextIndex => {
                if (binaryMap[nextIndex] === 1) {
                    $("#button" + nextIndex).prop("disabled", false);
                }
            });
        } else {
            $(this).removeClass("correct").addClass("wrong");
        }
    });
 
    $("#startButton").click(function() {
        $(this).removeClass("wrong").addClass("correct");
        $("#button1").prop("disabled", false);
    });
 };
 
 $(".spawn").click(createMaze);
 