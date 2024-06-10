import './App.css';
//define axios
const axios = require('axios');
const { useState } = require('react');
// import React, { useState } from 'react';


function App() {
//write staate for that from 
const [name] = useState("");
const [email] = useState("");
const [password] = useState("");


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
