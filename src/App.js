import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Historique from "./components/Historique";
import ContactPage from "./components/pages/contact-page/ContactPage";
import ProgrammePage from "./components/pages/programme-page/ProgrammePage";
import React, {Component} from 'react';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: "HomeTab"
        }

        /* Get active tab info from local storage */
        const state = localStorage.getItem('state');
        if (state) {
            this.state = JSON.parse(state);
        }
    }

    /* Allows keeping active tab info while refreshing page */
    saveStateToLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify(this.state));
    }

    /* Function called in TopBar and Footer */
    setActiveTab = (tab) => {
        const elements = document.body.getElementsByTagName("*");
        const inputList = Array.prototype.slice.call(elements);
        for (let i = 0; i < inputList.length; i++) {
            if (inputList[i].classList.contains("active")) {
                inputList[i].classList.remove("active");
            }
        }
        tab.classList.add("active");
        this.setState({
            activeTab: tab.id
        }, () => {
            this.saveStateToLocalStorage();
        });
    }

    render() {
        return (

            <HashRouter forceRefresh={"true"}>
                <div className="App">

                    <TopBar setActiveTab={this.setActiveTab} activeTab={this.state.activeTab}/>

                    <Switch>
                        <Route exact path={"/"} component={() => <HomePage/>}/>
                        <Route path={"/historique"} component={() => <Historique/>}/>
                        <Route path={"/contact"} component={() => <ContactPage/>}/>
                        <Route path={"/programme"} component={() => <ProgrammePage/>}/>
                        <Route path={"/"} component={() => <div>The page doesn't exist</div>}/>
                    </Switch>

                    <Footer setActiveTab={this.setActiveTab}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
