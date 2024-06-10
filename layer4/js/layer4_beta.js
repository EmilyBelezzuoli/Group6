/*
    File: layer4.js
    File Description: Layer 4"s text-adventure js source.
    Original Author: WebDevSimplified
    Original Structure: https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/styles.css 
    Author/Editor: Sean Y.
*/

// Program Structure -- Don't change
const textElement = document.getElementById("text-four")
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
    id: 1,
    text: "The land is foggy and grey. It's hard to feel anything but the soreness of your limbs. You don't remember how you got here, or why you feel so tired. It's so hard to think. You only know one thing. There is something here that will eat you alive. What do you do?",
    options: [
      {
        text: "Run",
        nextText: 3
      },
      {
        text: "Hide",
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: "You sink into the fog, and let your body fall away until you are nothing but vapor and the weight of your own breath.",
    options: [
      {
        text: "Watch",
        setState: { chest: true },
        nextText: 4
      },
      {
        text: "Listen",
        setState: { name: true },
        nextText: 5
      },
    ]
  },
  {
    id: 4,
    text: "Barely a flicker in the distance - What was that?... Something lumbering. Razorsharp and static. Almost human-shaped. There's something shiny and bright lodged in it's chest. It's coming closer.",
    options: [
      {
        text: "Watch",
        nextText: 6
      },
      {
        text: "Listen",
        setState: { name: true },
        nextText: 7
      },
      {
        text: "Run",
        nextText: 8
      },
    ]
  },
  {
    id: 6,
    text: "The longer you watch, the closer it approaches. Faster and faster, the beast drags its claws in the sand to find you. You try to run, but it's too late now. Lifeless body on the ground, nothing to do but watch and wait, and hope it doesnt hear the frantic bloody beating of your heart against your chest. But it will, leaving you senseless with the knowledge that soon it will tear your body to shreds and eat you alive.",
    options: [
      {
        text: "GAME OVER. RESTART?",
        nextText: 1
      },
    ]
  },
  {
    id: 5,
    text: "the first thing you hear is the sound of grinding teeth right at your ears. A low whine, turning to a prayer, turning to a scream"+userName+userName+userName+"Is that your name?",
    options: [
      {
        text: "Watch",
        setState: { chest: true },
        nextText: 4
      },
      {
        text: "Listen",
        nextText: 9
      },
      {
        text: "Run",
        nextText: 8
      },
    ]
  },
  // {
  //   id: 9,
  //   text: "Somewhere distant, a sweeter place, you hear a melody somebody sung to you once, soft and warm, like the rumble of a car late at night. So quiet and gentle, it drowns out the screaming of the world all around you. Until all you can hear is an eternal hum in your mind. It's so much nicer here ... You could stay here forever...",
  //   options: [
  //     {
  //       text: "GAME OVER. RESTART?",
  //       nextText: -1
  //     },
  //   ]
  // },

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