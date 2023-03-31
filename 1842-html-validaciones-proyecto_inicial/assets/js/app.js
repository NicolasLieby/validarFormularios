import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

/*
A validar fechas en nuestro formulario.
A utilizar expresiones regulares para mejorar la validación de nuestro formulario.
*/