// Create 16x16 grid of square divs into container
for (let i = 0; i < 16; i++) {
    const divContainer = document.createElement('div');
    divContainer.style.display = 'flex';

    const container = document.querySelector('.container');
    container.appendChild(divContainer);

    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid');
        div.style.width = "60px";
        div.style.height = "60px";
        div.style.opacity = "0.0";
        div.dataset.opacity = "0.0";
        
        divContainer.appendChild(div);
    }
}

// Make hover effect on grid divs using event delegation
let container = document.querySelector('.container');
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid')) {
        const r = randomizeColor();
        const g = randomizeColor();
        const b = randomizeColor();
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        let opacity = parseFloat(e.target.dataset.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            opacity = Math.min(1, opacity);
            e.target.dataset.opacity = opacity;
            e.target.style.opacity = opacity;
        }
    }
});

// Set grid button
const setGrid = document.querySelector('.numberSquares');
setGrid.addEventListener('click', () => {
    let gridSize;
    let gridSizeInt;

    while (true) {
        gridSize = prompt("Enter a grid size (Max 100)");
        gridSizeInt = parseInt(gridSize);

        if (isNaN(gridSizeInt)) {
            alert("Please enter a valid number.");
            continue;
        } else if (gridSizeInt < 1) {
            alert("Please enter a number from 1 - 100");
            continue;
        } else if (gridSizeInt > 100) {
            alert("Max value is 100. Setting to 100.");
            gridSizeInt = 100;
        } else {
            break;
        }
    }

    let gridDiv = document.querySelectorAll('.grid');
    gridDiv.forEach(div => div.remove());

    createGrid(gridSizeInt);
});

// Create new grid based on input
function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const divContainer = document.createElement('div');
        divContainer.style.display = 'flex';
    
        const container = document.querySelector('.container');
        container.appendChild(divContainer);
    
        for (let j = 0; j < num; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'grid');
            let pixelSize = parseInt(960 / num);
            div.style.width = pixelSize + 'px';
            div.style.height = pixelSize + 'px';
            div.style.opacity = '0.0';
            div.dataset.opacity = '0.0';
            
            divContainer.appendChild(div);
        }
    }
}

// Function to return a randon value from 0-255
function randomizeColor () {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(255);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}