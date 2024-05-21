const $submit = document.getElementById("submit");
    $password = document.getElementById("password");
    $email = document.getElementById("email");
    $visible = document.getElementById("visible");
    
    document.addEventListener("change", (e)=>{
        if(e.target === $visible){
            if($visible.checked === false) $password.type = "password";
            else $password.type = "text";
        }
    });
    
const $submitSign = document.getElementById("submitSign")
    $passwordSign = document.getElementById("passwordSign")
    $visibleSign = document.getElementById("visibleSign")
    
    document.addEventListener("change", (e)=>{
        if(e.target === $visibleSign) {
            if($visibleSign.checked === false) $passwordSign.type = "passwordSign";
            else $passwordSign.type = "text";
        }
    });

    document.addEventListener("click", (e)=>{
        if (e.target === $submit) {
            if($password.value !== "" && $email.value !== "") {
                e.preventDefault();
                window.location.href = "inicio.html";
            }
        }
    })