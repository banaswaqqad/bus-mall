
'use strict'


let myImgArray = [];
let numAttempts = 25;
let userAttempts = 0;


let firstImgIndex;
let secondImgIndex; 
let thirdImgIndex;
let imgDiv = document.getElementById('images');
let firstImg = document.createElement('img');
firstImg.id = 'firstImg';
let secondImg = document.createElement('img');
secondImg.id = 'secondImg';
let thirdImg = document.createElement('img');
thirdImg.id = 'thirdImg';
let resultList = document.getElementById('resultList');
let form = document.getElementById('form');
let button = document.getElementById('resultButton');


function theProduct(imgName) {
    this.name = imgName;
    this.src = '../img/' + imgName + '.jpg';
    this.shown = 0;
    this.vote = 0;
    myImgArray.push(this);
}


new theProduct('bag');
new theProduct('banana');
new theProduct('bathroom');
new theProduct('boots');
new theProduct('breakfast');
new theProduct('bubblegum');
new theProduct('chair');
new theProduct('cthulhu');
new theProduct('dog-duck');
new theProduct('dragon');
new theProduct('pen');
new theProduct('pet-sweep');
new theProduct('scissors');
new theProduct('shark');
new theProduct('sweep');
new theProduct('tauntaun');
new theProduct('unicorn');
new theProduct('usb');
new theProduct('water-can');
new theProduct('wine-glass');


chooseThreeImages();
renderImages();


form.addEventListener('submit', submitted);
imgDiv.addEventListener('click', userClick);
button.addEventListener('click', result, { once: true });


function submitted(event) {
    console.log(event.target.userAttempts.value);
    event.preventDefault();
    userAttempts = event.target.userAttempts.value;
    console.log(document.getElementById('userAttempts'));
    numAttempts= userAttempts;
}

function userClick(event) {
    console.log(event.target);
    numAttempts--;
    console.log(numAttempts);
    if (numAttempts > 0) {
        if (event.target.id === firstImg.id) {
          myImgArray[firstImgIndex].vote++;
            chooseThreeImages();
            renderImages();
        } else if (event.target.id === secondImg.id) {
          myImgArray[secondImgIndex].vote++;
            chooseThreeImages();
            renderImages();
        } else if (event.target.id === thirdImg.id) {
          myImgArray[thirdImgIndex].vote++;
            chooseThreeImages();
            renderImages();
        }
        else {
          numAttempts++;
        }
    } else {
        result();
    }
}

function result() {
    var results;
    for (var i = 0; i <myImgArray.length; i++) {
        results = document.createElement('li');
        results.textContent = myImgArray[i].name + ' earn ' + myImgArray[i].vote + ' from ' + myImgArray[i].shown + ' times it was showed.';
        resultList.appendChild(results);
    }
    imgDiv.removeEventListener('click', userClick);
}


function chooseThreeImages() {
   
    firstImgIndex = randomIndex();
    do {
        secondImgIndex = randomIndex();
        thirdImgIndex = randomIndex();
    } while (firstImgIndex === secondImgIndex || firstImgIndex === thirdImgIndex || secondImgIndex === thirdImgIndex)
    myImgArray[firstImgIndex].shown++
    myImgArray[secondImgIndex].shown++
    myImgArray[thirdImgIndex].shown++
}

function renderImages() {
    firstImg.src = myImgArray[firstImgIndex].src;
    imgDiv.appendChild(firstImg);
    secondImg.src = myImgArray[secondImgIndex].src;
    imgDiv.appendChild(secondImg);
    thirdImg.src = myImgArray[thirdImgIndex].src;
    imgDiv.appendChild(thirdImg);
}

//random function (hoistng)
function randomIndex() {
    return Math.floor(Math.random() * myImgArray.length);
}




































