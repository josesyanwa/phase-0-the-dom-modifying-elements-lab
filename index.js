// Write your code here!
// Remove the 'main' element with id 'main' from the DOM
document.querySelector('main#main').remove();

// Create a new 'h1' element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text inside the 'h1' element
newHeader.textContent = "YOUR-NAME is the champion";

// Append the 'h1' element to the document body (or wherever you want it)
document.body.appendChild(newHeader);
