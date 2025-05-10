//  MODIFICA EL CONTENIDO

// document.getElementById('titulo')
//     .textContent = 'Zarigüella'

//  MODIFICA EL TEXTO

// document.getElementById('titulo')
//     .innerText = 'Wómbat'

//  EVENTO OBLIGATORIO SI <script> esta en el <head>

// document.addEventListener('DOMContentLoaded'),()=>{
//     document.getElementById('titulo')
//     .innerHTML = '<i>Bandicut<i>'
// }

//  MODIFICA EL HTML

document.getElementById('tituloA')
    .innerHTML = '<i>Bandicut<i>'

//  CONFIGURAR EVENTOS

document.getElementById('saludarAnm')
    .addEventListener('click', () => {
        console.log('Click del botón Cambiar')

        const animal = document.getElementById('anmInput')
            .value
        document.getElementById('tituloA')
            .innerHTML = '<i>' + animal + '<i>'
    })

//  --------------------------------------------------

const saludarForm = document.forms['saludar']
const errorNull= document.getElementById('nmError')
errorNull.style.color = "#f90150"
const nmLb= document.getElementById('nmLb')

saludarForm.addEventListener('submit', (ev)=>{
    ev.preventDefault()

    const nombre = saludarForm['nombre'].value
    
    if (!nombre){
        errorNull.style.display = 'block'
        nmLb.classList.add('error')

        document.getElementById('saludoA')
            .innerHTML = `Bienvenido... eh???`
    }
    else{
        nmLb.classList.remove('error')
        errorNull.style.display = 'none'

        document.getElementById('saludoA')
            .innerHTML = `Bienvenido "${nombre}"... Así te llamas ¿Verdad?`
    }
})

//  METODOS

// - Alternativas: 
// function nmKeyDown(){}
// const nmKeyDown = function(){}


const nmKeyDown = () => {
    const nombre = saludarForm['nombre'].value
    
    if (!nombre){
        errorNull.style.display = 'block'
        nmLb.classList.add('error')

        document.getElementById('saludoA')
            .innerHTML = `Bienvenido... eh???`
    }
    else{
        nmLb.classList.remove('error')
        errorNull.style.display = 'none'

        document.getElementById('saludoA')
            .innerHTML = `Bienvenido "${nombre}"... Así te llamas ¿Verdad?`
    }
}