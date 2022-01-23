import React, {Component} from 'react';
import '../../styles/programme-page/ProgrammePage.scss';
import programme_exposant from "../../../assets/programmes/programme_exposant_image.png";

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
                <div className={"programme-container"} id={"programme-exposants-container"}>
                    <h1 id={"programme-title"} className={"default-title"}>Programme exposants <hr
                        style={{position: "absolute", left: "0", width: "100%"}}/></h1>
                    <div id={"programme-exposants-content"}>
                        <div id={"programme-exposants-container"}>
                            <img id={"programme-exposants-image"} src={programme_exposant} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}