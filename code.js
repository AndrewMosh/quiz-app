const quizData = [
  {
    question: "How many grades have you had?",
    a: "0",
    b: "2",
    c: "100",
    correct: "c",
  },
  {
    question: "How low was the lowest?",
    a: "10",
    b: "12",
    c: "20",
    correct: "c",
  },
];
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const quiz = document.getElementById("quiz");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer && answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
      deselectAnswers();
    } else {
      quiz.innerHTML = `<h3> score: ${score}/ ${quizData.length} </h3><button onclick='location.reload()'>Reload</button>`;
    }
  }
});
