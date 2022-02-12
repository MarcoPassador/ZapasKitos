
// Carrito
    $(".linkZap").on("click", function(){
        $("carrito_div").slideDown();
        
        let nombre = $(this).find("h4").text();
        let precio = parseFloat($(this).find("span").text().substring(1));
        let img = $(this).find("img").attr("src");

        $("#car_products").append(`
            <div class = "car_produ">
                <img src="${img}" alt="">
                <div class="produ_text">
                    <h3>${nombre}</h3>
                    <span class="precioCar">$${precio}</span>
                </div>
                
                <button class="borrar">X</button>
            
            </div>
        
        `)
        carritoItems()
        calcularTotal()

        $(".borrar").on("click", function(){
            $(this).parent().remove();
            carritoItems();
            calcularTotal();
        })
    })

    const carritoItems = () =>{
        $(".car_num").text(`${$("#car_products").children().length}`)
    }

    const calcularTotal = () =>{
        let precioTotal = 0;
        $(".precioCar").each(function (){
            let precioItem = parseFloat($(this).text().substring(1))
            precioTotal += precioItem
        })

        $("#precioTot").text(`Precio Total: $${precioTotal}`)
    }
    






// Bienvenida Log In

if (localStorage.getItem("logueado") === "true"){
    $("#logued").append(`Bienvenido ${localStorage.getItem("nomUsReg")}`);

}else{
    $("#divLogued").attr("display", "none");
}





// Animaciones

$("#foot_scroll_a").on("click", ()=>{
    $("html, body").animate({scrollTop: $("#titu").offset().top}, ()=>{
        $("#titu").fadeOut("slow", ()=>{
            $("#titu").fadeIn("slow")
        })
    })
})

$("#carrito_div").hide();

$("#carrito").on("click", () =>{
    $("#carrito_div").slideToggle("slow");
})





















