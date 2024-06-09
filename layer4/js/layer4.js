/*
    File: layer4.js
    File Description: Layer 4"s text-adventure js source.
    Original Author: WebDevSimplified
    Original Structure: https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/styles.css 
    Author/Editor: Sean Y.
*/

// Program Structure -- Don't change
const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement("button")
      button.innerText = option.text
      button.classList.add("btn")
      button.addEventListener("click", () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

// Edit to write story 
const textNodes = [
  {
    id: 666,
    text: "Death swallows you in its cold, yet soothing embrace. Finally, everything has come to an end...",
    options: [
      {
        text: "Open your eyes",
        requiredState: (currentState) => currentState.dead,
        nextText: 1
      }
    ]
  },
  {
    id: 1,
    text: "As your eyes open, your retinas are almost immediately seared by the gaze of the scorching sun.",
    options: [
      {
        text: "1. Allow your eyes to adjust to the environment and take in the scenery",
        setState: { dead: false },
        nextText: 2
      },
      {
        text: "2. Lay still upon the sandbed and take in the glorious sunshine",
        setState: { dead: true },
        nextText: 666
      }
    ]
  },
  {
    id: 2,
    text: "You peer upon the barren vistas around you -- the lands are nothing but the crumbling remnants of a bygone civilization embedded into the shifting red sands.",
    options: [
      {
        text: "1. Wade through the red sands and seek shelter from the sun within a ruined church close by",
        nextText: 3,
      },
      {
        text: "2. The ruins don't interest you. Make haste for the northern horizon in search of anything evidently lucrative",
        nextText: 4,
      },
      
    ]
  }
]

  /*
  Leaving this here to use as a structural reference -- will delete when complete
  {
    id: 2,
    text: "You venture forth in search of answers to where you are when you come across a merchant.",
    options: [
      {
        text: "Trade the goo for a sword",
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: "Trade the goo for a shield",
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: "Ignore the merchant",
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.",
    options: [
      {
        text: "Explore the castle",
        nextText: 4
      },
      {
        text: "Find a room to sleep at in the town",
        nextText: 5
      },
      {
        text: "Find some hay in a stable to sleep in",
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: "You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: "Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: "You wake up well rested and full of energy ready to explore the nearby castle.",
    options: [
      {
        text: "Explore the castle",
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: "While exploring the castle you come across a horrible monster in your path.",
    options: [
      {
        text: "Try to run",
        nextText: 8
      },
      {
        text: "Attack it with your sword",
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: "Hide behind your shield",
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: "Throw the blue goo at it",
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: "Your attempts to run are in vain and the monster easily catches.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: "You foolishly thought this monster could be slain with a single sword.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: "The monster laughed as you hid behind your shield and ate you.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: "You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.",
    options: [
      {
        text: "Congratulations. Play Again.",
        nextText: -1
      }
    ]
  }
  */

startGame()