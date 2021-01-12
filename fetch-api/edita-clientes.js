const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputCPF = document.querySelector('[data-cpf]')

detalharCliente(id).then(dados => {
    inputNome.value = dados[0].nome
    inputCPF.value = dados[0].cpf
})

const formEdicao = document.querySelector('[data-form]')

formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    if(!validaCPF(inputCPF.value)){
        alert('Esse CPF não existe')
        return
    }

    editarCliente(id, inputNome.value, inputCPF.value)
})
