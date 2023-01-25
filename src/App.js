import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialValue={20} step={5} />
    </div>
  );
}

export default App;
