let words = [
    "abbey",
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

let letterPosition = 1;
let rowNumber = 1;

let wordStr = "";

const displayScore = (isWin) =>{
    if(isWin){
        let winScoreDiv = document.createElement("div");
        winScoreDiv.classList.add("win");
        winScoreDiv.innerHTML = "You win!";
        document.body.appendChild(winScoreDiv);
    }else{
        let loseScoreDiv = document.createElement("div");
        loseScoreDiv.classList.add("lose");
        loseScoreDiv.innerHTML = "You lose, HA!";
        document.body.appendChild(loseScoreDiv);
    }
}

const handleEndOfWord = () => {
    rowNumber++;
    letterPosition = 1;
    
    let colours = getWordColours(wordStr);
    if(!colours.includes("grey") && !colours.includes("yellow")){
        displayScore(true);
    }else{
        if(rowNumber == 6)
            displayScore(false);
    }

    wordStr = "";
    let letterPositionV = 1;
    colours.forEach(colour => {
        document.querySelector(`.word-${rowNumber-1}`)
            .querySelector(`.letter-${letterPositionV}`)
            .classList.add(colour);
        letterPositionV++;
    });

    wordStr = "";
}


const handleOnClickKey = (key) => {
    let row = document.querySelector(`.word-${rowNumber}`);
    let letterInputEl = row.querySelector(`.letter-${letterPosition}`);
    letterInputEl.innerHTML = key;

    if (key != "Enter")
        wordStr += key;

    letterPosition++;

    if (letterPosition == 6) {
        handleEndOfWord();
    }
}



// get last word typed
const getWordColours = (inputWord) => {
    inputWord = inputWord.toLowerCase();

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