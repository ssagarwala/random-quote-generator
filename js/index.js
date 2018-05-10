var  quotes = ["The most complete gift of God is a life based on knowledge.",
"The innumerable fools have made the learned very scarce.",
"The learned man understands the ignorant for he was once ignorant for he was once ignorant himself.",
"The ignorant man does not understand the learned for he has never been learned himself.",
"Knowledge gives life to the soul.",
"To respect the learned is to respect God.",
"Knowledge creates fear of God.",
"Practice makes knowledge perfect.",
"To teach is to learn.",
"Honesty is Divine language.",
"To fulfill promises is the highest form of integrity.",
"Truth means conformity of speech with the Divine mode of working.",
"Friendship is impossible with a liar.",
"Misrepresentation spoils narration.",
"Lying spoils news.",
"Enemity is the occupation of fools.",
"One's obedience to God is proportionate to one's wisdom.",
"To fight against one's own desires is highest wisdom.",
"The wise aim at perfection.",
"The foolish aim at wealth.",
"To separate oneself from things of time and to connect oneself with things of eternity is highest wisdom.",
"He is really wise whose actions reflect his words.",
"Humility is the product of knowledge.",
"Self-conceit poisons the mind.",
"Self-conceit impedes progress.",
"Pride mars greatness.",
"Humility is one of the nets spread by real greatness.",
"Boasting issues from small minds."];



$(".getQuote").on("click",function(){ 
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  $("div.quotes").html("<p>\"" +randomQuote+ "\"</p> <i> -Imam Ali Ibn Abi Talib (as)</i>");
 // console.log(randomQuote);
});
$(document).ready(function(){
   var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  $("div.quotes").html("<p>\"" +randomQuote+ "\"</p> <i> -Imam Ali Ibn Abi Talib (as)</i>");
});