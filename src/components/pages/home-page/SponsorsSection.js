import React, {Component} from 'react';
import '../../styles/home-page/SponsorsSection.scss';
import logo_orbello from '../../../assets/sponsors/logo_orbello.jpg';
import logo_commune_casson from '../../../assets/sponsors/logo_commune_casson.png';
import logo_direct_batteries from '../../../assets/sponsors/logo_direct_batteries.png';
import logo_groupe_odis from '../../../assets/sponsors/logo_groupe_odis.png';
import logo_erdre_gevres from '../../../assets/sponsors/logo_erdre_gevres.jpg';
import logo_musee_blindes from '../../../assets/sponsors/logo_musee_blindes.png';
import logo_nuit_liberte from '../../../assets/sponsors/logo_nuit_liberte.png';
import logo_nuits_erdre from '../../../assets/sponsors/logo_nuits_erdre.jpg';
import logo_eric_david from '../../../assets/sponsors/logo_eric_david.jpg';
import logo_ramonage from '../../../assets/sponsors/logo_ramonage.jpg';
import logo_pubouest from '../../../assets/sponsors/logo_pubouest.jpg';


export default class SponsorsSection extends Component {


    componentDidMount() {

        function estimateSponsorsContainerClass() {
            const elements = document.querySelectorAll('.sponsors-container');

            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return ((
                    ((rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || rect.top <= 0) &&
                    ((rect.left >= 0 && rect.left <= (window.innerWidth || document.documentElement.clientWidth)) || rect.left <= 0)
                ));
            }

            elements.forEach((el) => {
                if (isInViewport(el)
                    && !(el.classList.value.includes("sponsors-container splash"))) {
                    el.classList.value = "sponsors-container splash";
                } else if (!isInViewport(el)) {
                    el.classList.value = "sponsors-container";
                }
            });
        }

        estimateSponsorsContainerClass();

        document.addEventListener('scroll', function () {
            estimateSponsorsContainerClass();
        })
    }

    render() {
        return (
            <section id={"sponsors-section"} style={{width: "100%", height: "max-content", overflow: "hidden"}}>
                <h1 id={"sponsors-header"} className={"default-title"}>Sponsors <hr
                    style={{position: "absolute", left: "0", width: "100%"}}/></h1>

                <div className={"sponsors-container"}>
                    <div id={"one"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_orbello} alt=""/>
                    </div>
                    <div id={"two"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_ramonage} alt=""/>
                    </div>
                    <div id={"three"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_direct_batteries} alt=""/>
                    </div>
                    <div id={"four"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_erdre_gevres} alt=""/>
                    </div>
                    <div id={"five"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_nuit_liberte} alt=""/>
                    </div>
                    <div id={"six"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_commune_casson} alt=""/>
                    </div>
                    <div id={"seven"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_groupe_odis} alt=""/>
                    </div>
                    <div id={"eight"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_nuits_erdre} alt=""/>
                    </div>
                    <div id={"nine"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_pubouest} alt=""/>
                    </div>
                    <div id={"ten"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_eric_david} alt=""/>
                    </div>
                    <div id={"eleven"} className={"sponsor"}>
                        <img className={"logo-sponsor"} src={logo_musee_blindes} alt=""/>
                    </div>

                </div>

                <div className={"zero-padding"}/>
            </section>
        );
    }
}