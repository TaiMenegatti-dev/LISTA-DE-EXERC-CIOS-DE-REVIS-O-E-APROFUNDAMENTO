// Tainá Moreira Vieira Menegatti
document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Aqui você pode adicionar validações ou processamento dos dados do formulário antes de enviar
    
    // Exibe o SweetAlert de envio com sucesso
    Swal.fire({
        icon: 'success',
        title: 'Envio com sucesso!',
        text: 'Seu formulário foi enviado com sucesso.',
        confirmButtonText: 'OK',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.giphy.com/media/dJtUvIqXpXRxxE4lm1/giphy.gif")
            left top
            no-repeat
        `
    });
});


