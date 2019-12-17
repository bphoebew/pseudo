var firstButton = $(".answerOne");
var twoButton = $(".answerTwo");
var threeButton = $(".answerThree");
var fourButton = $(".answerFour");
var chat = $(".chat");
var tracker = 0;
var ignoreTrack = 0;

firstButton.on("click", showOne);
twoButton.on("click", showTwo);
threeButton.on("click", showThree);
fourButton.on("click", showFour);

function showOne(){
  if (tracker == 0){
    chat.append(`<h1>????</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s"> Sorey, i meant wassup* </h1>`);
    chat.append(`<h2 style = "animation-delay: 6s">you interetsed in a personal training <br>sesion with me.? Im tryning to start a <br>gym but i have no memnbers lol</h2>`);
    firstButton.text("Sorry, I don't like gyms.");
    twoButton.text("I don't know you, so no.");
    threeButton.text("Yeah! That sounds awesome!");
    fourButton.text("Sounds interesting.");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1>Sorry, I don't like gyms.</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> What!!!??? You don't even go to take <br>those gym miror pics?? I have a bunch </h1>`);
  chat.append(`<h2 style = "animation-delay: 6s">EY WANNA SEE MY GYM PIC i'll only <br>sned u one but i took like 100 this <br>week im so ho</h2>`);
  firstButton.text("Not interested.");
  twoButton.text("Sure, why not?");
  threeButton.text("Omg no way!!! Send!!!");
  fourButton.text("Uh……no thanks…");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1>Not interested.</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Too bad im sending aniway </h1>`);
  chat.append(`<img style = "animation-delay: 6s" class="item animated fadeInRight" src = "naxPic.jpeg">`);
  chat.append(`<h2 style = "animation-delay: 8s">did u see that movie thqt came out <br>the other day …..it was so good it had <br>a bunhc of explosions and motorcicles.</h2>`);
  firstButton.text("Not interested in that kind of stuff.");
  twoButton.text("No, I didn't see it yet.");
  threeButton.text("Sounds bad");
  fourButton.text("OMG YES I LOVE IT WHEN THE SCREEN MAKES THE BOOM BOOM CRASH SOUNDS");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1>Not interested in that kind of stuff.</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Laaaameeee </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s">You're really wierd i'm going to stop <br>talking to you now also my time is very <br> precoius and im cooler than you and i <br>have a million texts to respind to <br>because im so popular bye</h2>`);
  firstButton.text("That's the longest run on sentence I've ever seen");
  twoButton.text("bye…..?");
  threeButton.text("Well I have a million and one texts to respond to");
  fourButton.text("Good riddance.");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1>That's the longest run on sentence <br>I've ever heard</h1>`);
  chat.append(`<h3> END OF CHAT </h3>`);
  firstButton.text("");
  twoButton.text("");
  threeButton.text("");
  fourButton.text("");
  tracker++;
}
}
function showTwo(){
  if (tracker == 0){
      chat.append(`<h1>Uh, hi?</h1>`);
      chat.append(`<h2 style = "animation-delay: 2s">you interetsed in a personal training <br>sesion with me.? Im tryning to start a <br>gym but i have no memnbers lol</h2>`);
    firstButton.text("Sorry, I don't like gyms.");
    twoButton.text("I don't know you, so no.");
    threeButton.text("Yeah! That sounds awesome!");
    fourButton.text("Sounds interesting.");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1>I don't know you, so no.</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Awhhhhhh meanie. Ur just jealius you <br>dont have pecs like me </h1>`);
  chat.append(`<h2 style = "animation-delay: 6s">EY WANNA SEE MY GYM PIC i'll only <br>sned u one but i took like 100 this <br>week im so ho</h2>`);
  firstButton.text("Not interested.");
  twoButton.text("Sure, why not?");
  threeButton.text("Omg no way!!! Send!!!");
  fourButton.text("Uh……no thanks…");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1>Sure, why not?</h1>`);
  chat.append(`<img style = "animation-delay: 2s" class="item animated fadeInRight" src = "naxPic.jpeg">`);
  chat.append(`<h2 style = "animation-delay: 4s">did u see that movie thqt came out <br>the other day …..it was so good it had <br>a bunhc of explosions and motorcicles.</h2>`);
  firstButton.text("Not interested in that kind of stuff.");
  twoButton.text("No, I didn't see it yet.");
  threeButton.text("Sounds bad");
  fourButton.text("OMG YES I LOVE IT WHEN THE SCREEN MAKES THE BOOM BOOM CRASH SOUNDS");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1>No, I didn't see it yet.</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> R u living under a rock? Lame </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s">You're really wierd i'm going to stop <br>talking to you now also my time is very <br> precoius and im cooler than you and i <br>have a million texts to respind to <br>because im so popular bye</h2>`);
  firstButton.text("That's the longest run on sentence I've ever heard");
  twoButton.text("bye…..?");
  threeButton.text("Well I have a million and one texts to respond to");
  fourButton.text("Good riddance.");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1>bye…..?</h1>`);
  chat.append(`<h3> END OF CHAT </h3>`);
  firstButton.text("");
  twoButton.text("");
  threeButton.text("");
  fourButton.text("");
  tracker++;
}
}
function showThree(){
  if (tracker == 0){
    chat.append(`<h1>What does "wassyp" mean?</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">Sorey, i meant wassup*</h2>`);
    chat.append(`<h2 style = "animation-delay: 6s">you interetsed in a personal training <br>sesion with me.? Im tryning to start a <br>gym but i have no memnbers lol</h2>`);
    firstButton.text("Sorry, I don't like gyms.");
    twoButton.text("I don't know you, so no.");
    threeButton.text("Yeah! That sounds awesome!");
    fourButton.text("Sounds interesting.");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1>Yeah! That sounds awesome!</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> I sound awesime or gettin me as a <br>perosnal trainer sounds awesome? <br>Win win </h1>`);
  chat.append(`<h2 style = "animation-delay: 6s">EY WANNA SEE MY GYM PIC i'll only <br>sned u one but i took like 100 this <br>week im so ho</h2>`);
  firstButton.text("Not interested.");
  twoButton.text("Sure, why not?");
  threeButton.text("Omg no way!!! Send!!!");
  fourButton.text("Uh……no thanks…");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1>Omg no way!!! Send!!!</h1>`);
  chat.append(`<img style = "animation-delay: 4s" class="item animated fadeInRight" src = "naxPic.jpeg">`);
  chat.append(`<h2 style = "animation-delay: 8s">did u see that movie thqt came out <br>the other day …..it was so good it had <br>a bunhc of explosions and motorcicles.</h2>`);
  firstButton.text("Not interested in that kind of stuff.");
  twoButton.text("No, I didn't see it yet.");
  threeButton.text("Sounds bad");
  fourButton.text("OMG YES I LOVE IT WHEN THE SCREEN MAKES THE BOOM BOOM CRASH SOUNDS");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1>Sounds bad</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Ur just jealous because you wil never <br>be as good as that movie </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s">You're really wierd i'm going to stop <br>talking to you now also my time is very <br> precoius and im cooler than you and i <br>have a million texts to respind to <br>because im so popular bye</h2>`);
  firstButton.text("That's the longest run on sentence I've ever heard");
  twoButton.text("bye…..?");
  threeButton.text("Well I have a million and one texts to respond to");
  fourButton.text("Good riddance.");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1>Well I have a million and one texts to <br>respond to</h1>`);
  chat.append(`<h2 style = "animation-delay: 3s">WELL I HAVE A MILLION AND THREE <br>THOUSAND. BYE LOSER</h2>`);
  chat.append(`<h3> END OF CHAT </h3>`);
  firstButton.text("");
  twoButton.text("");
  threeButton.text("");
  fourButton.text("");
  tracker++;
}
}
function showFour(){
  if (tracker == 0){
    chat.append(`<h1>WAssYp</h1>`);
    chat.append(`<h2 style = "animation-delay: 6s">you interetsed in a personal training <br>sesion with me.? Im tryning to start a <br>gym but i have no memnbers lol</h2>`);
    firstButton.text("Sorry, I don't like gyms.");
    twoButton.text("I don't know you, so no.");
    threeButton.text("Yeah! That sounds awesome!");
    fourButton.text("Sounds interesting.");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1>Sounds interesting.</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Interested in the gym or in me ;) jk lol </h1>`);
  chat.append(`<h2 style = "animation-delay: 6s">EY WANNA SEE MY GYM PIC i'll only <br>sned u one but i took like 100 this <br>week im so ho</h2>`);
  firstButton.text("Not interested.");
  twoButton.text("Sure, why not?");
  threeButton.text("Omg no way!!! Send!!!");
  fourButton.text("Uh……no thanks…");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1>Uh……no thanks…</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> Too bad im sending aniway </h1>`);
    chat.append(`<img style = "animation-delay: 6s" class="item animated fadeInRight" src = "naxPic.jpeg">`);
  chat.append(`<h2 style = "animation-delay: 8s">did u see that movie thqt came out <br>the other day …..it was so good it had <br>a bunhc of explosions and motorcicles.</h2>`);
  firstButton.text("Not interested in that kind of stuff.");
  twoButton.text("No, I didn't see it yet.");
  threeButton.text("Sounds bad");
  fourButton.text("OMG YES I LOVE IT WHEN THE SCREEN MAKES THE BOOM BOOM CRASH SOUNDS");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1>OMG YES I LOVE IT WHEN THE <br>SCREEN MAKES THE BOOM BOOM <br>CRASH SOUNDS</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">PEW POW CRRR VROOM VROOM <br>KERPLASH </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s">You're really wierd i'm going to stop <br>talking to you now also my time is very <br> precoius and im cooler than you and i <br>have a million texts to respind to <br>because im so popular bye</h2>`);
  firstButton.text("That's the longest run on sentence I've ever heard");
  twoButton.text("bye…..?");
  threeButton.text("Well I have a million and one texts to respond to");
  fourButton.text("Good riddance.");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1>Good riddance.</h1>`);
  chat.append(`<h2 style = "animation-delay: 3s">"Riddance" isnt a real word stop <br>making up phrases bye loser</h2>`);
  chat.append(`<h3> END OF CHAT </h3>`);
  firstButton.text("");
  twoButton.text("");
  threeButton.text("");
  fourButton.text("");
  tracker++;
}
}
