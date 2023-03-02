'use strict';

// Funzioni 
function elementCreator(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;
    return element;
}
function myAppendElement(containerElement , htmlElement){
    containerElement.append(htmlElement);
}
// Board Box
const button = document.getElementById('match_start');
const reset = document.getElementById('reset');
const boardBox = document.querySelector('.board');
//Button Generazione Celle
button.addEventListener('click', 
        function(){
// Ciclo for per generare celle 
    for(let i = 1 ; i <= 100; i++){
        const createdElement = elementCreator('div', 'cell', i);
        myAppendElement(boardBox,createdElement);
        createdElement.addEventListener('click',
        function(){
            createdElement.classList.add('azzurro');
            console.log(i);
        }
        )
        //Button Reset
        reset.addEventListener('click',
        function(){
            createdElement.classList.remove('azzurro'); 
            button.classList.remove('white_btn');
            button.classList.add('btn');
            button.innerHTML = ('Inizia Partita');
            window.location.reload();
        }
        )    
    }
    // Button Utilities
    button.classList.add('white_btn');
    button.classList.remove('btn');
    button.innerHTML = ('Partita Iniziata');
});

