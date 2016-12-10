var p5 = require('p5');
var Note = require('./Note');

var sketch = function(p){
  p.setup = function(){
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.frameRate(60);
  };
  p.draw = function(){
    p.colorMode(p.RGB);
    p.background(43, 233, 216, 255 * 0.8);
    sketch.renderNotes(p);
  };
};
sketch.renderNotes = function(p){
  for(var i = 0; i < sketch.notes.length; i++){
    var note = sketch.notes[i];
    note.render(p);
  }
}
sketch.notes = [];
sketch.genNote = function(port, pitch, velocity){
  sketch.notes.push(new Note(port, pitch, velocity));
  // var thisNotes = [];
  // sketch.notes.forEach(function(note){
  //   var obj = {};
  //   obj.port = note.port;
  //   obj.pitch = note.pitch;
  //   thisNotes.push(obj);
  // });
  // console.log("current notes are ");
  // console.dir(thisNotes);
};
sketch.deleteNote = function(port, pitch){
  for(var i = 0; i < sketch.notes.length; i++){
      var note = sketch.notes[i];
      if(note.port === port && note.pitch === pitch){
        sketch.notes.splice(i, 1);
      }
  }
};

var node = document.getElementById('wrapper');
new p5(sketch, node);

module.exports = {
  noteOn: function(port, pitch, velocity){
    sketch.genNote(port, pitch, velocity);
  },
  noteOff: function(port, pitch){
    sketch.deleteNote(port, pitch);
  }
}
