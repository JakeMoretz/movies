/* eslint-disable react/prop-types */

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.img} alt="" className="card--img" />
            <p className="title">
                Title: <span>{props.title}</span>
            </p>
            <p className="year">
                Release year: <span>{props.releaseYear}</span>
            </p>
            <p className="genre">
                Genre: <span>{props.genre}</span>
            </p>
            <p className="rating">
                Rating: <span>{props.rating}</span>
            </p>
        </section>
    );
}
