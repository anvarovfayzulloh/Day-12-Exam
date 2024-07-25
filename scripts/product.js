const id = new URLSearchParams(location.search).get("productId")
const $title = document.querySelector(".blog__title")
const $tag = document.querySelector(".blog__tag")
const $img = document.querySelector("#blog__banner")
const $desc = document.querySelector(".description")

const renderBlog = (blog)=> {
    $title.innerHTML = blog.title
    $tag.innerHTML = `#${blog.tags}`
    $img.src= blog.image
    $desc.innerHTML = blog.description
}   

fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${id}`)
    .then(responce => responce.json())
    .then(data => data.data)
    .then(blog => {
        renderBlog(blog)
    })