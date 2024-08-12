import PropTypes from 'prop-types'

function Item({marca, cor, N}) {
    return (
        <>
            <li>
              {marca} - {cor} - {N}
            </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    cor: PropTypes.string.isRequired,
    N: PropTypes.number
}

export default Item