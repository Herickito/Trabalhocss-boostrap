window.addEventListener('load', function() {
    const form = document.getElementById('cadastroForm');
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cancelarBtn = document.getElementById('cancelarBtn');
    const resultadoDiv = document.getElementById('resultado');

    cadastrarBtn.addEventListener('click', function() {
        if (form.checkValidity()) {
            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const endereco = document.getElementById('endereco').value;

            
            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = `
                <h2>Dados Cadastrados:</h2>
                <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
                <p><strong>Endereço Completo:</strong> ${endereco}</p>

            `;
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    cancelarBtn.addEventListener('click', function() {
        form.reset();
        resultadoDiv.style.display = 'none';
        resultadoDiv.innerHTML = '';
    });
});
