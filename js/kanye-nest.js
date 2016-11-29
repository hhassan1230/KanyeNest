String.prototype.capitalize = function(allWords) {
   return (allWords) ? // if all words
      this.split(' ').map(word => word.capitalize()).join(' ') : //break down phrase to words then  recursive calls until capitalizing all words
      this.charAt(0).toUpperCase() + this.slice(1); // if allWords is undefined , capitalize only the first word , mean the first char of the whole string
}
//Set up button clicks
var creativityWait = ["Let a God breath! (Kanye may need some discipline)", "I Don’t need to work on creativity - I'm a God (discipline that boy!)", "Nah son, I'm plowing Kim right now", "Working on my clothing line right now (Kanye may need a backhand)", "(Kanye ignores your orders and commands you to buy more ablums before he obeys)"]; 
var indexAlbum = 0;
var hateInterval = null;
var intervalCount = 4000;
var creativeIntervalCount = 6500;
var creativitydegrador = null;
var headshrinker = null;
var currentContainer;
var breatherSpace = true;


var endGame = function() {
    clearInterval(hateInterval);
    $('#allthehaters').css('display', 'none');
    $("#startscreens").show();
    $("#startscreens").css('display', 'block');
  
    $("#start1").hide();
    $("#start2").hide();
    $("#start3").hide();
    $("#start4").hide();


    // finalframe
    $("#finalframe1").removeClass('startoff');
    $("#finalframe1").css('display', 'block');
    $("#finalframe1").show();  

    pickEnding();
};

var pickEnding = function(){
    // 1 - 3 random
    var endings = ['good', 'bad', 'ego'];
    // Math.floor((Math.random() * 3) + 1)
    // choose ending on that randomness
    var ending = endings[Math.floor(Math.random()*endings.length)];
    // change imags to winning picker
    playSong("audio/" + ending + ".wav");



    if (ending !== 'good') {
       var path = 'images/'+ending+'/';
       $('#finalframe2').children().attr('src', path+ending.capitalize()+'1.png'); 
       $('#finalframe3').children().attr('src', path+ending.capitalize()+'1text.jpg'); 
       $('#finalframe4').children().attr('src', path+ending.capitalize()+'2.png'); 
       $('#finalframe5').children().attr('src', path+ending.capitalize()+'2text.jpg'); 
    }
    // start set time outs
      setTimeout(function(){
        $("#finalframe2").css('display', 'block');
        $("#finalframe2").show();
        $('#finalframe1').hide();
        setTimeout(function(){
          $("#finalframe3").css('display', 'block');
          $('#finalframe3').show();
          $('#finalframe2').hide();
          setTimeout(function(){
            $("#finalframe4").css('display', 'block');
            $('#finalframe4').show();
            $('#finalframe3').hide(); 
            setTimeout(function(){
                $("#finalframe5").css('display', 'block');
                $('#finalframe5').show();
                $('#finalframe4').hide();
                setTimeout(function(){
                    $("#finalframe").removeClass('startoff');
                    $("#finalframe").css('display', 'block');
                    $("#finalframe").show();
                }, 4000);
            }, 1600);
          }, 4000);
        }, 1600);
      }, 1600); 
}

$( "#egobutton" ).click(function() {
  playSong("audio/UI_Click.wav");

  praise();
  generateFood('ego');
  // raise ego
});

$( "#creativitybutton" ).click(function() {
    playSong("audio/UI_Click.wav");

    if (breatherSpace) {
      create();
      generateFood('creativity');
      breatherSpace = false;
      spaceOutCreativity();
    } else {
        $( ".speechbubble" ).html(creativityWait[Math.floor(Math.random()*creativityWait.length)]);
    }
});

$( "#disciplinebutton" ).click(function() {
  // play smack!!!
  // Math.random() * (max - min) + min;
  var currentSmack = "slap"+ Math.floor((Math.random() * 11) + 1);
  playSong("audio/slaps/"+ currentSmack +".mp3");
  scold();
  //evolveKanye();
  generateFood('Oprah');
});

