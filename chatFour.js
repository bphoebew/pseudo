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
  chat.append(`<h1>New York, loved the weather,</h1>`);
  chat.append(`<h1 style = "animation-delay: 2s; margin-top: -5px;">but nice to know I am at a new chapter in my life</h1>`)
  chat.append(`<h1>How about you?</h2>`);
  chat.append(`<h2>I’ve been doing good too!</h2>`);
  chat.append(`<h3>Thanks for asking!!!</h3>`);
  chat.append(`<h4>I have a job at Hot Topic</h4>`);
  chat.append(`<h5>It has made me soooo busy lately!</h5>`);
  firstButton.text("Yeah, they suck so much time out of your life!");
  twoButton.text("You should quit");
  threeButton.text("yeah...that’s what having a job means");
  tracker++;
  } else if (tracker == 1){
    chat.append(`<h1 style="color:#d12349;">Yeah, they suck so much time out of your life!</h1>`)
    chat.append(`<h2 style="color:#dae2c9;">RIIIIGHT?!!</h2>`);
    chat.append(`<h3 style="color:#dae2c9;"> I was thinking about getting another cat</h3>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
  }
}
function showTwo(){
  if(tracker == 0){
    chat.append(`<h1>Same as always</h1>`);
    chat.append(`<h2> That’s nice</h2>`);
    chat.append(`<h3>My job at Hot Topic has made me soooo busy lately!</h3>`);
    firstButton.text("Yeah, they suck so much time out of your life!");
    twoButton.text("You should quit");
    threeButton.text("yeah...that’s what having a job means");
    tracker++;
  } else if(tracker == 1){
    chat.append(`<h1>You should quit</h1>`);
    chat.append(`<h2>Oh no, that’s too bad!</h2>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
  }
}
function showThree(){
  if(tracker == 0){
    chat.append(`<h1>Honestly...</h1>`);
    chat.append(`<h1>things have been going pretty badly</h1>`);
    chat.append(`<h2> Oh no, that’s too bad!</h2>`);
    chat.append(`<h3>My job at Hot Topic has made me soooo busy lately!</h3>`);
    firstButton.text("Yeah, they suck so much time out of your life!");
    twoButton.text("You should quit");
    threeButton.text("yeah...that’s what having a job means");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1>yeah...that’s what having a job means</h1>`);
    chat.append(`<h2>and this is coming from someone that doesn’t have one?</h2>`);
    chat.append(`<h3>I was thinking about getting another cat</h3>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
  }
}
function showFour(){
  if(tracker == 0){
    chat.append(`<h1>*leave him on read*</h1>`);
    chat.append(`<h2>uhhhh..I know you just read what I said.</h2>`);
    chat.append(`<h3>Don’t ignore me!</h3>`);
    chat.append(`<h4>My job at Hot Topic has made me soooo busy lately!</h4>`);
    threeButton.text("Hi");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1>*leave him on read*</h1>`);
    chat.append(`<h2>Oh my GOD!  STOP IGNORING ME!!!</h2>`)
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>*leave him on read*</h1>`);
    chat.append(`<h2> I don’t know why I even bother talking to you. </h2>`);
  }
}
