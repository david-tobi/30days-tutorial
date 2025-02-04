const questions = [
  {
    question: "Who was the first man on the moon",
    answers: 
    [
      {text: "Marques Brownly", correct: false},
      {text: "Snoop Dog", correct: false},
      {text: "Neil Arm-Strong", correct: true},
      {text: "Elon Musk", correct: false},
    ]
  },
  {
    question: "The name the current president of USA as @2024",
    answers: 
    [
      {text: "Donald Trump", correct: true},
      {text: "Joe Biden", correct: false},
      {text: "Peter Parker", correct: false},
      {text: "Abraham Linken", correct: false},
    ]
  },
  {
    question: "Joey Tribianni played who on - Days of our lives",
    answers: 
    [
      {text: "Hans Ramore", correct: false},
      {text: "Drake Ramore", correct: true},
      {text: "Mr Heckles", correct: false},
      {text: "Ben", correct: false},
    ]
  },
  {
    question: "How many months does a baby sit in the womb",
    answers: 
    [
      {text: "6 months", correct: false},
      {text: "8 months", correct: false},
      {text: "11 months", correct: false},
      {text: "9 months", correct: true},
    ]
  }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevbutton = document.getElementById("prev-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  prevbutton.innerHTML = "Previous";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
  if (currentQuestionIndex === 0) {
    prevbutton.style.display = "none";
  } else {
    prevbutton.style.display = "block";
  }
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
  } else {
      selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button =>{ 
  if (button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
  prevbutton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = 'your score is ${score} out of ${questions.length}!';
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  
  
}


function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) { 
      showQuestion();
  } else {
      showScore();
  }
}

function handlePrevButton() {
  if (currentQuestionIndex > 0){
    currentQuestionIndex--;
    showQuestion();
  }
}

prevbutton.addEventListener("click", ()=> {
    handlePrevButton();
  }
);



nextButton.addEventListener("click", ()=>{
if (currentQuestionIndex < questions.length) {
    handleNextButton();
}else{
  startQuiz();
  
}
});



startQuiz();
 
