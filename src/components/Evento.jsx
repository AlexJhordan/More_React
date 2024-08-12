function Evento({numero}){

    function meuEvento() {
        console.log(`Clique ${numero} feito`)
    }
    
    return (
        <div>
            <p>Clique aqui</p>
            <button onClick={meuEvento}>Abrir</button>
        </div>
    )
}

export default Evento