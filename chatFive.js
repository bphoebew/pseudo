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
    chat.append(`<h1>Yep, I’m not so familiar with flowers.</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">No problem. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">What kind of flowers are you looking <br>for? </h2>`);
    firstButton.text("I’m looking for flowers I can plant in my backyard.");
    twoButton.text("Something thats pleasing to the eye.");
    threeButton.text("I dunno.")
    fourButton.text("I don’t need your help.");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1>I’m looking for flowers I can plant in <br>my backyard.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Ohh, interested in making a garden <br>I see. </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">What’s your favorite color?  </h2>`);
    firstButton.text("Red");
    twoButton.text("Yellow");
    threeButton.text("Green")
    fourButton.text("Blue");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>Red.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Ohh... Ambitious huh? </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">Do you like the flower I picked for you? </h2>`);
    chat.append(`<img style = "animation-delay: 6s" class="item animated fadeInRight" src = "redFlo.jpg">`);
    firstButton.text("Yes, thank you very much.");
    twoButton.text("it’s not bad.");
    threeButton.text("Ehh… not really.")
    fourButton.text("No...");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1>Yes, thank you very much.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">No problem! :D </h2>`);
    chat.append(`<h3 style = "animation-delay: 4s">(After purchasing flowers online, <br>you fill out the necessary <br>information)</h3>`);
    chat.append(`<h2 style = "animation-delay: 6s">Can I get your number? </h2>`);
    firstButton.text("Sure its (XXX) XXX-XXXX");
    twoButton.text("I think I’m good.");
    threeButton.text("No thanks.")
    fourButton.text("Nope.");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1>Sure its (XXX) XXX-XXXX</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Cool! I’ll text you when I get new <br>flowers I think you might like.</h2>`);
    chat.append(`<h3> END OF CHAT </h3>`);
    firstButton.text("");
    twoButton.text("");
    threeButton.text("")
    fourButton.text("");
    tracker++;
  }
}
function showTwo(){
  if (tracker == 0){
    chat.append(`<h1>Uhhh, sure?</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">Don’t worry, I’m a florist. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">What kind of flowers are you looking <br>for? </h2>`);
    firstButton.text("I’m looking for flowers I can plant in my backyard.");
    twoButton.text("Something thats pleasing to the eye.");
    threeButton.text("I dunno.")
    fourButton.text("I don’t need your help.");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1>Something thats pleasing to the eye.</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">Alright. No problem.</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">What’s your favorite color?  </h2>`);
    firstButton.text("Red");
    twoButton.text("Yellow");
    threeButton.text("Green")
    fourButton.text("Blue");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>Yellow.</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">All about happiness and sunshine!<br? I use it alot in my drawings. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">Do you like the flower I picked for you? </h2>`);
    chat.append(`<img style = "animation-delay: 6s" class="item animated fadeInRight" src = "yellowFlo.jpg">`);
    firstButton.text("Yes, thank you very much.");
    twoButton.text("it’s not bad.");
    threeButton.text("Ehh… not really.")
    fourButton.text("No...");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> it’s not bad.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Cool </h2>`);
    chat.append(`<h3 style = "animation-delay: 4s">(After purchasing flowers online, <br>you fill out the necessary <br>information)</h3>`);
    chat.append(`<h2 style = "animation-delay: 6s">Can I get your number? </h2>`);
    firstButton.text("Sure its (XXX) XXX-XXXX");
    twoButton.text("I think I’m good.");
    threeButton.text("No thanks.")
    fourButton.text("Nope.");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> I think I’m good.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Please?</h2>`);
    chat.append(`<h3> END OF CHAT </h3>`);
    firstButton.text("");
    twoButton.text("");
    threeButton.text("")
    fourButton.text("");
    tracker++;
  }
}
function showThree(){
  if (tracker == 0){
    chat.append(`<h1>I think im good.</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">Oh c'mon I’ll help you anyways. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">What kind of flowers are you looking <br>for? </h2>`);
    firstButton.text("I’m looking for flowers I can plant in my backyard.");
    twoButton.text("Something thats pleasing to the eye.");
    threeButton.text("I dunno.")
    fourButton.text("I don’t need your help.");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1>I dunno.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Wow… okay… </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">What’s your favorite color?  </h2>`);
    firstButton.text("Red");
    twoButton.text("Yellow");
    threeButton.text("Green")
    fourButton.text("Blue");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>Green.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">A nice balanced color. It reminds me <br>of nature. </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">Do you like the flower I picked for you? </h2>`);
    chat.append(`<img style = "animation-delay: 6s" class="item animated fadeInRight" src = "greenFlo.jpg">`);
    firstButton.text("Yes, thank you very much.");
    twoButton.text("it’s not bad.");
    threeButton.text("Ehh… not really.")
    fourButton.text("No...");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> Ehh… not really.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> I could try to pick another one for you. </h2>`);
    chat.append(`<h3 style = "animation-delay: 4s">(After purchasing flowers online, <br>you fill out the necessary <br>information)</h3>`);
    chat.append(`<h2 style = "animation-delay: 6s">Can I get your number? </h2>`);
    firstButton.text("Sure its (XXX) XXX-XXXX");
    twoButton.text("I think I’m good.");
    threeButton.text("No thanks.")
    fourButton.text("Nope.");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1>No thanks.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Ohh, alright.</h2>`);
    chat.append(`<h3> END OF CHAT </h3>`);
    firstButton.text("");
    twoButton.text("");
    threeButton.text("")
    fourButton.text("");
    tracker++;
  }
}
function showFour(){
  if (tracker == 0){
    chat.append(`<h1>No thanks.</h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">I’m really good at this, let me prove <br>myself. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">What kind of flowers are you looking <br>for? </h2>`);
    firstButton.text("I’m looking for flowers I can plant in my backyard.");
    twoButton.text("Something thats pleasing to the eye.");
    threeButton.text("I dunno.")
    fourButton.text("I don’t need your help.");
    tracker++;
    ignoreTrack++;
  }else if (tracker == 1){
    chat.append(`<h1>I don’t need your help.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">Wow… okay… Don't need to be that <br>mean...</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">What’s your favorite color?  </h2>`);
    firstButton.text("Red");
    twoButton.text("Yellow");
    threeButton.text("Green")
    fourButton.text("Blue");
    tracker++;
    ignoreTrack++;
  }else if (tracker == 2){
    chat.append(`<h1>Blue.</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s"> A fan of the calming color yes? I am! </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">Do you like the flower I picked for you? </h2>`);
    chat.append(`<img style = "animation-delay: 6s" class="item animated fadeInRight" src = "blueFlo.jpg">`);
    firstButton.text("Yes, thank you very much.");
    twoButton.text("it’s not bad.");
    threeButton.text("Ehh… not really.")
    fourButton.text("No...");
    tracker++;
    ignoreTrack++;
  }else if (tracker == 3){
    chat.append(`<h1> No...</h1>`);
    chat.append(`<h2 style = "animation-delay: 2s">  Ohh… Why not?  </h2>`);
    chat.append(`<h3 style = "animation-delay: 4s">(After purchasing flowers online, <br>you fill out the necessary <br>information)</h3>`);
    chat.append(`<h2 style = "animation-delay: 6s">Can I get your number? </h2>`);
    firstButton.text("Sure its (XXX) XXX-XXXX");
    twoButton.text("I think I’m good.");
    threeButton.text("No thanks.")
    fourButton.text("Nope.");
    tracker++;
    ignoreTrack++;
  }else if (tracker == 4){
    if (ignoreTrack == 4){
      chat.append(`<h1>No way!</h1>`);
      chat.append(`<h2 style = "animation-delay: 2s">Geez!</h2>`);
      chat.append(`<h3> END OF CHAT </h3>`);
      firstButton.text("");
      twoButton.text("");
      threeButton.text("")
      fourButton.text("");
      tracker++;
    }else{
      chat.append(`<h1>No way!</h1>`);
      chat.append(`<h2 style = "animation-delay: 2s">Okay...</h2>`);
      chat.append(`<h3> END OF CHAT </h3>`);
      firstButton.text("");
      twoButton.text("");
      threeButton.text("")
      fourButton.text("");
      tracker++;
    }
  }
}
