const $loginForm = document.querySelector(".loginForm");
const $inputs = $loginForm.querySelectorAll("input");

const login = (e) => {
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);

    const user = {
        email: values[0],
        password: values[1],
    };

    fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => data.data)
    .then(user => {
        
        if(user.token){
            console.log(user.token)
            localStorage.setItem("token", user.token)
            location.replace(location.origin + "/index.html")
        }
        else {

        }        
    })
};

$loginForm.addEventListener("submit", login);
