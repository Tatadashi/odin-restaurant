import restaurant from './restaurant.jpg';

function showHome () {
    document.body.style.backgroundColor = 'grey';
    
    const contentDiv = document.getElementById('content');

    const title = document.createElement('h1');
    title.innerText = 'Edible Food';
    contentDiv.appendChild(title);

    const restaurantPic = document.createElement('img');
    restaurantPic.src = restaurant;
    restaurantPic.alt = 'totally not abandoned looking restaurant';
    contentDiv.appendChild(restaurantPic);

    const description = document.createElement('p');
    description.innerText = 'A restaurant which sells food that is very edible. The food are prepared and cooked so they can be sold to paying customers. The food costs money and takes time to make. There are people who work at this restaurant. They are paid.';
    contentDiv.appendChild(description);
}

export {showHome};