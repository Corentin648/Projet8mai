import React, {Component} from 'react';
import './Home.css';
import background from "../images/IMG_3608.jpg";
import background2 from "../images/IMG_3628.jpg";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: "",
            mounted: false,
            transition: ""
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
                transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s",
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
        const imageHeight = this.state.mounted ? window.screen.availHeight - (window.outerHeight - window.innerHeight) - this.props.carRef.current.offsetHeight : 0;

        const backgroundImg = this.state.mounted ? this.state.backgroundImage : 0;

        const transition = this.state.mounted ? this.state.transition : 0;

        return (
            <div>
                <div id={"HomePage"} style={{/*transition: transition,*/ backgroundImage: backgroundImg, height: imageHeight}}>

                    <div id={"PresentationCard"}>
                        <div className="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quo, saepe! Accusantium animi assumenda consectetur cumque cupiditate debitis dolorem ea exercitationem explicabo fugit illo itaque necessitatibus praesentium quidem quis, quo reiciendis sapiente soluta ullam voluptas! A beatae commodi, culpa debitis dicta dolor earum exercitationem harum inventore ipsum itaque laboriosam modi mollitia nihil obcaecati officiis porro possimus quaerat quibusdam ratione sapiente soluta voluptas voluptatibus? Commodi nisi pariatur quis quisquam. Cum fuga quisquam soluta sunt tempora. Consequatur consequuntur, debitis dolores error esse facere facilis fuga hic id incidunt ipsa labore laudantium maxime modi obcaecati odio omnis quas, qui, quis repellat saepe sit sunt ullam velit veritatis voluptate voluptatem. Corporis doloribus hic in itaque nemo omnis quia, quibusdam quis, quos sit tempora vero voluptatibus. Aut autem debitis distinctio doloremque eum harum impedit natus nihil, porro, possimus quidem repellat tempore, tenetur! Assumenda aut consequuntur corporis culpa deserunt ea ex harum in ipsam laudantium maxime molestias nisi numquam possimus quibusdam recusandae reiciendis sed sint, tempore ut veritatis voluptatem voluptatum. Adipisci animi assumenda blanditiis distinctio earum error facere fugiat fugit harum, iure laboriosam magnam maxime, minus molestias nam nostrum officiis pariatur ut voluptas voluptatem. Consequatur culpa debitis deleniti enim excepturi explicabo itaque quibusdam sint vitae voluptas. Alias asperiores doloribus fugit iusto maxime minus tempore. A beatae laborum minus, obcaecati perspiciatis praesentium reprehenderit rerum saepe soluta ullam? Aliquam cupiditate deleniti est eum laboriosam magnam, nam nemo nesciunt odio, perspiciatis recusandae reprehenderit sequi ut. Atque dignissimos eum ipsam perspiciatis quas quidem quis saepe! Aliquam amet assumenda ea earum ex in magnam minima, nemo nobis nulla odio officiis, optio pariatur quas repellat similique sit tempore veritatis? Amet cupiditate earum, eveniet excepturi minus possimus quae quidem quo! Alias consectetur et expedita illo laborum magni nihil nostrum pariatur quisquam sapiente! Alias culpa expedita explicabo facere facilis impedit, ipsum magnam placeat quasi quod saepe sapiente? Aperiam asperiores delectus dignissimos doloremque doloribus eaque earum est, facere fugit in nemo nesciunt numquam odit perspiciatis quasi quo, tenetur? Consequatur dolorem eos error labore libero magnam, quam quas sed tempore? Dolor dolore enim ex, facere natus quasi ratione voluptatibus! Aperiam assumenda odit vero voluptatibus! Aliquam eligendi fugiat laborum, libero nam quasi tenetur unde voluptatem! Quia repellendus soluta unde! Adipisci architecto commodi delectus doloremque doloribus, excepturi exercitationem fugiat impedit, iste maiores minus optio quae quam sequi ut vel veniam voluptate? Atque beatae commodi delectus dignissimos dolorem ea esse eveniet ipsa itaque libero natus neque odio optio, perspiciatis placeat praesentium, quas quibusdam, reiciendis tempore veritatis. Ab ad aut delectus deserunt laudantium maiores nihil reiciendis rerum sunt tempora? Accusantium blanditiis dolor inventore magnam nisi nulla perspiciatis similique ullam voluptatem? Ducimus eos fugit minus nesciunt odio officia quia quibusdam sapiente voluptas voluptatibus! Consequuntur dolores eaque earum eum, fugit ipsa mollitia natus nihil odio officia perspiciatis sit temporibus ullam? Aliquid assumenda consectetur corporis distinctio dolorem enim, esse ipsa iure minima quis quod sit totam voluptatum. Et id neque voluptatem? Aliquam, consectetur dicta doloremque ducimus ex excepturi facilis iusto laborum magnam, modi molestias sapiente sequi soluta vitae voluptates! A adipisci aspernatur consequuntur, ipsam molestias mollitia officia quibusdam velit! Commodi itaque minus neque ullam. Cumque error eum illum, inventore pariatur recusandae saepe sequi totam. At aut dolores dolorum ex molestiae nam odio officia, quas quidem quo vitae voluptas. Possimus quis sunt voluptas voluptates? Aliquid aperiam consectetur quis tempore! Dolorum eaque eum explicabo illo iste, itaque labore magnam magni minima nemo neque odit possimus quam quia quos recusandae sequi, sit, soluta suscipit tempore totam unde vero voluptate. Illo modi optio perferendis quasi qui tempore, tenetur ut veritatis vitae voluptate. Atque autem blanditiis eum exercitationem facilis, inventore nam nihil quas sequi voluptatem! Ad aliquid assumenda autem, consequatur dolore ea enim et illum in ipsa iste modi nihil porro, repudiandae sapiente tempora voluptatibus. Accusamus aspernatur aut consequuntur cumque distinctio eos error est ipsa laboriosam molestiae molestias nostrum possimus quos reprehenderit, rerum saepe veritatis voluptate voluptatum? Beatae culpa cumque delectus deserunt dolorum ducimus earum enim est eveniet excepturi harum inventore ipsum, libero maiores molestias officiis pariatur placeat praesentium quae quam quas quasi quibusdam quisquam quod rem saepe sed sequi sint temporibus ut vel veritatis voluptatem voluptates. Aliquam assumenda esse expedita, hic illo inventore laborum maiores maxime obcaecati officiis quas, quis repellendus reprehenderit similique sunt temporibus unde, veniam! Accusamus accusantium, aspernatur corporis distinctio enim est iste laudantium libero, necessitatibus nemo placeat temporibus. Aliquid aspernatur commodi cupiditate delectus in labore nisi, pariatur saepe sint vel! At autem, culpa eligendi enim harum ipsum maxime officiis perferendis, placeat provident quia rem sequi similique. Aliquam animi commodi culpa cupiditate deleniti distinctio dolore doloremque, dolores ducimus earum enim, esse et facere facilis illo ipsa iusto laudantium maiores modi molestias nemo nisi, nulla obcaecati odit omnis provident quam quasi repellat soluta sunt temporibus vel vitae voluptas? Aliquam architecto at, beatae blanditiis corporis culpa cumque debitis dolor doloribus ea earum enim error eveniet facere fugiat id illum incidunt ipsum iste itaque laborum magnam maiores maxime molestiae nesciunt nostrum numquam officia omnis perferendis perspiciatis porro repellat soluta tempora vero vitae voluptatibus, voluptatum! Dolor, omnis, velit! Alias blanditiis eum iusto, magni odit praesentium quia repellendus ut. Ad adipisci aliquam animi atque, aut consequatur consequuntur delectus dicta dignissimos dolorem doloribus ducimus eaque eius explicabo facere fugiat harum itaque maiores molestias necessitatibus nisi obcaecati odit porro praesentium quam quas quia, quibusdam repellat repudiandae, saepe sed similique veritatis voluptate. Aliquid assumenda autem blanditiis, corporis debitis esse facilis hic, ipsum iure laborum, porro quae quasi quis quos sit soluta sunt! Ab deleniti earum minus numquam quo quod repellat repudiandae sapiente ullam unde? Ab aliquid amet at commodi cum dolore dolorem earum eveniet excepturi, fugiat, id ipsam laboriosam nam nobis perspiciatis quae quo repellendus saepe sit vitae. Animi consequuntur, debitis deleniti doloremque ea earum esse eveniet facilis itaque iure minima, modi nam neque nesciunt omnis porro, provident quos sed similique suscipit temporibus totam unde ut! Accusantium ad, aut delectus deserunt dignissimos dolor dolores ea eos error et explicabo fugiat id maxime nisi nostrum optio perspiciatis repellat unde veniam voluptatibus! Ab adipisci amet exercitationem fuga iusto libero magnam nulla, qui tempora vitae, voluptas.</div>
            </div>
        );
    }
}

export default Home;