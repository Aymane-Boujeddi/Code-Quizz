// const quizData2 = JSON.parse(localStorage.getItem('quizData2'))

// const quizCard = document.querySelector('.quiz-card')
// const quizContainer = document.querySelector('.quiz-container')
// const quizTitle = document.querySelector('.quiz-card h3')
// const quizLevel = document.querySelector('.quiz-card h4')
// const quizTimer = document.querySelector('.quiz-card h5')
// const startButton = document.querySelector('.quiz-card button')
// const questionNumber = 

// quizData2.forEach((quiz) => {
//     const quizCard = document.createElement('div')
//     quizCard.classList.add('quiz-card')
//     quizCard.innerHTML = `<h3>${quiz.name}</h3>
//                     <h4>${quiz.difficulty} </h4>
//                     <h5>${quiz.questions.length} </h5>
//                     <h6>${quiz.timer} </h6>
//                     <button>Start the Quizz</button>`
//     quizContainer.appendChild(quizCard)
// })

// function filterDifficulty(quizData2){
    
// }

const quizData2 = JSON.parse(localStorage.getItem("quizData2"));

const quizContainer = document.querySelector(".quiz-container");
const searchInput = document.getElementById("searchInput");
const difficultySelect = document.getElementById("difficulty");
const categorySelect = document.getElementById("category");
console.log(quizData2)
console.log(typeof quizData2)



function renderQuizzes(data) {
  quizContainer.innerHTML = ""; 
  data.forEach((quiz) => {
    const quizCard = document.createElement("div");
    quizCard.classList.add("quiz-card");
    quizCard.innerHTML = `
      <h3>${quiz.name}</h3>
      <h4>Difficulty: ${quiz.difficulty}</h4>
      <h5>Questions: ${quiz.questions.length}</h5>
      <h6>Timer: ${quiz.timer}</h6>
      <button>Start the Quiz</button>
    `;
    quizContainer.appendChild(quizCard);

    quizCard.querySelector("button").addEventListener("click", () => {
      startQuiz(quiz);
    });
  });
}

function startQuiz(quiz) {
  localStorage.setItem("selectedQuiz", JSON.stringify(quiz));
  window.location.href = "quiz.html"; 
}

function filterDifficulty() {
  const difficulty = difficultySelect.value;
  const filteredData = quizData2.filter((quiz) => {
    return difficulty === "all" || quiz.difficulty === difficulty;
  });
  renderQuizzes(filteredData);
}


function applyFilters() {
  let filteredData = quizData2;

  const difficulty = difficultySelect.value;
  if (difficulty !== "all") {
    filteredData = filteredData.filter((quiz) => quiz.difficulty === difficulty);
  }

  const searchText = searchInput.value.toLowerCase();
  filteredData = filteredData.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchText)
  );

  renderQuizzes(filteredData);
}

searchInput.addEventListener("input", applyFilters);
difficultySelect.addEventListener("change", applyFilters);

renderQuizzes(quizData2);
