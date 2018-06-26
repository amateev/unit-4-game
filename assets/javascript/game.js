
var wins;
var losses;
var pointsSum;
var randomNumber;

var rubyHiddenNumber;
var sapphireHiddenNumber;
var diamondHiddenNumber;
var emeraldHiddenNumber;


function initNewCollectorGame() {
		//first time init 
	    if (wins == undefined) {
	    	wins = 0;
	    }

	    if (losses == undefined) {
	    	losses = 0;
	    }

		// new random number is generated
		randomNumber = Math.floor((Math.random() * 102) + 19);
		$('.random-number').html(randomNumber);
		$('#wins').html(wins);
		$('#losses').html(losses);
		pointsSum = 0;
		$('div#points-sum').html(pointsSum);

		//random number associated with stone buttons is generated
		rubyHiddenNumber =  Math.floor((Math.random() * 12) + 1);
		sapphireHiddenNumber =  Math.floor((Math.random() * 12) + 1);
		diamondHiddenNumber =  Math.floor((Math.random() * 12) + 1);
		emeraldHiddenNumber =  Math.floor((Math.random() * 12) + 1);

		return;
	
}
initNewCollectorGame();


//event handler
// assign event handler on click event of the button ruby
$('#ruby').on ('click', function() {

		// pointsSum increases by the random number associated with ruby
		pointsSum = pointsSum + rubyHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);

		check_game_end_result(pointsSum);
	})
//by clicking on sapphire button
$('#sapphire').on ('click', function() {
		// pointsSum increases by the random number associated with sapphire
		pointsSum = pointsSum + sapphireHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);

		check_game_end_result(pointsSum);
	})

//by clicking on diamond button
$('#diamond').on ('click', function() {
		// pointsSum increases by the random number associated with diamond
		pointsSum = pointsSum + diamondHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);

		check_game_end_result(pointsSum);
	})

//by clicking on emerald button
$('#emerald').on ('click', function() {
		// pointsSum increases by the random number associated with emerald
		pointsSum = pointsSum + emeraldHiddenNumber;

		//number id displayed in points-sum div
		$('#points-sum').html(pointsSum);

		check_game_end_result(pointsSum);
	})

function check_game_end_result(point_Sum) {
	if (point_Sum == randomNumber) {
		wins++
		$('#wins').html(wins);
		$('#alert').html('You win!');
		
		initNewCollectorGame();
		return;
	}

	if (point_Sum > randomNumber) {
	 	losses++
	 	$('#losses').html(losses);
	 	$('#alert').html('You lost!');
	 	
	 	initNewCollectorGame();
	 	return;
	}
}
	
//Game is up

	






