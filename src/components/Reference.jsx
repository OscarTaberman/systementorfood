import racso from '../assets/racso.png';
import anonymous from '../assets/anonymous.webp';

export default function Reference() {
    return (
        <>
            <section className="reference-section" id="reference">
                <h2>Så här säger våra kunder</h2>
                <ul className="reference-cards">
                    <li className="reference-card">
                        <img src={racso} alt="racso" />
                        <p>"Frunktansvärd service och långsam leverans! Maten var kall och äcklig."</p>
                        <h3>- Racso</h3>
                        <ul>
                            <li className='stars'></li>
                            <li className='stars greyStars'></li>
                            <li className='stars greyStars'></li>
                            <li className='stars greyStars'></li>
                            <li className='stars greyStars'></li>
                        </ul>
                    </li>
                    <li className="reference-card">
                        <img src={anonymous} alt="anonymous" />
                        <p>"Jag älskar variationen av rätter som erbjuds. Det finns något för alla smaker!"</p>
                        <h3>- Majk</h3>
                        <ul>
                            <li className='stars'></li>
                            <li className='stars'></li>
                            <li className='stars'></li>
                            <li className='stars'></li>
                            <li className='stars greyStars'></li>
                        </ul>
                    </li>
                    <li className="reference-card">
                        <img src={anonymous} alt="anonymous" />
                        <p>"Enkel beställningsprocess och vänlig kundtjänst. Rekommenderas starkt!"</p>
                        <h3>- Namso</h3>
                        <ul>
                            <li className='stars'></li>
                            <li className='stars'></li>
                            <li className='stars'></li>
                            <li className='stars'></li>
                            <li className='stars'></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </>
    );
}