'use strict';

//Global Variable
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var shops = [];
function Store(name, maxCust, minCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.salesPerHour = [];
  this.totalCookies = 0;
  shops.push(this);
  this.calcSalesPerHour();
  this.totalCookies;
  this.render();

}
Store.prototype.calcSalesPerHour = function() {
  for (var i = 0; i < storeHours.length; i++) {
    this.salesPerHour.push(Math.floor(this.calcCustPerHour() * this.avgSale));
    this.totalCookies += this.salesPerHour[i];
  }

  return this.calcSalesPerHour, this.totalCookies;

};
Store.prototype.calcCustPerHour = function() {
  return rng(this.minCust, this.maxCust);
};
Store.prototype.render = function() {
  var tBod = document.createElement('tbody');
  var tableRow = document.createElement('tr');
  var rowTitle = document.createElement('td');
  rowTitle.append(this.name);
  tableRow.appendChild(rowTitle);
  for (var i = 0; i < this.salesPerHour.length; i++) {
    var td = document.createElement('td');
    td.append(this.salesPerHour[i]);
    tableRow.appendChild(td);
  }

  tBod.appendChild(tableRow);
  document.getElementById('table1').appendChild(tBod);
};
function rng(minCust, maxCust) {
  return Math.round(Math.random() * (maxCust - minCust) + minCust);
}
new Store('1st and Pike', 23, 65, 6.3, 14, [], 0);
new Store('SeaTac', 3, 24, 1.2, 14, [], 0);
new Store('Seattle Center', 11, 38, 3.7, 14, [], 0);
new Store('Capitol Hill', 20, 38, 2.3, 14, [], 0);
new Store('Alki', 2, 16, 4.6, 14, [], 0);
console.log('hit',shops);
console.log('hit',storeHours);
