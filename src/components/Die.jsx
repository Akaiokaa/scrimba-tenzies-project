import './Die.css'

function Die(props) {
    return(
        <button className='die' style={props.held}>{props.value}</button>
    )
}
export default Die;