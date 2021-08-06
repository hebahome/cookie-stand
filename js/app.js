'use strict';

const shop = document.getElementById('shop');
let hours = ['6am', '7am', '8am', ' 9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7am'];
let seattleCookies = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  averageCust: 6.3,
  cookiesSales: [],
  total: 0,

  getCookies: function () {

    for (let i = 0; i < hours.length; i++) {
      let randAVGCust = Math.ceil(randomNum(this.minCust, this.maxCust) * this.averageCust)

      this.cookiesSales.push(randAVGCust);
      this.total += randAVGCust;
    }

  },

  render: function () {
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    shop.appendChild(h2Element);


    const ulElement = document.createElement('ul');
    shop.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liEle = document.createElement('li');
      liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`
      ulElement.appendChild(liEle);
    }

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total : ${this.total}cookies`;
   ulElement.appendChild(totalLi);

}
}


seattleCookies.getCookies();
seattleCookies.render();


function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}











let tokyoCookies = {
  name: 'tokyo',
  minCust: 3,
  maxCust: 24,
  averageCust: 1.2,
  cookiesSales: [],
  total: 0,

  getCookies: function () {

    for (let i = 0; i < hours.length; i++) {
      let randAVGCust = Math.ceil(randomNum(this.minCust, this.maxCust) * this.averageCust)

      this.cookiesSales.push(randAVGCust);
      this.total += randAVGCust;
    }

  },

  render: function () {
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    shop.appendChild(h2Element);


    const ulElement = document.createElement('ul');
    shop.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liEle = document.createElement('li');
      liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`
      ulElement.appendChild(liEle);
    }

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total : ${this.total}cookies`;
   ulElement.appendChild(totalLi);

}
}


tokyoCookies.getCookies();
tokyoCookies.render();


function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}




let dubiaCookies = {
  name: 'dubia',
  minCust: 11,
  maxCust: 38,
  averageCust: 3.7,
  cookiesSales: [],
  total: 0,

  getCookies: function () {

    for (let i = 0; i < hours.length; i++) {
      let randAVGCust = Math.ceil(randomNum(this.minCust, this.maxCust) * this.averageCust)

      this.cookiesSales.push(randAVGCust);
      this.total += randAVGCust;
    }

  },

  render: function () {
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    shop.appendChild(h2Element);


    const ulElement = document.createElement('ul');
    shop.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liEle = document.createElement('li');
      liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`
      ulElement.appendChild(liEle);
    }

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total : ${this.total}cookies`;
   ulElement.appendChild(totalLi);

}
}


dubiaCookies.getCookies();
dubiaCookies.render();


function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



let parisCookies = {
  name: 'paris',
  minCust: 20,
  maxCust: 38,
  averageCust: 2.3,
  cookiesSales: [],
  total: 0,

  getCookies: function () {

    for (let i = 0; i < hours.length; i++) {
      let randAVGCust = Math.ceil(randomNum(this.minCust, this.maxCust) * this.averageCust)

      this.cookiesSales.push(randAVGCust);
      this.total += randAVGCust;
    }

  },

  render: function () {
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    shop.appendChild(h2Element);


    const ulElement = document.createElement('ul');
    shop.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liEle = document.createElement('li');
      liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`
      ulElement.appendChild(liEle);
    }

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total : ${this.total}cookies`;
   ulElement.appendChild(totalLi);

}
}


parisCookies.getCookies();
parisCookies.render();


function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}




let limaCookies = {
  name: 'lima',
  minCust: 2,
  maxCust:16 ,
  averageCust: 4.6,
  cookiesSales: [],
  total: 0,

  getCookies: function () {

    for (let i = 0; i < hours.length; i++) {
      let randAVGCust = Math.ceil(randomNum(this.minCust, this.maxCust) * this.averageCust)

      this.cookiesSales.push(randAVGCust);
      this.total += randAVGCust;
    }

  },

  render: function () {
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    shop.appendChild(h2Element);


    const ulElement = document.createElement('ul');
    shop.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liEle = document.createElement('li');
      liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`
      ulElement.appendChild(liEle);
    }

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total : ${this.total}cookies`;
   ulElement.appendChild(totalLi);

}
}


limaCookies.getCookies();
limaCookies.render();


function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
