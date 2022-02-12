// Zapatillas pagina Hombres

listaHombres.forEach(zapatilla => {
    let nodo = document.createElement("a");
    nodo.setAttribute("class", "linkZap");
    nodo.setAttribute("href", "#");

    nodo.innerHTML = `
    <label class="hoverZap">Añadir al carrito</label>
    <div class ="hovercart">
        <div class="divZap">
            <img src="img/${zapatilla.imagen}" alt="zapatilla">
            <h4>${zapatilla.nombre}</h4>
            <i>${zapatilla.marca}</i>
            <span class ="zaprecio">$${zapatilla.precio}</span>
        </div>
    </div>`
    document.getElementById("hombzapas").appendChild(nodo);
})