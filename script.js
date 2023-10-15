
//SELECCIONAR LOS ELEMENTOS DEL DOM
//BOTON
let boton = document.getElementById('boton-color');
//PARRAFO DEL CODIGO
let codigoColor = document.getElementById('color');

function generarHexaAleat(){
    let digitos = '0123456789ABCDEF';
    let colorHexa = '#';

    for(let i=0; i<6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHexa += digitos[indiceAleatorio];

    }
    return colorHexa;
}

boton.addEventListener('click', function() {
    let colorAleatorio = generarHexaAleat();
    codigoColor.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
    boton.style.backgroundColor = colorAleatorio;
    
});

