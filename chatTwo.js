var firstButton = $(".answerOne");
var twoButton = $(".answerTwo");
var threeButton = $(".answerThree");
var fourButton = $(".answerFour");
var chat = $(".chat");
var tracker = 0;

firstButton.on("click", showOne);
twoButton.on("click", showTwo);
threeButton.on("click", showThree);
fourButton.on("click", showFour);

function showOne(){
  if (tracker == 0){
    chat.append(`<h1> Uh, not interested. I don’t know you. </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> don’t worry, i’m a really famous photographer</h2>`);

}

function showTwo(){

}

function showThree(){

}

function showFour(){

}
