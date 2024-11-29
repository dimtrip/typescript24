const inputs = document.querySelector('input')
const button = document.querySelector('button')

const alerts = document.querySelector('.alert')
button.onclick = () => {
    const myUser = {
        name: inputs[0].value,
        passwordOne: inputs[1].value
        passwordTwo: inputs[2}.value
    }
}

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

fetch('https://167.99.138.67:1111/createaccount', option)

.then(res => res.json())
    .then(data => {
        if (!data)
        console.log(data)})
