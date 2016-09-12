//Set up button clicks
var indexAlbum = 0;

$( "#egobutton" ).click(function() {
  praise();
});

$( "#creativitybutton" ).click(function() {
  create();
});

$( "#disciplinebutton" ).click(function() {
  scold();
  //evolveKanye();
});

$( ".speechbubble" ).click(function() {
    tweet();
});

$( ".hater" ).click(function() {
    $(this).addClass("hateroff");
});
$("#close").click(function(){
    $("#actionoverlays").hide();
})

//Set up intervals
//var hatermaker = setInterval(makehater, 4000);
//var creativitydegrador = setInterval(lowerCreativity, 4500);
//var headshrinker = setInterval(shrinkHead, 10000);


//Set up tweets
var randomtweets = ['I feel we are so stuck in the booth Wow this is the God.',
                'Be real… Don’t try to use the debt tried to use me for anything till Monday.',
                'I feel the Grammy awarding system is designed for YEEZY Season 1.',
                'I feel we are so stuck in the booth Wow this is the God.',
                'This is the most powerful messenger of the life.',
                'and I think the Grammys culturally relevant again.']

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

function randomtweet(){
    seednum = Math.round(Math.random() * randomtweets.length);

    $( ".speechbubble" ).html(randomtweets[seednum]);
}

function tweet(){
    $( ".speechbubble" ).html("I feel like me and Taylor might still have sex, Why? I made that bitch famous.");
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
        makeModal('Yeezus is going on the Kardashians!');
        
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
        {text:"You dropped another album! OMG your album is the shit!" , url:'http://kanyenest.com/images/album_808s.png', audio: 'audio/msuic2.wav'},
        
];
    //Move kanye to the next head level

    $('#kanyehead').children().not('.headoff').each(function(){
        // still not working full after life of pablo
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

    if (indexAlbum < albumArray.length) {
        makeModal(albumArray[indexAlbum].text +" <img src = '"+ albumArray[indexAlbum].url+"' class='albumart'>");
        playSong(albumArray[indexAlbum].audio);
        indexAlbum += 1;
    }
    if(indexAlbum==2){

    }

}

function growHead(){
    //Grow the head 
    $('#kanyehead').children().not('.headoff').children().not('.headoff').each(function(){
        $(this).addClass('headoff');
        $(this).next().removeClass('headoff');
    });
}

function shrinkHead(){
    $('#kanyehead').children().not('.headoff').children().not('.headoff').each(function(){
        $(this).addClass('headoff');
        $(this).prev().removeClass('headoff');
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
    $( ".speechbubble" ).html("Sorry Tay Tay, but...");
    //activateDemo();
    //makeModal("Jay Leno asked what your mom would think of your behavior?");


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

