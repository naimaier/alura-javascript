const formCadastroCliente = document.querySelector('[data-form]')

formCadastroCliente.addEventListener('submit', event => {
    //primeira coisa é prevenir o comportamento padrao do submit (enviar os dados e recarregar)
    event.preventDefault() 

    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value

    if (validaCPF(cpf)) {
        cadastrarClientes(nome, cpf)
    } else {
        alert('CPF não é válido')
    }
})