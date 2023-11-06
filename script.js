let count = 0;

function incrementValue() {
  count++;
  document.getElementById('value').innerText = count;
  console.log("State is changed: " + count);
}

window.onload = () => {
  console.log('Component is mounted');
};

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', incrementValue);
