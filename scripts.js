const GRID_SIZE = 16;

const container = document.querySelector('#container');

for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++ ) {
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'grid');
        container.appendChild(gridDiv);
}}

const nodeList = container.querySelectorAll('div');

for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('mouseover', (e) => e.target.classList.add('hovered'));
}