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
    chat.append(`<h1> California </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> me too! </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> So I just had an audition, I really <br>hope it went well </h3>`);
    firstButton.text("Good luck!");
    twoButton.text("I’m sure you did amazing");
    threeButton.text("Are you even a good actor?");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1> Good luck! </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Thanks! </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I just finished watching Hunter x <br> Hunter, do you have any other anime <br>recommendations? </h3>`);
    firstButton.text("Full Metal Brotherhood Alchemist");
    twoButton.text("Avatar the Last Airbender");
    threeButton.text("Spongebob");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1> Full Metal Brotherhood Alchemist </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Thanks!  I’ll check it out :) </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I was walking in the park earlier and I <br> got chased around by a goose! </h3>`);
    firstButton.text("Oh my god, that’s terrible!");
    twoButton.text("Geese can be scary");
    threeButton.text("You’re kinda a coward, aren’t you.");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> Oh my god, that’s terrible! </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> It was traumatizing </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I feel like no one goes to the theaters <br>to see actual films nowadays, they just <br>go for big releases like Marvel movies. </h3>`);
    firstButton.text("I totally agree");
    twoButton.text("It just takes so much time and money");
    threeButton.text("Probably cause other movies are boring");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> I totally agree </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> It’s so sad that no one else can see <br>this </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I just cooked up some steak and it’s <br> way too much for me to finish on my <br> own. You wanna come over and help <br>me out?</h3>`);
    firstButton.text("Sure! What time and where?");
    twoButton.text("I already ate, but thanks for asking");
    threeButton.text("Nah, I don’t know you like that");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 5){
    chat.append(`<h1> Sure! What time and where? </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> I’ll text you the details later! Looking <br>forward to it :) </h2>`);
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
    chat.append(`<h1> Earth </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> haha </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> So I just had an audition, I really <br>hope it went well </h3>`);
    firstButton.text("Good luck!");
    twoButton.text("I’m sure you did amazing");
    threeButton.text("Are you even a good actor?");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1> I’m sure you did amazing </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Hopefully! </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I just finished watching Hunter x <br> Hunter, do you have any other anime <br>recommendations? </h3>`);
    firstButton.text("Full Metal Brotherhood Alchemist");
    twoButton.text("Avatar the Last Airbender");
    threeButton.text("Spongebob");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1> Avatar the Last Airbender </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> I’m not sure if that’s an anime, but <br>thanks! </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I was walking in the park earlier and I <br> got chased around by a goose! </h3>`);
    firstButton.text("Oh my god, that’s terrible!");
    twoButton.text("Geese can be scary");
    threeButton.text("You’re kinda a coward, aren’t you.");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> Geese can be scary </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> It was more than just scary  </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I feel like no one goes to the theaters <br>to see actual films nowadays, they just <br>go for big releases like Marvel movies. </h3>`);
    firstButton.text("I totally agree");
    twoButton.text("It just takes so much time and money");
    threeButton.text("Probably cause other movies are boring");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> It just takes so much time and money </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Yeah, you might be right</h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I just cooked up some steak and it’s <br> way too much for me to finish on my <br> own. You wanna come over and help <br>me out?</h3>`);
    firstButton.text("Sure! What time and where?");
    twoButton.text("I already ate, but thanks for asking");
    threeButton.text("Nah, I don’t know you like that");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 5){
    chat.append(`<h1> I already ate, but thanks for asking </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> aww, that’s too bad </h2>`);
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
    chat.append(`<h1> That’s kinda creepy, not gonna lie </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> I just wanted to know more about you... </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> So I just had an audition, I really <br> hope it went well </h3>`);
    firstButton.text("Good luck!");
    twoButton.text("I’m sure you did amazing");
    threeButton.text("Are you even a good actor?");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 1){
    chat.append(`<h1> Are you even a good actor? </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> uhhh, yeah. </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I just finished watching Hunter x <br> Hunter, do you have any other anime <br>recommendations? </h3>`);
    firstButton.text("Full Metal Brotherhood Alchemist");
    twoButton.text("Avatar the Last Airbender");
    threeButton.text("Spongebob");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 2){
    chat.append(`<h1> Spongebob </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> uh, thanks. </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I was walking in the park earlier and I <br> got chased around by a goose! </h3>`);
    firstButton.text("Oh my god, that’s terrible!");
    twoButton.text("Geese can be scary");
    threeButton.text("You’re kinda a coward, aren’t you.");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> Geese can be scary </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> It was more than just scary  </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I feel like no one goes to the theaters <br>to see actual films nowadays, they just <br>go for big releases like Marvel movies. </h3>`);
    firstButton.text("I totally agree");
    twoButton.text("It just takes so much time and money");
    threeButton.text("Probably cause other movies are boring");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> Probably cause other movies are <br>boring </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> they are NOT</h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I just cooked up some steak and it’s <br> way too much for me to finish on my <br> own. You wanna come over and help <br>me out?</h3>`);
    firstButton.text("Sure! What time and where?");
    twoButton.text("I already ate, but thanks for asking");
    threeButton.text("Nah, I don’t know you like that");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 5){
    chat.append(`<h1> Nah, I don’t know you like that </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> you could’ve just said no thanks... </h2>`);
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
    chat.append(`<h1> *no response* </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> Hello?? </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> So I just had an audition, I really <br>hope it went well </h3>`);
    firstButton.text("Good luck!");
    twoButton.text("I’m sure you did amazing");
    threeButton.text("Are you even a good actor?");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 1){
      chat.append(`<h1> *no response* </h1>`);
      chat.append(`<h2 style = "animation-delay: 4s"> i love being ignored :) </h2>`);
      chat.append(`<h2 style = "animation-delay: 6s"> I just finished watching Hunter x <br> Hunter, do you have any other anime <br>recommendations? </h3>`);
      firstButton.text("Full Metal Brotherhood Alchemist");
      twoButton.text("Avatar the Last Airbender");
      threeButton.text("Spongebob");
      fourButton.text("*no response*");
      tracker++;
  }else if (tracker == 2){
    chat.append(`<h1> *no response* </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> I guess I’ll go look some up myself  </h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I was walking in the park earlier and I <br> got chased around by a goose! </h3>`);
    firstButton.text("Oh my god, that’s terrible!");
    twoButton.text("Geese can be scary");
    threeButton.text("You’re kinda a coward, aren’t you.");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 3){
    chat.append(`<h1> *no response* </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> I was running for my life and you don’t <br>care :( </h3>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I feel like no one goes to the theaters <br>to see actual films nowadays, they just <br>go for big releases like Marvel movies. </h3>`);
    firstButton.text("I totally agree");
    twoButton.text("It just takes so much time and money");
    threeButton.text("Probably cause other movies are boring");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 4){
    chat.append(`<h1> *no response* </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s">I LOVE being ignored</h2>`);
    chat.append(`<h2 style = "animation-delay: 6s"> I just cooked up some steak and it’s <br> way too much for me to finish on my <br> own. You wanna come over and help <br>me out?</h3>`);
    firstButton.text("Sure! What time and where?");
    twoButton.text("I already ate, but thanks for asking");
    threeButton.text("Nah, I don’t know you like that");
    fourButton.text("*no response*");
    tracker++;
  }else if (tracker == 5){
    chat.append(`<h1>  *no response* </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> okay then.. </h2>`);
    chat.append(`<h3> END OF CHAT </h3>`);
    firstButton.text("");
    twoButton.text("");
    threeButton.text("");
    fourButton.text("");
    tracker++;
  }
}
