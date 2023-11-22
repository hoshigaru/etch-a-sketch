let gridSize = 0;

const container = document.querySelector('#container');

function generateGrid () {    
    const sectionSize = 960/gridSize;
    let flexBasisNum;
    
    // sadly this feels hacky, but I'm not sure how else to dynamically set flex-basis based on the user's number and make 
    // the flexBasisNum * gridSize = a BIT below 100, since the total equaling 100 makes each grid row one box short i.e. a grid of 10 will show only 9 per row
    switch (true) {
        case gridSize < 30:
            flexBasisNum = 100/gridSize - gridSize/(gridSize*5);
            break;
        case gridSize < 50:
            flexBasisNum = 100/gridSize - gridSize/(gridSize*8);
            break;
        case gridSize < 80:
            flexBasisNum = 100/gridSize - gridSize/(gridSize*70);
            break;
        case gridSize <= 90:
            flexBasisNum = 100/gridSize - gridSize/(gridSize*90);
            break;
    }

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++ ) {
            const gridDiv = document.createElement('div');
            gridDiv.setAttribute('class', 'grid');
            container.appendChild(gridDiv);
            gridDiv.setAttribute('width', `${sectionSize}px`);
            gridDiv.setAttribute('height', `${sectionSize}px`);
            gridDiv.style.flexBasis = `${flexBasisNum}%`;
    }}

    const nodeList = container.querySelectorAll('div');

    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('mouseover', (e) => e.target.classList.add('hovered'));
    }
}

// note to self: have to fix flex-basis application i think... 960/gridSize should work, but how to make it work? oh wait. fix width and height lol

function clearGrid() {
    const nodeList = container.querySelectorAll('div');
    for (let i = nodeList.length - 1; i >= 0; i--) {
        container.removeChild(nodeList[i]);
    }
}

const nodeList = container.querySelectorAll('div');

for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('mouseover', (e) => e.target.classList.add('hovered'));
}

const gridSizeBtn = document.createElement('button');
gridSizeBtn.classList.add('gridSizeBtn');
gridSizeBtn.textContent = "Set grid size";

gridSizeBtn.setAttribute('onclick', 'setGridSize()');

const body = document.querySelector('body');
body.prepend(gridSizeBtn);

function setGridSize() {
    // instructions say 100, but I can't get it to display properly above 94...
    let userAnswer = prompt("Type in the grid size you would like (max 90)");

    if (userAnswer <= 90) {
        gridSize = userAnswer;
        clearGrid();
        generateGrid();
    }
    else {
        alert("Sorry, we only support grid sizes between 1 and 90. Try picking a smaller number.")
    }
}