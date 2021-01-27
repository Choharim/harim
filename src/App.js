import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroPage from "pages/Intro/index";
import HomePage from "pages/home/index";

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "hidden" }}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <IntroPage />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
		margin: 0;
}
	body {
    font-family: 'Noto Serif KR', serif;
	}
`;
