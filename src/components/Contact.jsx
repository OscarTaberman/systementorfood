export default function Contact() {
    return (
        <>
        <section className="contact-section" id="contact">
            <h2>Kontakta oss om du har några frågor!</h2>
            <h3>...vi kanske svarar.</h3>
            <form className="contact-form">
                <ul>
                    <label htmlFor="email">E-post:</label>
                    <input type="email" id="email" name="email" required />
                </ul>
                <ul>
                    <label htmlFor="message">Meddelande:</label>
                    <textarea id="message" name="message" required></textarea>
                </ul>
                <ul>
                    <button type="submit">Skicka</button>
                </ul>
            </form>
        </section>
        </>
    );
}