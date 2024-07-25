const id = new URLSearchParams(location.search).get("productId")
const $title = document.querySelector(".blog__title")
const $tag = document.querySelector(".blog__tag")
const $img = document.querySelector("#blog__banner")
const $desc = document.querySelector(".description")

function hideSpinner() {
    document.getElementById('spinner').classList.add('hidden');
    document.getElementById('spinnerWRapper').classList.remove('flex')
    document.getElementById('spinnerWRapper').classList.add('hidden')
    document.getElementById('load').classList.add('hidden')
}
function showSpinner() {
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('spinnerWRapper').classList.add('flex')
    document.getElementById('spinnerWRapper').classList.remove('hidden')
    document.getElementById('load').classList.remove('hidden')
}
showSpinner()
const renderBlog = (blog)=> {
    $title.innerHTML = blog.title
    $tag.innerHTML = `#${blog.tags}`
    $img.src= blog.image
    $desc.innerHTML = blog.description
    hideSpinner()
}   

fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${id}`)
    .then(responce => responce.json())
    .then(data => data.data)
    .then(blog => {
        renderBlog(blog)
    })