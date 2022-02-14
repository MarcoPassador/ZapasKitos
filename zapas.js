
const url = "zapas.json";


function getZapasData(){
    $.get(url, function(resp, est){
        console.log(est)
        if (est === "success"){
            let listaZapas = resp
            console.log(listaZapas);
            return listaZapas;
            
        }
    })
    // return listaZapas
}

console.log(getZapasData());

let listaZapatillas = getZapasData()

console.log(listaZapatillas)






// let listaZapas

// function getZapasData(){
//     req = new XMLHttpRequest();
//     req.onreadystatechange=function(){
//         if(this.readyState == 4 && this.status == 200){
//             zapasparsed = JSON.parse(this.responseText);
//             console.log(zapasparsed);
            
//         }else{
//             console.log("error")
//         }
//     };
//     req.open("GET","zapas.json", true)
//     req.send();
// }


// getZapasData()

// console.log(getZapasData())






// let listaZapatillas = [
//     {
//         nombre : "Supernova M",
//         marca : "Adidas",
//         precio : 2500,
//         imagen : "zapa1.jpg",
//         sexo : "Hombre"

//     },
//     {
//         nombre : "Gel-Nimbus 23",
//         marca : "Ascis",
//         precio : 2000,
//         imagen : "zapa2.jpg",
//         sexo : "Hombre"
//     },
//     {
//         nombre : "R78 ADP",
//         marca : "Puma",
//         precio : 3500,
//         imagen : "zapa3.jpg",
//         sexo : "Hombre"
//     },
//     {
//         nombre : "Caven",
//         marca : "Puma",
//         precio : 4000,
//         imagen : "zapa4.jpg",
//         sexo : "Hombre"
//     },
//     {
//         nombre : "Old Skool",
//         marca : "Vans",
//         precio : 3000,
//         imagen : "zapa5.jpg",
//         sexo : "Hombre"
//     },
//     {
//         nombre : "Run 80s",
//         marca : "Adidas",
//         precio : 2500,
//         imagen : "zapa6.jpg",
//         sexo :  "Mujer"
//     },
//     {
//         nombre : "Grand Court Base",
//         marca : "Adidas",
//         precio : 5000,
//         imagen : "zapa7.jpg",
//         sexo : "Hombre"
//     },
//     {
//         nombre : "Air Zoom Vomero",
//         marca : "Nike",
//         precio : 4500,
//         imagen : "zapa8.jpg",
//         sexo : "Hombre"
//     },
//     {
//         nombre : "Supernova +",
//         marca : "Adidas",
//         precio : 4300,
//         imagen : "zapa9.jpg",
//         sexo : "Mujer"
//     },
//     {
//         nombre : "Owaysis",
//         marca : "Nike",
//         precio : 3500,
//         imagen : "zapa10.jpg",
//         sexo : "Mujer"
//     },
//     {
//         nombre : "Zoom Winflo 8",
//         marca : "Nike",
//         precio : 6300,
//         imagen : "zapa11.jpg",
//         sexo : "Mujer"
//     },
//     {
//         nombre : "Gel Padel",
//         marca : "Ascis",
//         precio : 2350,
//         imagen : "zapa12.jpg",
//         sexo : "Mujer"
//     },
//     {
//         nombre : "Gel-Hypersonic 2",
//         marca : "Ascis",
//         precio : 3500,
//         imagen : "zapa13.jpg",
//         sexo : "Mujer"
//     },
//     {
//         nombre : "Wired Run",
//         marca : "Puma",
//         precio : 3800,
//         imagen : "zapa14.jpg",
//         sexo : "Mujer"
//     },
//     {
//         nombre : "Air Max Excee",
//         marca : "Nike",
//         precio : 1500,
//         imagen : "zapa15.jpg",
//         sexo : "Nine"  
//     },
//     {
//         nombre : "Court Borough Low",
//         marca : "Nike",
//         precio : 2000,
//         imagen : "zapa16.jpg",
//         sexo : "Nine"
//     },
//     {
//         nombre : "Star Runner",
//         marca : "Nike",
//         precio : 1900,
//         imagen : "zapa17.jpg",
//         sexo : "Nine"
//     },
//     {
//         nombre : "EQ21 Run",
//         marca : "Adidas",
//         precio : 2500,
//         imagen : "zapa18.jpg",
//         sexo : "Nine"
//     },
//     {
//         nombre : "Runfalcon",
//         marca : "Adidas",
//         precio : 2100,
//         imagen : "zapa19.jpg",
//         sexo : "Nine"
//     },
//     {
//         nombre : "Breaknet",
//         marca : "Adidas",
//         precio : 1700,
//         imagen : "zapa20.jpg",
//         sexo : "Nine"
//     },
//     {
//         nombre : "Graviton",
//         marca : "Puma",
//         precio : 3800,
//         imagen : "zapa21.jpg",
//         sexo : "Nine"
//     }
    

// ]

// Listas de zapatillas

let listaHombres = listaZapatillas.filter(el => el.sexo == "Hombre");

let listaMujeres = listaZapatillas.filter (el => el.sexo == "Mujer");

let listaNines = listaZapatillas.filter(el => el.sexo == "Nine");


// Zapatillas pagina principal

listaZapatillas.each(function(){
    $("#mainzapas").append(`
    <a class="linkZap" href="#">
        <label class="hoverZap">Añadir al carrito</label>
        <div class ="hovercart">
            <div class="divZap">
                <img src="img/${zapatilla.imagen}" alt="zapatilla">
                <h4 class ="zanombre">${zapatilla.nombre}</h4>
                <i>${zapatilla.marca}</i>
                <span class ="zaprecio">$${zapatilla.precio}</span>
            </div>
        </div>
    `
    )
})

// listaZapatillas.forEach(zapatilla  => {
//     let nodo = document.createElement("a");
//     nodo.setAttribute("class", "linkZap");
//     nodo.setAttribute("href", "#");

//     nodo.innerHTML = `
//         <label class="hoverZap">Añadir al carrito</label>
//         <div class ="hovercart">
//             <div class="divZap">
//                 <img src="img/${zapatilla.imagen}" alt="zapatilla">
//                 <h4 class ="zanombre">${zapatilla.nombre}</h4>
//                 <i>${zapatilla.marca}</i>
//                 <span class ="zaprecio">$${zapatilla.precio}</span>
//             </div>
//         </div>
//         `
//     document.getElementById("mainzapas").appendChild(nodo);



// })


