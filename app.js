// selecting the buttons with ids 
const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2Btn')
const resetBtn = document.querySelector('#resetBtn')
const p1Points = document.querySelector('#p1Score')
const p2Points = document.querySelector('#p2Score')
const winnigScoreSelect = document.querySelector('#playTo')




// for updating the score and boolean for additional condition
let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function (){
    if( !isGameOver) {
        p1Score +=1;
    
    if(p1Score === winScore) {
        isGameOver = true;
        p1Points.classList.add('winner')
        p2Points.classList.add('loser')
        p1Button.disabled = true;
        p2Button.disabled = true;

        } 
        p1Points.textContent = p1Score;
    }
   
})

p2Button.addEventListener('click', function (){
    if(!isGameOver){
        p2Score +=1;
    

    if(p2Score === winScore) {
        isGameOver = true;
        p2Points.classList.add('winner')
        p1Points.classList.add('loser')

        p1Button.disabled = true;
        p2Button.disabled = true;
        }
        p2Points.textContent = p2Score;
    }
})

// creating the new function 
resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Points.textContent = 0;
    p2Points.textContent = 0;

    p1Points.classList.remove('winner', 'loser')
    p2Points.classList.remove('winner', 'loser')

    p1Button.disabled = false;
    p2Button.disabled = false;
}

winnigScoreSelect.addEventListener('change', function() {
    winScore = parseInt(this.value)
    reset();
})