import React, { useEffect, useState } from "react";
import axios from "axios";

import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";

axios("http://localhost:3001/tasks");

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios("http://localhost:3001/tasks").then((response) => 
      setTasks(response.data)
    );
  }, []);

  function handleChange(event) {
    setValue(event.target.value)
  }

  async function handleClick(event) {
    if (value) {
      await axios.post("http://localhost:3001/tasks", {
        title: value,
      });

      setValue("");

      const response = await axios("http://localhost:3001/tasks");
      
      setTasks(response.data)
    }
  }

  return (
    <div className="App">
      <h1>Task list</h1>

      <Input
        placeholder="Digite sua task"
        value={value}
        onChange={handleChange}      
      />

      <button onClick={handleClick}>Adicionar task</button>
  
      <List tasks={tasks} />

      <Pagination page="1" />
    </div>
  );
}

export default App;
