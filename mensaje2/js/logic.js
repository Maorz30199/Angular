var num;

function calcular(n) {
  var input = document.getElementById('txt');
  var resultado = document.getElementById('resultado');

  num = n;

  var result = input.value + "" + num;
  resultado.innerHTML=result;
}
