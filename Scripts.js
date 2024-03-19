// JavaScript source code


//Variables
let tabheads = document.getElementsByClassName('Tab');

//on load evento
window.addEventListener('load', function () {
    //pintar primer tabhead
    tabheads[0].style.backgroundColor = 'rgba(255, 255, 255, 0.1)';    
});

//funciones
function openTab(target) {
    let tab1 = document.getElementById('Encriptador'); 
    let tab2 = document.getElementById('Desencriptador');
    //reset
    tabheads[0].style.backgroundColor = '';
    tabheads[1].style.backgroundColor = '';
    tab1.style.display = 'none';
    tab2.style.display = 'none';
    if (target == 'Desencriptador') {
        tab2.style.display = 'block';
        tabheads[1].style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        tab1.style.display = 'block';
        tabheads[0].style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
}

function botonEcrpt() {
    //variables
    let txtInput = document.getElementById('txt_Encriptar').value;
    let txtOutput = document.getElementById('txt_Resultado1');

    if (soloMinusculasyNumeros(txtInput.trim())) {
        txtOutput.value = '';
        txtInput = txtInput.trim().toLowerCase();
        for (let letter of txtInput) {
            switch (letter) {
                case 'a':
                    txtOutput.value += 'ai';
                    break;
                case 'e':
                    txtOutput.value += 'enter';
                    break;
                case 'i':
                    txtOutput.value += 'imes';
                    break;
                case 'o':
                    txtOutput.value += 'ober';
                    break;
                case 'u':
                    txtOutput.value += 'ufat';
                    break;
                default:
                    txtOutput.value += letter;
                    break;
            }
        }
    } else {
        alert('Recuerda usar solo minusculas y no usar caracteres especiales a la hora de encriptar');
    } 
}

function botonDscrpt() {
    // Variables
    let txtInput = document.getElementById('txt_Desencriptar').value;
    let txtOutput = document.getElementById('txt_Resultado2');
    const reemplazos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    if (soloMinusculasyNumeros(txtInput.trim())) {
        txtOutput.value = txtInput.trim().toLowerCase();
        for (let clave in reemplazos) {
            txtOutput.value = txtOutput.value.split(clave).join(reemplazos[clave]);
        }
    } else {
        alert('Recuerda usar solo minusculas y no usar caracteres especiales a la hora de desencriptar');
    }
    

}


function copiarPortapapeles(target) {
    if (target == '1') {
        let txtOutput = document.getElementById('txt_Resultado1');
        txtOutput.select();
        document.execCommand('copy');
        txtOutput.setSelectionRange(0, 0);
    } else {
        let txtOutput = document.getElementById('txt_Resultado2');
        txtOutput.select();
        document.execCommand('copy');
        txtOutput.setSelectionRange(0, 0);
    }   
}
function soloMinusculasyNumeros(cadena) {
    const regex = /^[a-z0-9]+$/;
    return regex.test(cadena);
}
