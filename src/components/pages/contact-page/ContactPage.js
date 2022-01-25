import React, {Component} from 'react';
import '../../styles/contact-page/ContactPage.scss';

export default class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sectionHeight: 0,
            sectionContentHeight: 0
        }
    }

    handleResize = () => {
        const footerHeight = document.getElementById("footer").offsetHeight;

        /* If the screen height (+ the footer height) is too little,
         the section height will be equal to its section height(+ 150px, the zero padding size) */
        this.setState({
            sectionHeight: Math.max(window.visualViewport.height - footerHeight, this.state.sectionContentHeight + 150)
        });
    }

    componentDidMount() {
        const element = document.getElementById("contact-section");
        const y = element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({top: y, behavior: 'smooth'});

        /* Calculating the original section content height */
        this.setState({
            sectionContentHeight: document.getElementById("contact-section").scrollHeight
        })

        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }

    render() {
        return (
            <section id={"contact-section"} style={{height: this.state.sectionHeight}}>
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