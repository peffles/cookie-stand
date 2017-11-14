'use strict'
//Global Variable
var storeHours = [ '6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randCust: function() {
    var rand = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return rand;
  }
}
console.log('hit!');
var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
};
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
};
var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
};
var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
};

console.log(firstAndPike.randCust());
