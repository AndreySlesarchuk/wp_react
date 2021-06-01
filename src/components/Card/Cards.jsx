import React, {useState} from 'react'
import s from './Card.module.css'

const Cards = () => {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: 'Карточка 3'},
        {id: 2, order: 1, text: 'Карточка 1'},
        {id: 3, order: 2, text: 'Карточка 2'},
        {id: 4, order: 4, text: 'Карточка 4'},
    ])
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e, card) {
        console.log('drag', card)
        setCurrentCard(card)
    }

    function dragEndHandler(e) {
        e.target.style.background = 'white'
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    function dropHandler(e, card) {
        e.preventDefault()
        console.log('drop', card)
    }

    return (
        <div className={s.app}>
            { cardList.map(card =>
                <div
                    onDragStart={(e) => dragStartHandler(e, card) }
                    onDragLeave={(e) => dragEndHandler(e) }
                    onDragEnd={(e) => dragEndHandler(e) }
                    onDragOver={(e) => dragOverHandler(e) }
                    onDrop={(e) => dropHandler(e, card) }
                    className={s.card}
                    draggable={true}
                >
                    {card.text}
                </div>
            )}
        </div>
    )
}

export default Cards