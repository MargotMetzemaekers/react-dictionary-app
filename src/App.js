import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">Online Dictionary </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/margot-metzemaekers/">
          Margot Metzemaekers 👩‍💻
        </a>
      </footer>
    </div>
  );
}

export default App;
