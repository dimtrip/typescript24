
const body = document.querySelector("body")

const username = localStorage.getItem("username")
const post_id = localStorage.getItem("post_id")

let post = null

fetch(`http://167.99.138.67:1111/getsinglepost/${username}/${post_id}`)
    .then(res => res.json())
    .then(data => {

        post = data.data

        body.innerHTML += `
            <div class="card" id="XshKT9y2oK">
                <img src="${data.data.image}" alt="What different types of acne tells about you" class="card-image">
                <div class="card-content">
                    <h2 class="card-title">${data.data.title}</h2>
                    <p class="card-description">
                        ${data.data.description}
                    </p>
                    <p class="card-meta">
                        Posted by <strong>${data.data.username}</strong> on 
                        <span class="card-timestamp">${new Date(data.data.timestamp).toDateString()}</span>
                    </p>
                </div>
            </div>
`

        const username = document.querySelector("strong")

        username.onclick = () => {
            localStorage.setItem("username", post.username)

            window.location.href = "home.html"
        }

    })