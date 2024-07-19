

let saludo
    alert("Hola Bienvenido/a al Resto de Walter \nHas click en ok para ver le menu")


function login(){
    confirm("Ingresa tus datos para continuar")
let nombre
do{
    nombre = prompt("Ingresa tu nombre")
    if(nombre ==""){
        alert("Debes introducir un nombre")
        console.log(nombre)
    }
}
while (nombre =="")

let apellido
do{
    apellido = prompt("Ingresa tu apellido")
    if(apellido ==""){
        alert("Debes introducir un apellido")
        console.log(apellido)
    }
 }
while (apellido =="")

let direccion
do{
    direccion = prompt("Nombre de la calle")
    if(direccion ==""){
        alert("Debes introducir una calle")
        console.log(direccion)
    }
}   
while (direccion =="")

let altura
do{
    altura = parseInt(prompt("Indica la altura"))
    if (isNaN(altura)){
        alert("Debes introducir una altura")
        console.log (altura)
    }
}   
while (isNaN(altura))
}   

const cartaPlatos = ["bife con pure", "spaguetti con salsa", "ensalda cesar", "pizza", "empandas"]
alert("MENU \nBife con pure - $1500 \nSpaguetti con salsa - $1000 \nEnsalda Cesar - $1200 \nPizza - $800 \nEmpanadas - $100 c/u")






let bifeConPure = 1500
    console.log(1500)

let spaguettiConSalsa = 1000
    console.log(1000)

let ensaldaCesar = 1200
    console.log(1200)

let pizza = 800
    console.log(800)
    
let empanadas = 100
    console.log(100)  


    login()



    let continuar = true;
    let total = 0;
    
    // Asignar precios a cada plato
    const precios = {
        1: 1500, // Precio del Bife con puré
        2: 1000,  // Precio del Spaguetti con salsa
        3: 1200,  // Precio de la Ensalada César
        4: 800,  // Precio de la Pizza
        5: 100  // Precio de las Empanadas
    }
    
    while(continuar){
    
        let platos = parseInt(prompt("Elije una opción: \n 1-Bife con puré  \n 2-Spaguetti con salsa \n 3-Ensalada César \n 4-Pizza \n 5-Empanadas \n 6-Salir"));
    
        switch(platos){
            case 1: 
                alert("Elegiste Bife con puré");
                total += precios[1]; // Sumar el precio al total
                break;
            
            case 2:
                alert("Elegiste Spaguetti con salsa");
                total += precios[2]; // Sumar el precio al total
                break;
    
            case 3:
                alert("Elegiste Ensalada César");
                total += precios[3]; // Sumar el precio al total
                break;
    
            case 4:
                alert("Elegiste Pizza");
                total += precios[4]; // Sumar el precio al total
                break;
    
            case 5:
                alert("Elegiste Empanadas");
                total += precios[5]; // Sumar el precio al total
                break;
    
            case 6:
                continuar = false;
                break;
    
            default:
                alert("Debes elegir una opción válida");
                break;
        }
    
        let confirmacion = prompt("Deseas agregar algo mas? (si/no)")
        if( confirmacion == "no")
            continuar = false
            }

    
    // Mostrar el total al usuario
    alert("El total de tu pedido es: $" + total + "\nLlegara en 1 hs aprox" + "\nGracias");





//DE ACA PARA ABAJO NO VA!!!



//alert ("Ahora elige una bebida \nHas click para continuar")



// let continuar2 = true

//     while(continuar2){

// let bebidas = parseInt(prompt("Elije una option: \n 1-Agua con gas  \n 2-Gaseosa \n 3-Jugo \n 4-Vino \n 5-Cerveza \n 6-Salir"))


//     switch(bebidas){
//         case 1:
//             alert("Agua con gas")
//             break
        
//         case 2:
//             alert("Gaseosa")
//             break

//         case 3:
//             alert("Jugo")
//             break

//         case 4:
//             alert("Vino")
//             break

//         case 5:
//             alert("Cerveza")
//             break

//         default:
//             alert("Debes elegir una opcion")
        

//     }
   
//     let confirmacion = prompt("Deseas agregar algo mas? (si/no)")
//     if( confirmacion == "no")
//         continuar2 = false
   
//     }












  



    

