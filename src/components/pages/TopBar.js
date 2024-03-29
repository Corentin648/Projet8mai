import React, {Component} from 'react';
import '../styles/TopBar.scss';
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

    /* Allows displaying everything back if screen is resized over 750px and toggle is still open */
    handleResize = () => {
        let x = document.getElementById("myTopNav");
        const expandTabs = x.className.includes("expand-tabs");
        if (window.screen.width > 750 && expandTabs) {
            this.hideShowAll(!expandTabs);
        }
    }

    handleOnClickTab = (tab) => {
        /* Means that we need to close toggle if it's open */
        this.handleOnClickToggle();
        /* Need to set the active tab */
        this.props.setActiveTab(tab);
    }

    handleOnClickToggle = () => {
        if (window.screen.width < 750) {
            let x = document.getElementById("myTopNav");
            const expandTabs = x.className.includes("expand-tabs");

            this.hideShowAll(!expandTabs); // avoid unwanted background scrolling when tabs expanded

            this.setState({
                toggleClick: expandTabs ? "" : "expand-tabs"
            });
        }

    }

    toggleIcon = () => {
        return this.state.toggleClick.includes("expand-tabs") ? "fa fa-times" : "fa fa-bars";
    }

    handleGoToCard = (e, cardId, tabId) => {
        /* Means that we need to close toggle if it's open */
        this.handleOnClickToggle();

        const element = document.querySelector(cardId);
        const tab = document.querySelector(tabId);

        /* Check if it's actually the dropdown main tab which has been clicked */
        if (element !== null && tab !== null && tab.id === e.target.id) {
            const y = element.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({top: y - 105, behavior: 'smooth'});
        }
    }

    componentDidMount() {
        /* Need to set the active tab */
        let activeComponent = document.getElementById(this.props.activeTab);
        if (activeComponent !== null) {
            activeComponent.classList.add("active");
        }

        window.addEventListener('resize', () => this.handleResize());
    }

    render() {
        return (
            <section className={"navbar " + this.state.toggleClick} id="myTopNav">
                <Link id="HomeTab" to="/"
                      onClick={() => this.handleOnClickTab(document.getElementById("HomeTab"))}>Accueil</Link>
                <Link className="dropdown" id="CassonTab" to="/"
                      onClick={(e) => this.handleGoToCard(e, "#casson-card", "#CassonTab")}>
                    Casson 2022
                    <i style={{paddingLeft: "15px"}} className="fa fa-caret-down"/>
                    <div
                        className="dropdown-content">
                        <Link id="ProgrammeTab" to="/programme"
                              onClick={() => this.handleOnClickTab(document.getElementById("ProgrammeTab"))}>Programme</Link>
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
                      onClick={(e) => this.handleGoToCard(e, "#history-card", "#HistoriqueTab")}>Historique</Link>
                <Link id="ContactTab" to="/contact"
                      onClick={() => this.handleOnClickTab(document.getElementById("ContactTab"))}>Contactez-nous</Link>
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