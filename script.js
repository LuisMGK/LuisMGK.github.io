// script.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    function createFlower(x, y, type) {
        const flower = document.createElement('div');
        flower.classList.add('flower', type);
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        const stem = document.createElement('div');
        stem.classList.add('stem');
        flower.appendChild(stem);

        const petal = document.createElement('div');
        petal.classList.add('petal');
        flower.appendChild(petal);

        document.body.appendChild(flower);
    }

    // Crear flores alrededor de la página
    const positions = [
        { x: 50, y: 50, type: 'tulip' },
        { x: 200, y: 150, type: 'rose' },
        { x: 350, y: 100, type: 'sunflower' },
        { x: 500, y: 200, type: 'tulip' },
        { x: 650, y: 50, type: 'rose' },
        { x: 800, y: 150, type: 'sunflower' },
        { x: 950, y: 100, type: 'tulip' },
        { x: 50, y: 400, type: 'rose' },
        { x: 200, y: 500, type: 'sunflower' },
        { x: 350, y: 600, type: 'tulip' },
        { x: 500, y: 700, type: 'rose' },
        { x: 650, y: 800, type: 'sunflower' },
        { x: 800, y: 900, type: 'tulip' },
        { x: 950, y: 1000, type: 'rose' }
    ];

    positions.forEach(pos => {
        createFlower(pos.x, pos.y, pos.type);
    });
});
