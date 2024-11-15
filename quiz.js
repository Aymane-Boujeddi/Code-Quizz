document.addEventListener("DOMContentLoaded", () => {

  // const quizContainer = document.querySelector(".quiz-block");
  const quizQcm = document.querySelector(".qcm");
  const quizBool = document.querySelector(".boolean");
  const quizFill = document.querySelector(".fill");
  const quizStats = document.querySelector('.after-quiz');
  const correctAnswers = document.querySelector('.correct-answers');
  const wrongAnswers = document.querySelector('.wrong-answers');
  const nextContainers = document.querySelectorAll('.button-next');
  const nextButtons = document.querySelectorAll('.next');
  const progressBar = document.querySelector(".progress-bar");
  const globalTimerDisplay = document.querySelector(".global-timer");
  
  let score = 0;
  let questionNbr = 0;
  let globalTimer;
  let questionTimer;
  let timeSpent = [];
  let selectedQuiz = null;
  
    const storedQuiz = localStorage.getItem("selectedQuiz");
  
    if (storedQuiz) {
        selectedQuiz = JSON.parse(storedQuiz);
        localStorage.removeItem("selectedQuiz");
        startGlobalTimer(200); 
        createQuestion(selectedQuiz.questions[questionNbr], score);
    } else {
        console.error("No quiz data found.");
        window.location.href = 'index.html';
    }
    
  function createQuestion(quiz, score) {
      if (!quizBool || !quizQcm || !quizFill || !quizStats) {
          console.error("One or more quiz elements are missing.");
          return;
        }
      quizBool.style.display = 'none';
      quizQcm.style.display = 'none';
      quizFill.style.display = 'none';
      quizStats.style.display = 'none';
      nextButtons.forEach((button) => {
        button.remove();
      });
      nextContainers.forEach((nextContainer) => {
        nextContainer.innerHTML = "";
      });
      resetAllStyles();
    const quizLength = selectedQuiz.questions.length;
    console.log(quizLength)
    
      if (quiz.type === 'boolean') {
        displayBooleanQuestion(quiz, score, quizLength);
      } else if (quiz.type === 'qcm') {
        displayQCMQuestion(quiz, score, quizLength);
      } else if (quiz.type === 'text') {
        displayTextQuestion(quiz, score, quizLength);
      }
    }
    
    function displayBooleanQuestion(quiz, score, quizLength) {
      quizBool.style.display = 'block';
      quizBool.querySelector('.score').textContent = `Score : ${score}`;
      quizBool.querySelector('.counter').textContent = `${questionNbr + 1}/${quizLength}`;
      quizBool.querySelector(".question").textContent = quiz.question;
      const startTime = startQuestionTimer(10, quizBool, score);
      let buttons = quizBool.querySelectorAll(".choice");
      const correct = quiz.correctAnswer.toString();
      let answered = false;
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          if (answered) return; 
          answered = true; 
          clearInterval(questionTimer); 
          const endTime = Date.now();
          timeSpent.push((endTime - startTime) / 1000);
          if (button.textContent == correct) {
            button.style.backgroundColor = 'green';
            score++;
            addCorrect(quiz);
          } else {
            button.style.backgroundColor = 'red';
            quizBool.querySelector(`.${correct}`).style.backgroundColor = 'green';
            addWrong(quiz);
          }
          disableChoices(buttons);
          quizBool.querySelector(".explanation").textContent = quiz.explanation;
          createNextButton(quizBool, score, quiz.type, quizLength);
        }, { once: true });
      });
    }
    
    function displayQCMQuestion(quiz, score, quizLength) {
      quizQcm.style.display = 'block';
      quizQcm.querySelector('.score').textContent = `Score : ${score}`;
      quizQcm.querySelector('.counter').textContent = `${questionNbr + 1}/${quizLength}`;
      quizQcm.querySelector(".question").textContent = quiz.question;
      const startTime = startQuestionTimer(10, quizQcm, score);
      let buttons = quizQcm.querySelectorAll('.choice');
      const correctAnswer = parseInt(quiz.correctAnswer);
      let answered = false;
      buttons.forEach((button, index) => {
        button.textContent = quiz.options[index];
        button.addEventListener("click", () => {
          clearInterval(questionTimer); 
          const endTime = Date.now();
          timeSpent.push((endTime - startTime) / 1000);
          if (answered) return;
          answered = true; 
          if (index === correctAnswer) {
            button.style.backgroundColor = 'green';
            score++;
            addCorrect(quiz);
          } else {
            button.style.backgroundColor = 'red';
            buttons[correctAnswer].style.backgroundColor = 'green';
            addWrong(quiz);
          }
          disableChoices(buttons);
          quizQcm.querySelector(".explanation").textContent = quiz.explanation;
          createNextButton(quizQcm, score, quiz.type, quizLength);
        }, { once: true });
      });
    }
    function displayTextQuestion(quiz, score, quizLength) {
      quizFill.style.display = 'block';
      quizFill.querySelector('.score').textContent = `Score : ${score}`;
      quizFill.querySelector('.counter').textContent = `${questionNbr + 1}/${quizLength}`;
      quizFill.querySelector(".question").textContent = quiz.question;
      const startTime = startQuestionTimer(10, quizFill, score);
      const inputField = quizFill.querySelector("input[type='text']");
      inputField.value = ""; 
      inputField.style.backgroundColor = 'white'; 
      inputField.disabled = false; 
      let answered = false;
    
      inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !answered) {
          answered = true;
          const userAnswer = inputField.value.trim().toLowerCase();
          const correctAnswers = quiz.correctAnswer.map(ans => ans.toLowerCase());
          if (correctAnswers.includes(userAnswer)) {
            inputField.style.backgroundColor = "green"; 
            score++;
            addCorrect(quiz);
          } else {
            inputField.style.backgroundColor = "red"; 
            addWrong(quiz);
          }
          clearInterval(questionTimer); 
          const endTime = Date.now();
          timeSpent.push((endTime - startTime) / 1000);
          inputField.disabled = true; 
          quizFill.querySelector(".explanation").textContent = quiz.explanation;
          createNextButton(quizFill, score, quiz.type, quizLength);
        }
      });
    }
    
    function createNextButton(quizSection, score, quizType, quizLength) {
      const buttonNext = document.createElement("button");
      buttonNext.classList.add("next");
      buttonNext.textContent = "Next";
      const nextDiv = quizSection.querySelector(".button-next");
      nextDiv.innerHTML = "";
      nextDiv.appendChild(buttonNext);
      buttonNext.addEventListener("click", () => {
        quizSection.querySelector(".explanation").innerHTML = "";
        nextDiv.innerHTML = "";
        quizSection.style.display = "none";
        questionNbr++;
        resetButtons(quizType, quizSection);
        if (questionNbr < selectedQuiz.questions.length) {
          createQuestion(selectedQuiz.questions[questionNbr], score);
          updateProgressBar(quizLength);
        } else {
          displayQuizStats(score,quizLength);
        }
      }, { once: true });
    }
    
    function resetAllStyles() {
      const allChoices = document.querySelectorAll(".choice");
      allChoices.forEach(choice => {
        choice.style.backgroundColor = 'white';
        choice.classList.remove('disabled');
      });
      const inputFields = document.querySelectorAll("input[type='text']");
      inputFields.forEach(input => {
        input.style.backgroundColor = 'white';
        input.disabled = false;
      });
      const explanations = document.querySelectorAll(".explanation");
      explanations.forEach(explanation => {
        explanation.textContent = "";
      });
    }
    
    function disableChoices(choices) {
      choices.forEach(choice => {
        choice.classList.add('disabled');
      });
    }
    
    function addCorrect(quiz) {
      const newDiv = document.createElement('div');
      const newCorrectQuestion = document.createElement('p');
      const newCorrectExplanation = document.createElement('p');
      newCorrectQuestion.style.color = 'green';
      newCorrectExplanation.textContent = quiz.explanation;
      newCorrectQuestion.textContent = quiz.question;
      newDiv.appendChild(newCorrectQuestion);
      newDiv.appendChild(newCorrectExplanation);
      correctAnswers.appendChild(newDiv);
    }
    
    function addWrong(quiz) {
      const newDiv = document.createElement('div');
      const newWrongQuestion = document.createElement('p');
      const newWrongExplanation = document.createElement('p');
      newWrongQuestion.style.color = 'red';
      newWrongExplanation.textContent = quiz.explanation;
      newWrongQuestion.textContent = quiz.question;
      newDiv.appendChild(newWrongQuestion);
      newDiv.appendChild(newWrongExplanation);
      wrongAnswers.appendChild(newDiv);
    }
    
    function resetButtons(quizType, quizSection) {
      if (quizType === 'boolean' || quizType === 'qcm') {
        let buttons = quizSection.querySelectorAll('.choice');
        buttons.forEach((button) => {
          button.classList.remove('disabled');
          button.style.backgroundColor = 'white';
        });
      } else {
        quizSection.querySelector("input[type='text']").style.backgroundColor = 'white';
        quizSection.querySelector("input[type='text']").disabled = false;
      }
    }
    
    function displayQuizStats(score,quizLength) {
        quizStats.style.display = "block";
        let rate = (score / quizLength) * 100
      
        quizStats.querySelector(".finalScore").textContent = `Your score : ${score}`;
        quizStats.querySelector(".rate").textContent = `Rate : ${rate.toFixed(2)} %`;
        quizStats.querySelector(".timing").textContent = `Time per question : ${calculateAvgTime()}`;
      }
  
  function updateProgressBar(quizLength) {
        const progress = ((questionNbr + 1) / quizLength) * 100; 
        progressBar.style.width = `${progress}%`; 
        }
        
  function startGlobalTimer(duration) {
        let time = duration;
        globalTimer = setInterval(() => {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            globalTimerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
            if (--time < 0) {
                clearInterval(globalTimer);
                endQuiz();
            }
        }, 1000);
        }
  function startQuestionTimer(duration,quiz,score) {
        let time = duration;
        
        questionTimer = setInterval(() => {
          quiz.querySelector(".timer").textContent = `${time}s`
            if (--time < 0) {
                clearInterval(questionTimer);
                addWrong(quiz)
                moveToNextQuestion(score,quizLength); 
            }
        }, 1000);
        return Date.now(); 
        }
  function calculateAvgTime() {
        const totalTime = timeSpent.reduce((acc, cur) => acc + cur, 0);
        return (totalTime / timeSpent.length).toFixed(2);
        }
        function endQuiz() {
        clearInterval(globalTimer); 
        displayQuizStats();
        }
        
  function moveToNextQuestion(score,quizLength) {
        questionNbr++;
        if (questionNbr < quizLength) {
            createQuestion(quizData[questionNbr],score);
            updateProgressBar(quizLength);
        } else {
            endQuiz(score,quizLength);
        }
        }
  });
  
  
  