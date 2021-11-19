import React, {Component} from 'react';
import '../../styles/home-page/SponsorsSection.scss';
import logo_baglione from '../../../assets/sponsors/logo_baglione.png';
import logo_commune_casson from '../../../assets/sponsors/logo_commune_casson.png';
import logo_direct_batteries from '../../../assets/sponsors/logo_direct_batteries.png';
import logo_groupe_odis from '../../../assets/sponsors/logo_groupe_odis.png';
import logo_lavie_auto from '../../../assets/sponsors/logo_lavie_auto.png';
import logo_musee_blindes from '../../../assets/sponsors/logo_musee_blindes.png';
import logo_nuit_liberte from '../../../assets/sponsors/logo_nuit_liberte.png';


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
                    <div id={"one"} className={"sponsor"} style={{position: "absolute", top: "0", left: "0"}}>
                        <img className={"logo-sponsor"} src={logo_baglione} alt=""/>
                    </div>
                    <div id={"two"} className={"sponsor"} style={{position: "absolute", top: "0", left: "200px"}}>
                        <img className={"logo-sponsor"} src={logo_musee_blindes} alt=""/>
                    </div>
                    <div id={"three"} className={"sponsor"} style={{position: "absolute", top: "0", left: "400px"}}>
                        <img className={"logo-sponsor"} src={logo_direct_batteries} alt=""/>
                    </div>
                    <div id={"four"} className={"sponsor"} style={{position: "absolute", top: "0", left: "600px"}}>
                        <img className={"logo-sponsor"} src={logo_lavie_auto} alt=""/>
                    </div>
                    <div id={"five"} className={"sponsor"} style={{position: "absolute", top: "120px", left: "100px"}}>
                        <img className={"logo-sponsor"} src={logo_nuit_liberte} alt=""/>
                    </div>
                    <div id={"six"} className={"sponsor"} style={{position: "absolute", top: "120px", left: "300px"}}>
                        <img className={"logo-sponsor"} src={logo_commune_casson} alt=""/>
                    </div>
                    <div id={"seven"} className={"sponsor"} style={{position: "absolute", top: "120px", left: "500px"}}>
                        <img className={"logo-sponsor"} src={logo_groupe_odis} alt=""/>
                    </div>
                    <div id={"eight"} className={"sponsor"} style={{position: "absolute", top: "240px", left: "0"}}>
                        <img className={"logo-sponsor"} src="https://via.placeholder.com/100" alt=""/>
                    </div>
                    <div id={"nine"} className={"sponsor"} style={{position: "absolute", top: "240px", left: "200px"}}>
                        <img className={"logo-sponsor"} src="https://via.placeholder.com/100" alt=""/>
                    </div>
                    <div id={"ten"} className={"sponsor"} style={{position: "absolute", top: "240px", left: "400px"}}>
                        <img className={"logo-sponsor"} src="https://via.placeholder.com/100" alt=""/>
                    </div>
                    <div id={"eleven"} className={"sponsor"}
                         style={{position: "absolute", top: "240px", left: "600px"}}>
                        <img className={"logo-sponsor"} src="https://via.placeholder.com/100" alt=""/>
                    </div>

                </div>

                <div className={"zero-padding"}/>
            </section>
        );
    }
}