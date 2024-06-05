// Author: Vanessa Wang
// Date: May 27, 2024
//prototype for text

// function shuffleName (){
//     //retrieve user's name
//     let inputName = window.prompt("Who am I?");
//     console.log(inputName);
//     //convert name to array
//     let userName = inputName.split('').sort((a, b) => 0.5 - Math.random()).join('');
//     console.log(userName);
//     //return sorted name
//     return userName;
//   };

function generateRandomText(){
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen =  Math.floor(Math.random() * (max - min + 1)) + min;
// Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
// Generate the random Lorem Ipsum-like text
return text.slice(randStart, randStart + randLen);
}

$("#layer1-button").click(function(){
    let barWidth = parseInt($("#myBar").css("width"));
    // let barWidth = $("#myBar").css("width");
    if (barWidth==1000) { 
        console.log('Hi');
    } else {
        $("#myBar").css("width",'+=100px');
        // get new fake dialogue
        const newText = generateRandomText();
        // append a new div to our output div
        $("#output").append('<div class="text"><p>' + newText + '</p></div>');}
});
