let comida_check, bebida_check, sobremesa_check = null;
let food_name, drink_name, dessert_name;
let food_price, drink_price, dessert_price;
let final_price,nome, endereco;

function selecionar(selecionado) {
  const nodes = selecionado.parentElement.getElementsByTagName("div");
  const botao_check = selecionado.querySelector("ion-icon");
  
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].classList.remove("selecionado");
    nodes[i].querySelector("ion-icon").classList.remove("show");
  }
  selecionado.classList.add("selecionado");
  botao_check.classList.add("show");
  
  enable_botao(selecionado);
}

function alterarBotao() {
  const botao = document.getElementById("botao");
  botao.disabled = false;
  botao.textContent = "Fechar pedido";
  botao.style.backgroundColor = "#32B72F";
  botao.style.cursor = "pointer";
}

function enable_botao(selecionado) {
  // if food is selected is food  
  if (selecionado.parentElement.classList.contains("container-comida")) {
    comida_check = true;
    food_name = selecionado.querySelector("h1").innerHTML;
    food_price = editarPreco(selecionado.querySelector("h3").innerHTML);
    
  }
  // if drink is selected 
  if (selecionado.parentElement.classList.contains("container-bebida")) {
    bebida_check = true;
    drink_name = selecionado.querySelector("h1").innerHTML;
    drink_price = editarPreco(selecionado.querySelector("h3").innerHTML);
    
  }
  // if dessert is selected
  if (selecionado.parentElement.classList.contains("container-sobremesa")) {
    sobremesa_check = true;
    dessert_name = selecionado.querySelector("h1").innerHTML;
    dessert_price = editarPreco(selecionado.querySelector("h3").innerHTML);
    
  }

  if (comida_check == true && bebida_check == true && sobremesa_check == true) {
    alterarBotao();
  }
}

function editarPreco(preco){
    let preco_editado = preco.replace("R$ ", "");
    preco_editado = preco_editado.replace(",", ".");
    return Number(preco_editado);
}

function finalizarPedido(){
    const cancela = document.querySelector(".sobrepoe");
    cancela.classList.remove ("hidden");

    const nPrato = document.querySelector('.dish .nome');
    console.log(nPrato);
    nPrato.innerHTML = food_name;
    const pPrato = document.querySelector('.dish .preco');
    
    pPrato.innerHTML = `R$ ${(food_price.toFixed(2)).replace(".", ",")}`;
    const nDrink = document.querySelector('.drink .nome');
    nDrink.innerHTML = drink_name;
    const pDrink = document.querySelector('.drink .preco');
    pDrink.innerHTML = `R$ ${(drink_price.toFixed(2)).replace(".", ",")}`;
    const nDessert = document.querySelector('.dessert .nome');
    nDessert.innerHTML = dessert_name;
    const pDessert = document.querySelector('.dessert .preco');
    pDessert.innerHTML = `R$ ${dessert_price.toFixed(2).replace(".", ",")}`;

    const pTotal = document.querySelector('.total .preco-total');

  
    final_price = (food_price+drink_price+dessert_price).toFixed(2);
    console.log(typeof food_price);
    final_price = String(final_price.replace(".", ","));
    pTotal.innerHTML = `R$ ${final_price}`;

}

function cancelar(){
  const cancela = document.querySelector(".sobrepoe");
  cancela.classList.add("hidden");
}

function confirmaPedido() {
  nome = prompt("Qual o seu nome?")
  endereco = prompt("Qual o seu endereco?")
  if (nome == null){
    nome = "";
  }
  if (endereco == null){
    endereco = "";
  }

  let message =  `Olá, gostaria de fazer o pedido:\n- Prato: ${food_name}\n- Bebida: ${drink_name}\n- Sobremesa: ${dessert_name}\nTotal: R$ ${final_price}\n\nNome: ${nome}\nEndereço: ${endereco}`
  message = encodeURI(message);
  window.open("https://wa.me/5532999375346?text=" + message);
}