const postsApi = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
    try {
        const response = await fetch(postsApi);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        displayPosts(data);

    } catch (error) {
        console.error(error.message);
    }
}


function displayPosts(posts) {
    const postDisplay = document.querySelector("#post-list");

    posts.forEach(post => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);

        postDisplay.appendChild(li);
    });
}

fetchPosts();