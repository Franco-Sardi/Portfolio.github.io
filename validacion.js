//Haz tú validación en javascript acá

const formulario =  document.getElementById('contacto')
const inputs = document.querySelectorAll('#contacto input')
const textareas = document.querySelectorAll('#contacto textarea')

const expresiones = {
    asunto: /^[a-zA-ZÀ-ÿ\s-Z0-9\_\-\@]{1,300}$/,// Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s-Z0-9\_\-\@]{0,300}$/,// Letras, numeros, guion y guion_bajo

}
const campos = {
    nombre : false,
    correo : false,
    mensaje : false,
    asunto : false,

}
const validarFormulario  = (e) =>{
  switch (e.target.name){
    case "nombre":
        validarCampo(expresiones.nombre, e.target, "nombre")
    break;
    case "correo":
        validarCampo(expresiones.correo, e.target, "correo")
    break;
    case "asunto":
        validarCampo(expresiones.asunto, e.target, "correo")
    break;
    case "mensaje":
        validarCampo(expresiones.asunto, e.target, "correo")

    break;
  }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        campos[campo] = true;
} else {
    campos[campo] = false;
}
}

inputs.forEach((input)=>{
 input.addEventListener('keyup', validarFormulario);
 input.addEventListener('blur', validarFormulario);
})

textareas.forEach(textarea => {
    textarea.addEventListener('keyup', validarFormulario);
    textarea.addEventListener('blur', validarFormulario);
});

// formulario.addEventListener('submit', (e) =>{
//     if (campos.nombre && campos.correo) {
//         formulario.reset();
//     }else{
//     console.log("maaal");
//     alert("Debe rellenar todos los campos");
//     e.preventDefault();
// }
// });
















