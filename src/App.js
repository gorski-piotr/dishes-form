import logo from "./logo.svg";
import "./App.css";
import DishesForm from "./components/DishesForm";

function App() {
  return (
    <div className="App font-mono">
      <header className="App-header bg-gray-400 text-gray-700 font-bold">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dishes Form - Technical Task</p>
      </header>
      <DishesForm />
    </div>
  );
}

export default App;
