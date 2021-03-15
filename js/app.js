'use strict'

let maxAttempt = 25;
let userAttemptCounter = 0;

let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

let showenTime = [];
let vote = [];

let names = [];

let imgRound = [];







const picNames = 
['bag.jpg',
'banana.jpg',
'bathroom.jpg',
'boots.jpg',
'breakfast.jpg',
'bubblegum.jpg',
'cair.jpg',
'chtulhu.jpg',
'dog-duck.jpg',
'dragon.jpg',
'pen.jpg',
'pet-sweep.jpg',
'scissors.jpg',
'shark.jpg',
'sweep.png',
'tauntaun.jpg',
'unicorn.jpg',
'usb.gif',
'water-can.jpg',
'wine-glass.jpg'
]

const myImgsec=document.getElementById('images-section');
const myLeftpic =document.getElementById('leftImage');
const myCenterpic=document.getElementById('centerImage');
const myrightpic=document.getElementById('rightImage');



function Catalog(name,imgExt)
{
this.name=name;
this.numClick=0;
this.numViews=0;
this.src=`./img/${picNames}.${imgExt}`;

Catalog.all.push(this)
}
Catalog.all=[];

for(let i=0;i<picNames.length;i++){
    new Catalog(picNames[i]);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function render(){
    const leftIndex=randomNumber(0,Catalog.all.length-1);
    const leftRandomcatalog=Catalog.all[leftIndex];
    myLeftpic.src=leftRandomcatalog.src;
    myLeftpic.title=leftRandomcatalog.name;
    myLeftpic.alt=leftRandomcatalog.name;

    const centerIndex=randomNumber(0,Catalog.all.length-1);
    const centerRandomcatalog=Catalog.all[centerIndex];
    myCenterpic.src=centerRandomcatalog.src;
    myCenterpic.title=centerRandomcatalog.name;
    myCenterpic.alt=centerRandomcatalog.name;
  
    const rightIndex=randomNumber(0,Catalog.all.length-1);
    const rightRandomCatalog=Catalog.all[rightIndex];
    myrightpic.src=rightRandomCatalog.src;
    myrightpic.title=rightRandomCatalog.name;
    myrightpic.alt=rightRandomCatalog.name;
  
  
  
  }



  let firtsData=document.getElementById('firstdataname');
  let secData=document.getElementById('secdatanumclic');
  let thridData=document.getElementById('thirddataviews');
  myImgsec.addEventListener('click',clickfunction);
  function clickfunction (event)
  { 
    let clicks =  myImgsec.addEventListener('click');
      clicks++;
     if (clicks < maxAttempt)
     {

        if (event.target.id === 'leftImage' || event.target.id === 'rightImage'  || event.target.id ==='centerImage' )
             {
                for(let i=0;i<Catalog.all.length;i++){
                    if (Catalog.all[i].name === event.target.title){
                      Catalog.all[i].numClick++;
                      Catalog.all[i].numViews++;
                      Catalog.all[i].name;
                      
             }




     }
     if (userAttemptCounter == maxAttempt)
     {






        
     }
    

     

  }


render();
  
     }}}