$( ".speechbubble" ).click(function() {




    // scolding start

    tweet();
});

$( ".hater" ).mousedown(function() {
    var currentwack = Math.floor((Math.random() * 4) + 1);

    playSong("audio/handSmack/" + currentwack + ".wav");
    $(this).addClass("hateroff");
});
$("#close").click(function(){
    $("#actionoverlays").hide();
})

//Set up intervals
//var hatermaker = setInterval(makehater, 4000);
var startShrinker = function() {
    headshrinker = setInterval(shrinkHead, 10000);
};

var spaceOutCreativity = function(){
    setTimeout(function(){
        breatherSpace = true;
    }, 500);
};

//Set up tweets
var randomtweets = ['I feel we are so stuck in the booth Wow this is the God.',
                'Be real… Don’t try to use the debt tried to use me for anything till Monday.',
                'I feel the Grammy awarding system is designed for YEEZY Season 1.',
                'I feel we are so stuck in the booth Wow this is the God.',
                'This is the most powerful messenger of the life.',
                'and I think the Grammys culturally relevant again.'];

var albumnames = ['808s', 'Dropout', 'Graduation','My Dark Twisted Fantasy'];
var albumimages = ['images/album_808s.png.', 'images/album_dropout.png', 'images/album_graduation.png','images/album_mydark.png'];
var albumaudio = ['audio/msuci1.mp3', 'audio/music2.mp3', 'audio/audio3.mp3','audio/audio4.mp3'];
var indexAlubm = 0;

function albumdrop(){
    //Set the modal with the albumimages
    makeModal("You dropped an album: "+albumnames[albumCounter]+" <img src = '"+albumimages[albumCounter]+"' class='albumart'>");
    //play the album sound
    playSong(albumArray[indexAlbum].audio);
    //evolve kanye
    evolveKanye();
    albumCounter = albumCounter+1;
}

function randomtweetNest(){
    seednum = Math.floor(Math.random() * (randomtweets.length - 0 + 1)) + 0;

    $( ".speechbubble" ).html(randomtweets[seednum]);
}

function tweet(){
    var headsOrTails = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if (headsOrTails === 2) {
        $( ".speechbubble" ).html("I feel like me and Taylor might still have sex, Why? I made that bitch famous.");
    } else {
        randomtweetNest();
    }
};
    

function makehater(){
    //Make a hater (kanye pest) visible

    //Randomize the hater
   haters =  $(".hater")
   
   haterindex = Math.round(Math.random() * (haters.length)); 
   
   haters.eq(haterindex).removeClass("hateroff");

}

function lowerCreativity(){
    //Lower creativity
    activebar = $(".geniusbars").not(".geniusoff");
    if($(activebar).is(':first-child')){
        // lose condition

        makeModal("Yeezus is going on the Kardashians! <img src ='images/Kardashiansmodel.jpg' class='albumart kar'>");
        // makeModal('Yeezus is going on the Kardashians!');
        
    }else{
        $(activebar).prev().removeClass("geniusoff");
        $(activebar).addClass("geniusoff");
    }
}

function raiseCreativity(){
    //raise creativity
    activebar = $(".geniusbars").not(".geniusoff");
    if($(activebar).is(':last-child')){
        evolveKanye();
        //albumdrop();
        activebar.addClass("geniusoff");
        $(".geniusbars").eq(2).removeClass("geniusoff");
        playSong();
    }else{
        $(activebar).next().removeClass("geniusoff");
        $(activebar).addClass("geniusoff");
    }


}

