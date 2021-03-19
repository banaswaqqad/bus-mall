
'use strict'


let myImgArray = [];
let numAttempts = 25;
let userAttempts = 0;
let imgNames = [];
let imgShown = [];
let imgVotes = [];


let firstImgIndex;
let secondImgIndex; 
let thirdImgIndex;

let theIndexes = [firstImgIndex, secondImgIndex, thirdImgIndex];


let imgDiv = document.getElementById('images');
let firstImg = document.createElement('img');
firstImg.id = 'firstImg';
let secondImg = document.createElement('img');
secondImg.id = 'secondImg';
let thirdImg = document.createElement('img');
thirdImg.id = 'thirdImg';

let thefirstImgTitle = document.createElement('h2');
let thesecondImgTitle = document.createElement('h2');
let thethirdImgTitle = document.createElement('h2');


let form = document.getElementById('form');
let button = document.getElementById('resultButton');
var ctx = document.getElementById('resultChart').getContext('2d');

function theProduct(imgName) {
    this.name = imgName;
    this.src = '../img/' + imgName + '.jpg';
    this.shown = 0;
    this.vote = 0;
    myImgArray.push(this);
    imgNames.push(this.name);
    imgShown.push(this.shown);
    imgVotes.push(this.vote);

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
            
            renderImages();
        } else if (event.target.id === secondImg.id) {
          myImgArray[secondImgIndex].vote++;
           
            renderImages();
        } else if (event.target.id === thirdImg.id) {
          myImgArray[thirdImgIndex].vote++;
            
            renderImages();
        }
        else {
          numAttempts++;
        }
        for (let i = 0; i < myImgArray.length; i++) {
          imgVotes[i] = myImgArray[i].vote;
      }
  } else {
      button.removeAttribute('disabled');
      imgDiv.removeEventListener('click', userClick);
  }

}

function result() {
  renderChart();
}


function chooseThreeImages() {
   
  do {
    firstImgIndex = randomIndex();
    do {
        secondImgIndex = randomIndex();
        thirdImgIndex = randomIndex();
    } while (firstImgIndex === secondImgIndex || firstImgIndex === thirdImgIndex || secondImgIndex === thirdImgIndex)
} while (theIndexes.includes(firstImgIndex) || theIndexes.includes(secondImgIndex) || theIndexes.includes(thirdImgIndex))

myImgArray[firstImgIndex].shown++;
myImgArray[secondImgIndex].shown++;
myImgArray[thirdImgIndex].shown++;
for (var i = 0; i < myImgArray.length; i++) {
    imgShown[i] = myImgArray[i].shown;
}
theIndexes = [firstImgIndex, secondImgIndex, thirdImgIndex];
}

function renderImages() {
  thefirstImgTitle.textContent = myImgArray[firstImgIndex].name;
  imgDiv.appendChild(thefirstImgTitle);
  thesecondImgTitle.textContent = myImgArray[secondImgIndex].name;
  imgDiv.appendChild(thesecondImgTitle);
  thethirdImgTitle.textContent = myImgArray[thirdImgIndex].name;
  imgDiv.appendChild(thethirdImgTitle);
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

function rendertheChart() {
  let myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
          labels: imgNames,
          datasets: [
              {
                  label: "seen",
                  backgroundColor: "#3b5360",
                  data: imgShown
              }, {
                  label: "voted",
                  backgroundColor: "#8b5e83",
                  data: imgVotes
              }
          ]
      },
      options: {
          title: {
              display: true,
              text: 'Vote Results',
              position: 'bottom',
          },
          data: {
              precision: 0
          }
      }
  });
}


































