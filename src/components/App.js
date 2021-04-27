import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {useState} from 'react'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const[isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const[isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const[isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const[selectedCard, setselectedCard] = useState(false)

function onEditAvatar() {
  setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}

function onEditProfile() {
  setisEditProfilePopupOpen(!isEditProfilePopupOpen);
}

function onAddPlace() {
  setisAddPlacePopupOpen(!isAddPlacePopupOpen);
}

function handleCardClick(card) {
  setselectedCard(card)
}

function closeAllPopups() {
  setisEditAvatarPopupOpen(false)
  setisEditProfilePopupOpen(false)
  setisAddPlacePopupOpen(false)
  setselectedCard(false)
}

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={onEditAvatar} onEditProfile={onEditProfile} onAddPlace={onAddPlace} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={
        <form className="popup__form form" novalidate>
          <input type="text" id="inputName" minlength="2" maxlength="40" name="username" required placeholder="Фамилия Имя Отчество" className="form-text" />
          <span id="inputNameError" className="error"></span>
          <input type="text" id="inputJob" minlength="2" maxlength="200" required placeholder="Место работы" className="form-text" />
          <span id="inputJobError" className="error"></span>
          <button type="submit" id="saveElement" className="popup__button form__submit popup__button-check" disabled>Сохранить</button>
        </form>
      } />
      <PopupWithForm name='add-card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={
        <form id="formImage" className="popup__form form-mesto" novalidate>
          <input type="text" id="addName" required minlength="2" maxlength="30" className="form-text" placeholder="Название" />
          <span id="addNameError" className="error"></span>
          <input type="url" id="addImage" required className="form-text" placeholder="Ссылка на картинку" />
          <span id="addImageError" className="error"></span>
          <button type="submit" id="saveAddCard" className="popup__button form-mesto__submit popup__button-check" disabled>Создать</button>
        </form>
      } />
      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
        <form id="formAvatar" className="popup__form form-avatar" novalidate>
          <input type="url" id="addAvatar" required className="form-text" placeholder="Аватар" />
          <span id="addAvatarError" className="error"></span>
          <button type="submit" id="saveAvatar" className="popup__button form-avatar__submit popup__button-check" disabled>Сохранить</button>
        </form>
      } />
      <PopupWithForm name='delete' title='Вы уверены?' children={
        <form id="formDelete" className="popup__form form-delete" novalidate>
          <button type="submit" id="deleteCard" className="popup__button form-delete__submit">Да</button>
        </form>
      } />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>


  );
}

export default App;
