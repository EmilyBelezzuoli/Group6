/*
    File: layer4.js
    File Description: 
    Author: Sean Y.
    
*/

//const textElement = $("#text");
//const optionButtonsElement = $("#option-buttons");

const textElement = document.getElementById("text");
const optionButtonsElement= document.getElementById("option-buttons");

let state = {};

function startGame() {
    state = {};
    showTextNode(1);

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNodes.options.foreach(options => {
        if (showOption(option)) {
           const button = document.createElement("button");
           button.innerText = options.text;
           button.classList.add("button");
           button.addEventListener('click', () => selectOption(option));
           optionButtonsElement.appendChild(button);
        }
    })
}

function showOption() {
    return true;
}

function selectOption(option) {

}

function showTextNode(textNodeIndex) {

}

const textNodes = [
    {
        id: 1,
        text: "The gaze of the scorching sun blinds you",
        options: [
            {
                text: "Get up and observe the scenery around you",
                setState: {alive: true},
                nextText: 2,
            },
            {
                text: "Lie in the sands below the sun",
                setState: {alive: false},
                nextText: 0,
            }
        ]
    },
    {
        id: 2,
    },
    {
        id: 0,
    }
]

startGame();