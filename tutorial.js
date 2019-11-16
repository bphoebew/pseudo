var rightArrow = $('.rightArrow');
var leftArrow = $('.leftArrow');
var changeText = $('.changeText');
var tutorialPic = $('.tutorialPic');
var tracker = 0;

rightArrow.on("click", nextPage);
leftArrow.on("click", lastPage);

function nextPage(){
  if(tracker == 0){
  changeText.text("Choose a person that you would like to interact with");
  tracker++;
  leftArrow.css("visibility","visible");
  tutorialPic.attr("src","stepTwo.gif");
  rightArrow.show();
}else if (tracker== 1){
  changeText.text("Message the person to learn more about them and find if they are the catfisher");
  tracker++;
  rightArrow.show();
  leftArrow.css("visibility","visible");
  tutorialPic.attr("src","stepThree.gif");
}else if(tracker == 2){
  changeText.text("Once messaging all of the people, guess which one(s) are the catfisher(s)");
  tracker++;
  rightArrow.hide();
  tutorialPic.attr("src","jocelyn.png");
  leftArrow.css("visibility","visible");
}
}

function lastPage(){
  if(tracker == 1){
    changeText.text("Click the Play Button from the home screen to start your game");
    tracker--;
    rightArrow.show();
    tutorialPic.attr("src", "stepOne.gif");
    leftArrow.css("visibility","hidden");
  }else if(tracker == 2){
    changeText.text("Choose a person that you would like to interact with");
    tracker--;
    rightArrow.show();
    tutorialPic.attr("src","stepTwo.gif");
    leftArrow.css("visibility","visible");
  }else if(tracker == 3){
    changeText.text("Message the person to learn more about them and find if they are the catfisher");
    tracker--;
    rightArrow.show();
    tutorialPic.attr("src","stepThree.gif");
    leftArrow.css("visibility","visible");
  }
}
