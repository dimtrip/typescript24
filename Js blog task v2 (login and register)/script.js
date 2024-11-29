
const body = document.querySelector("body")

let posts = []

fetch("http://167.99.138.67:1111/getallposts")
    .then(res => res.json())
    .then(data => {

        for (let i = 0; i < 100; i++) {
            posts.push(data.data[i])
            body.innerHTML += `
            <div class="card" id="XshKT9y2oK">
                <img src="${data.data[i].image}" alt="What different types of acne tells about you" class="card-image">
                <div class="card-content">
                    <h2 class="card-title">${data.data[i].title}</h2>
                    <p class="card-description">
                        ${data.data[i].description}
                    </p>
                    <p class="card-meta">
                        Posted by <strong>${data.data[i].username}</strong> on 
                        <span class="card-timestamp">${ new Date(data.data[i].timestamp).toDateString()}</span>
                    </p>
                </div>
            </div>
            `
        }


        const titles = document.querySelectorAll("h2")

        titles.forEach((item, index) => {
            item.onclick = () => {
                localStorage.setItem("username", posts[index].username)
                localStorage.setItem("post_id", posts[index].id)

                window.location.href = "singlePost.html"
            }
        })

        const usernames = document.querySelectorAll("strong")

        usernames.forEach((item, index) => {
            item.onclick = () => {
                localStorage.setItem("username", posts[index].username)

                window.location.href = "home.html"

            }
        })


    })