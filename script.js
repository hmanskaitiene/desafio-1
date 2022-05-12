alert("Bienvenidx. Por favor ingrese todas las ciudades que ha visitado. Para finalizar ingrese SALIR");
let ciudad = prompt("¿Que ciudad ha visitado?");
let ciudades = [];
if (ciudad !== null){
    while (ciudad.toUpperCase() != "SALIR") {
        if (ciudad.length > 0) {
            ciudades.push(ciudad);
        }

        ciudad = prompt("¿Que ciudad ha visitado?");
    }
    
    if (ciudades.length != 0){
        document.write("<h3>Las ciudades que ha visitado son:</h3><ul>");
        for (let i = 0; i < ciudades.length; i++) {
            document.write(`<li>${ciudades[i]}</li>`);
          }
          document.write(`</ul>`);
    } else {
        document.write(`<h3>No ha visitado ciudades...que pena!</h3>`);
    }
}


document.write("<h3>Para ingresar nuevamente, refresque la página.</h3>");