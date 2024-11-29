
document.addEventListener("DOMContentLoaded", () => {
    const userEmail = document.getElementById('user-email');
    const profileImage = document.getElementById('profile-image');
    const uploadProfilePic = document.getElementById('upload-profile-pic');
    const logoutButton = document.getElementById('logout-button');
    const changePasswordForm = document.getElementById('change-password-form');


    userEmail.textContent = `Email: ${localStorage.getItem('userEmail') || 'example@user.com'}`;

    uploadProfilePic.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                profileImage.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });

    changePasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('New passwords do not match!');
            return;
        }

        console.log('Changing password from', currentPassword, 'to', newPassword);
        alert('Password changed successfully. Please log in again with your new password.');

        changePasswordForm.reset();

        window.location.href = 'index.html';
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    });
});
