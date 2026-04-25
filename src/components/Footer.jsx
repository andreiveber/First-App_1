function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white mt-5 py-4">
            <div className="container text-center">
                <p>&copy; {year} Мое React приложение. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;