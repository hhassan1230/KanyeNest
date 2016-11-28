$( document ).ready(function() {
  var queryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
          // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        query_string[pair[0]] = arr;
          // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    } 
    return query_string;
  }();
  var removeDemoDivs = function(){
    if (!queryString.demo) {
      $( ".scriptButton1" ).remove();
      $( ".scriptButton2" ).remove();
      $( ".scriptButton3" ).remove();
      $( ".scriptButton4" ).remove();
      $( ".dev-test" ).remove();
    }
  };

  var randomTweet = function(){
    if (currentContainer) {
      stopGif(currentContainer);
    }
    var randSeedNum = Math.floor(Math.random() * (randomtweets.length - 0 + 1)) + 0;
    $( ".speechbubble" ).html(randomtweets[randSeedNum]);
  };
  
  var randomtweets = ['I feel we are so stuck in the booth Wow this is the God.',
                'Be real… Don’t try to use the debt tried to use me for anything till Monday.',
                'I feel the Grammy awarding system is designed for YEEZY Season 1.',
                'I feel we are so stuck in the booth Wow this is the God.',
                'This is the most powerful messenger of the life.',
                'and I think the Grammys culturally relevant again.',
                'you maybe talented, but you\'re not kanye west',
                'Sometimes I get emotional over fonts',
                'My favorite unit of measurement is \'a shitload\'',
                'Have you ever thought you were in love with someone but then realized you were just staring in the mirror for 20 minutes?',
                'I always misspell genius SMH! The irony!',
                'Dear Santa Claus, tell me what gift would you like this year.'
                ];
                // I am ready to get out of my own way. The ego is overdone... it's like hoddies
    removeDemoDivs();
    $("#startscreens").removeClass('startoff');
    $("#start1").removeClass('startoff');
    $("#start2").removeClass('startoff');
    $("#start3").removeClass('startoff');
    $("#start4").removeClass('startoff');
    $('#finalframe').hide();
    $('#finalframe1').hide();

    $('#finalframe2').hide();
    $('#finalframe3').hide();
    $('#finalframe4').hide();
    $('#finalframe5').hide();

    $('#tutorial').hide();


    $("#start1").show();
    $("#start2").hide();
    $("#start3").hide();
    $("#start4").hide();

    $("#startscreens").css('display', 'block');
    $("#start1").css('display', 'block');

    $( "#start1" ).click(function() {
      $("#tutorial").css('display', 'block');
      $('#tutorial').show();
      $('#start1').hide();
      
      setTimeout(function(){
        $("#start2").css('display', 'block');
        $("#start2").show();
        $('#tutorial').hide();
        setTimeout(function(){
          $("#start3").css('display', 'block');
          $('#start3').show();
          $('#start2').hide();
          setTimeout(function(){
            $("#start4").css('display', 'block');
            $('#start4').show();
            $('#start3').hide(); 
            setTimeout(function(){
              $('#start4').hide();
              $("#startscreens").hide();
              randomTweet();
              init();
            }, 1600);
          }, 1600);
        }, 1600);
      }, 1600);
    });

    $( ".scriptButton1" ).click(function() {
      // shrink head
      if (queryString.demo) {
        shrinkHead();
        setTimeout(function(){
          shrinkHead();
        }, 1000);
      }

    });
    $( ".scriptButton2" ).click(function() {
      // hate
      if (queryString.demo) {
        var interval;
        interval = setInterval(makehater, 1500);
        setTimeout(function(){
          clearInterval(interval)
        }, 10000);
      }
    });
    $( ".scriptButton3" ).click(function() {
      // random tweet
      if (queryString.demo) {
        var seednum = Math.floor(Math.random() * (randomtweets.length - 0 + 1)) + 0;
        $( ".speechbubble" ).html(randomtweets[seednum]);
      }
    });
    $( ".scriptButton4" ).click(function() {
      // end
      if (queryString.demo) {
        endGame();
      }
    });

      var randomTweetInterval;
      randomTweetInterval = setInterval(randomTweet, 30000);

});