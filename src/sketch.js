var p5 = require('p5');
var Note = require('./Note');

var sketch = function(p){
  p.setup = function(){
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.frameRate(1);
  };
  p.draw = function(){
    p.background(120);
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
}

var node = document.getElementById('wrapper');
new p5(sketch, node);

module.exports = {
  noteOn: function(port, pitch, velocity){
    sketch.genNote(port, pitch, velocity);
  }
}
