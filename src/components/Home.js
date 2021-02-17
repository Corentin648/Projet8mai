import React, {Component} from 'react';
import './Home.css';
import background from "../images/IMG_3608.jpg";
import background2 from "../images/IMG_3628.jpg";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: "",
            mounted: false
        }
    }

    slidePhotos = (images, nextImage) => {
        if(nextImage>=images.length){nextImage=0;}
        let backgroundImage = document.getElementById("HomePage").style.backgroundImage;
         backgroundImage = 'url("'+images[nextImage++]+'")';
         /*backgroundImage.show(500,function(){
                setTimeout(this.slidePhotos(),1000);
            });*/
    }


    componentDidMount() {

        let animationFrameId;
        const FPS = 0.5;    // changing background image every 10 sec
        const delay = 1000/FPS;
        let previous = 0;

        let images = [`url(${background})`, `url(${background2})`];
        let nextImage = 0;

        const render = () => {

            animationFrameId = window.requestAnimationFrame(render);

            const now = Date.now();
            console.log(now);
            if (now - previous < delay) {
                return;
            }
            previous = now;

            if (nextImage >= images.length - 1) {
                nextImage = 0;
            } else {
                nextImage++;
            }

            this.setState({
                backgroundImage: images[nextImage]
            });
        }

        render();


        this.setState({
            mounted: true
        });


        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }


    render() {

        // TODO : revoir le cadrage pour les petits écrans
        const imageHeight = this.state.mounted ? window.screen.availHeight - (window.outerHeight - window.innerHeight) - this.props.carRef.current.offsetHeight - 2: 0;

        const backgroundImg = this.state.mounted ? this.state.backgroundImage : 0;

        const transition = this.state.mounted ? "width 0.5s, height 0.5s, opacity 0.5s 0.5s" : 0;

        return (
            <div className={"fadeIn"} id={"HomePage"} style={{transition: transition, backgroundImage: backgroundImg, height: imageHeight}}>

            </div>
        );
    }
}

export default Home;