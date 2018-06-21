var wins = 0;
var losses = 0;
var pointsSum = 0;
var randomNumber;

var rubyHiddenNumber;
var sapphireHiddenNumber;
var diamondHiddenNumber;
var emeraldHiddenNumber;


function isGame() {
	// new random number is generated
	randomNumber = Math.floor((Math.random() * 102) + 19);
	$('.random-number').html(randomNumber);


	// if random number equals to sum of points: 
	// wins increases by 1
	// wins displays in span wins
	// string 'You win!' displays in p alert
	 if (randomNumber == pointsSum) {
	 	wins++
	 	$('#wins').html(wins);
	 	$('#alert').html('You win!');
	 }

	 // if random number more than pointsSum:
	 // losses increases by 1
	// losses displays in span losses
	// string 'You lost!' displays in p alert

	  if (randomNumber > pointsSum) {
	 	losses++
	 	$('#losses').html(losses);
	 	$('#alert').html('You lost!');
	 }

}

//by clicking on ruby button
$('#ruby').on ('click', function () {
		//random number associated with this button is generated
		rubyHiddenNumber =  Math.floor((Math.random() * 12) + 1);

		// pointsSum increases by the random number associated with ruby
		pointsSum = pointsSum + rubyHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);
	})

//by clicking on sapphire button
$('#sapphire').on ('click', function () {
		//random number associated with this button is generated
		sapphireHiddenNumber =  Math.floor((Math.random() * 12) + 1);

		// pointsSum increases by the random number associated with sapphire
		pointsSum = pointsSum + sapphireHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);
	})

//by clicking on diamond button
$('#diamond').on ('click', function () {
		//random number associated with this button is generated
		diamondHiddenNumber =  Math.floor((Math.random() * 12) + 1);

		// pointsSum increases by the random number associated with diamond
		pointsSum = pointsSum + diamondHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);
	})

//by clicking on emerald button
$('#emerald').on ('click', function () {
		//random number associated with this button is generated
		emeraldHiddenNumber =  Math.floor((Math.random() * 12) + 1);

		// pointsSum increases by the random number associated with emerald
		pointsSum = pointsSum + emeraldHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);
	})