function evolveKanye(){
    var albumArray = [
        {text: "You dropped another album! I'm so glad I live in the time of you!", url:'http://kanyenest.com/images/album_dropout.png', audio: 'audio/music1.wav'},
        {text: "You dropped another album! All the celeb hype only clouds how talented you are.", url:'http://kanyenest.com/images/album_life_of_pablo.png', audio: 'audio/music3.wav'},
        {text:"You dropped another album! OMG your album is the shit!" , url:'http://kanyenest.com/images/album_808s.png', audio: 'audio/msuic2.wav'}       
    ];
    if (!creativitydegrador) {
        creativitydegrador = setInterval(lowerCreativity, creativeIntervalCount);
    } else {
        creativitydegrador = setInterval(lowerCreativity, creativeIntervalCount - 500);
    }
    //Move kanye to the next head level
    if (indexAlbum < albumArray.length) {
        $('#kanyehead').children().not('.headoff').each(function(){
            // still not working full after life of pablo
            // kanyewings
            nextclass = $(this).next();

            nextclass.removeClass('headoff');

            firsthead = nextclass.children().eq(2);

            firsthead.removeClass('headoff');

            firsthead.show();

            $(this).addClass('headoff');

            $(this).hide();

            if($(nextclass).is(':last-child')){

                $("#kanyewings").removeClass("bodyoff");

                $("#kanyewings").show();

            }     

        });

    //move kanye to the next body


        makeModal(albumArray[indexAlbum].text +" <img src = '"+ albumArray[indexAlbum].url+"' class='albumart'>");

        playSong(albumArray[indexAlbum].audio);
        indexAlbum += 1;
    } else {
        // win screen
        endGame();
    }
    if(indexAlbum === 3){
        $('#kanyewings').removeClass('bodyoff');
        $('#kanyewings>img').removeClass('bodyoff');
    }

    if (hateInterval) {
        hateInterval = setInterval(makehater, intervalCount);
    } else {
        hateInterval = setInterval(makehater, intervalCount - 1500);
    } 
    // start haters!
}

function growHead(){
    //Grow the head
    $('#kanyehead').children().not('.headoff').children().not('.headoff').each(function(){

        if ($(this).next().length > 0) {

            $(this).addClass('headoff');
            $(this).next().removeClass('headoff');
        }
    });
}

function shrinkHead(){
    $('#kanyehead').children().not('.headoff').children().not('.headoff').each(function(){
        if ($(this).prev().length > 0) {
            $(this).addClass('headoff');
            $(this).prev().removeClass('headoff');
        }
    });

}

function playSong(path){
    //path = 'audio/child-heartless.mp3'
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', path);
    audioElement.setAttribute('autoplay', 'autoplay');

    setTimeout(function(){audioElement.pause()},5000)
}



function makeModal(modalText){
    $("#actionoverlays").show();
    $("#overlaytext").html(modalText);
    
}


function praise(){
    //change the tweet attitude
    $('#bouncy').attr('src','images/kanye_tweet.gif')
    setTimeout(function(){$('#bouncy').attr('src','images/kanye_bounce.gif')},6000);

    
    //Let's grow his head
    growHead();

}

function create(){
    raiseCreativity();
    winaward();
}

function scold(){
    var sorry = {title:"<a class='giflink-to-be' data-src='./img/awesome.gif'> Sorry </a>", url:"http://media2.giphy.com/media/112crUE5VLqHp6/giphy.gif"};
    $( ".speechbubble" ).html(sorry.title);
    $('.giflink-to-be').attr('data-src', sorry.url);
    var element = document.querySelector( '.giflink-to-be' );
    GifLinks( element );
    //activateDemo();
    //makeModal("Jay Leno asked what your mom would think of your behavior?");


}

function stopGif(container) {
    container.style[ 'display' ] = 'none';
    container.style[ 'backgroundImage' ] = '';
  }

function activateDemo(){
    var hatermaker = setInterval(makehater, 5283);
    var creativitydegrador = setInterval(lowerCreativity, 12500);
    var headshrinker = setInterval(shrinkHead, 19746);
    var tweetrando = setInterval(randomtweet, 15376);
}

function winaward(){
    //Play the award animation
    $('#bouncy').attr('src','images/kanye_grammy.gif');
    setTimeout(function(){$('#bouncy').attr('src','images/kanye_bounce.gif')},6000);

}

