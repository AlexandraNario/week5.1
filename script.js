
//Create an HTML and JS file and link them with the script tag
//Create at least 3 different elements in the body of your html file
//In your JS file select each element and log them to the console 
//Select multiple elements with querySelectorAll() and log them to the console
let heading = 
  document.querySelector("h1");
console.log(heading.innerHTML);



let paragrap =
  document.getElementById("paragraph");
console.log(paragrap.innerHTML);

let alllistelements = 
  document.querySelectorAll("li");
console.log(alllistelements);