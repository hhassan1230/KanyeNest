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
   // this.generateFood = this.generateFood.bind(this);
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
      var currentDisciplinePoints = state.state.discipline + 25;
      var currentEgoPoints = state.state.ego - 10;
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
    var string = 'I have evoled into ' + evolutionState;
      swal({   
        title: string,   
        text: "Hi",   
        type: "success",   
        confirmButtonText: "^_^" 
      });
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
  $(".name>h1").text(this.state.age);
  $(".create>h1").text(this.state.creativity);
  $(".ego>h1").text(this.state.ego);
  $(".discipline>h1").text(this.state.discipline);

}

}); 