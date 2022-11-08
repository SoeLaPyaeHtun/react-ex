import React from "react";

const myContext = React.createContext("nothing");

const App = props => {
  return <Header />
}

const Header = props => {
  return <Title />
}

const Title = props => {
  const name = React.useContext(myContext);
  return <h1>{name}</h1>
}

export default App