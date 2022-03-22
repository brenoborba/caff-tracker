const coffee = document.querySelector('.coffee')
const oneMug = document.getElementById('one-mug')
const twoMug = document.getElementById('two-mug')
const threeMug = document.getElementById('three-mug')
const caffLimit = 280
let caff1 = 56
let caff2 = 28
let caff3 =  18.6
let displayUpdater


function changeHeight(qtd){
  let newHeight
  let height = getComputedStyle(coffee).getPropertyValue('height')
  let convertedHeight = parseInt(height)
  newHeight = convertedHeight + qtd
  coffee.style.setProperty('height', newHeight + "px")
  displayUpdater = newHeight
}


function btnFunc(btn, caff){
  btn.onclick = function(){
    changeHeight(caff)
  }
}

/* if(displayUpdater <= caffLimit){
  oneMug.onclick = function(){
    changeHeight(caff1)
  }
  
  twoMug.onclick = function(){
    changeHeight(caff2)
  }
  
  threeMug.onclick = function(){
    changeHeight(caff3)
  }
} */



btnFunc(oneMug, caff1)
btnFunc(twoMug, caff2)
btnFunc(threeMug, caff3)