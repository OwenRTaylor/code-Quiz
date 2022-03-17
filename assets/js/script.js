var body = document.body;
var formEl = document.createElement("form");
var questionEl = document.createElement("h2");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var count = 90;
var displayTime = document.createElement("p");
formEl.append(displayTime);
body.appendChild(formEl);
formEl.appendChild(questionEl);
formEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
displayTime.setAttribute("style","color:white;font-size:30px; float:right; margin-bottom: 30px;")
formEl.setAttribute("style", "margin: 200px 300px; padding:100px; background-color:blue;color:white;font-size:100px; text-align:center");
questionEl.textContent = "lorem ipsum";
questionEl.setAttribute("style", "color: white;font-size: 40px;");
listEl.setAttribute("style", "color: white; font-size: 30px; margin: 10px");
li1.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li1.setAttribute("id","hov");
li1.textContent = "Hello1";
li2.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li2.setAttribute("id","hov");
li2.textContent = "Hello2";
li3.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li3.setAttribute("id","hov");
li3.textContent = "Hello3";
li4.setAttribute("style", "color: white; font-size: 30px; margin-top: 10px;");
li4.setAttribute("id","hov");
li4.textContent = "Hello4";

var timer = setInterval(function(){
    if (count >0) {
    count --;
    displayTime.textContent = count;
    } else {
        formEl.textContent = "Times Up!";
    }
    //return count;
},1000);
li1.addEventListener("click", function(){
    questionEl.textContent = "YAY";
});
