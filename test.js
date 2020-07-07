const Hydra = require('hydra-synth')


window.onload = function () {
  const hydra = new Hydra()

  // by default, hydra makes everything global.
  // see options to change parameters
  osc().out()
}
