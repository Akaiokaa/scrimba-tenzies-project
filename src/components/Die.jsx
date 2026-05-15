import './Die.css'

function Die(props) {
    const isHeld = {
        "background-color":  props.isHeld ? "#59E391" : "#FFFFFF"
    }

    return(
        <button className='die' 
            style={isHeld} onClick={() => props.hold(props.id)}>{props.value}
        </button>
    )
}
export default Die;