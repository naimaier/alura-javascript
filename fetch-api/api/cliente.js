//Get
const listarClientes = () => {
    return fetch('http://localhost:4000/clientes').then(response => {
         return response.json()
    })
}

//Post
const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    }).then(resp => {
        return resp.body
    })
}

//Delete
const deletarCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })
}