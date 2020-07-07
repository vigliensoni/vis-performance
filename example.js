// const Hydra = require('hydra-synth')


window.onload = function () {
  const hydra = new Hydra()

  // by default, hydra makes everything global.
  // see options to change parameters
  // osc().out()
  
  shape(200,0.5,1.5)
  .scale(() => a.fft[0]*2)
.color([0.5,2].smooth(1),0.3,0)
.repeat(2,2)
.modulateScale(osc(3,0.5),-0.6)
.add(o0,0.5)
.scale(0.9) 
.out()
}