class Note{
  constructor(port, pitch, vel){
    this.port = port;
    this.pitch = pitch;
    this.vel = vel;
    this.color = setColor(port);
    this.y = Math.floor(Math.random() * window.innerHeight) * -1;
    this.r = 30;
  }
  render(p){

    this.update();
    // setPos(p);
    //color
    p.colorMode(p.HSB, 100);
    var color = p.color(this.color);
    p.stroke(color);
    p.fill(255,0);


    p.push();
    p.translate(0, p.height);

    // var xUnit = p.width / 16;
    // var xOff = xUnit * this.port;
    // var yOff = p.map(this.pitch, 10, 100, 0, -p.height);
    //
    // for(var i = 0; i < 100; i++){
    //   var angleUnit = 360 / 100;
    //   var theta = angleUnit * i;
    //   var x = p.sin(p.radians(theta)) * this.r;
    //   var y = p.cos(p.radians(theta)) * this.r;
    //   p.point(x + xOff, y + yOff);
    // }
    var xUnit = p.width / 16;
    var x = xUnit * this.port;
    var y = p.map(this.pitch, 30, 90, 0, -p.height);
    var r = this.r;
    p.ellipse(x,y,r,r)


    p.pop();
  }

  update(){
    this.r += 1;
  }

}

function setColor(port){
  var color;
  var h = (100 /16) * port;
  const s = 30;
  const l = 100;
  return color = [h, s, l];
}


module.exports = Note;
