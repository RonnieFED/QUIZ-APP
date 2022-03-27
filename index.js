const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question.container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let  shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Start')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
   }

 function showQuestion(question) {
     questionElement.innerText = question.question
     question.answers.forEach(answer => {
         const button = ddocument.createElement('button')
         button.innerText = answer.text
         button.classList.add('btn')
         if (answer.correct) {
             button.dataset.correct = answer.correct
         }
         button.addEventListener('click', selectAnswer)
         answerButtonsElement.appendChild(button)
        })
        }


        function resetState() {
            nextButton.classList.add('hide')
            while (answerButtonsElement.firstChild) {
                answerButtonsElement.removeChild(answerButtonElement.firstChild)
            }
        }


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    serStatusClass(document.body. correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else { 
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the color of the sky?',
        answers: [
            { text:'blue', correct: true},
            { text:'green', correct: false}
        ]
    }
]