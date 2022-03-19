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
        Coded open source on{" "}
        <a
          href="https://github.com/MargotMetzemaekers/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>
        by{" "}
        <a href="https://www.linkedin.com/in/margot-metzemaekers/">
          Margot Metzemaekers 👩‍💻
        </a>
        hosted on{" "}
        <a href="https://app.netlify.com/teams/margotmetzemaekers/overview">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
