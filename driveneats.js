function selecionar(selecionado) {
    const nodes = selecionado.parentElement.getElementsByTagName("div");
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove('selecionado');
    }   
    console.log(nodes); 
    console.log(selecionado.parentElement);
    selecionado.classList.toggle('selecionado')
    
} 