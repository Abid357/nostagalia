const data = {
  "options": [
    "abid",
    // "mizan",
    // "ifti",
    "reza",
    "shabib",
    "huzaifa",
    // "sakib",
    // "talha",
    "shehbaz",
    // "abdulrehman"
  ],
  "questions": [
    "This guy worked the least in his own Master's thesis because we did it for him.",
    "Someone who used to say 'mera bhi ek din ayega' and his day has not yet come.",
    "Who says and writes 'bruv' the most in the group and not remotely close to being British?",
    "Quote: Is it because I am black?",
    "This guy spilled hot tea in his pp in Abid's car.",
    "Legend has it that this dude is still batting in Creek park, playing Cricket, and is still not out.",
    "That one person who makes you feel like you are with your modeer/kafil because of his rizz.",
    "You may be bad but who has absolutely the worst sense of maps and directions and can't remember roads?",
    "His dorm was our default place to be at AUS.",
    "This fool almost killed someone (not really) by throwing a table tennis racket.",
    "This guy takes the crown of laziness and procrastination because it took him 2+ years to get a chair.",
    "Who uses the N-word oddly often despite living in a country that can easily cancel him?",
    "The title of 'aim noob' based on a famous story was bestowed upon him.",
    "Every group has that one friend who always captures moments and is the default photographer.",
    "This guy said he can literally make any food in his house even though he never made any for us but we believe him.",
    "This guy has had a clash or an argument with every single member of the group.",
    "The van guy.",
    "Who is the latest addition to our group?",
    "This gentleman pulled a Thanos flick to split the old Oxford-AUS group into the Secret group we have today.",
  ],
  "answers": [
    "mizan",
    "ifti",
    "shabib",
    "ifti",
    "shabib",
    "sakib",
    "abdulrehman",
    "abid",
    "shabib",
    "shabib",
    "talha",
    "shehbaz",
    "huzaifa",
    "reza",
    "ifti",
    "abid",
    "abdulrehman",
    "abdulrehman",
    "shabib",
  ]
};

const questionElement = document.getElementById('question');
const optionButtons = document.getElementsByClassName('option');
const correctScore = document.getElementById('correct-score');
const wrongScore = document.getElementById('wrong-score');
let currentIndex = 1;
let questionIndex = 0;
let questionIndices = [];
let options = [];

function shuffle(array) {
  let i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function init() {
  // for (let i = 0; i < data.questions.length; i += 1) {
  //   questionIndices.push(i);
  // }  
  for (let i = 13; i < 14; i += 1) {
    questionIndices.push(i);
  }
  questionIndices = shuffle(questionIndices);
  loadQuestion();
}

function loadQuestion() {
  if (questionIndex >= questionIndices.length) {
    endGame();
    return;
  }
  const idx = questionIndices[questionIndex];
  const answer = data.answers[idx];
  questionElement.innerText = data.questions[idx];

  let allOptions = shuffle(data.options);
  allOptions.splice(allOptions.indexOf(answer), 1);
  options = shuffle([answer, ...allOptions.slice(0, 3)]);


  for (let i = 0; i < options.length; i++) {
    optionButtons[i].value = options[i];
    if (optionButtons[i].value === answer) {
      optionButtons[i].addEventListener('click', correctAnswer);
    } else {
      optionButtons[i].addEventListener('click', wrongAnswer);
    }
    optionButtons[i].children[0].src = 'images/' + options[i] + '.png';
  }
  questionIndex += 1;
}

function playAudio(audio) {
  return new Promise(res => {
    audio.play();
    audio.onended = res;
  });
}

function getButton(event) {
  let target = event.target;
  if (event.target.nodeName.toLowerCase() === 'img')
    target = event.target.parentElement;
  const idx = options.indexOf(target.value);
  return optionButtons[idx];
}

async function correctAnswer(event) {
  correctScore.innerText = parseInt(correctScore.innerText) + 1;
  const button = getButton(event);
  button.classList.add('correct');
  button.removeEventListener('click', correctAnswer);
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].removeEventListener('click', wrongAnswer);
  }
  const num = Math.floor(Math.random() * 5) + 1;
  let audio;
  if (['shehbaz', 'shabib', 'huzaifa', 'mizan', 'reza'].includes(button.value))
    audio = new Audio('audios/' + button.value + '-correct-' + num + '.mp4');
  else
    audio = new Audio('audios/abid-correct-1.mp3');
  await playAudio(audio);
  button.classList.remove('correct');
  loadQuestion();
}

async function wrongAnswer(event) {
  wrongScore.innerText = parseInt(wrongScore.innerText) + 1;
  const button = getButton(event);
  const num = Math.floor(Math.random() * 5) + 1;
  let audio;
  if (['shehbaz', 'shabib', 'huzaifa', 'mizan', 'reza'].includes(button.value))
    audio = new Audio('audios/' + button.value + '-wrong-' + num + '.mp4');
  else
    audio = new Audio('audios/abid-wrong-1.mp3');
  await playAudio(audio);
}

function startGame() {
  console.log('start game')
}

function endGame() {
  document.getElementById('main-page').style.display = 'none';
  document.getElementById('game-over-page').style.display = 'block';
  document.getElementById('correct-score-game-over').innerText = correctScore.innerText;
  document.getElementById('wrong-score-game-over').innerText = wrongScore.innerText;
}

init();
