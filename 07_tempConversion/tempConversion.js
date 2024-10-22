const convertToCelsius = function(fahreneint) {
  const celsius = (fahreneint - 32)*5/9;
  
  return Number.isInteger(celsius) ? celsius : parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const fahr = celsius*(9/5)+32;

  return Number.isInteger(fahr) ? fahr : parseFloat(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
