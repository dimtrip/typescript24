

// createPost.js

document.getElementById('createPostForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the secret key from local storage
    const secretKey = localStorage.getItem('A1NyXgWzUPNpFajcBLYM');
    if (!secretKey) {
        alert('No secret key found. Please log in again.');
        return;
    }
    // Gather form data
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').files[0]; // Assuming user uploads a file
    const description = document.getElementById('description').value;

    // Prepare the form data to send
    const formData = new FormData();
    formData.append('secretKey', secretKey);
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description);

    // Send the POST request to the backend
    fetch('http://167.99.138.67:1111/createpost', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Post created successfully!');
            } else {
                alert('Failed to create post. Try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error creating your post.');
        });
});
// Example of storing the secret key after a successful login
function storeSecretKey(secretKey) {
    localStorage.setItem('A1NyXgWzUPNpFajcBLYM', secretKey);
}
