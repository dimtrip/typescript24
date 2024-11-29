
document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById('post-list');
    const logoutButton = document.getElementById('logout-button');
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postItem = document.createElement('li');
                postItem.textContent = post.title;
                postItem.style.cursor = 'pointer';
                postItem.addEventListener('click', () => {
                    window.location.href = `singlepost.html?id=${post.id}`;
                });
                postList.appendChild(postItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userToken');
        window.location.href = 'index.html';
    });
});
