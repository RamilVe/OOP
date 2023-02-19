let input = document.getElementById('inp');
let chColor = document.getElementById('btn');

chColor.onclick = function() {
    let value = input.value;

    document.body.style.backgroundColor = value;
    
}

let number = document.getElementById('number');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

plus.onclick = function() {
   number.innerHTML++;
}

minus.onclick = function(){
    if (number.innerHTML > '0') {
        number.innerHTML--;
    }
    else{
        number.innerHTML = '0'
    }
}


function Vurma(x,y) {
    let hasil = 1;
    for (let i = x; i <= y; i++) {
        hasil *= i;
    }
    console.log(hasil);
}
Vurma(10,15)