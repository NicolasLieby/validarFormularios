/*const inputNacimiento = document.querySelector('#birth');

inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
}); */

export function valida(input) {
    const tipoDeInput =input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message--error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message--error").innerHTML = mostrarMensajeDeError(tipoDeInput,input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajeDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "El campo password no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    naciemiento: {
        valueMissing: "El campo nacimiento no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX - 10 numeros",
    },
    direccion: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres.",
    },
    ciudad: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 4 a 30 caracteres.",
    },
    provincia: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "La provincia debe contener entre 4 a 30 caracteres.",
    },
};


const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad"
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear()+18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return (diferenciaFechas <= fechaActual);
}

/*
Lo que aprendimos en esta aula:

A instalar y utilizar el plugin Liveserver.
Como descargar y correr el Browser-Sync.
Como enseñar el mensaje de error directamente en el HTML.
Como customizar los mensajes de error de validación.


Lo que aprendimos en esta aula:

Como validar formularios.
*/