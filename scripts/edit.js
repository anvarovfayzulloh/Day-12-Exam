const $createForm = document.querySelector(".create__form");
const $inputs = $createForm.querySelectorAll("input, textarea");
const id = new URLSearchParams(location.search).get("productId");

const getBlog = () => {
    fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${id}`)
        .then(response => response.json())
        .then(data => data.data)
        .then(blog => {
            $inputs[0].value = blog.author;
            $inputs[1].value = blog.title;
            $inputs[2].value = blog.image;
            $inputs[3].value = blog.tags;
            $inputs[4].value = blog.description;
        });
};

const updateBlog = (e) => {
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);
    const article = {
        author: values[0],
        title: values[1],
        image: values[2],
        tags: values[3].split(", ").map(tag => tag.trim()),
        description: values[4],
    };

    fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(article)
    })
    .then(response => response.json())
    .then(data => {
        location.replace(location.origin + "/index.html");
        console.log(data);
    });
};

$createForm.addEventListener("submit", updateBlog);

getBlog();
