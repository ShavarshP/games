// const elements=[];const elements=[[6,19,18,20],[6,19,18,32],
// [7,19,20,33],[32,19,18,20],[6,7],
// [6,19],[6,19,32],[18,19,20],[6,19,18],
// [6,19,7],[6,20,7],[19,20,6],[6,19,20,33],
// [6,7,19,18],[7,20,19,32],[6,7,20,21],[7,6,19,20]];
let boxe=document.getElementsByClassName('box');
document.onkeydown = blockTypeMovie;

let blockType=[6,18,19,20]
let timerOfTimer=250;
let tipe = 1
let busyBox=[];
let balain=0;
let chenjboxPasvord=[];
let pasvordKey=0;
for (var i = 0; i < 338; i++) {
  busyBox[i]=0;

}
for (var i = 0; i < 338; i++) {
  boxe[i].style.backgroundColor ="#fdfdfd";
  if(i%13==0 || i%13==12 ){
    busyBox[i]=i;
  }
}
for (var i = 325; i < 338; i++) {
  busyBox[i]=i;

}
for (var i = 0; i < 338; i++) {
  if (busyBox[i]==i) {

    boxe[i].style.backgroundColor ="#343430";
  }
}
console.log(busyBox);
let indexMuve=13



for (var i = 0; i < blockType.length; i++) {
  boxe[blockType[i]].style.backgroundColor ="#aa1d1d";
}


let timer=setInterval(timerStar, timerOfTimer,);
clearInterval(timer)
function timerr(){
  clearInterval(timer)
  timer=setInterval(timerStar, timerOfTimer,);
  timerOfTimer=250
}

function timerStar(){

  muvingCheng()
  muvinggg()
}


//sharjum depi nerqev
function muvinggg(){
  for (var i = 0; i < blockType.length; i++) {
    boxe[blockType[i]].style.backgroundColor ="#fdfdfd";
  }
  for (var i = 0; i < blockType.length; i++) {
    blockType[i]+=indexMuve
  }
  for (var i = 0; i < blockType.length; i++) {
    boxe[blockType[i]].style.backgroundColor ="#aa1d1d";
  }
  if (indexMuve==0) {
    for (var i = 0; i < blockType.length; i++) {
      busyBox[blockType[i]]=blockType[i];

    }

    indexMuve=13;
    delit();
    elemenTipe();
    console.log(busyBox);

  }
  indexMuve=13;
}

//stugman funkcia
function muvingCheng(){
  let arrrChenj=[];
  if (indexMuve!=13) {
    for (var k = 0; k < blockType.length; k++) {
      for (var i = 0; i < 338; i++) {
        if(blockType[k]==i){
          arrrChenj[i]=i+indexMuve;
          if(busyBox[i+indexMuve]==arrrChenj[i]){
            if(busyBox[i+indexMuve]%13==0 || busyBox[i+indexMuve]%13==12 ){
              indexMuve=13;
            }else {

              indexMuve=13;
            }

          }

        }
      }
    }

  }
  for (var k = 0; k < blockType.length; k++) {
    for (var i = 0; i < 338; i++) {
      if(blockType[k]==i){
        arrrChenj[i]=i+indexMuve;
        if(busyBox[i+indexMuve]==arrrChenj[i]){
          if(busyBox[i+indexMuve]%13==0 || busyBox[i+indexMuve]%13==12 ){
            indexMuve=13;
          }else {

            indexMuve=0;
          }

        }

      }
    }
  }
}

//toxijnjmantoylatvum
function delit(){

  let cheyken=0

  for (var i = 0; i < 338; i++) {
    if(busyBox[i]==i){
      if(busyBox[i]%13==0 || busyBox[i]%13==12 ){
        cheyken=0
      }else if (i > 324) {
        cheyken=0

      } else {
        cheyken++;

      }
      if(cheyken==11){
        console.log('maladec');
      }
    }

    if (cheyken>10) {
      for (var j = i; j > i-11; j--) {
        boxe[j].style.backgroundColor ="#fdfdfd";
        busyBox[j]=0;
        for (var t = 1; t < 100; t++) {

          if(busyBox[j-(t*indexMuve)]==(j-(t*indexMuve))){
            busyBox[j-((t-1)*indexMuve)]=(j-((t-1)*indexMuve))
            busyBox[j-(t*indexMuve)]=0;
            boxe[j-(t*indexMuve)].style.backgroundColor ="#fdfdfd";
            boxe[j-((t-1)*indexMuve)].style.backgroundColor ="#aa1d1d"
            balain+=11;
          }
        }
      }
    }
  }
}

