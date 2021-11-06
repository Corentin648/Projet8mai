import React, {Component} from 'react';
import PresentationSection from './home-page/PresentationSection';
import CardsSection from "./home-page/CardsSection";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundHeight: 0
        }
    }

    handleResize = () => {
        const presentationPanel = document.getElementById("presentation-panel");
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
                <CardsSection/>
            </div>
        );
    }
}