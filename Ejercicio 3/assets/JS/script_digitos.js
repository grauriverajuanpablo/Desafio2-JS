const button = document.querySelector("button")
const respuesta = document.querySelector("#respuesta")
button.addEventListener("click",function(){

    let n1 =document.querySelector("#option1").value
    let n2 =document.querySelector("#option2").value
    let n3 =document.querySelector("#option3").value

    let cantidad = n1 + n2 + n3

    if (cantidad == '411'){

        respuesta.innerHTML = "Password1 Correcta"
    }
    else if (cantidad == '414'){

        respuesta.innerHTML = "Password2 Correcta"
    }

    else{
        respuesta.innerHTML = "Password Erronea"
    }










})