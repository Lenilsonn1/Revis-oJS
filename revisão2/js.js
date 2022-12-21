var btnDark = document.querySelector('body');
var btnLight = document.querySelector('body');

var box = document.querySelectorAll('.box');

box.style.color = 'blue'

function bgdark (){
    btnDark.setAttribute('class','dark');
    console.log('você está no modo dark')

    box[0].setAttribute('class','darkblue');
    box[1].setAttribute('class','darkblue');
    box[2].setAttribute('class','darkblue');
}

function bglight (){
    btnLight.setAttribute('class','light')
    console.log('você está no modo light')

    box[0].setAttribute('class','lightblue');
    box[1].setAttribute('class','lightblue');
    box[2].setAttribute('class','lightblue');

}