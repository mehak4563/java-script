
///////////////////////////////////task no  1//////////////////'

// function addNumber(num) {
//     return function(x) {
//       return num + x;
//     }
//   }
  
//   // Example usage
//   const add5 = addNumber(5);
//   console.log(add5(10)); 
//   console.log(add5(20)); 
/////////////////////////////////task 2/////////////////
function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  
  if (arr[0] === val) {
    return true;
  }
  
  return searchArray(arr.slice(1), val);
}

//////////////////////////task no 3//////////////////
function addParagraphToDocument(text) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}

///////////////////////////////////  task 4 //////////////////////////////////////////////
function addListItem(text) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = text;

  ul.appendChild(li);
}
addListItem('Apples');
addListItem('Bananas');
addListItem('Oranges');

///////////////////////////task 5//////////////////////////////////////////

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}
var myElement = document.getElementById("myElement");
changeBackgroundColor(myElement, "blue");


///////////////////////task 6////////////////
function saveObjectToLocalStorage(key, obj) {
  const objString = JSON.stringify(obj);
  localStorage.setItem(key, objString);
}
///////////////////////////////////task 7/////////////////
function getObjectFromLocalStorage(key) {
  const storedObject = localStorage.getItem(key);
  if (!storedObject) {
    return null;
  }
  return JSON.parse(storedObject);
}

/////////////////////////////////task 8 ///////////
function saveToLocalStorage(obj) {

  for (let prop in obj) {
    localStorage.setItem(prop, JSON.stringify(obj[prop]));
  }
  
  let newObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    let prop = localStorage.key(i);
    newObj[prop] = JSON.parse(localStorage.getItem(prop));
  }
  
  return newObj;
}






