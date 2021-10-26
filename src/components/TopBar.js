import React, {Component} from 'react';
import './TopBar.scss';
import {Link} from "react-router-dom";

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "HomeTab",
            toggleClick: ""
        }

        //localStorage.clear();
        const state = localStorage.getItem('state');
        if (state) {
            this.state = JSON.parse(state);
        }
    }

    saveStateToLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify(this.state));
    }


    render() {
        const appTopBar = (
            <div className={"navbar" + this.state.toggleClick} id="myTopNav" ref={this.props.carRef}>
                <Link id="HomeTab" to="/"
                      onClick={() => this.setActiveTab(document.getElementById("HomeTab"))}>Accueil</Link>
                <Link className="dropdown" id="CassonTab" to="/"
                      onClick={() => this.setActiveTab(document.getElementById("HomeTab"))}>
                    Casson 2021
                    <i style={{paddingLeft: "15px"}} className="fa fa-caret-down"/>
                    <div
                        className="dropdown-content">
                        <a id="ProgrammeTab" href="/" onClick={() => this.handleOnClickDropdownTab()}>Programme</a>
                        <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                        <a id="BaladeTab" href="/" onClick={() => window.location.reload()}>Balade</a>
                        <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                        <a id="BalTab" href="/" onClick={() => window.location.reload()}>Bal du samedi soir</a>
                        <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                        <a id="MangerTab" href="/" onClick={() => window.location.reload()}>Buvette / Resto</a>
                        <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                        <a id="VehiculesTab" href="/" onClick={() => window.location.reload()}>Véhicules exposés</a>
                    </div>
                </Link>
                <Link id="HistoriqueTab" to="/historique"
                      onClick={() => this.setActiveTab(document.getElementById("HistoriqueTab"))}>Historique</Link>
                <Link id="ContactTab" to="/"
                      onClick={() => this.setActiveTab(document.getElementById("ContactTab"))}>Contactez-nous</Link>
                <Link to="/" className="toggle" onClick={() => this.handleOnClickToggle()}>
                    <i className="fa fa-bars"/>
                </Link>

            </div>
        )

        return (<div>{appTopBar}</div>);
    }

    componentDidMount() {
        let activeComponent = document.getElementById(this.state.activeTab);
        if (activeComponent !== null) {
            activeComponent.classList.add("active");
        }

        /*        this.setState({
                    toggleClick: ""
                });*/
        console.log(this.state.toggleClick);
    }

    setActiveTab = (tab) => {
        this.handleOnClickDropdownTab();
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

    handleOnClickToggle = () => {
        let x = document.getElementById("myTopNav");
        if (x.className === "navbar") {
            this.setState({
                toggleClick: " expand-tabs"
            });
        } else {
            this.setState({
                toggleClick: ""
            });
        }
    }

    handleOnClickDropdownTab = () => {
        this.handleOnClickToggle();
    }
}

export default TopBar;