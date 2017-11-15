'use strict';

//Global Variable
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var firstAndPike = {
  name: 'First & Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  salesPerHour: [],
  randCust: function() {
    var rand = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return rand;
  },
  genSalesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.salesPerHour.push(Math.floor(this.randCust() * this.avgSale));
    }
  }
};

var seaTac = {
  name: 'Sea Tac',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  salesPerHour: [],
  randCust: function() {
    var rand = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return rand;
  },
  genSalesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.salesPerHour.push(Math.floor(this.randCust() * this.avgSale));
    }
  }
};

var seattleCenter = {
  name: 'Seatte Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  salesPerHour: [],
  randCust: function() {
    var rand = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return rand;
  },
  genSalesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.salesPerHour.push(Math.floor(this.randCust() * this.avgSale));
    }
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  salesPerHour: [],
  randCust: function() {
    var rand = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return rand;
  },
  genSalesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.salesPerHour.push(Math.floor(this.randCust() * this.avgSale));
    }
  }
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  salesPerHour: [],
  randCust: function() {
    var rand = Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    return rand;
  },
  genSalesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.salesPerHour.push(Math.floor(this.randCust() * this.avgSale));
    }
  }
};

function render(storeObject) {
  storeObject.genSalesPerHour();

  var p = document.createElement('p');
  var title = document.createElement('p');
  title.append(storeObject.name);
  p.appendChild(title);
  var ul = document.createElement('ul');
  for (var i = 0; i < storeObject.salesPerHour.length; i++) {
    var li = document.createElement('li');
    li.append(storeHours[i] + ': ' + storeObject.salesPerHour[i]);
    ul.appendChild(li);
  }

  p.appendChild(ul);

  document.body.appendChild(p);
}


render(firstAndPike);
render(seaTac);
render(seattleCenter);
render(capitolHill);
render(alki);
