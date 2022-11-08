import React from "react";
import Toolbar from "./Toolbar";



class App extends React.Component{
  render(){
    return (
      <div>
        <Toolbar>
          <h1>Hello</h1>
          <p>This is simple paragraph</p>
        </Toolbar>
      </div>
    )
  }
}

export default App;