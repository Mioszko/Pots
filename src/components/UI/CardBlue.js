import './CardBlue.css'


const CardBlue = (props) => {
    
    const cardClass = 'card ' + props.className;

    return (
<div className={cardClass}>{props.children}</div>

    )
}




export default CardBlue;