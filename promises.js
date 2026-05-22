// Exercise 1 — fake API with Promise
// Write a function getUser() that returns a Promise. It resolves with a user object after 1 second. Handle it with .then() and also rewrite using async/await.

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) resolve({ id: 1, name: "Ali" });
            else reject("User not found");
        }, 1000);
    });
}

getUser(1)
    .then((result) => console.log(result))
    .catch((error) => { console.log(error) })



// Exercise 2 — fetch real API data
// Use fetch() with async/await to get a post from JSONPlaceholder. Log the title. Handle errors.
async function getPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    console.log(data.title);
  } catch (err) {
    console.error("Error:", err);
  }
}
getPost(1);
