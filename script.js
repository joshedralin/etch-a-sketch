// Create 16x16 grid of square divs into container
for (let i = 0; i < 16; i++) {
    const divContainer = document.createElement('div');
    divContainer.style.display = 'flex';

    const container = document.querySelector('.container');
    container.appendChild(divContainer);

    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid');
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.border = '1px solid black';
        
        divContainer.appendChild(div);
    }
}

// Make hover effect on grid divs
const gridDiv = document.querySelectorAll('.grid');
gridDiv.forEach(div => {
    div.addEventListener('mouseenter', e => {
        e.target.classList.add('hovered');
    });
});