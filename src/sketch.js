var p5 = require('p5');
var Note = require('./Note');

var sketch = function(p){
  var pg;
  p.setup = function(){
    p.colorMode(p.HSB, 100,100,100,100);
    p.blendMode(p.ADD);
    p.createCanvas(window.innerWidth, window.innerHeight);
    pg = p.createGraphics(p.width, p.height);

  };
  p.draw = function(){
    pg.background(10);
    sketch.renderNotes(p, pg);
    p.image(pg,0,0);
    sketch.renderLines(p);
  };
};

sketch.renderNotes = function(p, pg){
  for(var i = 0; i < sketch.notes.length; i++){
    var note = sketch.notes[i];
    note.render(p, pg);
  }
}
sketch.notes = [];
sketch.genNote = function(port, pitch, velocity){
  sketch.notes.push(new Note(port, pitch, velocity));
};
sketch.deleteNote = function(port, pitch){
  for(var i = 0; i < sketch.notes.length; i++){
      var note = sketch.notes[i];
      if(note.port === port && note.pitch === pitch){
        sketch.notes.splice(i, 1);
      }
  }
};

sketch.renderLines = function(p){
  p.stroke(100,0,30,14);
  for(var i = 0 ; i < 10 ; i++){
    var lineWeight = Math.floor(Math.random() * 5);
    p.strokeWeight(lineWeight);
    var x1 = p.random(p.width);
    var x2 = p.random(p.width);
    var y = p.random(p.height);
    p.line(x1,y,x2,y);
  }
  for(var i = 0 ; i < 200 ; i++){
    var lineWeight = Math.floor(Math.random() * 5);
    p.strokeWeight(lineWeight);
    var x = p.random(p.width);
    var y1 = p.random(p.height);
    var y2 = p.random(p.height);
    p.line(x,y1,x,y2);
  }
}

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
