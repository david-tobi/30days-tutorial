// app.js
const quizData = [
  {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2 // Index of correct option (Paris)
  },
  {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mars", "Mercury", "Earth"],
      correct: 2 // Mercury
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1
},
{
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    correct: 2
}
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timerId;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

function startTimer() {
  timeLeft = 10; // Reset timer for each question
  document.getElementById("time").textContent = timeLeft;
  
  timerId = setInterval(() => {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
      
      if (timeLeft <= 0) {
          clearInterval(timerId);
          checkAnswer(-1); // -1 = no answer (timeout)
      }
  }, 1000);
}

function showQuestion() {
  // Display the current question
  questionEl.textContent = quizData[currentQuestion].question;
  
  // Clear previous options
  optionsEl.innerHTML = "";
  
  // Create buttons for each option
  quizData[currentQuestion].options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  // Check if answer is correct
  if (selectedIndex === quizData[currentQuestion].correct) {
      score++;
      scoreEl.textContent = `Score: ${score}`;
  }
  clearInterval(timerId); // Stop the timer
  
  // ... rest of existing code ...
  
  // Start timer again for next question
  if (currentQuestion < quizData.length)
  // Move to next question or end quiz
  currentQuestion++;
  if (currentQuestion < quizData.length) {
      showQuestion();
  } else {
      alert(`Quiz finished! Your score: ${score}/${quizData.length}`);
  }
}

// Start the quiz
showQuestion();




