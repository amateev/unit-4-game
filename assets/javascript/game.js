var wins = 0;
var losses = 0;
var points = 0;
var randomNumber;
var rubyHiddenNumber;
var sapphireHiddenNumber;
var diamondHiddenNumber;

// game starts:
// new random number is generated
randomNumber = Math.floor((Math.random() * 102) + 19);

// new random hidden number is generated for:
// button 1
rubyHiddenNumber =  Math.floor((Math.random() * 12) + 1);

// button 2
sapphireHiddenNumber =  Math.floor((Math.random() * 12) + 1);
// button 3
diamondHiddenNumber =  Math.floor((Math.random() * 12) + 1);
// button 4
emeraldHiddenNumber =  Math.floor((Math.random() * 12) + 1);
// points summary = 0
// if clicking any button a random hidden number is added to the points summary
// if random number = points summary, win +, alert 'you win' start, new game 
// if random number > points summary, losses +, alert 'you lost', start new game
