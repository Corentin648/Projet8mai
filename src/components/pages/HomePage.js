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
        if (presentationPanel !== null) {
            if (window.screen.width > 750) {
                this.setState({
                    // 120 = $navbar-height (70) + 50
                    backgroundHeight: Math.max(window.visualViewport.height, presentationPanel.offsetHeight + 120)
                });
            } else {
                this.setState({
                    backgroundHeight: presentationPanel.offsetHeight + 85
                });
            }
        }
    }

    componentDidMount() {

        const element = document.getElementById("home-page");
        const y = element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({top: y, behavior: 'smooth'});

        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }


    render() {

        return (
            <div id={"home-page"}>
                <PresentationSection backgroundHeight={this.state.backgroundHeight}/>
                <CardsSection/>
            </div>
        );
    }
}