
document.addEventListener("DOMContentLoaded", () => {
    const userEmail = document.getElementById('user-email');
    const logoutButton = document.getElementById('logout-button');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messageHistory = document.getElementById('message-history');


    userEmail.textContent = `Email: ${localStorage.getItem('userEmail') || 'example@user.com'}`;


    function getCurrentTimestamp() {
        const now = new Date();
        return now.toLocaleTimeString();
    }


    function appendMessage(messageText) {
        const timestamp = getCurrentTimestamp();
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        messageElement.innerHTML = `
            <div class="message-text">${messageText}</div>
            <div class="message-time">${timestamp}</div>
        `;
        messageHistory.appendChild(messageElement);
        messageHistory.scrollTop = messageHistory.scrollHeight;
    }

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const messageText = messageInput.value.trim();

        if (messageText) {
            appendMessage(messageText);
            messageInput.value = '';
        }
    });


    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    });
});
