import React, {useState} from 'react'
import s from './Card.module.css'

const Cards = () => {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: 'Карточка 3'},
        {id: 2, order: 1, text: 'Карточка 1'},
        {id: 3, order: 2, text: 'Карточка 2'},
        {id: 4, order: 4, text: 'Карточка 4'},
    ])
    return (
        <div className={s.app}>
            { cardList.map(card =>
                <div className={s.card}>
                    {card.text}
                </div>
            )}
        </div>
    )
}

export default Cards