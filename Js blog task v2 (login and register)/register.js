const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")

const alert = document.querySelector(".alert")

// keys to send
// name, passwordOne, passwordTwo

alert.style.display = "none"

button.onclick = () => {
    const myUser = {
        name: inputs[0].value,
        passwordOne: inputs[1].value,
        passwordTwo: inputs[2].value
    }

    const option = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(myUser)
    }

    fetch("http://167.99.138.67:1111/createaccount", option)
        .then(res => res.json())
        .then(data => {


            alert.innerHTML = data.message
            alert.style.display = "block"

            console.log(data)
        })

}


