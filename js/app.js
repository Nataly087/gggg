const inputs = document.querySelectorAll('.input');
const patterns = {
    nombre: /^[a-zA-Záéíóú]{3,20}$/,
    apellido: /^[a-zA-Záéíóú]{3,20}$/,
    
    
}

function validation(field, reg){
    if(reg.test(field.value)){
        field.classList.add('is-valid');
        field.classList.remove('is-invalid');
    }else{
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
    }
}

inputs.forEach(function(input){
    input.addEventListener('keyup', function(e){
        validation(e.target, patterns[e.target.name]);
    });
});
