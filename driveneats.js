let comida_check, bebida_check, sobremesa_check = null;

function selecionar(selecionado) {
    const nodes = selecionado.parentElement.getElementsByTagName("div");
    console.log(nodes.length);
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove('selecionado');
    }     
    selecionado.classList.add('selecionado');
    
    
    
    enable_botao(selecionado);   
} 

function alterarBotao(){
    const botao = document.getElementById("botao");
    botao.disabled = false;
    botao.textContent = 'Fechar pedido';
    botao.style.backgroundColor = '#32B72F';

}  

function enable_botao(selecionado){
    if (selecionado.parentElement.classList.contains('container-comida')){
        comida_check = true;
        console.log(comida_check);
    
    }
    if (selecionado.parentElement.classList.contains('container-bebida')){
        bebida_check = true;
        console.log(bebida_check);
    }
    if (selecionado.parentElement.classList.contains('container-sobremesa')){
        sobremesa_check = true;
        console.log(sobremesa_check);
    }

    if((comida_check == true) && (bebida_check==true)&& sobremesa_check==true){
        alterarBotao()
    }


}