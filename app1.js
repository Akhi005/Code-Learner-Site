const  questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers =0;
let attempt = 0;
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++)
    {
        availableQuestions.push(quiz[i])
    }
}
function getNewQuestion(){
    questionNumber.innerHTML = "Question " + (questionCounter + 1) +  " of " + quiz.length;
    const questionIndex = availableQuestions[Math.floor(Math.random()*availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);
    const optionLen = currentQuestion.options.length
    for(let i=0; i<optionLen; i++)
    {
        availableOptions.push(i)        
    }
    optionContainer.innerHTML = '';
   let animationDelay = 0.15;
    for (let i = 0; i < optionLen; i++) {
       const optonIndex = availableOptions[Math.floor(Math.random()*availableOptions.length)];
        const index2 = availableOptions.indexOf(optonIndex);
        availableOptions.splice(index2,1);
        console.log(optonIndex)
        const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optonIndex];
       option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)");
    }
    //console.log(availableOptions)
     
    questionCounter++;
}
function getResult(element)
{
    //console.log(element.innerHTML)
    const id = parseInt(element.id);
    console.log(typeof id)
    if(id === currentQuestion.answer)
    {
        element.classList.add("correct");
        //updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("correct:"+ correctAnswers)
    }
    else{
        element.classList.add("wrong");
        //updateAnswerIndicator("wrong");
        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++){
        if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
            optionContainer.children[i].classList.add("correct");
        }
    }
    }
    attempt++;
    unclickableOptions();
}
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++)
        optionContainer.children[i].classList.add("already-answered");
}
function answersIndicator(){
    answersIndicatorContainer.innerHtml = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

/*function updateAnswerIndicator(markType){
    console.log(markType)
    answersIndicatorContainer.appendChild[questionCounter-1].classList.add(markType);
}*/
function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over")
        quizOver();
    }
    else{
        getNewQuestion();
    }
}
function quizOver(){
   quizBox.classList.add("hide");
   resultBox.classList.remove("hide");
   quizResult();
}
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML =  correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt -  correctAnswers;
    const percentage = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + quiz.length;
}
function resetQuiz(){
    questionCounter = 0;
    correctAnswers =0;
    attempt = 0;
}
function tryAgainQuiz(){
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}
function goToHome(){
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}
function startQuiz(){
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}
