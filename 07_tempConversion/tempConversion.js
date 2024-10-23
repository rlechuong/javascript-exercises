const convertToCelsius = function(temperature) {
  let C = (temperature - 32) * (5/9);
  let roundedC = Math.round(C*10) / 10;

  return roundedC
};

const convertToFahrenheit = function(temperature) {
  let F = (temperature * (9/5) + 32);
  let roundedF = Math.round(F*10) / 10;

  return roundedF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
