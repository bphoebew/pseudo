var submit = $('.guess');
var container = $('.container');

submit.on("click", showResult);

function showResult(){
  if (document.querySelector(".kai").checked ==true || document.querySelector(".jocelyn").checked == true){
    container.append(`<p class = "answer">You've caught the catfisher!!</p>`);
}else if(document.querySelector(".adrien").checked ==true){
    container.append(`<p class = "answer"> You've missed a person :/ </p>`);
}
}
