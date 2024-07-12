//selectores: mecanismo para selecciones los elementos 
//document es el puente entre html y js
//Variables


//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = generarNumeroSecreto()
let intentos = 1;
let listaNumerosSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //retorna el titulo h1 en el html, se asigna a una variable
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(intentos);
    if(numeroDeUsuario ===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //    let valorCaja = document.querySelector('#valorUsuario').value = '';

    
}

function generarNumeroSecreto(params) {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sorteraron todos los números posibles');

    }else{
        //Si el numero generado esta incluido en la lista 
        if(listaNumerosSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto;
        }else{
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()    
    intentos = 1; 

}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar numero aleatorio
    //inicializar numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();


