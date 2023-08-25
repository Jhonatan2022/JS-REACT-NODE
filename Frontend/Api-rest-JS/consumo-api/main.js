const API_KEY = '&api_key=live_4A56aqKIbwdoK3QmYYS9QdCGZqrPEzKmCwC9C3SQ0zvFJY52CrLIdaGO3rcRdpC2'

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=2${API_KEY}`;
const API_URL_FAVOURITES = `https://api.thecatapi.com/v1/favourites?limit=2${API_KEY}`;

const spanError = document.getElementById('error');


async function loadRandomKittens() {
    const response = await fetch(API_URL_RANDOM);
    const data = await response.json();

    console.log('Random', data);

    if (response.status !== 200) {
        spanError.textContent = data.message + ' ' + response.status;
        return;
    } else {    
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}

async function loadFavourites() {
    const response = await fetch(API_URL_FAVOURITES);
    const data = await response.json();

    console.log('Favourites', data);

    if (response.status !== 200) {
        spanError.textContent = response.statusText;
        return;
    } else {
    }
}


async function saveFavourite() {
    const response = await fetch(API_URL_FAVOURITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: '1fk'
        })
    });
    const data = await response.json();

    console.log('Save', data);

    if (response.status !== 200) {
        spanError.textContent = response.status;
        return;
    } else {
    }
}

loadRandomKittens();
loadFavourites();