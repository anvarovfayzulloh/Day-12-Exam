const $cardsWrapper = document.querySelector(".blog_cards");
const $blogContent = document.querySelector(".blog__content");
const $blog = document.querySelector(".blog");

const renderBlogs = (blogs) => {

    blogs.forEach(blog => {
        const $blogElement = $blog.cloneNode(true);
        $blogElement.querySelector("#banner").src = blog.image;
        $blogElement.querySelector(".blog__title").innerHTML = blog.title;

        let dottedDesc = blog.description.slice(0, 40) + (blog.description.length > 40 ? "..." : "");
        $blogElement.querySelector(".blog__text").innerHTML = dottedDesc;
        $blogElement.querySelector(".blog_user_name").innerHTML = blog.author;
        $blogElement.querySelector("#href").href = `./product.html?productId=${blog._id}`;
        
        $blogElement.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.preventDefault();
            deleteBlog(blog._id, $blogElement);
        });

        $blogElement.querySelector(".edit-btn").addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = `./edit.html?productId=${blog._id}`;
        });

        $cardsWrapper.appendChild($blogElement);
    });
    $blog.remove();
};

const deleteBlog = (id, blogElement) => {
    fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${id}`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        method: "DELETE"
    })
    .then(response => {
        console.log(response)
        blogElement.remove()
    })
};

fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs`)
    .then(response => response.json())
    .then(data => data.data)
    .then(blogs => renderBlogs(blogs));
