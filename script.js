let allElement = document.querySelectorAll('.main');
console.log("query - ", allElement);
let allElement1 = document.getElementsByClassName('main');
console.log("get - ", allElement1);
allElement.innerHTML = "startOfChange";
console.log(allElement.innerHTML);


