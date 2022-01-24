import React, {Component} from 'react';
import '../../styles/programme-page/ProgrammePage.scss';
import programme_exposant from "../../../assets/programmes/programme_exposant_image.png";
import programme_visiteur from "../../../assets/programmes/programme_visiteur_image.png";
import pdf_exposant from "../../../assets/programmes/programme_exposant.pdf";
import pdf_visiteur from "../../../assets/programmes/programme_visiteur.pdf";

export default class ProgrammePage extends Component {

    componentDidMount() {
        const element = document.getElementById("programme-section");
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    render() {
        return (
            <section id={"programme-section"}>
                <div className={"zero-padding"}/>
                <div id={"programme-container"}>
                    <h1 id={"programme-title"} className={"default-title"}>Programmes <hr
                        style={{position: "absolute", left: "0", width: "200%"}}/></h1>
                    <div id={"programme-content"}>
                        <div>
                            <div id={"programme-exposants-container"} style={{marginBottom: "10px"}}>
                                <img id={"programme-exposants-image"} src={programme_exposant} alt=""/>
                            </div>
                            <a className={"download-pdf"}
                               href={pdf_exposant}
                               target="_blank"
                               rel="noreferrer" download>
                                Télécharger le pdf
                            </a>
                        </div>
                        <div id={"space-between-images"} className={"zero-padding"}/>
                        <div>
                            <div id={"programme-visiteurs-container"} style={{marginBottom: "10px"}}>
                                <img id={"programme-visiteurs-image"} src={programme_visiteur} alt=""/>
                            </div>
                            <a className={"download-pdf"}
                               href={pdf_visiteur}
                               target="_blank"
                               rel="noreferrer" download>
                                Télécharger le pdf
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"zero-padding"}/>
            </section>
        );
    }
}