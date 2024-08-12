function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log('Cadastrado');
    }
    
    return (
        <div>
            <h1>Usando eventos</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form