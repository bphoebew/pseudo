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
    chat.append(`<h2 style = "animation-delay: 4s"> don’t worry, i’m a really famous <br> photographer</h2>`);
    chat.append(`<h1 style = "animation-delay: 6s"> Can I at least see your portfolio? </h1>`);
    chat.append(`<h2 style = "animation-delay: 8s"> yeah, sure! </h2>`);
    chat.append(`<img style = "animation-delay: 10s" class="item animated fadeInRight" src = "stockOne.jpg">`);
    chat.append(`<img style = "animation-delay: 11s" class="item animated fadeInRight" src = "stockTwo.jpg">`);
    chat.append(`<img style = "animation-delay: 12s" class="item animated fadeInRight" src = "stockThree.jpg">`);
    firstButton.text("Why is one of them a stock photo? Are you even a real photographer?");
    twoButton.text("These don’t seem legit.");
    threeButton.text("Looks good, but do you have anymore?");
    fourButton.text("These look amazing!!! ");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1> Why is one of them a stock photo? Are <br>you even a real photographer? </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">of course i am! i took that stock photo! </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i’m a really popular photographer, so <br>it’s really difficult for people to book <br>times for me, but i’m willing to make <br>time for you </h2>`);
  firstButton.text("Why me of all people…?");
  twoButton.text("If you’re so well-known, why don’t you go ask actual models to model for you?");
  threeButton.text("I’m flattered!");
  fourButton.text("Uh okay… ");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1> Why me of all people…? </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">idk, i just really like your style </h2>`);
  chat.append(`<h1 style = "animation-delay: 6s"> So...what kind of coffee do you like? </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s"> I don’t like coffee. It smells too much </h2>`);
  firstButton.text("But it says in your biography that you like coffee shops");
  twoButton.text(" okay...you shouldn’t lie in your biography then…");
  threeButton.text("I like the smell of coffee!");
  fourButton.text("Are you more of a tea person?");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1> But it says in your biography that you <br>like coffee shops </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">oh, haha just for the environment not <br>the actual coffee </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i feel like we could be really good <br>friends! </h2>`);
  firstButton.text("Aren’t you a ‘celebrity?’ Why are you so interested in becoming MY friend?");
  twoButton.text("We haven’t been talking for very long, though…");
  threeButton.text("I’m honored!!!");
  fourButton.text("Really? Omg I’ve never been friends with a celebrity before…");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1> Aren’t you a ‘celebrity?’ Why are you <br>so interested in becoming MY friend? </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">we vibe well, don’t you think? </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> so can we meet up at a coffee shop? <br> I know a really nice one. </h2>`);
  firstButton.text("I never agreed to meet up with you.");
  twoButton.text("You don’t seem very safe.");
  threeButton.text("I’m free whenever!");
  fourButton.text("Let’s do it now!");
  tracker++;
}else if (tracker == 5){
  chat.append(`<h1>I never agreed to meet up with you.</h1>`);
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
    chat.append(`<h1> This is really random… </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> don’t worry, i’m a really famous <br> photographer</h2>`);
    chat.append(`<h1 style = "animation-delay: 6s"> Can I at least see your portfolio? </h1>`);
    chat.append(`<h2 style = "animation-delay: 8s"> yeah, sure! </h2>`);
    chat.append(`<img style = "animation-delay: 10s" class="item animated fadeInRight" src = "stockOne.jpg">`);
    chat.append(`<img style = "animation-delay: 11s" class="item animated fadeInRight" src = "stockTwo.jpg">`);
    chat.append(`<img style = "animation-delay: 12s" class="item animated fadeInRight" src = "stockThree.jpg">`);
    firstButton.text("Why is one of them a stock photo? Are you even a real photographer?");
    twoButton.text("These don’t seem legit.");
    threeButton.text("Looks good, but do you have anymore?");
    fourButton.text("These look amazing!!! ");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1> These don’t seem legit. </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">they are </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i’m a really popular photographer, so <br>it’s really difficult for people to book <br>times for me, but i’m willing to make <br>time for you </h2>`);
  firstButton.text("Why me of all people…?");
  twoButton.text("If you’re so well-known, why don’t you go ask actual models to model for you?");
  threeButton.text("I’m flattered!");
  fourButton.text("Uh okay… ");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1> If you’re so well-known, why don’t you <br>go ask actual models to model for <br>you? </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">i just really like your style </h2>`);
  chat.append(`<h1 style = "animation-delay: 6s"> So...what kind of coffee do you like? </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s"> I don’t like coffee. It smells too much </h2>`);
  firstButton.text("But it says in your biography that you like coffee shops");
  twoButton.text(" okay...you shouldn’t lie in your biography then…");
  threeButton.text("I like the smell of coffee!");
  fourButton.text("Are you more of a tea person?");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1> okay...you shouldn’t lie in your <br>biography then… </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">oh, i like the coffee shops just for the <br>environment not the actual coffee </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i feel like we could be really good <br>friends! </h2>`);
  firstButton.text("Aren’t you a ‘celebrity?’ Why are you so interested in becoming MY friend?");
  twoButton.text("We haven’t been talking for very long, though…");
  threeButton.text("I’m honored!!!");
  fourButton.text("Really? Omg I’ve never been friends with a celebrity before…");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1> We haven’t been talking for very long, <br>though… </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">but i feel like we vibe well together! </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> so can we meet up at a coffee shop? <br> I know a really nice one. </h2>`);
  firstButton.text("I never agreed to meet up with you.");
  twoButton.text("You don’t seem very safe.");
  threeButton.text("I’m free whenever!");
  fourButton.text("Let’s do it now!");
  tracker++;
}else if (tracker == 5){
  chat.append(`<h1>You don’t seem very safe.</h1>`);
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
    chat.append(`<h1> Sure! But can I have your website or <br>something so I can see your portfolio? </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> sorry, i dont have a website...</h2>`);
    chat.append(`<h1 style = "animation-delay: 6s"> Can I at least see your portfolio? </h1>`);
    chat.append(`<h2 style = "animation-delay: 8s"> yeah, sure! </h2>`);
    chat.append(`<img style = "animation-delay: 10s" class="item animated fadeInRight" src = "stockOne.jpg">`);
    chat.append(`<img style = "animation-delay: 11s" class="item animated fadeInRight" src = "stockTwo.jpg">`);
    chat.append(`<img style = "animation-delay: 12s" class="item animated fadeInRight" src = "stockThree.jpg">`);
    firstButton.text("Why is one of them a stock photo? Are you even a real photographer?");
    twoButton.text("These don’t seem legit.");
    threeButton.text("Looks good, but do you have anymore?");
    fourButton.text("These look amazing!!! ");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1> Looks good, but do you have <br>anymore? </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">uhhhh sorry… these are the only ones <br>i have at the moment... </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i’m a really popular photographer, so <br>it’s really difficult for people to book <br>times for me, but i’m willing to make <br>time for you </h2>`);
  firstButton.text("Why me of all people…?");
  twoButton.text("If you’re so well-known, why don’t you go ask actual models to model for you?");
  threeButton.text("I’m flattered!");
  fourButton.text("Uh okay… ");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1> I’m flattered! </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">:D </h2>`);
  chat.append(`<h1 style = "animation-delay: 6s"> So...what kind of coffee do you like? </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s"> I don’t like coffee. It smells too much </h2>`);
  firstButton.text("But it says in your biography that you like coffee shops");
  twoButton.text(" okay...you shouldn’t lie in your biography then…");
  threeButton.text("I like the smell of coffee!");
  fourButton.text("Are you more of a tea person?");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1> I like the smell of coffee! </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">nah, i’m more of a juice person </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i feel like we could be really good <br>friends! </h2>`);
  firstButton.text("Aren’t you a ‘celebrity?’ Why are you so interested in becoming MY friend?");
  twoButton.text("We haven’t been talking for very long, though…");
  threeButton.text("I’m honored!!!");
  fourButton.text("Really? Omg I’ve never been friends with a celebrity before…");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1> I’m honored!!!</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> so can we meet up at a coffee shop? <br> I know a really nice one. </h2>`);
  firstButton.text("I never agreed to meet up with you.");
  twoButton.text("You don’t seem very safe.");
  threeButton.text("I’m free whenever!");
  fourButton.text("Let’s do it now!");
  tracker++;
}else if (tracker == 5){
  chat.append(`<h1>I’m free whenever!</h1>`);
  chat.append(`<h2 style = "animation-delay: 2s"> great! i’ll let you know the time <br>and place. </h2>`);
  chat.append(`<h3> END OF CHAT </h3>`);
        tracker++;
  firstButton.text("");
  twoButton.text("");
  threeButton.text("");
  fourButton.text("");
}
}
function showFour(){
  if (tracker == 0){
    chat.append(`<h1> Of course! Let me know the date and <br>time! </h1>`);
    chat.append(`<h2 style = "animation-delay: 4s"> great! I’ll see what my schedule looks <br>like</h2>`);
    chat.append(`<h1 style = "animation-delay: 6s"> Can I at least see your portfolio? </h1>`);
    chat.append(`<h2 style = "animation-delay: 8s"> yeah, sure! </h2>`);
    chat.append(`<img style = "animation-delay: 10s" class="item animated fadeInRight" src = "stockOne.jpg">`);
    chat.append(`<img style = "animation-delay: 11s" class="item animated fadeInRight" src = "stockTwo.jpg">`);
    chat.append(`<img style = "animation-delay: 12s" class="item animated fadeInRight" src = "stockThree.jpg">`);
    firstButton.text("Why is one of them a stock photo? Are you even a real photographer?");
    twoButton.text("These don’t seem legit.");
    threeButton.text("Looks good, but do you have anymore?");
    fourButton.text("These look amazing!!! ");
    tracker++;
}else if (tracker == 1){
  chat.append(`<h1> These look amazing!!! </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">thank you!!!! </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i’m a really popular photographer, so <br>it’s really difficult for people to book <br>times for me, but i’m willing to make <br>time for you </h2>`);
  firstButton.text("Why me of all people…?");
  twoButton.text("If you’re so well-known, why don’t you go ask actual models to model for you?");
  threeButton.text("I’m flattered!");
  fourButton.text("Uh okay… ");
  tracker++;
}else if (tracker == 2){
  chat.append(`<h1> Uh okay… </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">yeah ahaha no biggie though </h2>`);
  chat.append(`<h1 style = "animation-delay: 6s"> So...what kind of coffee do you like? </h1>`);
  chat.append(`<h2 style = "animation-delay: 8s"> I don’t like coffee. It smells too much </h2>`);
  firstButton.text("But it says in your biography that you like coffee shops");
  twoButton.text(" okay...you shouldn’t lie in your biography then…");
  threeButton.text("I like the smell of coffee!");
  fourButton.text("Are you more of a tea person?");
  tracker++;
}else if (tracker == 3){
  chat.append(`<h1> Are you more of a tea person? </h1>`);
  chat.append(`<h2 style = "animation-delay: 4s">not really, but i do like juices! </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> i feel like we could be really good <br>friends! </h2>`);
  firstButton.text("Aren’t you a ‘celebrity?’ Why are you so interested in becoming MY friend?");
  twoButton.text("We haven’t been talking for very long, though…");
  threeButton.text("I’m honored!!!");
  fourButton.text("Really? Omg I’ve never been friends with a celebrity before…");
  tracker++;
}else if (tracker == 4){
  chat.append(`<h1> Really? Omg I’ve never been friends <br>with a celebrity before…</h1>`);
  chat.append(`<h2 style = "animation-delay: 4s"> don’t worry, i dont have any crazy fans! </h2>`);
  chat.append(`<h2 style = "animation-delay: 6s"> so can we meet up at a coffee shop? <br> I know a really nice one. </h2>`);
  firstButton.text("I never agreed to meet up with you.");
  twoButton.text("You don’t seem very safe.");
  threeButton.text("I’m free whenever!");
  fourButton.text("Let’s do it now!");
  tracker++;
}else if (tracker == 5){
  chat.append(`<h1>Let’s do it now!</h1>`);
  chat.append(`<h2 style = "animation-delay: 2s"> great! i’ll let you know the place. </h2>`);
  chat.append(`<h3> END OF CHAT </h3>`);
        tracker++;
  firstButton.text("");
  twoButton.text("");
  threeButton.text("");
  fourButton.text("");
}
}
