//Get
const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
    // then -> quando a promise for resolvida
    .then(response => {
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
const deletarCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })
}

const detalharCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`)
    .then(response => {
        return response.json()
    })
}

//Update
const editarCliente = (id, nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })

    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
}