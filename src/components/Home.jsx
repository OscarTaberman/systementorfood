import backgroundImage from "../assets/about-background-image.png";

export default function Home() {
    return (
        <div className="hero">
            <div className="background-image"></div>
            <div className="hero-text">
                <h1>Din favoritmat levererad hem till din dörr!</h1>
                <h2>Oscar, Mike och Osman gör allt preparationsarbete så du enkelt kan förbereda god, prisvärd & nyttig mat.</h2>
                <button>Beställ nu</button>
            </div>
            <img src={backgroundImage} 
                alt="Salad bowl" 
                className="salad" />
            
        </div>
    );
};