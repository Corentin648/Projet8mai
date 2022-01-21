import React, {Component} from 'react';
import utils from '../../../utils.js';
import '../../styles/home-page/CardsSection.scss';
import photo1 from "../../../assets/cheval_sidecar_480x320.jpg";
import photo2 from "../../../assets/foule_chateau_480x320.jpg";


export default class CardsSection extends Component {

    componentDidMount() {

        function estimateAllCardsBodyClass() {
            const elements = document.querySelectorAll('.card-body');

            elements.forEach((el) => {
                if (utils.isInViewport(el)
                    && !(el.classList.value.includes("card-body slide-to-center"))) {
                    el.classList.value = "card-body slide-to-center";
                } else if (!utils.isInViewport(el)) {
                    el.classList.value = "card-body";
                }
            });
        }

        estimateAllCardsBodyClass();

        document.addEventListener('scroll', function () {
            estimateAllCardsBodyClass();
        })
    }

    render() {
        return (
            <section id={"cards-section"} style={{width: "100%", height: "max-content", overflow: "hidden"}}>
                <div className={"zero-padding"}/>
                <div id={"cards-wrapper"}>
                    <div className={"card-body"} id={"history-card"}>
                        <div className={"pitch-container"}>
                            <h3 className={"default-title"}>Historique de l'évènement</h3>
                            <hr/>
                            <div className={"pitch-content"}>
                                L’association <span style={{fontWeight: "bold"}}>Patrimoine Véhicules Anciens</span> a
                                été fondée il y a 3 ans principalement pour
                                l’organisation de ce week-end commémoratif devenu aujourd’hui un rituel bisannuel sur le
                                sol Cassonnais.
                            </div>
                        </div>
                        <div className={"photo-wrapper"}>
                            <img className={"photo"} src={photo1} alt=""/>
                        </div>
                    </div>
                    <div className={"card-body"} id={"casson-card"}>
                        <div className={"photo-wrapper"}>
                            <img className={"photo"} src={photo2} alt=""/>
                        </div>
                        <div className={"pitch-container"}>
                            <h3 className={"default-title"}>Casson 2022</h3>
                            <hr/>
                            <div className={"pitch-content"}>
                                Les amoureux de véhicules de l’association PVA travaillent actuellement sur l’organise
                                de la
                                4 e édition de la reconstitution d’un camp américain. Il prendra place, les <span
                                style={{fontWeight: "bold"}}>7, 8 et 9 Mai 2022</span>
                                , comme à son habitude, dans le parc du château du plessis à Casson.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"zero-padding"}/>
            </section>
        );
    }
}