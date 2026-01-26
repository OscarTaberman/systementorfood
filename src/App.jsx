import "./App.css";

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Reference from "./components/Reference.jsx";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Contact />
      <Reference />
      <Footer />
    </div>
  );
}

export default App;
