const $signupForm = document.querySelector(".signupForm");
const $inputs = $signupForm.querySelectorAll("input");

const signUp = (e) => {
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);
    const user = {
        name: values[0],
        email: values[1],
        password: values[2],
    }
    
        fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/user/register`,{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => data.data)
            .then(user => {
                if(user._id){
                    location.replace(location.origin + "/pages/login.html")
                    console.log(user._id)
                }
                else{
                    console.log("failed")
                }
                console.log(user)
            })

};

$signupForm.addEventListener("submit", signUp);
