const $createForm = document.querySelector(".create__form")
const $inputs = $createForm.querySelectorAll("input, textarea")
const $signout = document.querySelector("#signout")

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

    fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs`,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
            "Authorization":  `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(article),
    })
    .then(responce => responce.json())
    .then(data => {
        if(data.status === "success"){
            location.replace(location.origin + "/index.html")
        }
        else if(localStorage.getItem("token") ===""){
            Toastify({
                text: "Authorization failed",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true, 
                style: {
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "sans-serif",
                },
              }).showToast();
        }
        else if(data.success === false || data.status === "error"){
            Toastify({
                text: "All Lines Must Be Filled",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true, 
                style: {
                  background: "red",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "sans-serif",
                },
              }).showToast();
        }
        
    })
}



$createForm.addEventListener("submit", createBlog)
$signout.addEventListener("click",  () => {
    console.log("clicked")
    localStorage.removeItem('token')
    localStorage.setItem('token', "")
})