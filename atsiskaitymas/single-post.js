
document.addEventListener("DOMContentLoaded", () => {
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const logoutButton = document.getElementById('logout-button');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(post => {
            postTitle.textContent = post.title;
            postBody.textContent = post.body;
        })
        .catch(error => console.error('Error fetching the post:', error));

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userToken');
        window.location.href = 'index.html';
    });
});
