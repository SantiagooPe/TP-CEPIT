let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let edad = document.getElementById("edad");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

// Función para validar los datos
function validarFormulario() {
    if (nombre.value.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        return false;
    }
    if (apellido.value.length < 2) {
        alert("El apellido debe tener al menos 2 caracteres.");
        return false;
    }
    if (!email.value.includes("@")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }
    if (telefono.value.length !== 10 || !/^\d{10}$/.test(telefono.value)) {
        alert("El número de teléfono debe tener 10 dígitos.");
        return false;
    }
    if (edad.value < 18) {
        alert("Debe ser mayor de 18 años.");
        return false;
    }
    return true; // Si todas las validaciones son correctas, retornar true
}

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // Previene la acción del form de actualizar la página

    if (validarFormulario()) {
        informacion[0] = `Nombre: ${nombre.value}`;
        informacion[1] = `Apellido: ${apellido.value}`;
        informacion[2] = `Email: ${email.value}`;
        informacion[3] = `Edad: ${edad.value}`;
        informacion[4] = `Teléfono: ${telefono.value}`;
        informacion[5] = `Consulta: ${consulta.value}`;

        console.log(informacion.join("\n"));

        let blob = new Blob([informacion.join("\n")], { type: "text/plain;charset=utf-8" }); // Crear el blob

        // Guardar el archivo usando FileSaver.js
        saveAs(blob, "contact.txt");

        console.log(blob);
    }
});
