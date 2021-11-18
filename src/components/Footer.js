import React, {Component} from 'react';
import './Footer.scss';
import {Link, withRouter} from "react-router-dom";
import logo_pva_monochrome from "../assets/logo_pva_monochrome.png";
import logo_pva from "../assets/logo_pva.png";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo_image: logo_pva_monochrome
        }
    }

    handleMoveMouseLogo = (logo_image) => {
        this.setState({
            logo_image: logo_image
        });
    }

    render() {
        return (
            <section style={{width: "100%"}}>
                <div id={"content-container"}>
                    <div className={"footer-item"} id={"links-item"}>
                        <Link className={"link"} id={"contact-link"} to="/contact"
                              onClick={() => this.props.setActiveTab(document.getElementById("ContactTab"))}>Contactez-nous</Link>
                        <span style={{marginLeft: "10px", color: "white"}}>|</span>
                        <Link className={"link"} id={"legal-notice-link"} to="/"
                              onClick={() => this.props.setActiveTab(document.getElementById("HomeTab"))}
                              style={{marginLeft: "10px"}}>
                            Mentions legales
                        </Link>
                    </div>
                    <div className={"footer-item"} id={"logo-item"}>
                        <Link className={"link"} id={"home-link"} to="/"
                              onClick={() => this.props.setActiveTab(document.getElementById("HomeTab"))}>
                            <div id={"logo-container-footer"}>
                                <img id={"logo-footer"} src={this.state.logo_image} alt={""}
                                     onMouseEnter={() => this.handleMoveMouseLogo(logo_pva)}
                                     onMouseLeave={() => this.handleMoveMouseLogo(logo_pva_monochrome)}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={"footer-item"} id={"networks-item"}>
                        <a className="network-icon" id="fb-icon" href={"https://facebook.com"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <i style={{color: "white"}}
                               className="fa fa-facebook-square fa-3x"/>
                        </a>
                    </div>
                </div>
            </section>
        )
            ;
    }
}

export default withRouter(Footer);