let btnReg = document.getElementById("btnRegister");



function guardarDatos(){
    let nombre = document.getElementById("regNombre").value;
    localStorage.setItem("nombrereg", nombre);
    let apellido = document.getElementById("regApellido").value
    localStorage.setItem("apellidoreg", apellido);
    let nomUs = document.getElementById("nomUs").value;
    localStorage.setItem("nomUsReg", nomUs);

    let contraReg = document.getElementById("contraReg").value;
    let confirmReg = document.getElementById("confirmReg").value;
    

    if (contraReg !== confirmReg){
        alert("Las contraseñas no coinciden")
    } else{
        localStorage.setItem("contraReg", contraReg);

        localStorage.setItem("confirmReg", confirmReg);

    }


}



btnReg.addEventListener("click", guardarDatos);
