import React, {Component} from 'react';
import './TopBar.scss';
import {Link, withRouter} from "react-router-dom";

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleClick: ""
        }
    }

    /* Hide or show all content except TopBar */
    hideShowAll = (hide) => {
        const elements = document.body.querySelectorAll(".App > *");
        const inputList = Array.prototype.slice.call(elements);
        for (let i = 0; i < inputList.length; i++) {
            if (!(inputList[i].id === "myTopNav")) {
                hide ? inputList[i].style.display = "none" : inputList[i].style.display = "block";
            }
        }
    }

    setActiveTabAndHandleDropdownTab = (tab) => {
        this.handleOnClickDropdownTab();
        this.props.setActiveTab(tab);
    }

    handleOnClickToggle = () => {
        let x = document.getElementById("myTopNav");
        const expandTabs = x.className.includes("expand-tabs");
        this.hideShowAll(!expandTabs); // avoid unwanted scrolling when tabs expanded
        this.setState({
            toggleClick: expandTabs ? "" : "expand-tabs"
        });

    }

    toggleIcon = () => {
        return this.state.toggleClick.includes("expand-tabs") ? "fa fa-times" : "fa fa-bars";
    }

    handleOnClickDropdownTab = () => {
        this.handleOnClickToggle();
    }

    handleGoToCard = (cardId) => {
        const element = document.querySelector(cardId);

        if (element !== null) {
            const y = element.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({top: y - 105, behavior: 'smooth'});

            // À VOIR ; peut poser problème si la taille d'écran change en cours de route
            this.handleOnClickToggle();
        }
    }

    componentDidMount() {
        let activeComponent = document.getElementById(this.props.activeTab);
        if (activeComponent !== null) {
            activeComponent.classList.add("active");
        }
    }

    render() {
        return (
            <section className={"navbar " + this.state.toggleClick} id="myTopNav">
                <Link id="HomeTab" to="/"
                      onClick={() => this.setActiveTabAndHandleDropdownTab(document.getElementById("HomeTab"))}>Accueil</Link>
                <Link className="dropdown" id="CassonTab" to="/"
                      onClick={() => this.handleGoToCard("#casson-card")}>
                    Casson 2022
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
                <Link id="HistoriqueTab" to="/"
                      onClick={() => this.handleGoToCard("#history-card")}>Historique</Link>
                <Link id="ContactTab" to="/contact"
                      onClick={() => this.setActiveTabAndHandleDropdownTab(document.getElementById("ContactTab"))}>Contactez-nous</Link>
                <div id={"navbar-header"}>
                    <h3 id={"asso-name"}>Patrimoine véhicules anciens</h3>
                    <Link to={this.props.location.pathname} id={"toggle"}
                          onClick={() => this.handleOnClickToggle()}>
                        <i className={this.toggleIcon()}/>
                    </Link>
                </div>

            </section>
        );
    }
}

export default withRouter(TopBar);