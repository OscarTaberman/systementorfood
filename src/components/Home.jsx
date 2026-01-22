import backgroundImage from "../assets/about-background-image.png";
import backgroundBanner from "../assets/home-banner-background.png";

export default function Home() {
    return (
    <div>    
        <img src={backgroundBanner} className="background-banner"></img>
        <div className="hero">
            <div className="hero-text">
                <h1>Din favoritmat levererad hem till din dörr!</h1>
                <h2>Mike, Oscar och Osman gör absolut inget preparationsarbete så du enkelt kan förbereda äcklig, dyr & onyttig skräpmat.</h2>
                <button>Beställ nu</button>
            </div>
            <img src={backgroundImage} 
                alt="Salad bowl" 
                className="salad" />
            
        </div>
    </div>
    );
};