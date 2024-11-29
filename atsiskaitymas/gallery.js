
document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const logoutButton = document.getElementById('logout-button');
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=20';


    fetch(apiUrl)
        .then(response => response.json())
        .then(photos => {
            photos.forEach(photo => {
                const photoItem = document.createElement('div');
                photoItem.classList.add('photo-item');

                const img = document.createElement('img');
                img.src = photo.thumbnailUrl;
                img.alt = photo.title;
                img.classList.add('gallery-image');

                photoItem.appendChild(img);
                galleryGrid.appendChild(photoItem);
            });
        })
        .catch(error => console.error('Error fetching photos:', error));


    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userToken');
        window.location.href = 'index.html';
    });
});
