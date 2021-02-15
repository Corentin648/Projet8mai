import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Casson2021 from "./components/Casson2021";

function App() {
  return (
      <body>
      <HashRouter forceRefresh={"true"}>
          <div className="App">

              <TopBar/>

              <Switch>
                  <Route exact path={"/"} component={Home}/>
                  <Route path={"/casson2021"} component={Casson2021}/>
                  <Route path={"/"} component={() => <div>The page doesn't exist</div>}/>
              </Switch>
          </div>
      </HashRouter>
      </body>
  );
}

export default App;
