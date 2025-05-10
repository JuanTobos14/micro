const capt= document.forms['capt']
const errorNull= document.getElementById('nError')
errorNull.style.color = "#f90150"
const ind= document.getElementById('nmLb')

const parim = () => {
    const numero = capt['numero'].value
    
    if (!numero || numero==0){
        ind.classList.add('error')
        errorNull.style.display = 'block'

        document.getElementById('resp')
            .innerHTML = `Verificación de Par e Impar`
    }
    else if (numero%2==0){
        ind.classList.remove('error')
        errorNull.style.display = 'none'

        document.getElementById('resp')
            .innerHTML = `"${numero}" es PAR`
    }
    else if (numero%2>0){
        ind.classList.remove('error')
        errorNull.style.display = 'none'

        document.getElementById('resp')
            .innerHTML = `"${numero}" es IMPAR`
    }
}