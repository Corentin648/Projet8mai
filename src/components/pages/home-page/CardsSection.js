import React, {Component} from 'react';
import '../../styles/home-page/CardsSection.scss';
import photo1 from "../../../assets/cheval_sidecar_480x320.jpg";
import photo2 from "../../../assets/foule_chateau_480x320.jpg";


export default class CardsSection extends Component {

    componentDidMount() {

        function estimateAllCardsBodyClass() {
            const elements = document.querySelectorAll('.card-body');

            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return ((
                    ((rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || rect.top <= 0) &&
                    ((rect.left >= 0 && rect.left <= (window.innerWidth || document.documentElement.clientWidth)) || rect.left <= 0)
                ));
            }

            elements.forEach((el) => {
                if (isInViewport(el)
                    && !(el.classList.value.includes("card-body slide-to-center"))) {
                    el.classList.value = "card-body slide-to-center";
                } else if (!isInViewport(el)) {
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur dolor, eos
                                expedita hic, id in iure laudantium libero magni nam natus necessitatibus nostrum
                                numquam perspiciatis quas quo recusandae vel.
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur dolor, eos
                                expedita hic, id in iure laudantium libero magni nam natus necessitatibus nostrum
                                numquam perspiciatis quas quo recusandae vel.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"zero-padding"}/>
            </section>
        );
    }
}