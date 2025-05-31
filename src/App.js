import { useState } from 'react';
import './App.css';

function App() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const messages = [
    "Dziś jaja Antosia są małe jak mrówka 🐜",
    "Jaja Antosia mają rozmiar ziarnka piasku 🏖️",
    "Obecnie jaja Antosia są jak główka od szpilki 📌",
    "Jaja Antosia są małe jak nasionko maku 🌰",
    "Dziś jaja Antosia mają wielkość kropli rosy 💧",
    "Jaja Antosia są jak drobinka kurzu ✨",
    "Obecnie jaja Antosia są małe jak okruszek 🍞",
    "Jaja Antosia mają rozmiar punktu na końcu zdania .",
    "Dziś jaja Antosia są jak mikroskopijny pyłek 🔬",
    "Jaja Antosia są małe jak łuska od ryby 🐟",
    "Jaja Antosia mają wielkość ziarnka pieprzu 🌶️",
    "Dziś jaja Antosia są jak pestka z wiśni 🍒",
    "Jaja Antosia są małe jak główka zapałki 🔥",
    "Obecnie jaja Antosia mają rozmiar ziarnka grochu 🟢",
    "Jaja Antosia są jak mały kamyczek 🪨",
    "Dziś jaja Antosia są małe jak nasionko słonecznika 🌻",
    "Jaja Antosia mają wielkość ziarnka ryżu 🍚",
    "Obecnie jaja Antosia są jak mała perła 💎",
    "Jaja Antosia są małe jak łezka dziecka 😢",
    "Dziś jaja Antosia mają rozmiar kulki z długopisu ✏️",
    "Jaja Antosia są jak małe ziarnko kawy ☕",
    "Obecnie jaja Antosia są małe jak przycisk na koszuli 👔",
    "Jaja Antosia mają wielkość drobnej monety 🪙",
    "Dziś jaja Antosia są jak ziarnko kminku 🧄",
    "Jaja Antosia są małe jak mały guzik 🔘",
    "Obecnie jaja Antosia mają rozmiar ziarnka sezamu 🥯",
    "Jaja Antosia są jak malutka bańka mydlana 🫧",
    "Dziś jaja Antosia są małe jak ziarnko piasku na plaży 🏝️",
    "Jaja Antosia mają wielkość małego kamienia 🗿",
    "Obecnie jaja Antosia są jak ziarnko cukru 🍯",
    "Jaja Antosia są małe jak kroplówka z kranu 🚰",
    "Dziś jaja Antosia mają rozmiar małego paciorka 📿",
    "Jaja Antosia są jak ziarnko kukurydzy 🌽",
    "Obecnie jaja Antosia są małe jak punkcik na mapie 🗺️",
    "Jaja Antosia mają wielkość małej kulki ze śniegu ❄️",
    "Dziś jaja Antosia są jak ziarnko pieprzu cayenne 🌶️",
    "Jaja Antosia są małe jak mała grudka soli 🧂",
    "Obecnie jaja Antosia mają rozmiar małego żółwika 🐢",
    "Jaja Antosia są jak ziarnko quinoa 🌾",
    "Dziś jaja Antosia są małe jak mała kropla deszczu ☔",
    "Jaja Antosia mają wielkość małego kryształka 💎",
    "Obecnie jaja Antosia są jak ziarnko chia 🌱",
    "Jaja Antosia są małe jak malutka śrubka ⚙️",
    "Dziś jaja Antosia mają rozmiar małej perłowej kulki 🤍",
    "Jaja Antosia są jak ziarnko amarantusa 🌺",
    "Obecnie jaja Antosia są małe jak główka od agrafki 📎",
    "Jaja Antosia mają wielkość małej tabletki 💊",
    "Dziś jaja Antosia są jak ziarnko pęczaku 🌾",
    "Jaja Antosia są małe jak mała kostka lodu 🧊",
    "Obecnie jaja Antosia mają roziarm malej kuleczki plastiku ♻️",
    "Jaja Antosia są jak ziarnko jagłania 🌾",
    "Dziś jaja Antosia są małe jak końcówka pinezki 📌",
    "Jaja Antosia mają wielkość małej perły syntetycznej 🦪",
    "Obecnie jaja Antosia są jak ziarnko maku na bułce 🥐",
    "Jaja Antosia są małe jak mały płatek śniegu ❄️",
    "Dziś jaja Antosia mają rozmiar małej kulki z plastelinuy 🎨",
    "Jaja Antosia są jak ziarnko kuminu 🫚",
    "Obecnie jaja Antosia są małe jak główka od pinezki 🔶",
    "Jaja Antosia mają wielkość małej kulki żelu 🫧",
    "Dziś jaja Antosia są jak ziarnko gorczycy 🌻",
    "Jaja Antosia są małe jak mała kulka z waty 🤍",
    "Obecnie jaja Antosia mają rozmiar małego kryształu soli 🧂",
    "Jaja Antosia są jak ziarnko lnu 🌾",
    "Dziś jaja Antosia są małe jak główka malej śrubki 🔩",
    "Jaja Antosia mają wielkość małej kuleczki z gliny 🏺"
  ];

  const checkSize = () => {
    setIsChecking(true);
    
    setTimeout(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMessage);
      setIsChecking(false);
    }, 1500);
  };

  return (
    <div className="container">
      <h1 className="title">
        Antoś ma małe jaja! 🥚
      </h1>
      
      <button 
        className={`check-button ${isChecking ? 'checking' : ''}`}
        onClick={checkSize}
        disabled={isChecking}
      >
        {isChecking ? "Sprawdzam rozmiar... 🔍" : "Sprawdź jaki rozmiar mają jaja Antosia"}
      </button>

      {currentMessage && (
        <div className="message-box">
          {currentMessage}
        </div>
      )}
    </div>
  );
}

export default App;