

//FUNCIONES

function login(){
    confirm("Ingresa tus datos para continuar")
let nombre
do{
    nombre = prompt("Ingresa tu nombre")
    if(nombre ==""){
        alert("Debes introducir un nombre")
        
    }
}
while (nombre =="")

let apellido
do{
    apellido = prompt("Ingresa tu apellido")
    if(apellido ==""){
        alert("Debes introducir un apellido")        
    }
 }
while (apellido =="")

let direccion
do{
    direccion = prompt("Nombre de la calle")
    if(direccion ==""){
        alert("Debes introducir una calle")
    }
}   
while (direccion =="")

let altura
do{
    altura = parseInt(prompt("Indica la altura"))
    if (isNaN(altura)){
        alert("Debes introducir una altura")
    }
}   
while (isNaN(altura))
}   



function aceptaPedido(){   

    let confirmar = true // Mostrar el total al usuario

    confirm("El total de tu pedido es: $" + total +" "+ "\nConfirma su pedido?")
    if(confirmar == true){
        alert("Tu pedido llegara en 1 hs aprox" + "\nGracias")}
    else
        alert("No importa sera la proxima, gracias")
    }




    




//Saludo INICIAL

let saludo
    alert("Hola Bienvenido/a al Resto de Walter \nHas click en ok para ver le menu")    



//MENU

const cartaPlatos = ["bife con pure", "spaguetti con salsa", "ensalda cesar", "pizza", "empandas"]
alert("MENU \nBife con pure - $1500 \nSpaguetti con salsa - $1000 \nEnsalda Cesar - $1200 \nPizza - $800 \nEmpanadas - $100 c/u")



//LLAMADO FUNCION login()

login()




let continuar = true
let total = 0
    
// Asignar precios a cada plato
const precios = {
    1: 1500, // Precio del Bife con puré
    2: 1000,  // Precio del Spaguetti con salsa
    3: 1200, // Precio de la Ensalada César
    4: 800, // Precio de la Pizza
    5: 100,  // Precio de las Empanadas
}


    while(continuar){
    
        let platos = parseInt(prompt("Elije una opción: \n 1-Bife con puré  \n 2-Spaguetti con salsa \n 3-Ensalada César \n 4-Pizza \n 5-Empanadas"));
    
        switch(platos){
            case 1: 
                alert("Elegiste Bife con puré")
                total += precios[1] // Sumar el precio al total
                break
            
            case 2:
                alert("Elegiste Spaguetti con salsa")
                total += precios[2] // Sumar el precio al total
                break
    
            case 3:
                alert("Elegiste Ensalada César")
                total += precios[3] // Sumar el precio al total
                break
    
            case 4:
                alert("Elegiste Pizza")
                total += precios[4] // Sumar el precio al total
                break
    
            case 5:
                alert("Elegiste Empanadas")
                total += precios[5] // Sumar el precio al total
                break
    
    
            default:
                alert("Debes elegir una opción válida")
                break
        }
    
        let confirmacion = prompt("Deseas agregar algo mas? (si/no)")
        if( confirmacion == "no"){
            continuar = false
            }

        }


//LLAMDO FUNCION aceptaPedido()  

  aceptaPedido()
    


















  



    

