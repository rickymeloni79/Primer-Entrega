//Variables

let series = 4
let reps = 12
let descanso = 2


//Array

const ejercicio =["Press bco plano", "Dominadas", "Press militar", "Curl biceps", "Ext triceps", "Setadillas"]


//Functions


//Funcion datos usuario
function datosUser(nombre, email) {
    while (nombre === "") {
        alert("Debes ingresar tu nombre")
        nombre = prompt("Ingresa tu nombre")
    }
    
    while (email === "") {
        alert("Debes ingresar tu email")
        email = prompt("Ingresa tu email")    } 
}


//Funcion Rutina
function rutina(grupoMuscular, series, reps, descanso) {
    alert("La rutina de hoy es: " +"\nEjercicio: "+ grupoMuscular + "\nSeries: " + series + "x" + reps + " repeticiones" + "\nDescanso: " + descanso + " min entre series");
}


//Funcion enviar noticias
function informarNoticias(email) {
    let deseaInformacion = prompt("Deseas recibir las últimas noticias? (si/no)")
    if (deseaInformacion === "si") {
        alert("Gracias. Te enviaremos las últimas noticias a: " + email)
    } else {
        alert("No te preocupes, no recibirás noticias.")
    }
}


//Saludo Inicial
alert("Hola bienvenido a entrenamiento en linea" + "\nPreciona OK para continuar")




//Solicitud de datos al usuario
let nombre = prompt("Ingresa tu nombre")
let email = prompt("Ingresa tu email")
datosUser(nombre, email)





let grupoMuscular = parseInt(prompt("Que grupo muscular trabajaremos hoy:" + "\n1- Pecho" + "\n2- Espalda" + "\n3- Hombros" + "\n4- Biceps" + "\n5- triceps" + "\n6- Piernas")) 

while(grupoMuscular <1 || grupoMuscular >6 || isNaN(grupoMuscular)){
    alert("introduce una opcion valida")
    grupoMuscular = parseInt(prompt("Que grupo muscular trabajaremos hoy:" + "\n1- Pecho" + "\n2- Espalda" + "\n3- Hombros" + "\n4- Biceps" + "\n5- triceps" + "\n6- Piernas")) 
}
    switch (grupoMuscular){
    case 1:
        alert("Elegiste: Pecho" + " " +"\nHaremos: "+ " " + ejercicio[0])
        grupoMuscular = ejercicio[0]
        break

    case 2:
        alert("Elegiste: Espalda" + " "+ "\nHaremos: "+ " " + ejercicio[1])
        grupoMuscular = ejercicio[1]
        break

    case 3:
        alert("Elegiste: Hombros" + " "+ "\nHaremos: "+ " " + ejercicio[2])
        grupoMuscular = ejercicio[2]
        break

    case 4:
        alert("Elegiste: Biceps" + " "+ "\nHaremos: "+ " " + ejercicio[3])
        grupoMuscular = ejercicio[3]
        break

    case 5:
        alert("Elegiste: Triceps" + " "+ "\nHaremos: "+ " " + ejercicio[4])
        grupoMuscular = ejercicio[4]
        break

    case 6:
        alert("Elegiste: Piernas" + " "+ "\nHaremos: "+ " " + ejercicio[5])
        grupoMuscular = ejercicio[5]
        break

    default:
        break 

}


//LLamar a la funcion rutina
rutina(grupoMuscular, series, reps, descanso)


//Llamar a la funcion datosUser
datosUser(nombre, email)
alert(nombre + " Enviaremos tu rutina a: " + email + "\n Entrena duro!!!")


//Llamar a la funcion enviar noticias
informarNoticias(email)
