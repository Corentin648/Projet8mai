import React, {Component} from 'react';
import '../../styles/home-page/SponsorsSection.scss';


export default class SponsorsSection extends Component {


    render() {
        return (
            <section id={"sponsors-section"} style={{width: "100%", height: "max-content", overflow: "hidden"}}>
                <h1 id={"sponsors-header"} className={"default-title"}>Sponsors <hr
                    style={{position: "absolute", left: "0", width: "100%"}}/></h1>
                <div id={"sponsors-container"}>
                    <img className={"sponsor"} style={{gridArea: "one"}} src="https://via.placeholder.com/100" alt=""/>
                    <div style={{gridArea: "empty-one"}}/>
                    <img className={"sponsor"} style={{gridArea: "two"}} src="https://via.placeholder.com/100" alt=""/>
                    <div style={{gridArea: "empty-two"}}/>
                    <img className={"sponsor"} style={{gridArea: "three"}} src="https://via.placeholder.com/100"
                         alt=""/>
                    <div style={{gridArea: "empty-three"}}/>
                    <img className={"sponsor"} style={{gridArea: "four"}} src="https://via.placeholder.com/100" alt=""/>
                    <div style={{gridArea: "empty-four"}}/>
                    <img className={"sponsor"} style={{gridArea: "five"}}
                         src="https://via.placeholder.com/100"
                         alt=""/>
                    <div style={{gridArea: "empty-five"}}/>
                    <img className={"sponsor"} style={{gridArea: "six"}}
                         src="https://via.placeholder.com/100" alt=""/>
                    <div style={{gridArea: "empty-six"}}/>
                    <img className={"sponsor"} style={{gridArea: "seven"}}
                         src="https://via.placeholder.com/100"
                         alt=""/>
                    <div style={{gridArea: "empty-eleven"}}/>
                    <img className={"sponsor"} style={{gridArea: "eight"}} src="https://via.placeholder.com/100"
                         alt=""/>
                    <div style={{gridArea: "empty-eight"}}/>
                    <img className={"sponsor"} style={{gridArea: "nine"}} src="https://via.placeholder.com/100" alt=""/>
                    <div style={{gridArea: "empty-nine"}}/>
                    <img className={"sponsor"} style={{gridArea: "ten"}} src="https://via.placeholder.com/100" alt=""/>
                    <div style={{gridArea: "empty-ten"}}/>
                    <img className={"sponsor"} style={{gridArea: "eleven"}} src="https://via.placeholder.com/100"
                         alt=""/>
                </div>
                <div className={"zero-padding"}/>
            </section>
        );
    }
}