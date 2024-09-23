// Author: Vanessa Wang + L Tachiaban
// Date: May 27, 2024
//prototype for text

//retrieve user's name
let inputName = window.prompt("Who am I?");
console.log(inputName);

//function to shuffle letters of name
function shuffleName (){
    //convert name to array
    var userName = inputName.split('').sort((a, b) => 0.5 - Math.random()).join('');
    console.log(userName);
    //return sorted name
    return userName;
  };

//retrieve variable username
const userName = shuffleName ()

//text to cycle through
let arr = ["Where am I","What's going on?","I don't remember...how I got here","Is there anyone here? I thought I heard..","I can't move","Who am I? I think... am I "+userName+"?","There's something I have to do. I can't rest.","I'm not supposed to be here. I'm supposed to...","What was that?","I have to get out."];
let index = 0;

//when butotn clicks progress bar + text
$("#layer1-button").click(function(){
    let barWidth = parseInt($("#myBar").css("width"));
    // if bar full, clear screen
    if (barWidth==1000) { 
        console.log('Hi');
        $("#buttonLayer2").removeAttr("disabled").css("color","#FF0000");
    //if bar not full...
    } else {
        //progress the bar
        $("#myBar").css("width",'+=100px');
        //add textbox
        $("#output").append('<div class="text"><p>' + arr[index] + '</p></div>');
        index = (index + 1) % arr.length;
    }
});

//turn on and off audio
$("#audio-button").click(function(){
    let myAudio = $("audio")[0]

    //if audio paused, play audio
    if (myAudio.paused) {
        myAudio.play();
        console.log("fofo")
        
    //if audio playing alrdy, pause when clicked
    } else {
        myAudio.pause();
        console.log("fifi")
    }
});


  