//blockType tesqi devi voroshum
function elemenTipe(){
  balain+=blockType.length;
  document.getElementById('achok').innerHTML=balain
  timerr();
  function randomInteger(min, max) {

    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  tipe = randomInteger(1, 21)

    if (tipe==1) {
      blockType=[6,19,18,20]
    }
    if (tipe==2) {
      blockType=[6,19,18,32]
    }
    if (tipe==3) {
      blockType=[7,19,20,33]
    }
    if (tipe==4) {
      blockType=[32,19,18,20]
    }
    if (tipe==5) {
      blockType=[6,7]
    }
    if (tipe==6) {
      blockType=[6,19]
    }
    if (tipe==7) {
      blockType=[6,19,32]
    }
    if (tipe==8) {
      blockType=[18,19,20]
    }
    if (tipe==9) {
      blockType=[6,19,18]
    }
    if (tipe==10) {
      blockType=[6,19,7]
    }
    if (tipe==11) {
      blockType=[6,20,7]
    }
    if (tipe==12) {
      blockType=[19,20,6]
    }
    if (tipe==14) {
      blockType=[6,19,20,33]
    }
    if (tipe==15) {
      blockType=[6,7,19,18]
    }
    if (tipe==16) {
      blockType=[7,20,19,32]
    }
    if (tipe==17) {
      blockType=[6,7,20,21]
    }
    if (tipe==18) {
      blockType=[7,6,19,20]
    }
    if (tipe==19) {
      blockType=[5,18,19,20]
    }
    if (tipe==20) {
      blockType=[7,6,19,32]
    }
    if (tipe==21) {
      blockType=[31,32,19,6]
    }
    if (busyBox[19]==19) {
      clearInterval(timer)
      check=1
    }
}
function pozishen(){
  for (var i = 0; i < blockType.length; i++) {
    blockType[i]=blockType[i]+p
  }
}

//bloki poxum
function chenynjbox(){
  let p=blockType[1]-19
  console.log(p);
  if (tipe==2) {
    blockType=[6,19,18,20]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=1;
  }
  if (tipe==3) {
    blockType=[6,19,20,32]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=2;
  }
  if (tipe==4) {
    blockType=[32,19,18,20]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=3;
  }
  if (tipe==1) {
    blockType=[7,19,20,33]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=4;
  }
  if (tipe==6) {
    blockType=[19,20]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=5;
  }
  if (tipe==5) {
    blockType=[6,19]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=6;
  }
  if (tipe==8) {
    blockType=[6,19,32]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=7;
  }
  if (tipe==7) {
    blockType=[18,19,20]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=8;
  }
  if (tipe==10) {
    blockType=[6,19,18]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=9;
  }
  if (tipe==11) {
    blockType=[6,19,7]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=10;
  }
  if (tipe==12) {
    blockType=[6,20,7]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=11;
  }
  if (tipe==9) {
    blockType=[19,20,6]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=12;
  }
  if (tipe==15) {
    blockType=[6,19,20,33]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=14;
  }
  if (tipe==16) {

    blockType=[6,7,19,18]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=15;
  }
  if (tipe==17) {
    blockType=[7,20,19,32]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=16;
  }
  if (tipe==14) {
    blockType=[6,7,20,21]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=17;
  }
  if (tipe==18) {
    blockType=[7,6,19,20]
    for (var i = 0; i < blockType.length; i++) {
      blockType[i]=blockType[i]+p
    }
    tipe=18;
  }
  for (var i = 0; i < 338; i++) {

    if (busyBox[i]==0) {
      boxe[i].style.backgroundColor ="#fdfdfd";
    }

  }
}


//diqain voroshum
function blockTypeMovie(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    console.log("left arrow");
    indexMuve=12;

  } else if (e.keyCode == "39") {
    console.log("right arrow");
    indexMuve=14;
  }else if (e.keyCode == "40") {
    if (check==0) {

      timerOfTimer=50;
      timerr();
    }

  }else if (e.keyCode == "38") {
    if (pasvordKey==1) {

      chenynjbox()
    }

  }
  chenjboxPasvord.push(e.keyCode);
  let pasford=[83, 72, 65, 86, 65, 82, 83, 72]
  if (chenjboxPasvord[chenjboxPasvord.length-1]==72 && chenjboxPasvord.length>=8) {
    let intnger=0
    for (var i = 1; i < 8; i++) {
      chenjboxPasvord[chenjboxPasvord.length-i];
      if (chenjboxPasvord[chenjboxPasvord.length-i]==pasford[pasford.length-i]) {
        intnger++;
        console.log('maladec'+intnger);
      }
    }
    if (intnger==7) {
      pasvordKey=1;
      alert("you have included unfinished properties!!");
    }
  }

}
let check=1
document.getElementById('sqver').addEventListener("click", ()=>{
  if (check==0) {
    clearInterval(timer)
    check=1;
    document.getElementById('text').innerHTML='start'
  }else {
    timer=setInterval(timerStar, timerOfTimer,);
    check=0;
    document.getElementById('text').innerHTML='stop'
    if (busyBox[19]==19) {
      balain=0
      for (var i = 0; i < 338; i++) {
        busyBox[i]=0;

      }
      for (var i = 0; i < 338; i++) {
        boxe[i].style.backgroundColor ="#fdfdfd";
        if(i%13==0 || i%13==12 ){
          busyBox[i]=i;
        }
      }
      for (var i = 325; i < 338; i++) {
        busyBox[i]=i;

      }
      for (var i = 0; i < 338; i++) {
        if (busyBox[i]==i) {

          boxe[i].style.backgroundColor ="#343430";
        }
      }
      document.getElementById('achok').innerHTML=balain
    }
  }
})
