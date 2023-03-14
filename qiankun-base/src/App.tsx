import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/app1"} >app1</Link> |
      <Link to={"/app2"}>app2</Link> |
      <Link to={"/vue3-app3"}>vue3-app3</Link> |
      <div id="app1"></div>
      <div id="app2"></div>
      <div id="app3"></div>
    </div>
  );
}

export default App;
