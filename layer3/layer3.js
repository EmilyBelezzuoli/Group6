// Layer 3: changing dream scenes
// Author: Emily Belezzuoli
// editor: Celeste Hernandez

//lab example
// add button to challenge section
// $("#challenge").append("<button id='button-challenge'>Make Special</button>");
// // add a click listener to the challenge button
// $("#button-challenge").click(function(){
//      // now add (or subtract) the "special" class to the section
//     $("#challenge").toggleClass("special");
// })


//button for flash
$("#flashBox").append("<button id='button-flashBox'>Wake Up?</button>");
//listener
$("#button-flashBox").click(function(){
   //make flash? add class to section 
   $("#flashBox").toggleClass("flashBoxcss")
   //timeout
   setTimeout(flashBoxcssTransparent, 3000);
  function flashBoxcssTransparent() {
    $("#flashBoxTransparent").toggleClass("flashBoxcssTransparent")
  }


//    //new border box
//    $("#flashBoxTransparent").append("<button id='button-flashBoxTransparent'>Wake uppppp?</button>");
//    $("#button-flashBoxTransparent").click(function(){
//     //make flash? add class to section 
//     $("#flashBoxTransparent").toggleClass("flashBoxcssTransparent")
//  })

})





  //timeout

  //new function to make box transparent

  //listener

  //final --> wake up button goes to alert that says not yet then after all the not yets the dreams appear...
 



    

//one box
//button to empty box
//box flash 5 times with for loop
//5 buttons saying wake up
//click all 5 buttons and right box appears with different dreams
// cycle between different dream images


//after prototype
  //-type wake up into the box and white screen goes
