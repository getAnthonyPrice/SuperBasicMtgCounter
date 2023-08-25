let scoreOne = document.getElementById('scoreOne')
let scoreTwo = document.getElementById('scoreTwo')

let scoreOneValue = 20
let scoreTwoValue = 20

//1st

function plusOne(){
    scoreOneValue += 1   
    scoreOne.textContent = scoreOneValue
}
function minusOne(){
    scoreOneValue -= 1   
    scoreOne.textContent = scoreOneValue 
}
function clearScore(){
    scoreOneValue = 20 
    scoreOne.textContent = scoreOneValue   
}

//2nd

function plusOneB(){
    scoreTwoValue += 1   
    scoreTwo.textContent = scoreTwoValue
}
function minusOneB(){
    scoreTwoValue -= 1   
    scoreTwo.textContent = scoreTwoValue 
}
function clearScoreB(){
    scoreTwoValue = 20 
    scoreTwo.textContent = scoreTwoValue   
}

