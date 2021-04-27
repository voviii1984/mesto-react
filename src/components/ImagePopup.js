function ImagePopup (props) {
    return (
        <section className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>      
        <div className="image-container">        
          <button onClick={props.onClose} type="reset" id="closeImageButton" className="popup__close"></button>
          <img src={props.card.link} alt="Изображение" className="image-container__card" />
          <h2 className="image-container__text">{props.card.name}</h2>
        </div>      
    </section>
    )
}

export default ImagePopup;