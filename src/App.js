import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./components/pages/HomePage";
import Historique from "./components/Historique";
import React, {Component} from 'react';


class App extends Component {

    constructor(props) {
        super(props);

        this.carRef = new React.createRef();
    }


    render() {
        return (

            <HashRouter forceRefresh={"true"}>
                <div className="App">

                    <TopBar carRef={this.carRef}/>

                    <Switch>
                        <Route exact path={"/"} component={() => <HomePage carRef={this.carRef}/>}/>
                        <Route path={"/historique"} component={Historique}/>
                        <Route path={"/"} component={() => <div>The page doesn't exist</div>}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
