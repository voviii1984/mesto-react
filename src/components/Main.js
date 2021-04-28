import api from '../utils/api'
import { useEffect, useState } from 'react'
import Card from './Card'

function Main(props) {

    const [userAvatar, setuserAvatar] = useState('')
    const [userName, setuserName] = useState('')
    const [userDescription, setuserDescription] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        api.userInfo()
            .then((res) => {
                setuserAvatar(res.avatar)
                setuserName(res.name)
                setuserDescription(res.about)
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });

        api.getInitialCards()
            .then((res) => {
                setCards(res)
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__change" onClick={props.onEditAvatar}>
                    <img src={userAvatar} alt={userName} className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <div className="profile__infos">
                        <h1 className="profile__info-title">{userName}</h1>
                        <button type="submit" className="profile__popup-button" onClick={props.onEditProfile}></button>
                    </div>
                    <h2 className="profile__info-text">{userDescription}</h2>
                </div>

                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map(card => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)}
            </section>
        </main>
    )
}

export default Main;