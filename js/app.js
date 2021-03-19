
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





































// 'use strict'

// let maxAttempt = 25;
// let userAttemptCounter = 0;

// let firstImageIndex;
// let secondImageIndex;
// let thirdImageIndex;

// let showenTime = [];
// let vote = [];

// let names = [];

// let imgRound = [];







// const picNames = 
// ['bag.jpg',
// 'banana.jpg',
// 'bathroom.jpg',
// 'boots.jpg',
// 'breakfast.jpg',
// 'bubblegum.jpg',
// 'cair.jpg',
// 'chtulhu.jpg',
// 'dog-duck.jpg',
// 'dragon.jpg',
// 'pen.jpg',
// 'pet-sweep.jpg',
// 'scissors.jpg',
// 'shark.jpg',
// 'sweep.png',
// 'tauntaun.jpg',
// 'unicorn.jpg',
// 'usb.gif',
// 'water-can.jpg',
// 'wine-glass.jpg'
// ]

// const myImgsec=document.getElementById('images-section');
// const myLeftpic =document.getElementById('leftImage');
// const myCenterpic=document.getElementById('centerImage');
// const myrightpic=document.getElementById('rightImage');



// function Catalog(name,imgExt)
// {
// this.name=name;
// this.numClick=0;
// this.numViews=0;
// this.src=`./img/${picNames}.${imgExt}`;

// Catalog.all.push(this)
// }
// Catalog.all=[];

// for(let i=0;i<picNames.length;i++){
//     new Catalog(picNames[i]);

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function render(){
//     const leftIndex=randomNumber(0,Catalog.all.length-1);
//     const leftRandomcatalog=Catalog.all[leftIndex];
//     myLeftpic.src=leftRandomcatalog.src;
//     myLeftpic.title=leftRandomcatalog.name;
//     myLeftpic.alt=leftRandomcatalog.name;

//     const centerIndex=randomNumber(0,Catalog.all.length-1);
//     const centerRandomcatalog=Catalog.all[centerIndex];
//     myCenterpic.src=centerRandomcatalog.src;
//     myCenterpic.title=centerRandomcatalog.name;
//     myCenterpic.alt=centerRandomcatalog.name;
  
//     const rightIndex=randomNumber(0,Catalog.all.length-1);
//     const rightRandomCatalog=Catalog.all[rightIndex];
//     myrightpic.src=rightRandomCatalog.src;
//     myrightpic.title=rightRandomCatalog.name;
//     myrightpic.alt=rightRandomCatalog.name;
  
  
  
//   }



//   let firtsData=document.getElementById('firstdataname');
//   let secData=document.getElementById('secdatanumclic');
//   let thridData=document.getElementById('thirddataviews');
//   myImgsec.addEventListener('click',clickfunction);
//   function clickfunction (event)
//   { 
//     let clicks =  myImgsec.addEventListener('click');
//       clicks++;
//      if (clicks < maxAttempt)
//      {

//         if (event.target.id === 'leftImage' || event.target.id === 'rightImage'  || event.target.id ==='centerImage' )
//              {
//                 for(let i=0;i<Catalog.all.length;i++){
//                     if (Catalog.all[i].name === event.target.title){
//                       Catalog.all[i].numClick++;
//                       Catalog.all[i].numViews++;
//                       Catalog.all[i].name;
                      
//              }




//      }
//      if (userAttemptCounter == maxAttempt)
//      {






        
//      }
    

     

//   }


// render();
  
//      }}}

