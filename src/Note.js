var Text = require('./Text');

class Note{
  constructor(port, pitch, vel){
    this.port = port;
    this.pitch = pitch;
    this.vel = vel;
    this.color = setColor(port);
    this.velX = (Math.random()* -2) + 1;
    this.velY = (Math.random()* -2) + 1;
    this.xOff = 0;
    this.yOff = 0;
    this.r = 30;
    this.canHaveText = Math.random() < 0.1;
    this.hasText = false;
  }
  render(p, pg){
    this.update();

    var revColor = p.color(reverseColor(this.color));

    pg.push();
    pg.translate(0, p.height);
    var xUnit = p.width / 16;
    var x = (xUnit * this.port) + this.xOff;
    var y = p.map(this.pitch, 30, 90, 0, -p.height) + this.yOff;
    var r = this.r;
    for(var i = 1; i < 15 ; i++){
      var amp = 1.0 - (1.0 / i);
      //color
      var color = p.color(adjustColor(this.color, i));
      pg.fill(color);
      if(i === 1){
        pg.stroke(revColor);
      } else {
        pg.noStroke();
      }
      pg.ellipse(x, y, r*amp, r*amp)
    }


    if(this.hasText){
      pg.textSize(30);
      pg.fill(255);
      pg.text(this.text, x - 30, y);
    }
    pg.pop();
  }

  update(){
    if(this.canHaveText && this.hasText === false && this.r > 150){
      this.hasText = true;
      this.text = Text.select();
    }
    this.r += 1;
    this.xOff += this.velX;
    this.yOff += this.velY;
  }
}

function setColor(port){
  var color;
  var h = (100 /16) * port;
  const s = 70;
  const l = 100;
  const a = 5;
  return color = [h, s, l, a];
}

function adjustColor(cl, i) {
  var adjustedColor = cl;
  var h = cl[0];
  var s = cl[1];
  var l = cl[2] - (cl[2] / i);
  // var l = cl[2] / i;
  var a = cl[3];
  adjustedColor = [h,s,l,a];
  return adjustedColor;
}

function reverseColor(color){
  var reversedColor = [];
  var h = Math.abs(100 - color[0]);
  var s = color[1];
  var l = color[2];
  var a = color[3];
  reversedColor = [h, s, l, a];

  return reversedColor;
}


module.exports = Note;
