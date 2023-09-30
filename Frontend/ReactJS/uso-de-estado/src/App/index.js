import "./App.css";
import { UseState } from "../UseState";
import { UseReducer } from "../UseReducer";

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <UseReducer name="Use Reducer" />
    </div>
  );
}

export default App;
