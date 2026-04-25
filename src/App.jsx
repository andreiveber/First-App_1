import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardCollection from './components/CardCollection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Hero />
            <main className="flex-grow-1">
                <div className="container py-5">
                    <h2 className="text-center mb-4">Наши карточки</h2>
                    <CardCollection />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
