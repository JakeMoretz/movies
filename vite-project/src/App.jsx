import Card from './component/Card';
import Nav from './component/Nav'
import data from './data';
import './App.css';

export default function App() {
    const card = data.map((item) => {
        return (
            <Card
                key={item.id}
                img={item.img}
                title={item.title}
                releaseYear={item.releaseYear}
                genre={item.genre}
                rating={item.rating}
            />
        );
    });

    return (
        <section className="main">
            <Nav />
            <div className="container">
                {card}
            </div>
            
        </section>
    )
    
}
