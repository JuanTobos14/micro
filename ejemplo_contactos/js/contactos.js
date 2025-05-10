/**ORDEN SUGERIDO:
 * 1. Definir Variables
 * 2. Definir Métodos
 * 3. Definir Eventos
 */

// VARIABLES:
const contactos = []
const form = document.forms['contactoForm']

// MÉTODOS:
const guardarContacto = ()=>{
    const contacto = {
        nombre: form['nombre'].value,
        email: form['correo'].value
    } //<- Objeto

    contactos.push(contacto)
    visualizarContactos()
}

const visualizarContactos = ()=>{
    console.log(contactos)
}

// EVENTOS:
form.addEventListener('submit', (ev)=>{
    ev.prevenDefault()
    guardarContacto()
})