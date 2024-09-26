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

let wordArr = [];

// Current session settings
document.querySelector(".word-1").querySelector(".letter-1").focus();

let sessionStep = 1;
let letterStep = 1;

const handleEnter = (key) =>{
    if(key.code == "Enter"){
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

    // did they guess the word?
    let colours = getWordColours(letter1 + letter2 + letter3 + letter4 + letter5);

    // style page
    let letter = 1;
    colours.forEach(colour => {
        wordRow.querySelector(`.letter-${letter}`).className += " " + colour;
        letter++;
    });

    if(letterStep == 6){
        wordRow.querySelector(`.letter-1`).disabled = true;
        wordRow.querySelector(`.letter-2`).disabled = true;
        wordRow.querySelector(`.letter-3`).disabled = true;
        wordRow.querySelector(`.letter-4`).disabled = true;
        wordRow.querySelector(`.letter-5`).disabled = true;
    }

    sessionStep++;
    
    if (sessionStep < 5) {
        document.querySelector(`.word-${sessionStep}`).querySelector(".letter-1").focus();
        letterStep = 1;
    }
}

const handleTypeInput = (e) => {
    e.target.value = "";
    if(/^[a-zA-Z]+$/.test(e.key) && e.key.length == 1){
        if(letterStep < 5){
            letterStep++;
            document.querySelector(`.word-${sessionStep}`).querySelector(`.letter-${letterStep}`).focus();
        }
        e.target.value = e.key;
    }
}

// get last word typed
const getWordColours = (inputWord) => {
    if (inputWord == word)
        return ["green", "green", "green", "green", "green"];

    let inputWordArr = inputWord.split("");
    let coloursArr = [];

    let letterPos = 0;
    for (let letter of inputWordArr) {
        let letterPosInWord = word.indexOf(letter);
        
        if (letterPosInWord >= 0) {
            if (letterPosInWord == letterPos) {
                coloursArr[letterPos] = "green";
                letterPos++;
                continue;
            } else {
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