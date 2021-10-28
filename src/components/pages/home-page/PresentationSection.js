import React, {Component} from 'react';
import '../../styles/home-page/PresentationSection.scss';
import background from "../../../assets/IMG_3608.jpg";
import background2 from "../../../assets/IMG_3628.jpg";
import logo_pva from "../../../assets/logo_pva.png";

export default class PresentationSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countDown: 0
        }
    }

    handlerGoToDescription = () => {
        const element = document.getElementById("cards-section");
        const y = element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    }

    handlerDownloadInscriptionForm = () => {
        /* TODO : make it download inscription pdf */
    }

    calculateCountDown = () => {
        const countDownDate = new Date("May 8, 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const days = Math.floor((countDownDate - now) / (1000 * 60 * 60 * 24));

        this.setState({
            countDown: days
        });
    }


    componentDidMount() {
        this.calculateCountDown();
    }


    render() {
        return (
            <section style={{width: "100%", height: this.props.backgroundHeight}}>

                <div className={"_overflow-hidden"}>
                    <div className={"photo-row"} style={{height: this.props.backgroundHeight}}>
                        <img className={"photo"} src={background} width={"100%"} height={"100%"} alt=""/>
                        <img className={"photo"} src={background2} width={"100%"} height={"100%"} alt=""/>
                        <img className={"photo"} src={background} width={"100%"} height={"100%"} alt=""/>
                        <img className={"photo"} src={background2} width={"100%"} height={"100%"} alt=""/>
                    </div>
                </div>

                <div id={"presentation-panel"}>
                    <div id="logo-container">
                        <img id={"logo"}
                             src={logo_pva} alt={""}/>
                    </div>
                    <h2 id="casson-countdown">Casson J - {this.state.countDown}</h2>

                    <button id={"inscription-form-button"}
                            onClick={() => this.handlerDownloadInscriptionForm()}>Formulaire d'inscription pour
                        exposants
                    </button>

                    <button id={"discover-asso-button"} onClick={() => this.handlerGoToDescription()}>
                        <div style={{color: "#afaf20"}}>Découvrir l'asso</div>
                        <i style={{color: "#afaf20"}} id={"discover-asso-arrow"} className="fa fa-caret-down"/>
                    </button>

                </div>
            </section>
        );
    }
}