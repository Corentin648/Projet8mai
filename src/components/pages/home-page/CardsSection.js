import React, {Component} from 'react';
import '../../styles/home-page/CardsSection.scss';


export default class CardsSection extends Component {
    
    render() {
        return (
            <section id={"cards-section"} style={{width: "100%", height: "100vh"}}>
                <div className={"zero-padding"} style={{width: "100%", height: "150px"}}/>
                <div style={{marginLeft: "auto", marginRight: "auto", width: "50%"}}
                     id={"cards-wrapper"}>
                    <div id={"history-card"}
                         style={{
                             display: "flex",
                             justifyContent: "space-between",
                             width: "100%"
                         }}>
                        <div className={"pitch-container"} style={{width: "50%"}}>
                            <h3 className={"pitch-title"}>La bonne histoire</h3>
                            <hr/>
                            <div className={"pitch-content"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur dolor, eos
                                expedita hic, id in iure laudantium libero magni nam natus necessitatibus nostrum
                                numquam perspiciatis quas quo recusandae vel.
                            </div>
                        </div>
                        <img className={"photo"} src={"https://via.placeholder.com/320"} alt=""/>
                    </div>
                    <div id={"casson-card"}
                         style={{
                             display: "flex",
                             justifyContent: "space-between",
                             marginTop: "50px",
                             width: "100%"
                         }}>
                        <img className={"photo"} src={"https://via.placeholder.com/320"} alt=""/>
                        <div className={"pitch-container"} style={{width: "50%"}}>
                            <h3 className={"pitch-title"}>Le bon Casson</h3>
                            <hr/>
                            <div className={"pitch-content"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur dolor, eos
                                expedita hic, id in iure laudantium libero magni nam natus necessitatibus nostrum
                                numquam perspiciatis quas quo recusandae vel.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}