function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element ">
            <img src={props.card.link} alt="Изображение" className="element__image" onClick={handleClick}/>
            <button type="reset" className="element__close"></button>
            <div className="element__group">
                <h2 className="element__text">{props.card.name}</h2>
                <div className="element__like">
                    <button type="button" name="Like" className="element__vector"></button>
                    <p className="element__number">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;