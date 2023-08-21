import "./App.css";

import Header from "./components/header/Header";
import Trip from "./components/trip/Trip";
import Items from "./components/items/Items";

function App() {
  return (
    <div className="App">
      <Header />
      <Trip />
      <Items />
    </div>
  );
}

export default App;
