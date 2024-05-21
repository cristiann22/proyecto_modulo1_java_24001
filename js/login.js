const $submit = document.getElementById("submit");
    const $password = document.getElementById("password");
    const $email = document.getElementById("email");
    const $visible = document.getElementById("visible");
    
    $visible.addEventListener("change", (e)=>{
            // if($visible.checked === false) $password.type = "password";
            // else $password.type = "text";
            $password.type = ($visible.checked === false) ? "password" : "text"
        });
    
const $submitSign = document.getElementById("submitSign")
    const $passwordSign = document.getElementById("passwordSign")
    const $visibleSign = document.getElementById("visibleSign")
    
    $visibleSign.addEventListener("change", (e)=>{
        // if(e.target === $visibleSign) {
        //     if($visibleSign.checked === false) $passwordSign.type = "passwordSign";
        //     else $passwordSign.type = "text";
        // }
        $passwordSign.type = ($visibleSign.checked === false) ? "password" : "text"
    });

    $submit.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
            if($password.value !== "" && $email.value !== "") {
                window.location.href = "inicio.html";
            }
    })