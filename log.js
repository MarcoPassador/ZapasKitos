let btnLog = document.getElementById("btnLog");

function comprobarDatos(){
    let nombreUsLog = document.getElementById("nombreUsLog").value
    let contralog = document.getElementById("contraLog").value
    if(localStorage.getItem("contraReg") === contralog || localStorage.getItem("nomUsReg") === nombreUsLog){
        alert(`Te has logueado correctamente ${localStorage.getItem("nomUsReg")}`);
        let logueado = true
        localStorage.setItem("logueado", logueado)
        

    } else{
        alert("Nombre o Contraseña incorrecto")
    }
    
}

btnLog.addEventListener("click", comprobarDatos);
