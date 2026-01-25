import racso from '../assets/racso.png';
import anonymous from '../assets/anonymous.webp';

export default function Reference() {
    return (
        <>
            <section className="reference-section" id="reference">
                <h2>Så här säger våra kunder</h2>
                <ul className="reference-cards">
                    <li className="reference-card">
                        <p>"Frunktansvärd service och långsam leverans! Maten var kall och äcklig."</p>
                        <img src={racso} alt="racso" />
                        <h3>- Racso</h3>
                    </li>
                    <li className="reference-card">
                        <p>"Jag älskar variationen av rätter som erbjuds. Det finns något för alla smaker!"</p>
                        <img src={anonymous} alt="anonymous" />
                        <h3>- Majk</h3>
                    </li>
                    <li className="reference-card">
                        <p>"Enkel beställningsprocess och vänlig kundtjänst. Rekommenderas starkt!"</p>
                        <img src={anonymous} alt="anonymous" />
                        <h3>- Namso</h3>
                    </li>
                </ul>
            </section>
        </>
    );
}