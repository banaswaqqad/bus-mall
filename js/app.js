
'use strict'


let imgArray = JSON.parse(localStorage.getItem('allProducts'));
console.log('after get', imgArray);



let numAttempts = 25;
let userAttempts = 0;

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
let chart = document.getElementById('resultChart');
var ctx = document.getElementById('resultChart').getContext('2d');

function theProduct(imgName) {
    this.name = imgName;
    this.src = '../img/' + imgName + '.jpg';
    this.shown = 0;
    this.vote = 0;
  
    imgShown.push(this.shown);
    imgVotes.push(this.vote);

}

if (imgArray === []) {
  imgArray = [
new theProduct('bag'),
new theProduct('banana'),
new theProduct('bathroom'),
new theProduct('boots'),
new theProduct('breakfast'),
new theProduct('bubblegum'),
new theProduct('chair'),
new theProduct('cthulhu'),
new theProduct('dog-duck'),
new theProduct('dragon'),
new theProduct('pen'),
new theProduct('pet-sweep'),
new theProduct('scissors'),
new theProduct('shark'),
new theProduct('sweep'),
new theProduct('tauntaun'),
new theProduct('unicorn'),
new theProduct('usb'),
new theProduct('water-can'),
new theProduct('wine-glass'),

  ];

  console.log('inside if', imgArray) 
}
chooseThreeImages();
renderImages();


form.addEventListener('submit', submitted);
imgDiv.addEventListener('click', userClick);
button.addEventListener('click', result, { once: true });


function submitted(event) {
    
    event.preventDefault();
    userAttempts = event.target.userAttempts.value;
    
    numAttempts= userAttempts;
}

function userClick(event) {
    console.log(event.target);
    numAttempts--;
    console.log(numAttempts);
    if (numAttempts > 0) {
        if (event.target.id === firstImg.id) {
          imgArray[firstImgIndex].vote++;
            
            renderImages();
        } else if (event.target.id === secondImg.id) {
          imgArray[secondImgIndex].vote++;
           
            renderImages();
        } else if (event.target.id === thirdImg.id) {
          imgArray[thirdImgIndex].vote++;
            
            renderImages();
        }
        else {
          numAttempts++;
        }
        for (let i = 0; i < imgArray.length; i++) {
          imgVotes[i] = imgArray[i].vote;
      }
  } else {
      button.removeAttribute('disabled');
      imgDiv.removeEventListener('click', userClick);
  }

}

function result() {

  for (let i = 0; i < imgArray.length; i++) {
    imgShown[i] = imgArray[i].shown;
    imgVotes[i] = imgArray[i].vote;
}
chart.style.display = "block";
renderChart();




localStorage.setItem('allProducts', JSON.stringify(imgArray));
}


function chooseThreeImages() {
   
  do {
    firstImgIndex = randomIndex();
    do {
        secondImgIndex = randomIndex();
        thirdImgIndex = randomIndex();
    } while (firstImgIndex === secondImgIndex || firstImgIndex === thirdImgIndex || secondImgIndex === thirdImgIndex)
} while (theIndexes.includes(firstImgIndex) || theIndexes.includes(secondImgIndex) || theIndexes.includes(thirdImgIndex))

ImgArray[firstImgIndex].shown++;
ImgArray[secondImgIndex].shown++;
ImgArray[thirdImgIndex].shown++;
for (var i = 0; i < ImgArray.length; i++) {
    imgShown[i] = ImgArray[i].shown;
}
theIndexes = [firstImgIndex, secondImgIndex, thirdImgIndex];
}

function renderImages() {
  thefirstImgTitle.textContent = ImgArray[firstImgIndex].name;
  imgDiv.appendChild(thefirstImgTitle);
  thesecondImgTitle.textContent = ImgArray[secondImgIndex].name;
  imgDiv.appendChild(thesecondImgTitle);
  thethirdImgTitle.textContent = ImgArray[thirdImgIndex].name;
  imgDiv.appendChild(thethirdImgTitle);
  firstImg.src = ImgArray[firstImgIndex].src;
  imgDiv.appendChild(firstImg);
  secondImg.src = ImgArray[secondImgIndex].src;
  imgDiv.appendChild(secondImg);
  thirdImg.src = ImgArray[thirdImgIndex].src;
  imgDiv.appendChild(thirdImg);
}

//random function (hoistng)
function randomIndex() {
    return Math.floor(Math.random() * ImgArray.length);
}

function renderChart() {
  var imgNames = [];
  for (var i = 0; i < imgArray.length; i++) {
      imgNames[i] = imgArray[i].name + ' (' + (imgArray[i].vote * imgArray[i].shown) / 100 + '%)';
  }
  new Chart(ctx, {
      type: 'bar',
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
          },
          maintainAspectRatio: true,
          aspectRatio: 2,
          scales: {
              yAxes: [{
                  ticks: {
                      // max:50,
                      min: 0,
                      beginAtZero: 0,
                      // stepSize: 1,
                  }
              }],

          }

      }
  });
}


































