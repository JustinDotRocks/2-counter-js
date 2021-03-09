
const subtractButton = document.getElementById('subtract-count-button');
const addButton = document.getElementById('add-count-button');
let currentCount = document.getElementById('current-count');

let count = 0;

const changeColor = () => {
    return (count > 0) ? currentCount.style.color = 'green' : currentCount.style.color = 'red';
};

const subtractCountHandler = () => {
    count = count -1
    console.log('subtract 1')
    currentCount.innerText = count
    changeColor()
};

const addCountHandler = () => {
    count = count +1
    console.log('add 1')
    currentCount.innerText = count
    changeColor()
};

subtractButton.addEventListener('click', subtractCountHandler);
addButton.addEventListener('click', addCountHandler);
