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
    chat.append(`<h1> I’ve been doing pretty good, how <br>about you? </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s">  I’ve been doing good too!  Thanks for <br>asking!!!</h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> My job at Hot Topic has made me <br>soooo busy lately!</h2>`);
    firstButton.text("Yeah, they suck so much time out of your life!");
    twoButton.text("You should quit");
    threeButton.text("yeah...that’s what having a job means.");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1> Yeah, they suck so much time out of <br>your life! </h1>`);
    chat.append(`<h2 style = "animation-delay: 3s">  RIIIIGHT?!!</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I was thinking about getting another <br>cat</h2>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>You definitely should, the one you <br>have right now is so cute! </h1>`);
    chat.append(`<h2> You’re right! I’ll go look on craigslist </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> So I was in Japan a couple of weeks <br>ago and it was AMAZING.  We should <br>totally go together sometime!</h2>`);
    firstButton.text("Sure, sounds fun!");
    twoButton.text("Maybe one day");
    threeButton.text("Yeah, that’s a no from me.");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1>  Sure, sounds fun! </h1>`);
    chat.append(`<h2> We’re definitely gonna go one day!</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">I was just at McDonalds and these <br>stupid workers gave me Coke instead <br>of Pepsi. </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> Those workers are idiots if they can’t <br>even get that simple order right. </h1>`);
    chat.append(`<h2> PREACH </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("I loved the Song of Ice and Fire book series");
    twoButton.text("Sorry, I don’t read much");
    threeButton.text("Diary of a Wimpy Kid");
    tracker++;
  } else if (tracker == 5){
    chat.append(`<h1> I loved the Song of Ice and Fire book series </h1>`);
    chat.append(`<h2>Thanks!  I’ll make sure to put it on <br>the list. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> Have you heard of the Jabbawockeez? </h2>`);
    firstButton.text("I LOVE the Jabbawockeez!  I was watching videos of them last night");
    twoButton.text(" I haven’t, but I’ll make sure to check them out.");
    threeButton.text("Nope, I’m not really that interested in dance");
    tracker++;
  }else if (tracker == 6){
    chat.append(`<h1> I LOVE the Jabbawockeez! I was <br>watching videos of them last night </h1>`);
    chat.append(`<h2> FINALLY SOMEONE ELSE WHO <br>KNOWS THEM!!! </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">Anyways I was thinking about <br>meeting up. Maybe we <br>could go skydiving? </h2>`);
    firstButton.text("Sure, I’m totally down");
    twoButton.text("I don’t know");
    threeButton.text("Sorry, I wouldn’t feel comfortable meeting up with you");
    tracker++;
  }else if (tracker == 7){
    chat.append(`<h1> Sure, I’m totally down </h1>`);
    chat.append(`<h2>Great!  I’ll text you later <br>about the details!!</h2>`);
    chat.append(`<h3> END OF CHAT </h3>`);
    tracker++;
  }
}
function showTwo(){
  if (tracker == 0){
    chat.append(`<h1> Same as always </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> That's nice</h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> My job at Hot Topic has made me <br>soooo busy lately!</h2>`);
    firstButton.text("Yeah, they suck so much time out of your life!");
    twoButton.text("You should quit");
    threeButton.text("yeah...that’s what having a job means.");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1> You should quit </h1>`);
    chat.append(`<h2 style = "animation-delay: 3s"> I wish I could :(</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I was thinking about getting another <br>cat</h2>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>It's your choice </h1>`);
    chat.append(`<h2> I'll think about it some more </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> So I was in Japan a couple of weeks <br>ago and it was AMAZING.  We should <br>totally go together sometime!</h2>`);
    firstButton.text("Sure, sounds fun!");
    twoButton.text("Maybe one day");
    threeButton.text("Yeah, that’s a no from me.");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> Maybe one day </h1>`);
    chat.append(`<h2> Would be fun!</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">I was just at McDonalds and these <br>stupid workers gave me Coke instead <br>of Pepsi. </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> That’s too bad </h1>`);
    chat.append(`<h2> I HATE when this happens. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("I loved the Song of Ice and Fire book series");
    twoButton.text("Sorry, I don’t read much");
    threeButton.text("Diary of a Wimpy Kid");
    tracker++;
  }else if (tracker == 5){
  chat.append(`<h1> Sorry, I don’t read much </h1>`);
  chat.append(`<h2>That’s perfectly okay! </h2>`);
  chat.append(`<h2 style = "animation-delay: 5s"> Have you heard of the Jabbawockeez? </h2>`);
  firstButton.text("I LOVE the Jabbawockeez!  I was watching videos of them last night");
  twoButton.text(" I haven’t, but I’ll make sure to check them out.");
  threeButton.text("Nope, I’m not really that interested in dance");
  tracker++;
}else if (tracker == 6){
  chat.append(`<h1> I haven’t, but I’ll <br>make sure to check them out. </h1>`);
  chat.append(`<h2> Tell me when you do! </h2>`);
  chat.append(`<h2 style = "animation-delay: 5s">Anyways I was thinking about meeting <br>up. Maybe we could go skydiving? </h2>`);
  firstButton.text("Sure, I’m totally down");
  twoButton.text("I don’t know");
  threeButton.text("Sorry, I wouldn’t feel comfortable meeting up with you");
  tracker++;
}else if (tracker == 7){
  chat.append(`<h1> I don’t know </h1>`);
  chat.append(`<h2>Alright, tell me when you decide!</h2>`);
  chat.append(`<h3> END OF CHAT </h3>`);
      tracker++;
}
}
function showThree(){
  if (tracker == 0){
    chat.append(`<h1> Honestly, things have been going <br>pretty badly </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Oh no, that’s too bad!</h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> My job at Hot Topic has made me <br>soooo busy lately!</h2>`);
    firstButton.text("Yeah, they suck so much time out of your life!");
    twoButton.text("You should quit");
    threeButton.text("yeah...that’s what having a job means.");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1> yeah...that’s what having a job means. </h1>`);
    chat.append(`<h2 style = "animation-delay: 3s"> and this is coming from someone that <br>doesn’t have one?</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I was thinking about getting another <br>cat</h2>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1>I don't know, that's a lot of work </h1>`);
    chat.append(`<h2> mmm I think I could handle it </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s"> So I was in Japan a couple of weeks <br>ago and it was AMAZING.  We should <br>totally go together sometime!</h2>`);
    firstButton.text("Sure, sounds fun!");
    twoButton.text("Maybe one day");
    threeButton.text("Yeah, that’s a no from me.");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> Yeah, that’s a no from me. </h1>`);
    chat.append(`<h2> okay, you don’t have to be a dick <br>about it :/</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">I was just at McDonalds and these <br>stupid workers gave me Coke instead <br>of Pepsi. </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> It’s not that big of a deal, <br> stop being a drama queen. </h1>`);
    chat.append(`<h2> OKAY I GUESS YOU WANT TO RUIN <br>MY DAY EVEN MORE! </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("I loved the Song of Ice and Fire book series");
    twoButton.text("Sorry, I don’t read much");
    threeButton.text("Diary of a Wimpy Kid");
    tracker++;
  }else if (tracker == 5){
    chat.append(`<h1>  Diary of a Wimpy Kid </h1>`);
    chat.append(`<h2>...seriously? </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> Have you heard of the Jabbawockeez? </h2>`);
    firstButton.text("I LOVE the Jabbawockeez!  I was watching videos of them last night");
    twoButton.text(" I haven’t, but I’ll make sure to check them out.");
    threeButton.text("Nope, I’m not really that interested in dance");
    tracker++;
  }else if (tracker == 6){
    chat.append(`<h1> Nope, I’m not really that interested in dance </h1>`);
    chat.append(`<h2> I guess it’s not for everyone </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s">Anyways I was thinking about meeting <br>up. Maybe we could go skydiving? </h2>`);
    firstButton.text("Sure, I’m totally down");
    twoButton.text("I don’t know");
    threeButton.text("Sorry, I wouldn’t feel comfortable meeting up with you");
    tracker++;
  }else if (tracker == 7){
    chat.append(`<h1> Sorry, I wouldn’t feel comfortable <br>meeting up with you</h1>`);
    chat.append(`<h2> ok... </h2;>`);
    chat.append(`<h3> END OF CHAT </h3>`);
        tracker++;
  }
}

function showFour(){
  if (tracker == 0){
    tracker++;
    ignoreTrack++;
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> uhhhh...I know you just read what I <br>said.  Don’t ignore me!</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> My job at Hot Topic has made me <br>soooo busy lately!</h2>`);
    firstButton.text("Yeah, they suck so much time out of your life!");
    twoButton.text("You should quit");
    threeButton.text("yeah...that’s what having a job means.");
  } else if (tracker == 1){
    if (ignoreTrack == 0){
    tracker++;
    ignoreTrack++;
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> uhhhh...I know you just read what I <br>said.  Don’t ignore me!</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I was thinking about getting another <br>cat</h2>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
  } else if (ignoreTrack == 1){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> Oh my GOD!  STOP IGNORING ME!!! </h2>`)
    chat.append(`<h2 style = "animation-delay: 5s"> I was thinking about getting another <br>cat</h2>`);
    firstButton.text("You definitely should, the one you have right now is so cute!");
    twoButton.text("It’s your choice");
    threeButton.text("I don’t know, that’s a lot of work.");
    tracker++;
    ignoreTrack++;
  }
}else if (tracker == 2){
  if (ignoreTrack == 0){
  chat.append(`<h1> *leaves him on read*</h1>`);
  chat.append(`<h2> uhhhh...I know you just read what I <br>said.  Don’t ignore me!</h2>`);
  chat.append(`<h2 style = "animation-delay: 4s"> So I was in Japan a couple of weeks <br>ago and it was AMAZING.  We should <br>totally go together sometime!</h2>`);
  firstButton.text("Sure, sounds fun!");
  twoButton.text("Maybe one day");
  threeButton.text("Yeah, that’s a no from me.");
  tracker++;
    ignoreTrack++;
} else if (ignoreTrack == 1){
  chat.append(`<h1> *leaves him on read*</h1>`);
  chat.append(`<h2> Oh my GOD!  STOP IGNORING ME!!! </h2>`);
  chat.append(`<h2 style = "animation-delay: 4s"> So I was in Japan a couple of weeks <br>ago and it was AMAZING.  We should <br>totally go together sometime!</h2>`);
  firstButton.text("Sure, sounds fun!");
  twoButton.text("Maybe one day");
  threeButton.text("Yeah, that’s a no from me.");
  tracker++;
  ignoreTrack++;
}else if (ignoreTrack == 2){
  chat.append(`<h1> *leaves him on read*</h1>`);
  chat.append(`<h2> I don’t know why I even bother talking to you. </h2>`);
  chat.append(`<h2 style = "animation-delay: 4s"> So I was in Japan a couple of weeks <br>ago and it was AMAZING.  We should <br>totally go together sometime!</h2>`);
  firstButton.text("Sure, sounds fun!");
  twoButton.text("Maybe one day");
  threeButton.text("Yeah, that’s a no from me.");
  tracker++;
  ignoreTrack++;
}
}else if (tracker == 3){
  if(ignoreTrack == 0){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> uhhhh...I know you just read what I <br>said.  Don’t ignore me!</h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">I was just at McDonalds and these <br>stupid workers gave me Coke instead <br>of Pepsi. </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
    ignoreTrack++;
  }else if (ignoreTrack == 1){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> Oh my GOD!  STOP IGNORING ME!!! </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">I was just at McDonalds and these <br>stupid workers gave me Coke instead <br>of Pepsi. </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
        ignoreTrack++;
  }else if (ignoreTrack == 2){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> I don’t know why I even bother talking to you. </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">I was just at McDonalds and these <br>stupid workers gave me Coke instead <br>of Pepsi. </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
        ignoreTrack++;
  }else if (ignoreTrack == 3){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> guess you’re not interested then. </h2>`);
    chat.append(`<h2 style = "animation-delay: 4s">I was just at McDonalds and these <br>stupid workers gave me Coke instead <br>of Pepsi. </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
    ignoreTrack++;
  }
}else if (tracker == 4){
  if(ignoreTrack == 0){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> uhhhh...I know you just read what I <br>said.  Don’t ignore me!</h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("Those workers are idiots if they can’t even get that simple order right.");
    twoButton.text("That’s too bad");
    threeButton.text("It’s not that big of a deal, stop being a drama queen.");
    tracker++;
    ignoreTrack++;
  }else if (ignoreTrack == 1){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> Oh my GOD!  STOP IGNORING ME!!! </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("I loved the Song of Ice and Fire book series");
    twoButton.text("Sorry, I don’t read much");
    threeButton.text("Diary of a Wimpy Kid");
    tracker++;
        ignoreTrack++;
  }else if (ignoreTrack == 2){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> I don’t know why I even bother talking to you. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("I loved the Song of Ice and Fire book series");
    twoButton.text("Sorry, I don’t read much");
    threeButton.text("Diary of a Wimpy Kid");
    tracker++;
        ignoreTrack++;
  }else if (ignoreTrack == 3){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> guess you’re not interested then. </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("I loved the Song of Ice and Fire book series");
    twoButton.text("Sorry, I don’t read much");
    threeButton.text("Diary of a Wimpy Kid");
    tracker++;
    ignoreTrack++;
  }else if (ignoreTrack == 4){
    chat.append(`<h1> *leaves him on read*</h1>`);
    chat.append(`<h2> Wow, you really just don’t care about me at all!!! </h2>`);
    chat.append(`<h2 style = "animation-delay: 5s"> I’m always looking for new books to <br>read, any suggestions? </h2>`);
    firstButton.text("I loved the Song of Ice and Fire book series");
    twoButton.text("Sorry, I don’t read much");
    threeButton.text("Diary of a Wimpy Kid");
    tracker++;
    ignoreTrack++;
  }
}else if (tracker == 5){
      chat.append(`<h1> *leaves him on read*</h1>`);
  chat.append(`<h2>Guess I’ll find one myself then.</h2>`);
  chat.append(`<h2 style = "animation-delay: 5s"> Have you heard of the Jabbawockeez? </h2>`);
  firstButton.text("I LOVE the Jabbawockeez!  I was watching videos of them last night");
  twoButton.text(" I haven’t, but I’ll make sure to check them out.");
  threeButton.text("Nope, I’m not really that interested in dance");
  tracker++;
  ignoreTrack++;
}else if (tracker == 6){
  chat.append(`<h1> *leaves him on read*</h1>`);
  chat.append(`<h2>k.</h2>`);
  chat.append(`<h2 style = "animation-delay: 5s">Anyways I was thinking about meeting <br>up. Maybe we could go skydiving? </h2>`);
  firstButton.text("Sure, I’m totally down");
  twoButton.text("I don’t know");
  threeButton.text("Sorry, I wouldn’t feel comfortable meeting up with you");
  tracker++;
  ignoreTrack++;
}else if(tracker == 7){
  chat.append(`<h1> *leaves him on read*</h1>`);
  chat.append(`<h2>well okay then. bye</h2>`);
  chat.append(`<h3>END OF CHAT</h3>`);
      tracker++;
}
}
