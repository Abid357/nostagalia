const data = {
  "options": [
    "abid",
    "mizan",
    "ifti",
    "reza",
    "shabib",
    "huzaifa",
    "sakib",
    "talha",
    "shehbaz",
    "abdulrehman"
  ],
  "trivia": [
    [("This guy worked the least in his own Master's thesis because we did it for him."), ("mizan")],
    [("Someone who used to say 'mera bhi ek din ayega' and his day has not yet come."), ("ifti")],
    [("Who says and writes 'bruv' the most in the group and is not remotely close to being British?"), ("shabib")],
    [("Quote: Is it because I am black?"), ("ifti")],
    [("This guy spilled hot tea in his pp in Abid's car."), ("shabib")],
    [("Legend has it that this dude is still batting in Creek park, playing Cricket, and is still not out."), ("sakib")],
    [("That one person who makes you feel like you are with your modeer/kafil because of his rizz."), ("abdulrehman")],
    [("You may be bad but who has absolutely the worst sense of maps and directions and can't remember roads?"), ("abid")],
    [("His dorm was our default place to be at AUS."), ("shabib")],
    [("This fool almost killed someone (not really) by throwing a table tennis racket."), ("shabib")],
    [("This guy takes the crown of laziness and procrastination."), ("talha")],
    [("Who uses the N-word oddly often despite living in a country that can easily cancel him?"), ("shehbaz")],
    [("The title of 'aim noob' based on a famous story was bestowed upon him."), ("huzaifa")],
    [("Every group has that one friend who always captures moments and is the default photographer."), ("reza")],
    [("The guy said he can literally make any food in his house even though he never made any for us."), ("ifti")],
    [("This guy has had a clash/an argument with every single member of the group."), ("abid")],
    [("The van guy with a logo."), ("abdulrehman")],
    [("Who is the latest addition to our group?"), ("abdulrehman")],
    [("This gentleman pulled a Thanos flick to split the old Oxford-AUS group into the Secret group we have today."), ("shabib")],
    [("It took this legend 2+ years to buy/get a chair."), ("talha")],
    [("The ultimate rager in DotA."), ("abid")],
    [("The slowest eater in the group."), ("ifti")],
    [("Most seasonal hangouts are planned by him."), ("abid")],
    [("Presumably only he has the N-word pass."), ("ifti")],
    [("This guy has a lot of handshake stories."), ("abid")],
    [("This guy has a lot of Jinn stories."), ("abdulrehman")],
    [("Who slept through his entire uni life and miraculously made it?"), ("talha")],
    [("If there was any mufta in AUS, almost guaranteed you will find him there."), ("talha")],
    [("This sweet soul logged into person A's account, chatted with person B appearing as person A, and requested person B to be friends with him because person B had boycotted him."), ("mizan")],
    [("He probably has the longest arms. It becomes more apparent when he walks."), ("mizan")],
    [("Who is into Bollywood stuff the most?"), ("mizan")],
    [("He is the first to step into fatherhood."), ("huzaifa")],
    [("Identify the only one of us to be living in Bangladesh."), ("mizan")],
    [("Select the best and the fastest driver among us."), ("abdulrehman")],
    [("Select the safest driver among us."), ("ifti")],
    [("Select the laziest driver among us."), ("abid")],
    [("If he paid money for every time he was picked up for a hangout, he would be legit broke by now."), ("abid")],
    [("He is the first to have an interracial marriage."), ("shabib")],
    [("He is crowned as the KFC King, always and forever."), ("abid")],
    [("He is the first to have performed Hajj, Ma shaa' Allah."), ("abid")],
    [("Who is the first among us to get married?"), ("mizan")],
    [("He is the civil engineer of the group."), ("mizan")],
    [("He is the chemical engineer of the group."), ("shabib")],
    [("He is the doctor of the group."), ("reza")],
    [("His informal title is 'little child lover'."), ("reza")],
    [("Select the first person you think of when it comes to programming."), ("abid")],
    [("Who do you think browses Facebook the most?"), ("mizan")],
    [("The only guy to not have a display picture on WhatsApp, guess who?"), ("ifti")],
    [("His OCD forces him to have the same username and sometimes profile picture on every website/app."), ("abid")],
    [("He is known for getting his knees exposed because of wearing shorts."), ("talha")],
    [("Who is the first person that comes to mind in Kandura?"), ("abdulrehman")],
    [("This guy HATES the constant mouse clicking sound when someone plays DotA nearby."), ("ifti")],
    [("He is the first to go for PhD studies."), ("sakib")],
    [("Every language he speaks - English, Urdu, even Bengali - has a cringy posh accent."), ("shabib")],
    [("Who is the first person Abid met from our group?"), ("sakib")],
    [("Who is the first person Sakib met from our group?"), ("abid")],
    [("Who is the first person Ifthikar met from our group?"), ("sakib")],
    [("Who is the first person Reza met from our group?"), ("mizan")],
    [("Who is the first person Mizan met from our group?"), ("reza")],
    [("Who is the first person Talha met from our group?"), ("ifti")],
    [("Who is the first person Shehbaz met from our group?"), ("abid")],
    [("The person that immediately comes to mind on the topic of AI (artificial intelligence)."), ("sakib")],
    [("This guy seems to never age, Ma shaa' Allah."), ("ifti")],
    [("If you ever want to ask for a file resource that you can't find, you ask this guy who then shares a Dropbox link."), ("abid")],
    [("He sweats instantly and easily and is intolerant to hot weather."), ("abid")],
    [("He became the school headboy once."), ("abid")],
    [("He was the president of Bangladesh Cultural Club in AUS."), ("shabib")],
    [("He was the president of Islamic Cultural Club in AUS."), ("abid")],
    [("He is the first to have memorized the Qur'an, Ma shaa' Allah."), ("abdulrehman")],
    [("Who is the first person Huzaifa met from our group?"), ("abid")],
    [("His company relocated him from the USA to the UAE for sometime."), ("shehbaz")],
    [("This guy lost his Emirates Driving Institute student permit card, didn't care, traveled abroad, traveled back, found it was with another one of us."), ("shehbaz")],
    [("This guy safekept an Emirates Driving Institute student permit card that belonged to another of us for years, and even returned it successfully."), ("talha")],
  ],
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
  for (let i = 0; i < data.trivia.length; i += 1) {
    questionIndices.push(i);
  }
  questionIndices = shuffle(questionIndices);
  document.getElementById('question-count').innerText = questionIndices.length;
  loadQuestion();
}

