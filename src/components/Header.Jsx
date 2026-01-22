export default function Header() {
    return (
        <header className="header">
            <div className="header-container">

                <div className="logo">
                    <span>Ristorante Mike al dente</span>
                </div>

                <nav className="nav">
                    <ul>
                        <li><a href="#">Hem</a></li>
                        <li><a href="#">Om</a></li>
                        <li><a href="#">Referenser</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </nav>

                <div className="actions">
                    <span className="cart"><i class="fa-solid fa-cart-shopping"></i></span>
                    <button className="cta">Boka Nu</button>

                </div>

            </div>
        </header>
    )
}