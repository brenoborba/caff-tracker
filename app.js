const coffee = document.querySelector('.coffee')
const oneMug = document.getElementById('one-mug')
const twoMug = document.getElementById('two-mug')
const threeMug = document.getElementById('three-mug')
const clearBtn = document.getElementById('clear')
const message = document.querySelector('#message')
const caffLimit = 280
let caff1 = 56
let caff2 = 28
let caff3 =  18.6
let heightMonitor

message.style.display = 'none'


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
  heightMonitor = newHeight
  showWarningMessage()
}


function btnFunc(btn, caff){
  btn.onclick = function(){
    increaseHeight(caff)
  }
}

function showWarningMessage(){
  if (heightMonitor >= caffLimit){
    message.style.display = 'block'
  }
}

function main(){
  btnFunc(oneMug, caff1)
  btnFunc(twoMug, caff2)
  btnFunc(threeMug, caff3)
  clearHeight(clearBtn)

  
}

main()
