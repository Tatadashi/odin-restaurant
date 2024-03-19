import founder from './founders.png';
import nature from './nature.webp';

function showAbout () {
    document.body.style.backgroundColor = '#eedd82';
    
    const contentDiv = document.getElementById('content');

    const founders = document.createElement('h1');
    founders.innerText = 'Our Founders';
    contentDiv.appendChild(founders);

    const founderImg = document.createElement('img');
    founderImg.src = founder;
    founderImg.alt = 'real picture of real founders';
    contentDiv.appendChild(founderImg);

    const description = document.createElement('p');
    description.innerText = 'Our Founders use only homegrown, fresh, all-natural produce sourced from ethical places. They have been maintaining this quality ever since they founded this food establishment 199 years ago.';
    contentDiv.appendChild(description);

    const natureImg = document.createElement('img');
    natureImg.src = nature;
    natureImg.alt = 'homegrown, fresh, all-natural produce sourced from ethical places';
    contentDiv.appendChild(natureImg);
}

export {showAbout};