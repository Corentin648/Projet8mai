import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Casson2021 from "./components/Casson2021";
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
                        <Route exact path={"/"} component={() => <Home carRef={this.carRef}/>}/>
                        <Route path={"/casson2021"} component={Casson2021}/>
                        <Route path={"/"} component={() => <div>The page doesn't exist</div>}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
