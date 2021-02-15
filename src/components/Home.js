import React, {Component} from 'react';
import './Home.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: "../images/IMG_3628.jpg"
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

    reloadCss = () =>
    {
        var links = document.getElementsByTagName("link");
        for (var cl in links)
        {
            var link = links[cl];
            if (link.rel === "stylesheet")
                link.href += "";
        }
    }


    componentDidMount() {

        let animationFrameId;
        const FPS = 10;
        const delay = 1000/FPS;
        let previous = 0;

        let images = ["../images/IMG_3608.jpg", "../images/IMG_3628.jpg"];
        let nextImage = 0;

        const render = (image) => {
            if (image >= images.length) {
                image = 0;
            }
            //document.getElementById("HomePage").style.backgroundImage = 'url("' + images[image] + '")';

            this.reloadCss();

            this.setState({
                backgroundImage: 'url("' + images[image] + '")'
            }, () => {});

            console.log(document.getElementById("HomePage").style.backgroundImage);

            //animationFrameId = window.requestAnimationFrame(render);
            const now = Date.now();
            if (now - previous < delay) {
                return;
            }
            previous = now;
        }

        render(nextImage);

        nextImage++;

        /*
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }*/


    }


    render() {

        return (
            <div id={"HomePage"} style={{backgroundImage: this.state.backgroundImage}}/>
        );
    }
}

export default Home;