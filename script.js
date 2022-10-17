let comida_check, bebida_check, sobremesa_check = null;
let food_name, drink_name, desert_name;
let food_price, drink_price, desert_price;
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
  // if desert is selected
  if (selecionado.parentElement.classList.contains("container-sobremesa")) {
    sobremesa_check = true;
    desert_name = selecionado.querySelector("h1").innerHTML;
    desert_price = editarPreco(selecionado.querySelector("h3").innerHTML);
    
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
    final_price = (food_price+drink_price+desert_price).toFixed(2);
    final_price = String(final_price.replace(".", ","));
    nome = prompt("Qual o seu nome?")
    endereco = prompt("Qual o seu endereco?")

    let message =  `Olá, gostaria de fazer o pedido:\n- Prato: ${food_name}\n- Bebida: ${drink_name}\n- Sobremesa: ${desert_name}\nTotal: R$ ${final_price}\n\n Nome: ${nome}\nEndereço: ${endereco}`
    message = encodeURI(message);
    window.open("https://wa.me/5532999375346?text=" + message);
}