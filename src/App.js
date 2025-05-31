import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Antoś ma małe jaja! 🥚
      </h1>
      
      <p className={styles.subtitle}>
        Witaj na mojej pięknie stylizowanej stronie React!
      </p>
      
      <div className={styles.card}>
        <p>🚀 Hostowane na Vercel</p>
        <p>✨ Z animacjami CSS</p>
      </div>
    </div>
  );
}

export default App;