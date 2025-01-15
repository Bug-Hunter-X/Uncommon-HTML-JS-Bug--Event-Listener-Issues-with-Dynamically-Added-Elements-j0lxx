// bugSolution.js
function attachEventListener() {
  const myElement = document.getElementById('myElement');

  // Check if the element exists
if (myElement) {
    myElement.addEventListener('click', function() {
      alert('Event listener working!');
    });
  } else {
    console.error('Element not found!');
  }
}

//Attach the event listener after DOMContentLoaded
document.addEventListener('DOMContentLoaded', attachEventListener);