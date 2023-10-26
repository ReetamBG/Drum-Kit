const button = document.querySelectorAll(".drum");

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", clickToPlay);      // To look for clicks in the .drum selector elements
}

document.addEventListener("keydown", pressToPlay);     // To look for keypresses in the entire document (i.e when we are on the page)

function clickToPlay(){
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
}

function pressToPlay(event){            // The event (not a keyword) here is used to obtain info about the keypress
    playSound(event.key);               // event.key gives us the key letter which was pressed
}                                       // NOTE THAT WE CAN WRITE ANYTHING IN PLACE OF EVENT. IT IS NOT A KEYWORD

function playSound(alphabet){
    switch(alphabet){
        case 'w':
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case 'a':
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case 's':
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case 'd':
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("./sounds/crash.mp3").play();
            break;
        case 'k':
            new Audio("./sounds/snare.mp3").play();
            break;
        case 'l':
            new Audio("./sounds/kick-bass.mp3").play();
            break;
    }
}