function loadQuestion() {
  if (questionIndex >= questionIndices.length) {
    endGame();
    return;
  }
  const idx = questionIndices[questionIndex];
  const answer = data.trivia[idx][1];
  questionElement.innerText = data.trivia[idx][0];

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
  if (['abdulrehman', 'abid'].includes(button.value))
    audio = new Audio('audios/abid-correct-1.mp3');
  else
    audio = new Audio('audios/' + button.value + '-correct-' + num + '.mp4');
  await playAudio(audio);
  button.classList.remove('correct');
  loadQuestion();
}

async function wrongAnswer(event) {
  wrongScore.innerText = parseInt(wrongScore.innerText) + 1;
  const button = getButton(event);
  const num = Math.floor(Math.random() * 5) + 1;
  let audio;
  if (['abdulrehman', 'abid'].includes(button.value))
    audio = new Audio('audios/abid-wrong-1.mp3');
  else
    audio = new Audio('audios/' + button.value + '-wrong-' + num + '.mp4');
  await playAudio(audio);
}

function startGame() {
  const startPageDivs = document.getElementsByClassName('start-page');
  for (const div of startPageDivs)
    div.style.display = 'none';
  document.getElementById('main-page').style.display = 'block';
  document.getElementById('refresh').style.display = 'block';
}

function endGame() {
  document.getElementById('main-page').style.display = 'none';
  document.getElementById('game-over-page').style.display = 'block';
  document.getElementById('correct-score-game-over').innerText = correctScore.innerText;
  document.getElementById('wrong-score-game-over').innerText = wrongScore.innerText;
}

init();
