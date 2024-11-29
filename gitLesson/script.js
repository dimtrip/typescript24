
const fetchUsers = async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

const displayUsers = (users) => {
    const container = document.getElementById('user-cards-container');
    container.innerHTML = ''; // Clear any existing cards

    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', user.id);

        card.innerHTML = `
      <img src="${user.avatar}" alt="${user.name}">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <button class="delete-button">Delete</button>
    `;
        container.appendChild(card);

        const deleteButton = card.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => deleteCard(card));
    });
};

const deleteCard = (card) => {
    card.remove();
};

window.onload = fetchUsers;
