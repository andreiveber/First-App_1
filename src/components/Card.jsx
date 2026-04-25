import Button from './Button';

function Card({ title, text, imageUrl, buttonText, onButtonClick }) {
    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    {buttonText && (
                        <Button onClick={onButtonClick}>
                            {buttonText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
