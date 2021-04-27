function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__container-title">{props.title}</h2>
                {props.children}
                <button onClick={props.onClose} type="reset" className="popup__close"></button>
            </div>
        </section>
    )
}

export default PopupWithForm;