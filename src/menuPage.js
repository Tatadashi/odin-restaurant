import berry from './berry.jpg';
import bear from './bear.webp';

function showMenu () {
    document.body.style.backgroundColor = '#be9fbf';

    addMenuItem('Assorted Berries', berry);
    addMenuItem('Bear', bear);
}

function addMenuItem (item, imageSrc) {
    const contentDiv = document.getElementById('content');

    const itemDiv = document.createElement('div');

    const name = document.createElement('h1');
    name.innerText = item;
    itemDiv.appendChild(name);

    const picture = document.createElement('img');
    picture.src = imageSrc;
    picture.alt = `picture of ${name}`;
    itemDiv.appendChild(picture);

    contentDiv.appendChild(itemDiv);
}

export {showMenu};