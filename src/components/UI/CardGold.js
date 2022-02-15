import './CardGold.css'


const CardGold = (props) => {
    
    const cardClass = 'card2 ' + props.className;

    return (
<div className={cardClass}>{props.children}</div>

    )
}




export default CardGold;