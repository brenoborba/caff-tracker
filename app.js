const coffee = document.querySelector('.coffee')
const oneMug = document.getElementById('one-mug')
const twoMug = document.getElementById('two-mug')
const threeMug = document.getElementById('three-mug')
const clearBtn = document.getElementById('clear')
const caffLimit = 280
let caff1 = 56
let caff2 = 28
let caff3 =  18.6
let displayUpdater


function clearHeight(btn){
  btn.onclick = function(){
    coffee.style.setProperty('height', 0)
  }
}

function increaseHeight(qtd){
  let newHeight
  let height = getComputedStyle(coffee).getPropertyValue('height')
  let convertedHeight = parseInt(height)
  newHeight = convertedHeight + qtd
  coffee.style.setProperty('height', newHeight + "px")
  displayUpdater = newHeight
}


function btnFunc(btn, caff){
  btn.onclick = function(){
    increaseHeight(caff)
  }
}

btnFunc(oneMug, caff1)
btnFunc(twoMug, caff2)
btnFunc(threeMug, caff3)

clearHeight(clearBtn)


