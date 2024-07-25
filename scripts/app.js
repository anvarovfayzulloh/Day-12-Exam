const $cardsWrapper = document.querySelector(".blog_cards");
const $blog = document.querySelector(".blog");

const renderBlogs = (blogs) => {
    console.log(blogs);
    
    blogs.forEach(blog => {
        const $blogElement = $blog.cloneNode(true);
        $blogElement.querySelector("#banner").src = blog.image;
        $blogElement.querySelector(".blog__title").innerHTML = blog.title;
        
        let dottedDesc = blog.description.slice(0, 40) + (blog.description.length > 40   ? "..." : "");
        $blogElement.querySelector(".blog__text").innerHTML = dottedDesc;
        $blogElement.querySelector(".blog_user_name").innerHTML = blog.author
        $blogElement.querySelector("#href").href = `./pages/product.html?productId=${blog._id}`
        $cardsWrapper.appendChild($blogElement);
    });
    $blog.remove();
};

fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs`)
    .then(response => response.json())
    .then(data => data.data)
    .then(blogs => renderBlogs(blogs));
