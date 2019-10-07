/*
const myname = "Q";
console.log(myname);
*/

/* Array, Object
const wow = "Fucking awesome";
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", true, false, wow];

console.log(daysOfWeek);

const octagon = {
    name: "octagon",
    location: "gangnam",
    type: "club",
    pay: "120,000₩/day",
    work: ["bartender", "server", "info"],
    workers: [
        { bartender: ["uiju", "somebody"] },
        { server: "sungtaek" },
        { info: "janghun" }
    ]
};

console.log(octagon);

console.log(octagon.type);

console.log(octagon.work);

console.log(octagon.workers);

console.log(octagon.workers[0].bartender[1]);
*/

/*Function

function helloMacro() {
    console.log("Hello, Fucking hello my friend?");
};

helloMacro();

function fruit(apple, banana, grape) {
    console.log("what fruits do you like? you like", apple, banana, grape, "or something?");
}

fruit("hi","hello","bye");
*/

/* return
function sayHello(name, something) {
return `Hello ${name}, who are you? you are ${something}?`;
};

const greetQ = sayHello('Q', 'my friend');

console.log(greetQ);
*/

/* return
const doTheMath = {
    plus : function(a,b) {
        return a+b;
    },
    minus : function(a,b) {
        return a-b;
    },
    multiply : function(a,b) {
        return a*b;
    },
    divine : function(a,b) {
        return a/b;
    },
    square : function(a,b) {
        return a**b;
    }
};

const plus = doTheMath.plus(5,5);
const minus = doTheMath.minus(10,5);
const multiply = doTheMath.multiply(5,5);
const divine = doTheMath.divine(10,2);
const square = doTheMath.square(2,3);

console.log(doTheMath);

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divine);
console.log(square);
*/

/*
const getId = document.querySelector("#title");

console.log(getId);

getId.style.backgroundColor = "yellow";

getId.innerHTML = "funky";
*/

/*
const wtf = document.querySelector("#title");

console.log(wtf);

function clickHandler() {
    title.style.color = "red";
//console.log(event);
    //console.log("oops");
}

title.addEventListener("click", clickHandler);
*/

/*
if(5-3 < 1) {
    console.log("you're right");
} else if (10 > 15) {
    console.log("Hmm");
} else {
    console.log("WTH?");
};
*/

/*
const age = prompt ("what's you're age?");

if(age >=18 && age <= 20) {
    console.log("Stay calm");
} else if(age >20){
    console.log("cheers");
} else {
    console.log("not yet, kid")
};
*/

const title = document.querySelector('#title');

const BASE_COLOR = "rgb(89, 98, 117)";
const OTHER_COLOR = "red";

function clickHandler() {
    if(title.style.color === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}



title.style.color = BASE_COLOR;
title.addEventListener("click", clickHandler);

/*
function init(){
}
init();
*/

