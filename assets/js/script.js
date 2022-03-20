var body = document.body;
var formEl = document.createElement("form");
var questionEl = document.createElement("h2");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var count = 90;
var i = 0;
var a = 0;
var highScore = 0;
var score = 0;
var displayTime = document.createElement("p");
var answerEl = document.createElement("h2");
formEl.append(displayTime);
body.appendChild(formEl);
formEl.appendChild(questionEl);
formEl.appendChild(listEl);
questionEl.setAttribute("style", "color: white;font-size: 70px; background-color: aqua; border-radius: 30px;");

displayTime.setAttribute("style","color:white;font-size:30px; float:right; margin-bottom: 30px;");
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

function endQuiz() {
    formEl.textContent = "You finished!"
    questionEl.textContent = "Highscores:"
    localStorage.setItem("score",score)
};
var answer2;

var Answers = {
    A1: 4,
    A2: 2,
    A3: 3,
    A4: 4,
    A5: 1,
};
var answersArr =Object.values(Answers);
console.log(answersArr[1]);
function tracker(){
    
    if (i == 0) {
    li1.textContent = "Hello1";
    li2.textContent = "Hello2";
    li3.textContent = "Hello3";
    li4.textContent = "Hello4";
    questionEl.textContent = "lorem ipsum1";
    } 
    
    if (i ==1) {
        li1.textContent = "Hello5";
        li2.textContent = "Hwllo6";
        li3.textContent = "Hello7";
        li4.textContent = "Hello8";
        questionEl.textContent = "lorem ipsum2";
    }
     if (i ==2) {
        li1.textContent = "Hello9";
        li2.textContent = "Hello10";
        li3.textContent = "Hello11";
        li4.textContent = "Hello12";
        questionEl.textContent = "lorem ipsum3";
    }
     if (i ==3) {
        li1.textContent = "Hello13";
        li2.textContent = "Hello14";
        li3.textContent = "Hello15";
        li4.textContent = "Hello16";
         questionEl.textContent = "lorem ipsum4";
    }
     if (i ==4) {
        li1.textContent = "Hello123";
        li2.textContent = "Hello143";
        li3.textContent = "Hello145";
        li4.textContent = "Hello165";
         questionEl.textContent = "lorem ipsum34";
    } 
    if(i==5){
        endQuiz();
    };
    i++;
}
function Quiz1() {
    timer();
    li1.addEventListener("click", function(){

        if (answer2 === 1){
            answerEl.setAttribute("style","color:white; background-color:green;");
            answerEl.textContent = "CORRECT!";
            console.log(answer2, " : " +1);

            tracker();            } else {
            console.log(answer2, " : " +1);
            answerEl.setAttribute("style","color:white; background-color:red;");
            answerEl.textContent = "WRONG!";
            count-=10;
            tracker();       };
    });
    
    li2.addEventListener("click", function(){

        if (answer2 === 2){
            answerEl.setAttribute("style","color:white; background-color:green;");
            answerEl.textContent = "CORRECT!";
            console.log(answer2, " : " +2);

            tracker();            } else {
            console.log(answer2, " : " +2);
            answerEl.setAttribute("style","color:white; background-color:red;");
            answerEl.textContent = "WRONG!";
            count-=10;
            tracker();};
    });
    
    li3.addEventListener("click", function(){

        if (answer2 === 3){
            answerEl.setAttribute("style","color:white; background-color:green;");
            answerEl.textContent = "CORRECT!";
            console.log(answer2, " : " +3);

            tracker();
            } else {
            console.log(answer2, " : " +3);
            answerEl.setAttribute("style","color:white; background-color:red;");
            answerEl.textContent = "WRONG!";
            count-=10;
            tracker();        };
    });
    
    li4.addEventListener("click", check(4));
};  
function check(guess){
if (answersArr[a] === guess){
    answerEl.setAttribute("style","color:white; background-color:green;");
    answerEl.textContent = "CORRECT!";
    console.log(answer2, " : " +guess);
    score++;
    } else {
    console.log(answer2, " : " +guess);
    answerEl.setAttribute("style","color:white; background-color:red;");
    answerEl.textContent = "WRONG!";
    count-=10; };

    a++
};
    // li2.addEventListener("click", quiz3(2,2));    
    // li3.addEventListener("click", quiz3(3,3));
    // li4.addEventListener("click", quiz3(1,4));
    

    // li4.addEventListener("dblclick", function (){
    //     if (answer1 ==4){
    //     answer = 0;
    //     count-=9;
    //     answerEl.setAttribute("style","color:white; background-color:green;");
    //     answerEl.textContent = "CORRECT!";
    //     startQuiz();

    //     } else {
    //     answer = 0;
    //     answerEl.setAttribute("style","color:white; background-color:red;");
    //     answerEl.textContent = "WRONG!";
    //     startQuiz();
    //     }
    // });
    
    

// function Quiz2(answer) {
//     li2.textContent = "Hello2";
//     li3.textContent = "Hello1";
//     li4.textContent = "Hello3";
//     li1.textContent = "Hello4";
//     questionEl.setAttribute("style", "font-size:40px;");
//     questionEl.textContent = "lorem ipsum";

//     li1.addEventListener("click", function (){
//         if (answer !=1){
//         count-=9;
//         answerEl.setAttribute("style","color:white; background-color:red;");
//         answerEl.textContent = "WRONG!";
        
//         } else {
//         answerEl.setAttribute("style","color:white; background-color:green;");
//         answerEl.textContent = "CORRECT!";
//         }
        
//     });
//     li2.addEventListener("click", function (){
//         if (answer !=2){
//         count-=9;
//         answerEl.setAttribute("style","color:white; background-color:red;");
//         answerEl.textContent = "WRONG!";
        
//         } else {
//         answerEl.setAttribute("style","color:white; background-color:green;");
//         answerEl.textContent = "CORRECT!";
//         }
//     });
//     li3.addEventListener("click", function (){
        
//         if (answer !=3){
//             count-=9;
//             answerEl.setAttribute("style","color:white; background-color:red;");
//             answerEl.textContent = "WRONG!";
//             } else {
//             answerEl.setAttribute("style","color:white; background-color:green;");
//             answerEl.textContent = "CORRECT!";
//             }
//     });
//     li4.addEventListener("click", function (){
//         if (answer !=4){
//         count-=9;
//         answerEl.setAttribute("style","color:white; background-color:red;");
//         answerEl.textContent = "WRONG!";
//         } else {
//         answerEl.setAttribute("style","color:white; background-color:green;");
//         answerEl.textContent = "CORRECT!";
//         }
//     });
// }
function  timer(){
    setInterval(function(){
    if (count >0) {
    count --;
    displayTime.textContent = count;
    } else {
        formEl.textContent = "Times Up!";
    }
    console.log( count);
},1000);
}
// 
function startQuiz() {

    
    
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(answerEl);
    questionEl.setAttribute("style", "font-size:40px;");
    tracker();
    
    li1.addEventListener("click", function(){
        check(1)
        tracker()
        console.log(answersArr)
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

questionEl.addEventListener("click", startQuiz);

