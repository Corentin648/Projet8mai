import React, {Component} from 'react';
import './Footer.scss';
import {Link, withRouter} from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <section style={{width: "100%"}}>
                <div id={"content-container"}>
                    <div className={"footer-item"} id={"links-item"}>
                        <Link className={"link"} id={"contact-link"} to="/contact"
                              onClick={() => this.props.setActiveTab(document.getElementById("ContactTab"))}>Contactez-nous</Link>
                        <span style={{marginLeft: "10px", color: "white"}}>|</span>
                        <Link className={"link"} id={"legal-notice-link"} to="/historique"
                              style={{marginLeft: "10px"}}>Mentions
                            legales</Link>
                    </div>
                    <div className={"footer-item"} id={"logo-item"}>
                        <img id={"asso-logo"}
                             src={process.env.PUBLIC_URL + "/logo192.png"} alt={""}/>
                    </div>
                    <div className={"footer-item"} id={"networks-item"}>
                        <Link className="network-icon" id="fb-icon" to="/">
                            <i style={{color: "white"}}
                               className="fa fa-facebook-square fa-3x"/>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Footer);