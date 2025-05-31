import { useState } from 'react';

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
    "Jaja Antosia są małe jak łuska od ryby 🐟"
  ];

  const checkSize = () => {
    setIsChecking(true);
    
    // Symulujemy "sprawdzanie" przez 1.5 sekundy
    setTimeout(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMessage);
      setIsChecking(false);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Arial', sans-serif",
      color: "white",
      textAlign: "center",
      padding: "2em"
    }}>
      <h1 style={{
        fontSize: "3em",
        marginBottom: "1em",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        animation: "fadeInUp 1s ease-out"
      }}>
        Antoś ma małe jaja! 🥚
      </h1>
      
      <button 
        onClick={checkSize}
        disabled={isChecking}
        style={{
          background: isChecking ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.2)",
          border: "2px solid rgba(255,255,255,0.4)",
          color: "white",
          padding: "15px 30px",
          fontSize: "1.1em",
          borderRadius: "25px",
          cursor: isChecking ? "wait" : "pointer",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
          marginBottom: "2em",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
        }}
        onMouseOver={(e) => {
          if (!isChecking) {
            e.target.style.background = "rgba(255,255,255,0.3)";
            e.target.style.transform = "translateY(-2px)";
          }
        }}
        onMouseOut={(e) => {
          if (!isChecking) {
            e.target.style.background = "rgba(255,255,255,0.2)";
            e.target.style.transform = "translateY(0)";
          }
        }}
      >
        {isChecking ? "Sprawdzam rozmiar... 🔍" : "Sprawdź jaki rozmiar mają jaja Antosia"}
      </button>

      {currentMessage && (
        <div style={{
          background: "rgba(255,255,255,0.15)",
          padding: "20px 30px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          maxWidth: "500px",
          fontSize: "1.3em",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          animation: "slideIn 0.5s ease-out"
        }}>
          {currentMessage}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;