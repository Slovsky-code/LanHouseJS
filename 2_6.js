function lanHouse(){
    var inValorMin = document.getElementById("inValorMin");
    var inMinutos = document.getElementById("inMinutos");
    var outValorAPagar = document.getElementById("outValorAPagar");

    var valorMin = Number(inValorMin.value);
    var minutos = Number(inMinutos.value);
    var calculo = Math.ceil(minutos / 15) * valorMin;

    outValorAPagar.textContent = "Valor a Pagar R$:" + calculo.toFixed(2);
}

var button = document.getElementById("button");
button.addEventListener("click", lanHouse);