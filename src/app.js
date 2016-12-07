var p5 = require('p5');

var node = document.getElementById('wrapper');

var sketch = function(p){
  p.setup = function(){
    p.createCanvas(600,600);
  };
  p.draw = function(){
    p.background(120,0,0);
  }
};

new p5(sketch, node);
