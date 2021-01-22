import React from "react";
import { createGlobalStyle } from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    box-sizing:border-box;
    font-family: 'Noto Serif KR', serif;
	}
`;
