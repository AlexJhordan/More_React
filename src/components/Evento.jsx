import Button from './eventos/Button.jsx'

function Evento({numero}){

    function meuEvento() {
        console.log(`Clique ${numero} feito`)
    }

    function primeiroEvento(){
        console.log(`Ativando o primeiro evento`)
    }
    function segundoEvento(){
        console.log(`Ativando o segundo evento`)
    }
    
    return (
        <div>
            <p>Clique aqui</p>
            <Button event={primeiroEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
            <br></br>
            <button onClick={meuEvento}>Abrir</button>
        </div>
    )
}

export default Evento