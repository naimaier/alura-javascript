const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputCPF = document.querySelector('[data-cpf]')

detalharCliente(id).then(dados => {
    inputNome.value = dados[0].nome
    inputCPF.value = dados[0].cpf
})

const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
    <div class="alert alert-success" role="alert">
        ${mensagem}
    </div>
    `

    linha.innerHTML = conteudoLinha

    return linha
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
    <div class="alert alert-warning" role="alert">
        ${mensagem}
    </div>
    `

    linha.innerHTML = conteudoLinha

    return linha
}

formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    if(!validaCPF(inputCPF.value)){
        alert('Esse CPF não existe')
        return
    }

    // Mostra mensagem ao usuário
    editarCliente(id, inputNome.value, inputCPF.value).then(response => {
        if(response.status === 200){
            formEdicao.appendChild(mensagemSucesso(
                'Cliente editado com sucesso!'
            ))
        } else {
            formEdicao.appendChild(mensagemErro(
                'Erro na edição do cliente'
            ))
        }
    })
})
