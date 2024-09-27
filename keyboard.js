let keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M"
];

let keyboard = document.querySelector(".keyboard");

let firstRow = document.createElement("div");
firstRow.classList.add("row-1");
firstRow.classList.add("row");
let middleRow = document.createElement("div");
middleRow.classList.add("row-2");
middleRow.classList.add("row");
let lastRow = document.createElement("div");
lastRow.classList.add("row-3");
lastRow.classList.add("row");

keyboard.appendChild(firstRow);
keyboard.appendChild(middleRow);
keyboard.appendChild(lastRow);



let row = 1;
let keyPosition = 0;

keys.forEach(key => {
    if(keyPosition == 10 || keyPosition == 19){
        row ++;
    }

    // create key
    let button = document.createElement("div");
    button.classList.add("button");
    button.onclick = () => handleOnClickKey(key);
    button.innerText = key;

    // add key to row
    document.querySelector(`.row-${row}`).appendChild(button);
    keyPosition++;
})