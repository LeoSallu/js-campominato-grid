'use strict';

// Funzioni 
function elementCreator(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText =htmlValue
    return element;
}
function myAppendElement(containerElement , htmlElement){
    containerElement.append(htmlElement);
}

// Board Box

//Evento 

const button = document.getElementById('match_start');
const boardBox = document.querySelector('.board');
button.addEventListener('click', 
        function(){
// Ciclo for per generare celle 
for(let i = 1 ; i <= 100; i++){
const createdElement = elementCreator('div', 'cell', i);
myAppendElement(boardBox,createdElement);
}})