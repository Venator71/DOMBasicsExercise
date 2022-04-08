// Q 1
const xMen = document.getElementById(`x-men`);

// Q 2
const centered = document.getElementsByClassName(`centered`);

// Q 3
const batman = document.querySelector(`#batman`);

// Q4
const h3s = document.querySelectorAll(`h3`);

// Q5

const h1 = document.querySelectorAll(`h1`);

// 5b

h1.innerText = 'The Best Animated Superhero TV Shows Ever!';

// Q6

const honorableMentions = document.getElementById(`honorable-mentions`);

// Q6b
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;

// Q7
const aTag = document.querySelector('a');

// Q7b
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";

// Q8

h1.classList.add('background', `text-color`);

// Q9

h1.classList.remove('background');

// Q10a

const h4 = document.createElement(`h4`);

// Q10b

h4.innerText = "Is Avatar: The Last Airbender A Superhero Show?";

// Q10c

const body = document.querySelector(`body`);
body.prepend(h4);

// Q11a

const h5 =document.createElement(`h5`);

//Q 11b

h5.innerText = "Heroes in a half shell Turtle Power!";

// Q11c

aTag.insertAdjacentElement(`afterend`, h5);

// Q12

const li = document.querySelector('ul>li');
li.remove();

// Bonus 
//    Q13a

const divs = document.querySelectorAll(`div`);

// Q13b

divs.forEach((div)=> {
    div.classList.toggle(`background`);
}

);

document.querySelectorAll(`div`).forEach(function(elem){
    elem.classList.toggle(`background`)
});

for (d of divs ){
    d.classList.toggle(`backgrounds`);
}

// Q14a

avengers = ["Forever", "Fight", "As", "One", "AVENGERS", "ASSEMBLE!"];

// Q14b



