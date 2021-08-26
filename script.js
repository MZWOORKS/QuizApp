const quizData = [
  {
    question: "How Old Is Barak Obama?",
    a: "10",
    b: "45",
    c: "54",
    d: "222",
    correct: "d",
  },
  {
    question: "Who Is The President Of USA?",
    a: "John Biden",
    b: "Barak Obama",
    c: "Tim Cook",
    d: "Jeff Bezos",
    correct: "a",
  },
  {
    question: "What's The Most Pupular Programming Language?",
    a: "Java",
    b: "Python",
    c: "C++",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What's Country Hosted The 2020 Olimpycs?",
    a: "Japan",
    b: "Russia",
    c: "Mexico",
    d: "China",
    correct: "a",
  },
  {
    question: "What Is Texas State Capital",
    a: "Houston",
    b: "San Antonio",
    c: "Dallas",
    d: "Austin",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
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
  // check for answer

  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //   TODO: show results
      quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()"> Reload</button>`;
    }
  }
});
