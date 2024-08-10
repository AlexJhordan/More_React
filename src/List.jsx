import Item from './Item'

function List() {
    return (
        <>
            
            <h1>Lista</h1>
            <ul>
                <Item
                    marca="Apple"
                    cor="Vermelho"
                    N={6}
                />
                <Item 
                    marca="Samsung"
                    cor="Preto"
                    N={4}
                />
                <Item
                    marca="Google"
                    cor="Branco"
                    N={2}
                />
            </ul>
        </>
    )
}

export default List;