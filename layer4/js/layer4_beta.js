 /*
     File: layer4.js
     File Description: Layer 4"s text-adventure js source.
     Original Author: WebDevSimplified
     Original Structure: https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/styles.css 
     Author/Editor: Sean Y.
 */

//Program Structure -- Don't change
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

  //Edit to write story 
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
         nextText: 5
       },
       {
         text: "Run",
         nextText: 7
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
     text: "The first thing you hear is the sound of grinding teeth right at your ears. A low whine, turning to a prayer, turning to a scream. Is that your name?",
    //USERNAME PUT IN LATER
     options: [
       {
         text: "Watch",
         setState: { chest: true },
         nextText: 4
       },
       {
         text: "Listen",
         nextText: 8
       },
       {
         text: "Run",
         nextText: 7
       },
     ]
   },
   {
     id: 8,
     text: "Somewhere distant, a sweeter place, you hear a melody somebody sung to you once, soft and warm, like the rumble of a car late at night. So quiet and gentle, it drowns out the screaming of the world all around you. Until all you can hear is an eternal hum in your mind. It's so much nicer here ... You could stay here forever...",
     options: [
       {
         text: "GAME OVER. RESTART?",
         nextText: 1
       },
     ]
   },
   {
     id: 7,
     text: "You dont need to know any more about this. Finding once again the feel of your feet attatched to your body, you take off. Somewhere, anywhere but here.You sink into the fog, and let your body fall away until you are nothing but vapor and the weight of your own breath.",
     options: [
       {
         text: "Run to the beach",
         nextText: 9
       },
       {
         text: "Run to the forest",
         nextText: 10
       },
     ]
   },
   {
     id: 3,
     text: "You don't need to wait for whatever's coming for you to find you. Finding once again the feel of your feet attatched to your body, you take off. Somewhere, anywhere but here.",
     options: [
       {
         text: "Run to the beach",
         nextText: 9
       },
       {
         text: "Run to the forest",
         nextText: 10
       },
     ]
   },
   {
     id: 9,
     text: "You run and run until your heart begins to choke in your chest. When you look up, you find yourself in the middle of a beach. The wind howls through your ears, but you cannot yet feel the bite of the rain on you face. The horizon seems to stretch on endlessly. It leaves you dizzy and lightheaded. But you can't just keep standing here. You have to move, you always have to keep moving. You walk along the shoreline, hoping you might find something to defend yourself.",
     options: [
       {
         text: "Approach the sailboat tied to the docks",
         nextText: 11
       },
     ]
   },
   {
     id: 11,
     text: "You stumble upon a frail looking boat, unanchored and loosely tied to a dock. Perhaps this is your way out of here, or perhaps there are greater dangers in the ocean than you can even imagine. The beast is coming. You have to make a decision quickly.",
     options: [
       {
         text: "Untie the boat",
         nextText: 13
       },
       {
         text: "Keep walking",
         nextText: 12
       },
     ]
   },
   {
     id: 13,
     text: "You decide to take your chances. Whatever's out there... It can't be worse than the certain death that awaits you here.",
     options: [
       {
         text: "Sail out",
         nextText: 14
       },
     ]
   },
   {
     id: 14,
     text: "The further out that you sail, the less you can see, you can hear, you can feel. The world feels so quiet now. You can feel the thoughts screaming in your head turn down to a whine, turn down to a murmur, until there's nothing left completely. You can't think of anything beyond the fog. It's hours before you notice you cant see your body anymore. You can't feel your teeth. When did you stop being able to hear the sound of the waves? Have you been moving at all? Caught in an endless moment, you sit voicelessly as you feel yourself dissipate into the expanse of limitless fog...",
     options: [
       {
         text: "GAME OVER. RESTART?",
         nextText: 1
       },
     ]
   },
   {
     id: 12,
     text: "You are too slow to see the blur of movement at the edge of your sight. Your feet are too numb to feel the grip of cold slimy hands around your ankles. You fall to the ground in a crumpled heap, far too weary to fight as you are dragged into darkness. The last thing you hear is the sound of grinding teeth and the frantic bloody beating of your heart against your chest.",
     options: [
       {
         text: "GAME OVER. RESTART?",
         nextText: 1
       },
     ]
   },
   {
     id: 10,
     text: "You run and run until your heart begins to choke in your chest. Dark spots enter your vision. The world spins. It's getting closer, and the only thing keeping you going is the muscle memory in your legs driving you forward. Your eyes fall shut. When you open them, you can see a forest in the distance. Somehow, you feel even more lost than before.  Your head hurts. But you can't just keep standing here. You have to move, you always have to keep moving. You walk towards the forest, hoping the beast cant find you here.",
     options: [
       {
         text: "Enter the forest",
         nextText: 15
       },
       {
         text: "Walk along the forest's edge",
         nextText: 16
       },
     ]
   },
   {
     id: 15,
     text: "You enter into that soothing darkness, brambles and branches slicing your feet as you walk onwards. But it's hard to focus on anything but the soft ambient music of the forest. The crackle of leaves, and the whisper of birds and the ever humming droning of your mind. It's the first time you've felt calm in such a long, long time. It's easy to forget you're alone. It's easy to forget that none of this is real. You are barely conscious as you sink down into the softness of the earth. As the shadows creep forwards, slowly and certainly engulfing you in the darkness. As the birds and worm rip and tear at your flesh. But the droning in your mind eases away the dread and the terror. You will get up soon, surely. Just for a second longer, you tell yourself, as you lay there, consumed by the hunger of the forest.",
     options: [
       {
         text: "GAME OVER. RESTART?",
         nextText: 1
       },
     ]
   },
   {
     id: 16,
     text: "The forest is dark and foreboding. It's better to keep walking along the forest-line.",
     options: [
       {
         text: "Keep walking",
         nextText: 17
       },
     ]
   },
   {
     id: 17,
     text: "The slow monotony drills into your head. The endless patterns of trees and trees blends together like a faded painting. It's getting hard to see what's in front of you. You can't keep doing this forever. But you have to...you have to.. you don't remember why. But you have to...",
     options: [
       {
         text: "Keep walking",
         nextText: 12
       },
       {
         text: "-What was that?",
         requiredState: (currentState) => currentState.name,
         nextText: 18
       },
     ]
   },
   {
     id: 18,
     text: "Something's calling your name... it's here! You turn around, and see the beast once more, biting and hissing at your heels. It's closer than it's ever been before. It drips with bloody, rotting ichor and stains your feet where it touches you. You are so, so tired. But the shot of fear gives you the adrenaline to take one last action before you give out entirely.",
    //USERNAME PUT IN HERE
     options: [
       {
         text: "Run!",
         nextText: 19
       },
       {
         text: "Reach into it's chest",
         requiredState: (currentState) => currentState.chest,
         nextText: 20
       },
     ]
   },
   {
     id: 19,
     text: "You run, and run, as fast as the physics of this strange world allows you. You thank god you don't need air here, for the panic and tension leaves you choking and unable to breathe. Bloody pain erupts all over your body. But keep running, keep running. Flashes of searing heat and cold wash over you. Run. your eyes are melting out of your head. Run. You've left your body so far behind you now. Run. Run until you've forgotten why. Run until you have nothing left to run for. Run until the pain is so blinding you beg for what you were running from. You run as far as this world will take you. The landscape stretches on endlessly. You keep running. As fast as you go, you can always hear the beast's bloody howling, right behind your ears...",
     options: [
       {
         text: "GAME OVER. RESTART?",
         nextText: 1
       },
     ]
   },
   {
     id: 20,
     text: "The beast approaches, towering over you. Though its body is dripping in pustular ooze, you now get a closer look at the glint of metal hidden in its chest. With you bare hand, you dig into the heart of this thing that would kill you, shivering with the repulsive cold it sends up your arm. As you grip onto its metal phylactery, it screams and howls. A sudden, overwhelming bitter rage takes over you, as you tear metal from flesh. You watch as the beast falls apart before you, melting into the forest floor beneath you. Standing there, over the rotting thing that once hunted you, you hold the metal key in your palm. Written on it is '4 3 2 1'...It's time to leave.",
    //put username in?
     options: [
       {
         text: "GAME COMPLETED",
         setState: { complete: true },
         nextText: 21
       },
     ]
   },
 ]
   /*
   $("#buttonLayer5").removeAttr("disabled").css("color","#912123");
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