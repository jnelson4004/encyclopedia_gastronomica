//define axios
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
//write staate for that from 
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


//example API call with axios 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      name,
      email,
      password
    });
    console.log(response);
  }
  catch (error) {
    console.error(error);
  }
}


  return (
   //give me a basic form to start with
    <div className="App">
      <header className="App-header">
        <h1>Recipe App</h1>
        <form>
          <label>
            Email:
            <input type="text" name="password" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Submit" onSubmit={handleSubmit} />
        </form>
      </header>
    </div>
  )
}

export default App;
