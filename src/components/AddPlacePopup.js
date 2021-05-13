import PopupWithForm from './PopupWithForm';
import { useEffect, useRef } from 'react'

function AddPlacePopup(props) {
    const nameRef = useRef();
    const linkRef = useRef();

    useEffect(() => {
        nameRef.current.value = ''
        linkRef.current.value = ''
    }, []);

    function handleSubmit(evt) {
        // Запрещаем браузеру переходить по адресу формы
        evt.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value,
        });
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} name='add-card' title='Новое место' isOpen={props.isOpen} onClose={props.onClose} nameButton='Создать' children={
            <fieldset className="form-mesto">
                <input ref={nameRef} type="text" id="addName" required minLength="2" maxLength="30" className="form-text" placeholder="Название" />
                <span id="addNameError" className="error"></span>
                <input ref={linkRef} type="url" id="addImage" required className="form-text" placeholder="Ссылка на картинку" />
                <span id="addImageError" className="error"></span>
            </fieldset>
        } />
    )
}

export default AddPlacePopup;