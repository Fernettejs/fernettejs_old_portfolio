let userName = 'Joe';

console.log(`${userName}`);

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will it rain soon?';
console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall ='';

switch (randomNumber) {
  case 0:
    eightBall = 'How the hell should I know?'
;
    break;
  case 1:
    eightBall = 'You can ask anything you want and that\'s all you got?'
;
    break;
  case 2:
    eightBall = 'If I was getting paid by the level of stupidity of these questions, I\'d be able to retire tomrrow.'
;
    break;
  case 3:
    eightBall = 'I coded this just to answer a stupid question like that...'
;
    break;
  case 4:
    eightBall = 'I wouldn\'t let anyone know that you asked a computer that...'
;
    break;
  case 5:
   eightBall = 'Answer buffering...'
;
    break;
  case 6:
    eightBall = 'That answer is going to stay a secret.'
;
    break;
  case 7:
   eightBall = 'YES! Happy now?'
;
    break;
}

document.getElementById("answer").innerHTML = eightBall;

// console.log(`Your answer is ${eightBall}.`)
