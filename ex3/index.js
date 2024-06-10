// Tainá Moreira Vieira Menegatti
   // Adicionando evento de clique a todos os itens da lista
    var itens = document.querySelectorAll("#listaItens li");
    itens.forEach(function(item) {
        item.addEventListener("click", function() {
            // Remover a classe 'destacado' de todos os itens
            itens.forEach(function(item) {
                item.classList.remove("destacado");
            });
            // Adicionar a classe 'destacado' apenas ao item clicado
            this.classList.add("destacado");
        });
    });
