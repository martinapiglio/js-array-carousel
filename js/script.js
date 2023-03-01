/*
1 - create variables:
    a - images array;
    b - active img from HTML;
    c - arrow up from HTML;
    d - arrow-down from HTML;
    e - index variable to be set as 0;
2 - set the src parameter as the first img from the array (variable a);
3 - arrow click UP: create an IF condition -->
    a - IF (index < ( img array lenght - 1)), THEN index+1 and show next img;
    b - ELSE set again index = 0 and restar img visualization;
4 - arrow click DOWN: same as no.3 but on the other way round;
*/

// VARIABLES:
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const activeImg = document.getElementById('active-img');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

const thumbnailContainer = document.getElementById('thumbnail');

let index = 0;

//SET IMG SRC EQUAL TO FIRST IMG FROM THE ARRAY:
activeImg.src = images[index];

//ARROW CLICK UP
arrowUp.addEventListener("click", function() {

    if (index < images.length - 1) {

        index++;

    } else {

        index = 0;

    };

    activeImg.src = images[index];
    
});

//ARROW CLICK DOWN
arrowDown.addEventListener("click", function() {

    if (index > 0) {

        index--;

    } else {

        index = images.length - 1 ;

    };

    activeImg.src = images[index];
    
});