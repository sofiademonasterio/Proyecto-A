var edad = prompt("Ingrese su edad.");

if (edad >= 18) {
    let nombre = prompt("Ingrese su nombre.")
    alert(`Bienvenido, ${nombre}`)
}
else
    {
        alert("Usted es menor de edad")
        window.location.replace("http://www.google.com");
    }

    
