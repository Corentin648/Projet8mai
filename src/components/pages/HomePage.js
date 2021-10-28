import React, {Component} from 'react';
import PresentationSection from './home-page/PresentationSection';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundHeight: 0
        }
    }

    handleResize = () => {
        const presentationPanel = document.getElementById("presentation-panel");
        console.log(presentationPanel);
        this.setState({
            backgroundHeight: Math.max(window.visualViewport.height, presentationPanel.offsetHeight + 85)
        });
    }

    componentDidMount() {

        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }


    render() {

        return (
            <div>
                <PresentationSection backgroundHeight={this.state.backgroundHeight}/>

                <section id={"cards-section"} style={{width: "100%", height: "100vh"}}>
                    <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "50px", width: "50%"}}
                         id={"cards-wrapper"}>
                        <div id={"history-card"} style={{display: "flex", justifyContent: "center", width: "100%"}}>
                            <img className={"photo"} src={"https://via.placeholder.com/320"} alt=""/>
                        </div>
                        <div id={"casson2022-card"}></div>
                    </div>
                </section>
            </div>
        );
    }
}