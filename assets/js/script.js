// Generating HTML elements
var body = document.body;
var formEl = document.createElement("form");
var questionEl = document.createElement("h2");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var displayTime = document.createElement("p");
var answerEl = document.createElement("h2");
var initials = document.createElement("input");
var initialsButton = document.createElement("button");
// Global variables
var count = 90;
var i = 0;
var a = 0;
var score = 0;
var initials;
var input;
var answer2;
// Appending for the starting page
formEl.append(displayTime);
body.appendChild(formEl);
formEl.appendChild(questionEl);
formEl.appendChild(listEl);
// Setting attributes
questionEl.setAttribute("style", "color: white;font-size: 70px; background-color: aqua; border-radius: 30px;");
initials.setAttribute("type","text")
initials.setAttribute("id","input")
initials.setAttribute("style", "color:black;background-color: white; font-size: xx-large;");
initials.placeholder = "Your initials..."
displayTime.setAttribute("style","color:white;font-size:30px; float:right; margin-bottom: 30px;");
initialsButton.setAttribute("style","background-color:green;font-size:30px; float:right; margin-bottom: 30px; padding:25px;");
initialsButton.textContent = "Submit";
formEl.setAttribute("style", "margin: 200px 300px; padding:100px; background-color:blue;color:white;font-size:100px; text-align:center");
questionEl.textContent = "Start Quiz?"
questionEl.setAttribute("id","hov2");
answerEl.setAttribute("style","font-size: 36px; background-color:white;")
listEl.setAttribute("style", "color: white; font-size: 30px; margin: 10px");
li1.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li1.setAttribute("id","hov");
li2.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li2.setAttribute("id","hov");
li3.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li3.setAttribute("id","hov");
li4.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li4.setAttribute("id","hov");

// Pushing new scores and names
function loadScores(initials) {
    savedScore = JSON.parse(localStorage.getItem("scoreKeeper"));
    nameArr = JSON.parse(localStorage.getItem("initialsKeeper"))
    if (!savedScore) {
        savedScore = [];
        nameArr = [];
    }; 

    savedScore.push(score);
    nameArr.push(initials);
    localStorage.setItem("scoreKeeper", JSON.stringify( savedScore));
    localStorage.setItem("initialsKeeper", JSON.stringify( nameArr));
    formEl.setAttribute("style", "margin: 200px 300px; padding:40px; background-color:blue;color:white;font-size:100px; text-align:center");
    formEl.textContent = initials + " highscore: " + Math.max.apply(null, savedScore);;
}
// getting initals from user
function load() {
        input = document.querySelector("#input").value;
        event.preventDefault();
        loadScores(input);
}
// for After the Quiz ends
function endQuiz() {
    formEl.textContent = "You finished!"
    questionEl.textContent = "your score:" + score;
    formEl.appendChild(questionEl);
    //localStorage.setItem("score",score)
    formEl.appendChild(initials);
    formEl.appendChild(initialsButton);
    initialsButton.addEventListener("click",load);
    clearInterval(timer)
};
// Object to change answers easier
var Answers = {
    A1: 3,
    A2: 1,
    A3: 4,
    A4: 1,
    A5: 1,
};
// Tracking questions
function tracker(){
    
    if (i == 0) {
    li1.textContent = "strings";
    li2.textContent = "booleans";
    li3.textContent = "alerts";
    li4.textContent = "numbers";
    questionEl.textContent = "Commonly used data types DO NOT include:";
    } 
    
    if (i ==1) {
        li1.textContent = "()";
        li2.textContent = "{}";
        li3.textContent = "[]";
        li4.textContent = "<>";
        questionEl.textContent = "The condion of an if/else statment is enclosed in:";
    }
     if (i ==2) {
        li1.textContent = "arrays";
        li2.textContent = "numbers";
        li3.textContent = "strings";
        li4.textContent = "all of the above";
        questionEl.textContent = "arrays in javascript can be used to store:";
    }
     if (i ==3) {
        li1.textContent = "quotes";
        li2.textContent = "commas";
        li3.textContent = "parantheses";
        li4.textContent = "curly brackets";
         questionEl.textContent = "String values being assigned to variables must be enclosed in:";
    }
     if (i ==4) {
        li1.textContent = "console.log";
        li2.textContent = "terminal/bash";
        li3.textContent = "for loops";
        li4.textContent = "JavaScript";
         questionEl.textContent = "a very useful tool in the process of debugging to print out content in the debugger is:";
    } 
    if(i==5){
        endQuiz();
    };
    i++;
}
// Quiz logic
function check(guess){
if (answersArr[a] === guess){
    answerEl.setAttribute("style","color:white; background-color:green;");
    answerEl.textContent = "CORRECT!";
    score++;
    } else {
    answerEl.setAttribute("style","color:white; background-color:red;");
    answerEl.textContent = "WRONG!";
    count-=10; };

    a++
};
var answersArr =Object.values(Answers);

// Timer
var timer = setInterval(function(){
    if (count >0 && a <5) {
    count --;
    displayTime.textContent = count;
    } 
    if (count == 0){
        formEl.textContent = "Times Up!";
    }
    
},1000);

// Start of the quiz
function startQuiz() {
    timer;
    element = event.target 
    
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(answerEl);
    questionEl.setAttribute("style", "font-size:40px;");
    questionEl.setAttribute("id", "none")
    // element.removeEventListener("click", questionEl);
    tracker();
    
    li1.addEventListener("click", function(){
        check(1)
        tracker()
    });
    li2.addEventListener("click", function(){
        check(2)
        tracker()
    });
    li3.addEventListener("click", function(){
        check(3)
        tracker()
    });
    li4.addEventListener("click", function(){
        check(4)
        tracker()
    });

};
// The start
questionEl.addEventListener("click", startQuiz);
