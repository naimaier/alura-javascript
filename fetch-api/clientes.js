const removeCliente = id => {
    if(confirm('Deseja excluir o cliente?')){
        deletarCliente(id)
    }
}

const corpoTabela = document.querySelector('[data-conteudo-tabela]')

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr')
    const conteudoLinha = 
    `<td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    <a href="edita-clientes.html?id=${id}">
    <button type="button" class="btn btn-info">Editar</button>
    </a>
    `

    linha.innerHTML = conteudoLinha
    return linha
}

listarClientes().then(exibe => {
    exibe.forEach( i => {
        corpoTabela.appendChild(exibeCliente(i.cpf, i.nome, i.id))
    })
})