$(document).ready(function() {
  $("#wave-one").wavify({
      height: 80,
      bones: 4,
      amplitude: 60,
      color: "#f1f1f1",
      speed: .15
  }),
  $("#wave-two").wavify({
      height: 60,
      bones: 3,
      amplitude: 40,
      color: "rgba(241, 241, 241, .8)",
      speed: .25
  }),
  $("#wave-three").wavify({
      height: 40,
      bones: 5,
      amplitude: 20,
      color: "rgba(241, 241, 241, .6)",
      speed: .2
  })
})