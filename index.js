const character = newImage('assets/green-character/static.gif');
let x = 100;
let y = 250;
let direction = null;
let isMoving = false;

function moveCharacter() {
    character.style.left = x + 'px';
    character.style.bottom = y + 'px';
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            x = Math.max(x - 5, 0);
            direction = 'west';
            isMoving = true;
            break;
        case 'ArrowUp':
            y = Math.min(y + 5, window.innerHeight - character.height);
            direction = 'north';
            isMoving = true;
            break;
        case 'ArrowRight':
            x = Math.min(x + 5, window.innerWidth - character.width);
            direction = 'east';
            isMoving = true;
            break;
        case 'ArrowDown':
            y = Math.max(y - 5, 0);
            direction = 'south';
            isMoving = true;
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', () => {
    direction = null;
    isMoving = false;
});

setInterval(() => {
    if (isMoving) {
        if (direction === 'west') {
            x = Math.max(x - 1, 0);
        }
        if (direction === 'north') {
            y = Math.min(y + 1, window.innerHeight - character.height);
        }
        if (direction === 'east') {
            x = Math.min(x + 1, window.innerWidth - character.width);
        }
        if (direction === 'south') {
            y = Math.max(y - 1, 0);
        }

        moveCharacter();
    }
}, 100);

move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);
