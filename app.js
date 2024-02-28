const textoEntrada = document.querySelector('#text-entrada');
const textoSalida = document.querySelector('#text-salida');
const btnCopiar = document.querySelector('#btn-copiar');
const imgMuneco = document.querySelector('#muneco');
const elementoH = document.querySelector('#h3');
const elementoP = document.querySelector('#parrafo');

const llaves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
];

function btnEncriptar() {
    let texto = encriptar(textoEntrada.value);
    textoSalida.value = texto;
    btnCopiar.addEventListener('click', () => {
        let textoCopiar = texto;
        navigator.clipboard.writeText(textoSalida.value);
    })
    textoSalida.style.display = 'block';
    btnCopiar.style.display = 'block';
    imgMuneco.style.display = 'none';
    elementoH.style.display = 'none';
    elementoP.style.display = 'none';
};

function encriptar(fraseEncriptada) {
    for(let i = 0; i < llaves.length; i++){
        if (fraseEncriptada.includes(llaves[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                llaves [i][0],
                llaves [i][1]
            )
        }
    }
    return fraseEncriptada;
};

function btnDesencriptar() {
    let textout = desencriptar(textoSalida.value);
    textoSalida.value = textout;
    
}

function desencriptar(fraseDesencriptada) {
    for(let i = 0; i < llaves.length; i++){
        if (fraseDesencriptada.includes(llaves[i][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                llaves [i][1],
                llaves [i][0]
            )
        }
    }
    return fraseDesencriptada;
};

