/*
1 - create variables:
    a - images array;
    b - active img from HTML;
    c - arrow up from HTML;
    d - arrow-down from HTML;
    e - index variable to be set as 0;
2 - set the src parameter as the first img from the array (variable a);
3 - button click UP: create an IF condition -->
    a - IF (index < ( img array lenght - 1)), THEN index+1 and show next img;
    b - ELSE set again index = 0 and restar img visualization;
4 - button click DOWN: same as no.3 but on the other way round;
*/

// VARIABLES:
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const activeImg = document.getElementById('active-img');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

let index = 0;