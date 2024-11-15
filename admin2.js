  // Function to handle showing/hiding forms
  function openForm(formId) {
    const forms = document.querySelectorAll('.questionForm');
    forms.forEach(form => form.style.display = 'none'); // Hide all forms
    const selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'block'; // Show the selected form
}

// Add event listeners for each form submission (quiz and question forms)
document.getElementById('quizFormSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    const quizName = document.getElementById('quizName').value;
    const globalTimer = document.getElementById('globalTimer').value;
    const difficulty = document.getElementById('difficulty').value;

    const quizData = {
        name: quizName,
        timer: globalTimer,
        difficulty: difficulty,
        questions: []
    };

    console.log('Quiz Data:', quizData);
});

// Handle QCM question submission
document.getElementById('qcmFormSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    const question = document.getElementById('qcmQuestion').value;
    const options = document.getElementById('qcmOptions').value.split(',');
    const answer = document.getElementById('qcmAnswer').value;
    const timer = document.getElementById('qcmTimer').value;
    const explanation = document.getElementById('qcmExplanation').value;

    const qcmQuestionData = {
        type: 'QCM',
        question: question,
        options: options,
        answer: answer,
        timer: timer,
        explanation: explanation
    };

    console.log('QCM Question Data:', qcmQuestionData);
});

// Handle Boolean question submission
document.getElementById('booleanFormSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    const question = document.getElementById('booleanQuestion').value;
    const answer = document.getElementById('booleanAnswer').value;
    const timer = document.getElementById('booleanTimer').value;
    const explanation = document.getElementById('booleanExplanation').value;

    const booleanQuestionData = {
        type: 'Boolean',
        question: question,
        answer: answer,
        timer: timer,
        explanation: explanation
    };

    console.log('Boolean Question Data:', booleanQuestionData);
});

// Handle Text question submission
document.getElementById('textFormSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    const question = document.getElementById('textQuestion').value;
    const answer = document.getElementById('textAnswer').value;
    const timer = document.getElementById('textTimer').value;
    const explanation = document.getElementById('textExplanation').value;

    const textQuestionData = {
        type: 'Text',
        question: question,
        answer: answer,
        timer: timer,
        explanation: explanation
    };

    console.log('Text Question Data:', textQuestionData);
});