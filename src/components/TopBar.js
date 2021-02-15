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
                <div className="navbar" id="myTopNav">
                    <Link id="HomeTab" to="/" onClick={() => this.setActiveTab(document.getElementById("HomeTab"))}>Home</Link>
                    <Link to="/casson2021" id="Casson2021Tab" onClick={() => this.setActiveTab(document.getElementById("Casson2021Tab"))}>Casson 2021</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown
                            <i className="fa fa-caret-down"/>
                        </button>
                        <div className="dropdown-content">
                            <a id ="Link1" href="#" onClick={() => window.location.reload()}>Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <a href="javascript:void(0);" className="icon" onClick = {() => this.handleOnClickToggle()}>
                        <i className="fa fa-bars"/>
                    </a>

                </div>

            </div>


        )

        return(<div>{appTopBar}</div>);
    }

    componentDidMount() {
        const activeComponent = document.getElementById(this.state.activeTab);
        if (activeComponent !== null){
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
        }, () => {this.saveStateToLocalStorage();});
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