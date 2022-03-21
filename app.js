const coffee = document.querySelector('.coffee')
const oneMug = document.getElementById('one-mug')
const twoMug = document.getElementById('two-mug')
const threeMug = document.getElementById('three-mug')
const caffLimit = 94
let caff1 = 56
let caff2 = 28
let caff3 =  18.6

function changeHeight(qtd){
  let height = getComputedStyle(coffee).getPropertyValue('height')
  let convertedHeight = parseInt(height)
  let newHeight
  newHeight = convertedHeight + qtd
  coffee.style.setProperty('height', newHeight + "px")
}

oneMug.onclick = function(){
  changeHeight(caff1)
}

twoMug.onclick = function(){
  changeHeight(caff2)
}

threeMug.onclick = function(){
  changeHeight(caff3)
}







/* function move(caff) {
  if (i == 0) {
    i = 1;
    var elem = document.querySelector('.coffee')
    var height = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (height >= caff) {
          clearInterval(id);
          i = 0;
        } else {
          height++;
          elem.style.height = height + "%";
        }
      }
  }
} */