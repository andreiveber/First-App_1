import Button from './Button';

function Hero() {
    return (
        <div className="bg-primary text-white text-center py-5">
            <div className="container">
                <h1 className="display-4">Добро пожаловать в наше приложение</h1>
                <p className="lead">Здесь вы найдете лучшие карточки и много интересного контента</p>
                <Button variant="light">Узнать больше</Button>
            </div>
        </div>
    );
}

export default Hero;