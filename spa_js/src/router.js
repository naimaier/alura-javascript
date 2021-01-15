import inicializaCadastro from "./componentes/cadastro/componente-cadastro.js"
import inicializaTabela from "./componentes/lista/listagem-cliente.js"
import inicializaFormEdicao from "./componentes/edita/form-edicao.js"

const rotas = {
    "/": inicializaTabela,
    "/cadastro": inicializaCadastro,
    "/edita": inicializaFormEdicao
}

const rootDiv = document.querySelector('[data-container]')

const navegacao = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname)
    // (state, title, url)
    // origin = url base de onde estamos

    rootDiv.innerHTML = ""

    const iniciarRota = rotas[window.location.pathname]
    
    // colocamos o form retornado dentro do container principal
    rootDiv.appendChild(iniciarRota())
}

window.navegacao = navegacao
// mudando o escopo para global (poder acessar a funcao de qualquer lugar)

window.onpopstate = () => {
    rootDiv.innerHTML = ''
    rootDiv.appendChild(rotas[window.location.pathname]())
}
export default navegacao