import { useState} from 'react'

function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log('Cadastrado');
        console.log(`O usuário ${name} se dastrou com a senha ${password}`)
    }

    const [name, setName] = useState(``)
    const [password, setPassword] = useState(``)
    
    return (
        <div>
            <h1>Usando eventos</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Senha"
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Login"
                    />
                </div>
            </form>
        </div>
    )
}

export default Form