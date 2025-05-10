alert("Hola mundo")
        console.log("Mensaje...")
        /* Definir variables:
        var - Variables MUY Globales
        let - Recomendada
        const - Valores constantes
        */

        var nombre = "Pepe"
        let apellido = 'Gomez'
        const edad = 30 //  Valores númericos en general son tipo Number

        let empleado = false // true     
        let jobs = null // Valor inicializable
        jobs = undefined
        
        jobs = ['Cine', 'Musica', 'Deporte'] // Array Longitud Indefinida
        // jobs = Array(2) Longitud Definida

        let persona = {// Objeto con propiedades y valores
            nombre: 'Ana',
            apellido: 'Gomez',
            edad: 32,
            jobs: ['Cine', 'Deportes'],
        }

        console.log(persona.nombre)
        // CONCATENACION
        console.log('Nombre: ' + persona.nombre + ' ' + persona.apellido)
        console.log(`Nombre: ${persona.nombre} ${persona.apellido}`)

        /* PROPIEDADES
        console.log(nombre.propiedad) */

        if(persona.edad<18){
            //...
        }else if (persona.edad<25){
            //...
        }else {
            //...
        }

        /* OPERADORES LOGICOS
        && and
        || or
        ! negación
        == igual (Valida solo el valor)
        === igual (Valida valor y tipo de dato)
        > mayor
        < menor
        >= mayor igual
        <= menor igual
        != diferente
        */

        let categoria = 'a'
        switch (categoria){
            case 'a':
                //...
                break
            case 'b':
                //...
                break
            default:
                //...
                break
        }

        let numeros = [1,2,3,4,5,6,7,8,9,10]

        console.log('For normal------------')
        for(let index=0; index<(numeros.length); index++){
            console.log(numeros[index])
        }

        console.log('For in------------')
        //Posición
        for(let index in numeros){
            console.log(numeros[index])
        }

        console.log('For of------------')
        //Captura el valor
        for(let valor in numeros){
            console.log(valor)
        }

        console.log('While------------')
        let index = 0
        while(index < numeros.length){
            console.log(numeros[index])
            index++
        }

        console.log('Do while------------')
        index = 0
        do{
            console.log(numeros[index])
            index++
        }while(index < numeros.length)

        console.log('Foreach------------')
        //Metodo reservado para Arrays
        // CALLBACK:  Función que se pasa como parametro a otra funcion
        numeros.forEach((valor, index)=>{
            console.log(`${index}: ${valor}`)
        })
        
        //FUNCIONES
        function saludar(){
            console.log('Oe')
        }
        saludar();

        function saludar2(nombre){
            console.log(`Oe ${nombre}`)
        }
        saludar2('Pepe')

        function getSaludo(nombre){
            return `Hola ${nombre}`
        }
        console.log(getSaludo('Ana'))

        //Función anonima
        const saludar3 = function(nombre){
            console.log(`Oe ${nombre}`)
        }

        saludar3('Javier')

        const saludar4 = (nombre)=>{
            console.log(`Hola ${nombre}`)
        }
        saludar4('Johan');