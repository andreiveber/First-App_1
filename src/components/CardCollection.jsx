import Card from './Card';

function CardCollection() {
    const cards = [
        { id: 1, title: 'Первая карточка', text: 'Это пример содержимого первой карточки. Здесь может быть любой интересный текст.' },
        { id: 2, title: 'Вторая карточка', text: 'Еще один пример карточки с полезной информацией для пользователя.' },
        { id: 3, title: 'Третья карточка', text: 'Карточка может содержать кнопку для выполнения действий.' },
        { id: 4, title: 'Четвертая карточка', text: 'Добавим больше контента для наглядности.' },
        { id: 5, title: 'Пятая карточка', text: 'Интересное описание пятой карточки.' },
        { id: 6, title: 'Шестая карточка', text: 'Последняя карточка в коллекции.' }
    ];

    const handleClick = (cardId) => {
        alert(`Вы нажали на карточку №${cardId}`);
    };

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cards.map(card => (
                <Card
                    key={card.id}
                    title={card.title}
                    text={card.text}
                    buttonText="Подробнее"
                    onButtonClick={() => handleClick(card.id)}
                />
            ))}
        </div>
    );
}

export default CardCollection;
