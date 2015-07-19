$(document).ready(function() {
	'use strict';

	var MAX_COUNT = 140;
	//Initially, the Tweet button 
	//and the character count button should be hidden (CSS).
	$('#tweet-controls').hide();
	//we can save any element in a variable
	var tweetText = $('#tweet-content > .tweet-compose');
	//then we can use the element and find out its height using JQuery
	//we get the current height outside the click event, so it does not 
	//double the size on every click (2 > 4 > 8 > 16, etc.)
	var tweetTextHeight = tweetText.height();		
	// this event triggers when the tweet text area is clicked		
	$('#tweet-content').on('click', '.tweet-compose', function() {

		//alert(height); // shows the height in an alert box
	
		//now we set the height of the element to be double the current size
		tweetText.height(tweetTextHeight * 3);
	
		//show the character count and submit button using a slow animation
		$('#tweet-controls').show('slow');	
	});	
	//As the user types, the character count should decrease.
	$('#tweet-content').on('keyup', '.tweet-compose', function() {
		// tweetText variable defined earlier in the file and contains the element.
		var tweetTextString = tweetText.val(); //save the value of text inside the div as a number
		var typedCharsCount = tweetTextString.length;
		var remainingChars = MAX_COUNT - typedCharsCount;

		var charCountDiv = $('#char-count'); //save the element(it's the div)
		charCountDiv.text(remainingChars);

		if (remainingChars <= 10) {
			charCountDiv.css('color', 'red');
		}
		else {
			charCountDiv.css('color', '#999')
		}
		// At less than 0 remaining characters, the tweet button should be disabled//
       if (remainingChars < 0) {
           $('#tweet-submit').attr('disabled', 'disabled');
       } else {
           $('#tweet-submit').removeAttr('disabled');
       }

	});

	$('.js-myAvatar').attr("src", "img/Wendy.jpg");
	
  	//If the user puts in more than 140 characters, the tweet button 
  	//should be disabled (and re-enabled when there are <= 140 chars).
	
});