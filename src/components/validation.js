const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/m
export default function validation (userData) { 
    
    var errors = {};
    if (!userData.username) errors.username = 'El campo no puede estar vacío';
    if (!regexEmail.test(userData.username)) errors.username = 'El usuario debe ser un E-Mail';
    if (userData.username.length > 35) errors.username = 'El campo no puede tener más de 35 caracteres';
    
    
    if (!regexPassword.test(userData.password)) errors.password = 'La contraseña debe tener un entre 6 y 10 caracteres y al menos uno debe ser un número'
    return errors
}