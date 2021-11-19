//afficahge de "Bonjour, monde" dans la console
//console.log("Bonjour monde !");


$(document).ready(function() {
  let name = "";
  while(name == "") {
    name = prompt("Salut c'est quoi ton prénom !")
  }
  let output = `Salut ${name} !`
  console.log(output);
  document.getElementById('demo').textContent += output;
});
