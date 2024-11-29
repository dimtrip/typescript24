
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isValidPassword(password) {
    return password.length >= 4 && password.length <= 20;
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!isValidPassword(password)) {
        document.getElementById('passwordError').textContent = 'Password must be between 4 and 20 characters.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (isValid) {
        const user = {
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(user));

        alert('Registration successful!');
        window.location.href = 'index.html';
    }
});
