const $createForm = document.querySelector(".create__form")
const $inputs = $createForm.querySelectorAll("input, textarea")

const createBlog = (e) => {
    e.preventDefault()

    const values = Array.from($inputs).map(input => input.value)
    const article ={
        author: values[0],
        title: values[1],
        image: values[2],
        tags: values[3],
        description: values[4],
    } 
    console.log(article)

    fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs`,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
            "Authorization":  `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(article)
    })
    .then(responce => responce.json())
    .then(data => {
        location.replace(location.origin + "/index.html")
        console.log(data)
    })
}



$createForm.addEventListener("submit", createBlog)