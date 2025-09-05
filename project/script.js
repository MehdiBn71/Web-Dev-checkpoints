const quizData = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correct: 1,
    explanation: "Jupiter is the largest planet, more than 11 times the diameter of Earth!",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
  },
  {
    question: "Which animal is known as the king of the jungle?",
    options: ["Elephant", "Tiger", "Lion", "Cheetah"],
    correct: 2,
    explanation: "The lion is called the king of the jungle because of its strength and dominance.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    correct: 1,
    explanation: "Water is H2O – two hydrogen atoms bonded to one oxygen atom.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Water_drop_impact_on_a_water-surface_-_%282%29.jpg"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");
const explanationEl = document.getElementById("explanation");
const explanationText = document.getElementById("explanation-text");
const explanationImg = document.getElementById("explanation-img");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  explanationEl.classList.add("hidden");

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  const optionBtns = document.querySelectorAll(".option");

  optionBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
  });

  if (index === q.correct) {
    score++;
  }

  explanationText.textContent = q.explanation;
  explanationImg.src = q.img;
  explanationEl.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

retryBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  quiz.style.display = "block";
  loadQuestion();
});

function endQuiz() {
  quiz.style.display = "none";
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${quizData.length}`;
}

loadQuestion();
