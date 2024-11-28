function editarHtml(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function exibirMsgInicial(){
    editarHtml('h1','Cálculo de IMC');
    editarHtml('p',`Digite as informações abaixo`);
}

exibirMsgInicial();

function calculaIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura ** 2);
    const classificacao = 
        imc <= 18.5 ? 'Magreza' :
        imc <= 24.9 ? 'Normal' :
        imc <= 29.9 ? 'Sobrepeso' :
        imc <= 39.9 ? 'Obesidade' :
        'Obesidade Grave';

    alert(`Seu IMC é ${imc.toFixed(1)} dentro da classificação ${classificacao}`);
    limparCampo();
}

function limparCampo(){
    altura.value = '';
    peso.value = '';
}