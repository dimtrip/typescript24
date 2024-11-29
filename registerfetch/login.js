const name = document.querySelector('#name')
const passwordOne = document.querySelector('#password')
const passwordTwo = document.querySelector('#confirm_password')
const btn = document.querySelector('#submit')



const myUser = {
    name: 'DimTrip',
    passwordOne: '123456',
    passwordTwo: '123456',
}

const option = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(myUser)
}

fetch('https://167.99.138.67:1111/login', option)

    .then(res => res.json())
    .then(data => {
        console.log(data)})
