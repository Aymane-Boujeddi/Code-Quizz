const quizData2 = JSON.parse(localStorage.getItem("quizData2"));

const addQuiz = document.querySelector("#addQuizForm")
const dataLength = quizData2.length
const quizList = document.querySelector("#quizList")

function addNewQuiz(quizData){
    addQuiz.addEventListener("submit", (e)=>{
        e.preventDefault()
    const quizName = document.querySelector("#quizName").value
    const quizCategory = document.querySelector("#quizCategory").value
    const quizDifficulty = document.querySelector("#quizDifficulty").value
    const quizGlobalTimer = document.querySelector("#quizGlobalTimer").value
    
    const quiz = {
        id : dataLength,
        name : quizName ,
        category :  quizCategory ,
        difficulty : quizDifficulty ,
        timer: quizGlobalTimer + ":00",
        questions : []
    }
    quizData.push(quiz)
    alert("New quiz added succesfully")
    updateLocalStorage(quizData2)

    
        
    })
}

function displayQuizList(data) {
    const quizList = document.querySelector("#quizList")
    quizList.innerHTML = ''
    data.forEach((quiz)=>{
        const quizItem = document.createElement("div")
        quizItem.classList.add("quiz-item")
        quizItem.innerHTML = ` <p><strong>Quiz Name:</strong>${quiz.name} </p>
                    <p><strong>Number of Questions:</strong>${quiz.questions.length} </p>
                    <p><strong>Difficulty:</strong>${quiz.difficulty} </p>
                    <p><strong>Timer:</strong>${quiz.timer} </p>
                     `
        const addQuestionBtn = document.createElement("button");
        addQuestionBtn.classList.add("addQuestionBtn")
        addQuestionBtn.textContent = "Add Question";
        quizItem.appendChild(addQuestionBtn);
        
        const showQuestionBtn = document.createElement("button");
        showQuestionBtn.classList.add("showQuestionBtn")
        showQuestionBtn.textContent = "Show Questions";
        quizItem.appendChild(showQuestionBtn);

        const modifyQuizBtn = document.createElement("button");
        modifyQuizBtn.classList.add("modifyQuizBtn")
        modifyQuizBtn.textContent = "Modify Quiz";
        quizItem.appendChild(modifyQuizBtn);

        const deleteQuizBtn = document.createElement("button");
        deleteQuizBtn.classList.add("deleteQuizBtn")
        deleteQuizBtn.textContent = "Delete Quiz";
        quizItem.appendChild(deleteQuizBtn);

        quizList.appendChild(quizItem)

        showQuestionsForm(addQuestionBtn,quiz)
        deleteQuiz(deleteQuizBtn,quiz)
        addBooleanQuestion(quiz)
        addQcmQuestion(quiz)
        addTextQuestion(quiz)
        
            })
}

function showQuestionsForm(addQuestionBtn,quiz) {
    const title = document.querySelector("#questionModal h2")
    const questionForm = document.querySelector("#questionModal")
    addQuestionBtn.addEventListener("click" , ()=>{
    title.textContent = quiz.name
    questionForm.style.display = "block"

})
}
function deleteQuiz(deleteQuizBtn,quiz){
    deleteQuizBtn.addEventListener("click" , (e)=>{
        e.preventDefault()
        quizData2.pop(quiz)
        alert("Quiz deleted successfully")
        updateLocalStorage(quizData2)
    })

}
function updateLocalStorage(quizData2){
    localStorage.setItem("quizData2",JSON.stringify(quizData2))
    displayQuizList(quizData2)


}


function closeModal() {
    document.querySelector("#questionModal").style.display = "none"
}

function showForm(formType) {
    const allForms = document.querySelectorAll(".question-form")
    allForms.forEach((form)=>{form.style.display = "none"})

    document.querySelector(formType).style.display = "block"
}

function addBooleanQuestion(quiz) {
    document.querySelector("#booleanForm").onsubmit = function (e) {
        e.preventDefault()
        const booleanQuestion = document.querySelector("#booleanQuestion").value 
        const booleanAnswer = document.querySelector("#booleanAnswer").value 
        const booleanExplanation = document.querySelector("#booleanExplanation").value
        const booleanTimer = document.querySelector("#booleanTimer").value
        const length = quiz.questions.length + 1
        
        const question = {
            id :  length  ,
            type : 'boolean' ,
            question : booleanQuestion,
            correctAnswer : booleanAnswer ,
            explanation : booleanExplanation ,
            questionTimer : booleanTimer + "s" ,
        }
        
        quiz.questions.push(question)
        alert("Boolean question added successfully")
        updateLocalStorage(quizData2)
    }
}
function addQcmQuestion(quiz){
    document.querySelector("#qcmForm").onsubmit = function (e) {
        e.preventDefault()
        const qcmQuestion = document.querySelector("#qcmQuestion").value
        const firstOption = document.querySelector("#qcmOption1").value
        const secondtOption = document.querySelector("#qcmOption2").value
        const thirdOption = document.querySelector("#qcmOption3").value
        const fourthOption = document.querySelector("#qcmOption4").value
        const qcmOptions = [firstOption,secondtOption,thirdOption,fourthOption]
        const qcmAnswer = document.querySelector("#qcmAnswer").value
        const qcmExplanation = document.querySelector("#qcmExplanation").value
        const qcmTimer = document.querySelector("#qcmTimer").value
        const length = quiz.questions.length + 1
        console.log(qcmOptions)

        const question = {
            id :  length  ,
            type : 'qcm' ,
            question : qcmQuestion,
            options : qcmOptions ,
            correctAnswer : qcmAnswer ,
            explanation : qcmExplanation ,
            questionTimer : qcmTimer + "s" ,
        }

        quiz.questions.push(question)
        alert("Multiple choice question added successfully")
        updateLocalStorage(quizData2)
    }
}
function addTextQuestion(quiz){
    document.querySelector("#textForm").onsubmit = function (e) {
        e.preventDefault()
        const textQuestion = document.querySelector("#textQuestion").value
        const firstAnswer = document.querySelector("#textAnswer1").value
        const secondAnswer = document.querySelector("#textAnswer2").value
        const thirdAnswer = document.querySelector("#textAnswer3").value
        const textAnswer = [firstAnswer , secondAnswer , thirdAnswer]
        const textExplanation = document.querySelector("#textExplanation").value
        const textTimer = document.querySelector("#textTimer").value
        const length = quiz.questions.length + 1

        const question = {
            id : length , 
            type : 'text' ,
            question : textQuestion , 
            correctAnswer : textAnswer ,
            explanation : textExplanation ,
            questiontimer :  textTimer + 's'

        }

        quiz.questions.push(question)
        updateLocalStorage(quizData2)
    }

}

addNewQuiz(quizData2)
displayQuizList(quizData2)
