class Note{
  constructor(port, pitch, vel){
    this.port = port;
    this.pitch = pitch;
    this.vel = vel;
    this.life = 200;
  }

  render(p){
    var size = p.map(this.vel, 0, 127, 0, p.width);
    console.log("sie is ",size);
    p.ellipse(this.pitch, this.pitch, size,size);
  }
}


module.exports = Note;
