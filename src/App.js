function App() {
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
        marginBottom: "0.5em",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        animation: "fadeInUp 1s ease-out"
      }}>
        Antoś ma małe jaja! 🥚
      </h1>
      
      <p style={{
        fontSize: "1.2em",
        maxWidth: "600px",
        lineHeight: "1.6",
        marginBottom: "2em",
        animation: "fadeInUp 1s ease-out 0.5s both"
      }}>
        Witaj na mojej ulepszonej stronie React!
      </p>
      
      <div style={{
        background: "rgba(255,255,255,0.1)",
        padding: "1em 2em",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        animation: "fadeInUp 1s ease-out 1s both"
      }}>
        <p>🚀 Hostowane na Vercel</p>
      </div>

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
      `}</style>
    </div>
  );
}

export default App;