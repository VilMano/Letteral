let words = ["abbey",
    "about",
    "above",
    "abuse",
    "actor",
    "acute",
    "adapt",
    "admit",
    "adobe",
    "adopt",
    "adult",
    "after"];

var word = words[Math.floor(Math.random() * (words.length - 0 + 1) + 0)];
document.querySelector(".env").innerText = word;

let wordArr = [];

// Current session settings
document.querySelector(".word-1").querySelector(".letter-1").focus();

let sessionStep = 1;
let letterStep = 1;

const handleEnter = (key) =>{
    console.log(key)
    if(key.code == "Enter"){
        console.log(letterStep)
        if(letterStep < 6)
            handleOnSubmit();
    }
}

const handleOnSubmit = (e) => {
    let wordRow = document.querySelector(`.word-${sessionStep}`);

    let letter1 = wordRow.querySelector(`.letter-1`).value;
    let letter2 = wordRow.querySelector(`.letter-2`).value;
    let letter3 = wordRow.querySelector(`.letter-3`).value;
    let letter4 = wordRow.querySelector(`.letter-4`).value;
    let letter5 = wordRow.querySelector(`.letter-5`).value;


    wordArr.push(letter1, letter2, letter3, letter4, letter5);

    // did he guess the word?
    let colours = checkWord(letter1 + letter2 + letter3 + letter4 + letter5);


    // style page
    let letter = 1;
    colours.forEach(colour => {
        wordRow.querySelector(`.letter-${letter}`).className += " " + colour;
        letter++;
    });

    console.log(letterStep)
    if(letterStep == 6){
        console.log("finished")
        wordRow.querySelector(`.letter-1`).disabled = true;
        wordRow.querySelector(`.letter-2`).disabled = true;
        wordRow.querySelector(`.letter-3`).disabled = true;
        wordRow.querySelector(`.letter-4`).disabled = true;
        wordRow.querySelector(`.letter-5`).disabled = true;
    }

    if (sessionStep == 5) {
        // if letter is right, wins

        // if letter is wrong, lose game
    }

    sessionStep++;
    
    if (sessionStep < 5) {
        document.querySelector(`.word-${sessionStep}`).querySelector(".letter-1").focus();
        letterStep = 1;
    }
    
    
}

const handleTypeInput = (e) => {
    console.log(e)
    console.log()
    
    if(/^[a-zA-Z]+$/.test(e.key) && e.key != "Backspace" && e.key != "Enter"){
        console.log("yeaaah")
        if(letterStep < 5){
            letterStep++;
            document.querySelector(`.word-${sessionStep}`).querySelector(`.letter-${letterStep}`).focus();
        }
    }
}


// get last word typed
const checkWord = (inputWord) => {
    const word = document.querySelector(`.env`).innerText;
    console.log("Word: ", word)

    if (inputWord == word) {
        // wins
        console.log("you win")

        return ["green", "green", "green", "green", "green"];
    }

    let inputWordArr = inputWord.split("");
    console.log("Input: ", inputWordArr)
    let coloursArr = [];

    let letterPos = 0;

    for (let letter of inputWordArr) {
        console.log(`Letter ${letterPos + 1}`, letter)
        let letterPosInWord = word.indexOf(letter);
        
        console.log(letterPosInWord)
        if (letterPosInWord >= 0) {
            if (letterPosInWord == letterPos) {
                console.log("green")
                coloursArr[letterPos] = "green";
                letterPos++;
                continue;
            } else {
                console.log("yellow")
                coloursArr[letterPos] = "yellow";
                letterPos++;
                continue;
            }
        }

        coloursArr[letterPos] = "grey";

        letterPos++;
    }

    return coloursArr;
};


const changePosition = (pos) => {
    letterStep = pos;
}