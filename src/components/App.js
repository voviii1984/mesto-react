import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} nameButton='Сохранить' children={
        <fieldset className="form">
          <input type="text" id="inputName" minLength="2" maxLength="40" name="username" required placeholder="Фамилия Имя Отчество" className="form-text" />
          <span id="inputNameError" className="error"></span>
          <input type="text" id="inputJob" minLength="2" maxLength="200" required placeholder="Место работы" className="form-text" />
          <span id="inputJobError" className="error"></span>                 
        </fieldset>
      } />

      <PopupWithForm name='add-card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} nameButton='Создать' children={
        <fieldset className="form-mesto">
          <input type="text" id="addName" required minLength="2" maxLength="30" className="form-text" placeholder="Название" />
          <span id="addNameError" className="error"></span>
          <input type="url" id="addImage" required className="form-text" placeholder="Ссылка на картинку" />
          <span id="addImageError" className="error"></span>          
        </fieldset>
      } />

      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} nameButton='Сохранить' children={
        <fieldset className="form-avatar">
          <input type="url" id="addAvatar" required className="form-text" placeholder="Аватар" />
          <span id="addAvatarError" className="error"></span>          
        </fieldset>
      } />

      <PopupWithForm name='delete' title='Вы уверены?' nameButton='Да' />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>


  );
}

export default App;
