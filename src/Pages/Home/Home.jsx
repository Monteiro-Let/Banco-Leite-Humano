import Header from "../../Components/Header/Header.jsx";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import Form from "../../Components/Form/Form.jsx";
import Card from "../../Components/Card/Card.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import './Home.css';

function Home() {
    return (
        <>
            <Header />
            <section className="home-section">
                <SearchBar />
                <Form />
                <div className="cards-container">
                <Card />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;

