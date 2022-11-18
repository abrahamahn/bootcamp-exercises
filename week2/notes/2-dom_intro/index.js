console.log(`JavaScipt is connected`)
//Get get div cat

// 1. getElementById
let theCatDiv = document.getElementById(`cat`);
console.log(theCatDiv);
theCatDiv.innerHTML = "I'm a cat."

theCatDiv.style.backgroundColor = `red`;
theCatDiv.style.bborder = `2px green solid`;
theCatDiv.style.fontSize = `50px`;
theCatDiv.style.marginTop = `30px`;
theCatDiv.style.paddingBottom = `30px`;

// 2. getElementsByClassName
let mice = document.getElementsByClassName(`mouse`);
mice[0].innerHTML = `mouse`;
let miceArray = [...mice]; // <= convert the html collection into an array
miceArray.forEach((item) => {
    item.innerHTML = `mouse`;
});
console.log(mice);

// 3. getElementsByTagName
let divs = document.getElementsByTagName(`div`);
console.log(divs);

// 4. querySelector <= Just gets the first occurance
// with comma, it's like or and without comma, it's like and
let firstMouse = document.querySelector(`.mouse, .catElement`);
let firstCat = document.querySelector(`#cat`);
let firstDiv = document.querySelector(`ht, div`);

// 5. querySelectorAll <= Gets all the occurrances
let allMice = document.querySelectorAll(`.louse`);

console.log(firstMouse.className);