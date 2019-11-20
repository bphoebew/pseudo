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
    chat.append(`<h1>New York, loved the weather, but nice <br>to know I am at a new chapter in my <br>life</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">that's great, I want to have that<br> feeling </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Why won’t you tell me where you live?</h2>`);
    firstButton.text("Well I just don’t feel comfortable");
    twoButton.text("Mixed feelings honestly, maybe its because it’ weird of you to insist that.");
    threeButton.text("Alright, I live far far away from you")
    fourButton.text("Well I live around Chicago");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1> Well I just don’t feel comfortable </h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Well I just want to get to know you <br>better</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">Do you have any siblings? </h2>`);
    firstButton.text("IDK");
    twoButton.text("Ya, I have a brother he sometimes brings over her kids to see me");
    threeButton.text("I don’t feel comfortable sharing that");
    fourButton.text("Na, i'm an only child");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1> IDK </h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Come on, why don’t you tell me?????!</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Do you ever want kids? </h2>`);
    firstButton.text("IDK");
    twoButton.text("no (uneasy feeling begins)");
    threeButton.text("Yeah! How about you? :D");
    fourButton.text(" Well it’s time for me to get going (gets triggered)");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> IDK </h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">ya, I think I would</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Can I video chat with you? </h2>`);
    firstButton.text("Umm, not sure if I feel comfortable doing that");
    twoButton.text("Sure, give me 30min to get ready");
    threeButton.text("I cant I don’t feel well enough to do that");
    fourButton.text("Not today, maybe tomorrow");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1>Umm, not sure if I feel comfortable <br> doing that</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> Why, not I want to see your face ;) </h2>`);
    chat.append(`<h3> END OF CHAT </h3>`);
  }
}
function showTwo(){
  if(tracker == 0){
    chat.append(`<h1>I'm from here and I feel like I enjoy <br> living here.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Why won’t you tell me where you live?</h2>`);
    firstButton.text("Well I just don’t feel comfortable");
    twoButton.text("Mixed feelings honestly, maybe its because it’ weird of you to insist that.");
    threeButton.text("Alright, I live far far away from you")
    fourButton.text("Well I live around Chicago");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1>Mixed feelings honestly, maybe its <br>because it’ weird of you to insist that.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> I don’t think its weird I just want to <br>know if you live near me </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">Do you have any siblings?</h2>`);
    firstButton.text("IDK");
    twoButton.text("Ya, I have a brother he sometimes brings over her kids to see me");
    threeButton.text("I don’t feel comfortable sharing that");
    fourButton.text("Na, i'm an only child");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>Ya, I have a brother he sometimes <br>brings over her kids to see me</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> That's adorable ;)</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Do you ever want kids? </h2>`);
    firstButton.text("IDK");
    twoButton.text("no (uneasy feeling begins)");
    threeButton.text("Yeah! How about you? :D");
    fourButton.text(" Well it’s time for me to get going (gets triggered)");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> no (uneasy feeling begins) </h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> I love children ;)</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Can I video chat with you? </h2>`);
    firstButton.text("Umm, not sure if I feel comfortable doing that");
    twoButton.text("Sure, give me 30min to get ready");
    threeButton.text("I cant I don’t feel well enough to do that");
    fourButton.text("Not today, maybe tomorrow");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1>Sure, give me 30min to get ready</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> Great :)) </h2>`);
    chat.append(`<h3> END OF CHAT </h3>`);
  }
}
function showThree(){
  if(tracker == 0){
    chat.append(`<h1>Well I move around, so don’t have an <br>answer to your question</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Oh, so i’m guessing you like traveling</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Why won’t you tell me where you live?</h2>`);
    firstButton.text("Well I just don’t feel comfortable");
    twoButton.text("Mixed feelings honestly, maybe its because it’ weird of you to insist that.");
    threeButton.text("Alright, I live far far away from you")
    fourButton.text("Well I live around Chicago");
    tracker++;
}else if (tracker == 1){
    chat.append(`<h1>Mixed feelings honestly, maybe its <br>because it’s weird of you to insist that.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> I don’t think its weird I just want to <br>know if you live near me </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">Do you have any siblings?</h2>`);
    firstButton.text("IDK");
    twoButton.text("Ya, I have a brother he sometimes brings over her kids to see me");
    threeButton.text("I don’t feel comfortable sharing that");
    fourButton.text("Na, i'm an only child");
    tracker++;
}else if (tracker == 2){
  chat.append(`<h1>I don’t feel comfortable sharing that</h1>`);
  chat.append(`<h2 style = "animation-delay: 2s"> why I just want to know more about <br>you </h2>`);
  chat.append(`<h2 style = "animation-delay: 4s">Do you ever want kids?</h2>`);
  firstButton.text("IDK");
  twoButton.text("no (uneasy feeling begins)");
  threeButton.text("Yeah! How about you? :D");
  fourButton.text(" Well it’s time for me to get going (gets triggered)");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1> Yeah! How about you? :D </h1>`);
  chat.append(`<h1 style = "animation-delay: 2s"> That’s a really creepy question...</h2>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Just curious </h1>`);
  chat.append(`<h2 style = "animation-delay: 6s"> Can I video chat with you? </h2>`);
  firstButton.text("Umm, not sure if I feel comfortable doing that");
  twoButton.text("Sure, give me 30min to get ready");
  threeButton.text("I cant I don’t feel well enough to do that");
  fourButton.text("Not today, maybe tomorrow");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1>I can't I don’t feel well enough to do <br>that</h1>`);
  chat.append(`<h2 style = "animation-delay: 2s"> I'm sure you are beautiful no<br> matter what  </h2>`);
  chat.append(`<h3> END OF CHAT </h3>`);
}
}
function showFour(){
  if(tracker == 0){
    chat.append(`<h1>Oh, don't feel too comfortable giving <br>that information</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> Oh can you please tell me? </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Why won’t you tell me where you live?</h2>`);
    firstButton.text("Well I just don’t feel comfortable");
    twoButton.text("Mixed feelings honestly, maybe its because it’ weird of you to insist that.");
    threeButton.text("Alright, I live far far away from you")
    fourButton.text("Well I live around Chicago");
    tracker++;
}else if (tracker == 1){
    chat.append(`<h1> Well I live around Chicago </h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Thank you for that information :) </h2>`);
    firstButton.text("IDK");
    twoButton.text("Ya, I have a brother he sometimes brings over her kids to see me");
    threeButton.text("I don’t feel comfortable sharing that");
    fourButton.text("Na, i'm an only child");
    tracker++;
}else if (tracker == 2){
  chat.append(`<h1> Na, i'm an only child </h1>`);
  chat.append(`<h2 style = "animation-delay: 2s"> that must suck </h2>`);
  firstButton.text("IDK");
  twoButton.text("no (uneasy feeling begins)");
  threeButton.text("Yeah! How about you? :D");
  fourButton.text(" Well it’s time for me to get going (gets triggered)");
  tracker++;;
}else if (tracker == 3){
  chat.append(`<h1> Well it’s time for me to get going <br>(gets triggered) </h1>`);
  chat.append(`<h2 style = "animation-delay: 2s"> Are you sure you can’t stay any longer?</h2>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Can I video chat with you? </h2>`);
  firstButton.text("Umm, not sure if I feel comfortable doing that");
  twoButton.text("Sure, give me 30min to get ready");
  threeButton.text("I cant I don’t feel well enough to do that");
  fourButton.text("Not today, maybe tomorrow");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1>Not today, maybe tomorrow </h1>`);
  chat.append(`<h2 style = "animation-delay: 2s"> Are you sure we can’t do it tonight? </h2>`);
  chat.append(`<h3> END OF CHAT </h3>`);
}
}
