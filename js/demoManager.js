$( document ).ready(function() {
	var randomTweet = function(){
  	  var randSeedNum = Math.floor(Math.random() * (randomtweets.length - 0 + 1)) + 0;
	  	$( ".speechbubble" ).html(randomtweets[randSeedNum]);
  };
  
	var randomtweets = ['I feel we are so stuck in the booth Wow this is the God.',
                'Be real… Don’t try to use the debt tried to use me for anything till Monday.',
                'I feel the Grammy awarding system is designed for YEEZY Season 1.',
                'I feel we are so stuck in the booth Wow this is the God.',
                'This is the most powerful messenger of the life.',
                'and I think the Grammys culturally relevant again.'];
		$("#startscreens").removeClass('startoff');
		$("#start1").removeClass('startoff');
		$("#start2").removeClass('startoff');
		$("#start3").removeClass('startoff');
		$("#start4").removeClass('startoff');
		$('#finalframe').hide();
		$("#start1").show();
		$("#start2").hide();
		$("#start3").hide();
		$("#start4").hide();

		$("#startscreens").css('display', 'block');
		$("#start1").css('display', 'block');

	  $( "#start1" ).click(function() {
	  	$("#start2").css('display', 'block');
	  	$('start1').hide();
	  	$("#start2").show();
	  	setTimeout(function(){
	  		$("#start3").css('display', 'block');
      	$('start2').hide();
      	$('start3').show();
      	setTimeout(function(){
      		$("#start4").css('display', 'block');
      		$('start4').show();
       		$('start3').hide(); 
       		setTimeout(function(){
       			randomTweet();
 	     			$('start4').hide();
 	     			$("#startscreens").hide();
       			// init();
       		}, 1600);
      	}, 1600);
     	}, 1600);
  	});

	  $( ".scriptButton1" ).click(function() {
	  	// shrink head
	  	shrinkHead();
	  	setTimeout(function(){
	  		shrinkHead();
	  	}, 1000);

	  });
	  $( ".scriptButton2" ).click(function() {
	  	// hate
	  	var interval;
	  	interval = setInterval(makehater, 1500);
	  	setTimeout(function(){
	  		clearInterval(interval)
	  	}, 10000);

	  });
	  $( ".scriptButton3" ).click(function() {
  	  var seednum = Math.floor(Math.random() * (randomtweets.length - 0 + 1)) + 0;
	  	$( ".speechbubble" ).html(randomtweets[seednum]);
	  });
	  $( ".scriptButton4" ).click(function() {
	  	// end
	  	$("#startscreens").show();
	  	$("#startscreens").css('display', 'block');
	  	
			$("#start1").hide();
			$("#start2").hide();
			$("#start3").hide();
			$("#start4").hide();
			// finalframe
			$("#finalframe").removeClass('startoff');
			$("#finalframe").css('display', 'block');
			$("#finalframe").show();
	  });

	  	var randomTweetInterval;
	  	randomTweetInterval = setInterval(randomTweet, 30000);

});