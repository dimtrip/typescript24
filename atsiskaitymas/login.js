
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));


    if (storedUser) {
        if (email === storedUser.email && password === storedUser.password) {
            alert('Login successful!');

            window.location.href = 'home.html';
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('No user found. Please register first.');
    }
});
