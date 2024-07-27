const string = 'Hello world'
// comment
console.log(string)

alert(string)
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
const array = [...Array(10).keys()].map(i => i + 1);
fetch('https://example.com/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'David', password: '12345' })
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
let uniqueArr = [...new Set(arr)];
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
fetch('https://example.com/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'David', password: '12345' })
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const debounce = (fn, time) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  };
};
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
const debounce = (fn, time) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  };
};
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
const debounce = (fn, time) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  };
};
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
const array = [...Array(10).keys()].map(i => i + 1);
const debounce = (fn, time) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  };
};
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
function reverseString(str) {
  return str.split("").reverse().join("");
}
function countdownTimer(minutes) {
  let seconds = minutes * 60;
  const countdown = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
    } else {
      console.log(seconds + " seconds left");
    }
  }, 1000);
}
function countdownTimer(minutes) {
  let seconds = minutes * 60;
  const countdown = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
    } else {
      console.log(seconds + " seconds left");
    }
  }, 1000);
}
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
let reversedStr = str.split("").reverse().join("");
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
let reversedStr = str.split("").reverse().join("");
const currentUrl = window.location.href;
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
function reverseString(str) {
  return str.split("").reverse().join("");
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
let isValueInArray = arr.includes(value);
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
console.log(localStorage.getItem('username'));
const currentUrl = window.location.href;
fetch('https://example.com/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'David', password: '12345' })
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
let reversedStr = str.split("").reverse().join("");
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
console.log(localStorage.getItem('username'));
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const currentUrl = window.location.href;
const array = [...Array(10).keys()].map(i => i + 1);
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
const array = [...Array(10).keys()].map(i => i + 1);
el.addEventListener('keyup', e => {
  msg.style = e.getModifierState('CapsLock')
    ? 'display: block'
    : 'display: none';
});
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
let uniqueArr = [...new Set(arr)];
const array = [...Array(10).keys()].map(i => i + 1);
let reversedStr = str.split("").reverse().join("");
const array = [...Array(10).keys()].map(i => i + 1);
const isPostalCode = (postalCode, countryCode) => {
  if (countryCode === 'US') {
    const regex = /[0-9]{5}(?:-[0-9]{4})?/;
    return regex.test(postalCode);
  } else if (countryCode === 'CA') {
    const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    return regex.test(postalCode.toUpperCase());
  } else {
    // Add regex for other country codes as needed
    return false;
  }
}
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
el.addEventListener('keyup', e => {
  msg.style = e.getModifierState('CapsLock')
    ? 'display: block'
    : 'display: none';
});
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
el.addEventListener('keyup', e => {
  msg.style = e.getModifierState('CapsLock')
    ? 'display: block'
    : 'display: none';
});
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
let newArr = oldArr.map(function(item) {
  return item + 1;
});
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let isValueInArray = arr.includes(value);
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
let reversedStr = str.split("").reverse().join("");
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
function countdownTimer(minutes) {
  let seconds = minutes * 60;
  const countdown = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
    } else {
      console.log(seconds + " seconds left");
    }
  }, 1000);
}
let newArr = oldArr.map(function(item) {
  return item + 1;
});
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(localStorage.getItem('username'));
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
const uniqueNums = [...new Set(nums)];
const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
