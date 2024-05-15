import React, { useEffect, useState } from 'react';
import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from './utils/constant';

const App = () => {
  const [toDos, setTodos] = useState([])
  const [input, setInput] = useState("")
  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const saveToDo = () => {
    axios.post(`${baseURL}/save`, { ToDo: input }).then(res => {
      console.log(res.data);
      setInput("")
        .catch((err) => console.log(err));

    })
  }
  return (
    <main>
      <div className='container'>
        <h1 className='title'>To-Do App</h1>
        <div className='input_holder'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Add a ToDo...'
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
        </div>
      </div>
    </main>
  );
};

export default App;