function adicao(){
    var a = parseFloat(document.getElementById("primeiro").value);
    var b = parseFloat(document.getElementById("segundo").value);

    var resultado = a + b;
    document.getElementById("resultado").innerHTML = a + " + " + b + " = " + resultado;
}

function subtracao(){
    var a = parseFloat(document.getElementById("primeiro").value);
    var b = parseFloat(document.getElementById("segundo").value);

    var resultado = a - b;
    document.getElementById("resultado").innerHTML = a + " - " + b + " = " + resultado;
}

function multiplicacao(){
    var a = parseFloat(document.getElementById("primeiro").value);
    var b = parseFloat(document.getElementById("segundo").value);

    var resultado = a * b;
    document.getElementById("resultado").innerHTML = a + " x " + b + " = " + resultado;
}

function divisao(){
    var a = parseFloat(document.getElementById("primeiro").value);
    var b = parseFloat(document.getElementById("segundo").value);

    var resultado = a / b;
    document.getElementById("resultado").innerHTML = a + " ÷  " + b + " = " + resultado;
}

function limparForm(){
    document.getElementById('primeiro').value = "";
    document.getElementById('segundo').value = "";
    document.getElementById('resultado').innerHTML = "";
}