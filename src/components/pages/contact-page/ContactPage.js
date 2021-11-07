import React, {Component} from 'react';
import '../../styles/contact-page/ContactPage.scss';

export default class ContactPage extends Component {

    render() {
        return (
            <section id={"contact-section"}>
                <div className={"zero-padding"}/>
                <div id={"contact-container"}>
                    <h1 id={"contact-title"} className={"default-title"}>Contact <hr
                        style={{position: "absolute", left: "0", width: "200%"}}/></h1>
                    <div id={"contact-content"}>
                        <h3 style={{textAlign: "center"}}>Association Patrimoine Véhicules Anciens</h3> <br/>
                        <span id={"contact-text"}>
                            247 L’Hivernière – CASSON <br/>
                            yann.casson@hotmail.fr <br/>
                            07.85.54.63.92
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}