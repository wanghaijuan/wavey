
window.onload = function() {
  var waveOne = wavify(document.querySelector('#wave-one'), {
    height: 80,
    bones: 4,
    amplitude: 60,
    color: "#F1F1F1",
    speed: .15
  });
  var waveTwo = wavify( document.querySelector('#wave-two'), {
    height: 60,
    bones: 3,
    amplitude: 40,
    color: "rgba(241, 241, 241, .8)",
    speed: .25
  });
  var waveThree = wavify( document.querySelector('#wave-three'), {
    height: 40,
    bones: 5,
    amplitude: 20,
    color: "rgba(241, 241, 241, .6)",
    speed: .2
  });
}

