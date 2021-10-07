import React, {Component} from 'react';
import './TopBar.css';
import {Link} from "react-router-dom";

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "HomeTab"
        }

        //localStorage.clear();
        const state = localStorage.getItem('state');
        if (state) {
            this.state = JSON.parse(state);
        }
    }

    /* Fonction qui permet de stocker le state dans la ressource du navigateur */
    saveStateToLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify(this.state));
    }


    render() {

        const appTopBar = (
            <div id="render">
                <div className="navbar" id="myTopNav" ref={this.props.carRef}>
                    <Link id="HomeTab" to="/"
                          onClick={() => this.setActiveTab(document.getElementById("HomeTab"))}>Accueil</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Casson 2021
                            <i style={{paddingLeft: "15px"}} className="fa fa-caret-down"/>
                        </button>
                        <div className="dropdown-content">
                            <a id="ProgrammeTab" href="/" onClick={() => window.location.reload()}>Programme</a>
                            <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                            <a id="BaladeTab" href="/" onClick={() => window.location.reload()}>Balade</a>
                            <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                            <a id="BalTab" href="/" onClick={() => window.location.reload()}>Bal du samedi soir</a>
                            <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                            <a id="MangerTab" href="/" onClick={() => window.location.reload()}>Buvette / Resto</a>
                            <hr style={{borderTop: "0px", color: "#ddd", padding: "0", margin: "0"}}/>
                            <a id="VehiculesTab" href="/" onClick={() => window.location.reload()}>Véhicules exposés</a>
                        </div>
                    </div>
                    <Link id="HistoriqueTab" to="/historique"
                          onClick={() => this.setActiveTab(document.getElementById("HistoriqueTab"))}>Historique</Link>
                    <Link id="ContactTab" to="/historique"
                          onClick={() => this.setActiveTab(document.getElementById("ContactTab"))}>Contactez-nous</Link>
                    <a href="/" className="icon" onClick={() => this.handleOnClickToggle()}>
                        <i className="fa fa-bars"/>
                    </a>

                </div>

            </div>


        )

        return (<div>{appTopBar}</div>);
    }

    componentDidMount() {
        const activeComponent = document.getElementById(this.state.activeTab);
        if (activeComponent !== null) {
            activeComponent.classList.add("active");
        }
    }


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

    handleOnClickToggle = () => {
        let x = document.getElementById("myTopNav");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }


}

export default TopBar;