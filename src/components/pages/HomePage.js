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
            backgroundHeight: Math.max(window.visualViewport.height, presentationPanel.offsetHeight + 80)
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

                <section id={"cards-section"} style={{width: "100%", height: "100vw"}}>
                    <div id={"cards-wrapper"}>
                        <div id={"history-card"}></div>
                        <div id={"casson2022-card"}></div>
                    </div>
                </section>
            </div>
        );
    }
}