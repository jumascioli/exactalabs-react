import { useState } from "react";

import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";

function App() {
const [value, setValue] = useState("Mallone");

  return (
    <div className="App">
      <h1>Task list</h1>

      <input
        placeholder="Digite sua task"
        value={value}
        onChange={(event) => {
          setValue (event.target.value);        
        }}
      />

      <button>Adicionar task</button>

      <div>{value}</div>

      <List />

      <Pagination page="6" />
    </div>
  );
}

export default App;
