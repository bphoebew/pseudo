var submit = $('.guess');
var container = $('.container');

submit.on("click", showResult);

function showResult(){
  if (document.querySelector(".alexei").checked ==true && document.querySelector(".jocelyn").checked == true){
    container.empty();
    container.append(`<p class = "answer"> Congrats you've found all the catfishers! </p>`);
}else if (document.querySelector(".alexei").checked ==true || document.querySelector(".jocelyn").checked == true){
    container.empty();
    container.append(`<p class = "answer">You've caught one catfisher!! There's one more!</p>`);
}else if(document.querySelector(".adrien").checked ==true || document.querySelector(".lily").checked == true || document.querySelector(".nax").checked == true || document.querySelector(".kai").checked == true){
    container.empty();
    container.append(`<p class = "answer"> Sorry, you didn't catch the catfisher :/ </p>`);
}
}
