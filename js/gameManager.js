  var actions = {
     award: {
       ego: 30,
       discipline: -10
     },
     tour: {
       creativity: 30,
       discipline: -10
     },
     studio: {
        creativity: 10
     },
     tweet: {
       ego: 10,
       discipline: -5
     }
  }; 
  var egoArray = ['tweet', 'award'];
  var creativityArray = ['studio', 'tour'];
  var disciplineArray = ['discipline'];
  var evolution = ["child", "teen", "adult", "god", "god", "god", "god", "god"]; 
  var actingOut = [
  	{title: "George Bush hates black people", url: "https://youtu.be/zIUzLpO1kxI?t=1m31s"},
  	{title: "I am a God!", url:"https://youtu.be/Ge33hrlN2Uc?t=22s"}
  ];
  var actingOutGifs = [
  	{title:"Imma let you finish in a moment <a class='giflink-to-be' data-src='./img/awesome.gif'> Taylor </a>", url:"http://media2.giphy.com/media/Of4AxFAqqpv1K/giphy.gif"},
  	{title:"Care less about these <a class='giflink-to-be' data-src='./img/awesome.gif'> cameras </a>", url:"http://media2.giphy.com/media/xKJ6yFmMg10Jy/giphy.gif"},
  	{title:"I\'m unhappy on this <a class='giflink-to-be' data-src='./img/awesome.gif'> talk show </a>!", url:"http://media2.giphy.com/media/O8lbnqdFAgunm/giphy.gif"},
  	{title:"<a class='giflink-to-be' data-src='./img/awesome.gif'> Ego trip </a>!", url:"http://media2.giphy.com/media/wAFEHowHwi3Vm/giphy.gif"},
  	{title:"Turning <a class='giflink-to-be' data-src='./img/awesome.gif'> white people </a> into Kanye again", url:"http://media2.giphy.com/media/xqU08L2IE91y8/giphy.gif"},
  	{title:"<a class='giflink-to-be' data-src='./img/awesome.gif'> Missing waves </a>", url:"http://media2.giphy.com/media/3o6gbaGOfsCs5wP5pm/giphy.gif"},
  	{title:"About to ruin another <a class='giflink-to-be' data-src='./img/awesome.gif'> awards show </a>", url:"http://media2.giphy.com/media/3xz2ByEvcXxlaZHAD6/giphy.gif"},
  	{title:"Getting <a class='giflink-to-be' data-src='./img/awesome.gif'> Pokemon players </a> lost with my new cut!", url:"http://media2.giphy.com/media/5xtDarwbyzqneBWbowU/giphy.gif"},
  	{title:"Mad that I am not <a class='giflink-to-be' data-src='./img/awesome.gif'> skinny or tall </a>!", url:"http://media2.giphy.com/media/l0NwtMANTDASl1W4o/giphy.gif"},
  	{title:"Cheating on <a class='giflink-to-be' data-src='./img/awesome.gif'> Kim </a>", url:"http://media2.giphy.com/media/czUleE3M8TaKI/giphy.gif"},
  	{title:"Doing Kim on my <a class='giflink-to-be' data-src='./img/awesome.gif'> Bike </a>", url:"http://media2.giphy.com/media/saoSEb1hAdDkk/giphy.gif"},
  	{title:"<a class='giflink-to-be' data-src='./img/awesome.gif'> Cheating </a> on Kim again", url:"http://media2.giphy.com/media/vbHCgajseRKZa/giphy.gif"},
  	{title:"You ain\'t got all the <a class='giflink-to-be' data-src='./img/awesome.gif'> answers </a>!", url:"http://media2.giphy.com/media/PaPvxVB5dD6py/giphy.gif"},
  	{title:"<a class='giflink-to-be' data-src='./img/awesome.gif'> VMA </a>s", url:"http://media2.giphy.com/media/1hjmySJVirhOU/giphy.gif"},
  	{title:"<a class='giflink-to-be' data-src='./img/awesome.gif'> George Bush </a> doesn\'t care about black people", url:"http://media2.giphy.com/media/Dawn8ThIyQs7u/giphy.gif"},
  	{title:"I am a <a class='giflink-to-be' data-src='./img/awesome.gif'> God </a>!", url:"http://media2.giphy.com/media/FHdwP9aqGx1rq/giphy.gif"},
  	{title:"Ripping off the <a class='giflink-to-be' data-src='./img/awesome.gif'> Lion King </a> again", url:"http://media2.giphy.com/media/10gOPkA1Rpaa4/giphy.gif"},
  	{title:"Made <a class='giflink-to-be' data-src='./img/awesome.gif'> Jesus Walks </a> so I\'m never going to hell", url:"http://media2.giphy.com/media/WMKNeaxUOWW6k/giphy.gif"},
  	{title:"Messing with <a class='giflink-to-be' data-src='./img/awesome.gif'> Hobbits </a> again", url:"http://media2.giphy.com/media/3o6ZtqSlWU33WHlaQU/giphy.gif"},
  	{title:"But I\'m the <a class='giflink-to-be' data-src='./img/awesome.gif'> best </a>!", url:"http://media2.giphy.com/media/AGxSXfLqeoqD6/giphy.gif"},
  	{title:"<a class='giflink-to-be' data-src='./img/awesome.gif'> Blinged </a> out!", url:"http://media2.giphy.com/media/4MANbfR6Wfbji/giphy.gif"},
  	{title:"Cheating at <a class='giflink-to-be' data-src='./img/awesome.gif'> Yu-Gi-Oh </a> again", url:"http://media2.giphy.com/media/ToMjGptG6DvGr6Q6F5m/giphy.gif"},
  	{title:"My <a class='giflink-to-be' data-src='./img/awesome.gif'> greatest </a> pain!", url:"http://media2.giphy.com/media/LdelkIjQYLNrG/giphy.gif"},
  	{title:"Gonna fight in the arena with all this <a class='giflink-to-be' data-src='./img/awesome.gif'> power </a>!", url:"http://media2.giphy.com/media/xmXzAUt10jVaE/giphy.gif"}
  ];
  var state = {
     food: '',
     ego: 100,
     creativity: 100,
     discipline: 50,
     maxAge: 100,
     age: 0,
     evolution: 'child',
     ageDivider: 0,
     preEvo: 'child'
  };
   
 var init = function(){
 	startShrinker();
  window.setInterval(function () {
    this.setTime();
  }.bind(this), 1000);
 };

  
  var timeManager = function(){
    var durationOfStage = state.maxAge / 4;  
  };

  var handleRandom = function (random){
    var randomElement = 'Oprah';
    if (random === 'ego') {
      var arraylength = egoArray.length;
      randomElement = egoArray[Math.floor((Math.random() * arraylength) + 0)];
    } else if (random === 'creativity') {
      var arraylength = creativityArray.length;
      randomElement = creativityArray[Math.floor((Math.random() * arraylength) + 0)];
    } 
    return randomElement;
  };
   
  var generateFood = function(type) {
    this.feedKanye(type, handleRandom(type));    
   };

    var feedKanye = function(feedType, food){
      if (typeof feedType == 'undefined'){
        return;
      };
     
     if (food === 'Oprah') {
      var currentDisciplinePoints = this.state.discipline + 25;
      var currentEgoPoints = this.state.ego - 10;
      this.state.discipline = currentDisciplinePoints;
      this.state.ego = currentEgoPoints;
     } else {
      this.state.food = food;
      var currentAction = actions[food];
      for (var action in currentAction) {   
        var currentActionPoint = this.state[action] + currentAction[action];
        this.state[action] = currentActionPoint;
      };
    }
   };
  
  var egoDecreaser = function(){
     var newEgo = this.state.ego -= 1;
     if (newEgo > 100) {
       // Over 100 accend to stars
     };
     
     // if he's at 50 ego
     if (newEgo === 50) {
	     	newEgo --;
       // send text notifation message
     };
     if (newEgo <= 0) {
       // Add Death Here
       newEgo = 0;
     };
     this.state.ego = newEgo;
   };
   
   var updateCurrentAge = function(){
     var newAge = this.state.age += 1;
     this.state.age = newAge;
   };
   
  var evole = function(evolutionState){
    // var string = 'I have evoled into ' + evolutionState;
    //   swal({   
    //     title: string,   
    //     text: "Hi",   
    //     type: "success",   
    //     confirmButtonText: "^_^" 
    //   });
  };

  var evoChecker = function() {
    if (this.state.evolution !== this.state.preEvo) {
       this.evole(state.evolution);
       this.state.preEvo = this.state.evolution;
    }
  };
   
  var setTime = function(){
    var newAgeDivider = this.state.age / this.state.maxAge;
    var wholeDivider = Math.round(parseFloat(newAgeDivider.toFixed(1)));
     // alert(state.maxDuration)
     
     
    var currentEvolution = this.state.evolution;
     
    if ((evolution.length >= wholeDivider) && (wholeDivider > 0) && (evolution[wholeDivider]) &&(isFinite(wholeDivider))) {
       currentEvolution = evolution[wholeDivider];
    }  
     this.currentTime = this.getCurrentTime();
     this.ageDivider = wholeDivider;
     this.evolution = currentEvolution;
     this.disciplineChecker();
     this.evoChecker();
     this.egoDecreaser();
     this.updateCurrentAge();
     this.maxAgeDecreaser();
     this.updateUI();
   };
  
  var actOut = function(){
  	var randomIndex = Math.floor((Math.random() * actingOutGifs.length) + 0)
  	var randomActOut = actingOutGifs[randomIndex];
  	// giflink-to-be
  	$( ".speechbubble" ).html(randomActOut.title);
  	$('.giflink-to-be').attr('data-src', randomActOut.url);
    var element = document.querySelector( '.giflink-to-be' );

    GifLinks( element );
  	// console.log(randomActOut.title);
    // Add acting out stuff here
      // swal({   
      //   title: "I'm acting out",   
      //   text: "Boo!",   
      //   type: "success",   
      //   confirmButtonText: "^_^" 
      // });
  };
  
  var disciplineChecker = function() {
    var newDiscipline = this.state.discipline; 
    if (this.state.discipline === 30) {
     this.actOut(); 
     newDiscipline -= 10;
     this.state.discipline = newDiscipline
    };
    if (this.state.discipline === 35) {
     this.actOut(); 
     newDiscipline -= 10;
     this.state.discipline = newDiscipline
    };
    if (this.state.discipline === 25) {
     // act out function
    this.actOut();
     newDiscipline -= 5;
     this.state.discipline = newDiscipline
    };
  };
  
  var maxAgeDecreaser = function(){
    var newMaxAge = this.state.maxAge - 1;
    this.state.maxAge = newMaxAge;
  };
   
  var getCurrentTime = function(){
      var currentDate = new Date();

      var finalTime = currentDate;
      return (finalTime);
  }; 

var updateUI = function(){
  $(".dev-test>.ego-stat>p").text('Kanye\'s Ego ' + this.state.ego);
  $(".dev-test>.creativity-stat>p").text('Kanye\'s Creativity ' + this.state. creativity);
  $(".dev-test>.discipline-stat>p").text('Kanye\'s Discipline ' + this.state.discipline);
};
 