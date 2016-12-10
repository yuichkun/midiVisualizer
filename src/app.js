var sketch = require('./sketch');

navigator.requestMIDIAccess().then(success,fail);

function success(midiAccess){
  var inputs = midiAccess.inputs;
  inputs.forEach(function(key){
    key.onmidimessage = onMidiMessage;
  });
}

function onMidiMessage(event){
  //MIDI Message
  var data = event.data;
  var message = data[0];
  var pitch = data[1];
  var velocity = data[2];

  if(message >= 144 && message <= 159){
    var port = message - 144;
    console.log(`PORT: ${port} NOTEON: ${pitch} VELOCITY: ${velocity}`);
    sketch.noteOn(port, pitch, velocity);
  }
  if(message >= 128 && message <= 143){
    var port = message - 128;
    console.log(`PORT: ${port} NOTEOFF: ${pitch}`);
    sketch.noteOff(port, pitch);
  }
}

function fail(){
  console.log("there is some error");
}
