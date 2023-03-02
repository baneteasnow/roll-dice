// let scoreBtnOne = document.getElementById("score")
// let scoreBtnTwoOne = document.getElementById("scoreTwoOne")
// let scoreBrnTwoTwo = document.getElementById("scoreTwoTwo")

// function rollDice1() {
//     let score = Math.floor(Math.random() * 6) + 1
//     scoreBtnOne.textContent = score
// }

// function rollDice21() {
//     let score21 = Math.floor(Math.random() * 6) + 1
//     scoreBtnTwoOne.textContent = scoreTwoOne
// }
// function rollDice22() {
//     let score22 = Math.floor(Math.random() * 6) + 1
//     scoreBtnTwoTwo.textContent = scoreTwoTwo
// }

let scoreBtnOne = document.getElementById("score")
let scoreBtnTwo = document.getElementById("scoreTwo")
let scoreBtnRst = document.getElementById("scoreRst")

function rollDice1() {
    let score = Math.floor(Math.random() * 6) + 1
    scoreBtnOne.textContent = score
}

function rollDice2() {
    let scoreTwo = Math.floor(Math.random() * 6) + 1
    scoreBtnTwo.textContent = scoreTwo
    return score + scoreTwo
}

 function scoreRst() {
     scoreBtnOne.textContent = "n/a"
     score = "n/a"
     scoreBtnTwo.textContent = "n/a"
     scoreTwo = "n/a"
}

