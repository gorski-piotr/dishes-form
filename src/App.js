import logo from "./logo.svg";
import "./App.css";
import DishesForm from "./components/DishesForm";

function App() {
  return (
    <div className="App container mx-auto">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dishes Form - Technical Task</p>
      </header>
      <DishesForm />
    </div>
  );
}

export default App;
