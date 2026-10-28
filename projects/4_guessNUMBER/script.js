let randomNO = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const slot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowORhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevguess = []
let numguesses = 1 

let playgame = true 

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateguess(guess)
    });
}

function validateguess(guess){
      if(isNaN(guess) || (guess<1 || guess >100)) {
        alert('enter valid number')
      } 
      else {
        if(numguesses ===11){
            displayguess(guess);
            displaymsg(`GAME OVER . random number was ${randomNO}`)
            endGame()
        }else{
         prevguess.push(guess)
          displayguess(guess); 
         checkguess(guess)
        }
      }
}

function checkguess (guess){
   if (guess === randomNO){
    displaymsg(`BRAVO !! RIGHT GUESS`)
    endGame()
   } else if (numguesses === 11) { // ADD THIS CONDITION
        displaymsg(`GAME OVER. Random number was ${randomNO}`);
        endGame();
    } else if ( guess < randomNO){
    displaymsg(`think higher number`)
   } else {
     displaymsg(`think lower number`)
   }
}
function displayguess(guess){
    userinput.value = ''
   //  slot.innerHTML += `${guess}`
    slot.innerHTML = prevguess.join(', ');
   numguesses++;
   remaining.innerHTML = `${11-numguesses}`
}

function displaymsg(msg){
 lowORhigh.innerHTML=`<h2> ${msg}</h2>`
}

function endGame(){
    userinput.value = ''
    userinput.disabled = true;
    submit.disabled = true;
    // or userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id="newgame">Start New Game</button>`;
    startOver.appendChild(p)
    playgame= false
    newGame()
}

function newGame(){
const newbutton = document.querySelector('#newgame')
newbutton.addEventListener('click',function(e){
    randomNO = parseInt(Math.random()*100+1)
    prevguess=[]
    numguesses=1
    slot.innerHTML=''
    remaining.innerHTML=`${11-numguesses}`;
    lowORhigh.innerHTML = '';

      userinput.disabled = false;
        submit.disabled = false;
    userinput.removeChild(p)
    playgame= true 
})
}
