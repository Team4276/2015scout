$(document).ready(function() {
	
	selectButton('alliance'); //allliance sselector
	selectButton('autoTotes'); //select # of autoTotes
	selectButton('autoTrash');
	selectButton('highestToteStack');
	selectButton('highestToteSpeed');
	selectButton('coop');

	toggleButton('moveForward'); //move forward boolean
	toggleButton('totePickupGround');
	toggleButton('totePickupUpside');
	toggleButton('totePickupChute');
	toggleButton('totePickupLandfill');
	toggleButton('RCPickupUp');
	toggleButton('RCPickupSide');
	toggleButton('RCPickupCentre');
	toggleButton('otherStack');
	toggleButton('highestToteRC');
	toggleButton('highestTotePN');
	toggleButton('humanNoodle');
	toggleButton('humanThrow');
	toggleButton('coopOtherStack');

	incrementControl('goodStacks');
	incrementControl('badStacks');

});


function toggleButton(varName){
	$('.' + varName).click(function(event) {
		$('.' + varName).toggleClass('selected');
		$('#' + varName).prop('checked', !($('#'+varName).prop('checked')));
		/* Act on the event */
	});
}

function selectButton(varName){
	$('.' + varName).click(function(event) {
		/* Act on the event */
		$('.' + varName).removeClass('selected');

		$(this).addClass('selected');
		$('#' + varName).val($(this).text());
	});
}

function incrementControl(varName){
	$('#' + varName + "Plus").click(function(event) {
		/* Act on the event */

		var currentValue = parseInt($("#"+ varName + "Display").text());
		currentValue += 1;

		//console.log(currentValue);

		$("#"+ varName).val(currentValue);
		$("#" + varName + "Display").text(currentValue);

	});

		$('#' + varName + "Minus").click(function(event) {
		/* Act on the event */

		var currentValue = parseInt($("#"+ varName + "Display").text());
		currentValue -= 1;

		//console.log(currentValue);

		$("#"+ varName).val(currentValue);
		$("#" + varName + "Display").text(currentValue);

	});

}

