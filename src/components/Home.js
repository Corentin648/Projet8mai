import React, {Component} from 'react';
import './Home.scss';
import background from "../assets/IMG_3608.jpg";
import background2 from "../assets/IMG_3628.jpg";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: "",
            mounted: false,
            transition: ""
        }
    }

    /*
        slidePhotos = (images, nextImage) => {
            if(nextImage>=images.length){nextImage=0;}
            let backgroundImage = document.getElementById("HomePage").style.backgroundImage;
            backgroundImage = 'url("'+images[nextImage++]+'")';
             backgroundImage.show(500,function(){
                    setTimeout(this.slidePhotos(),1000);
                });
        }*/


    handlerDownloadInscriptionForm = () => {
        /* TODO : make it download inscription pdf */
    }

    handlerGoToDescription = () => {
        const element = document.getElementById("leBonLorem");
        element.scrollIntoView({block: "start", behavior: "smooth", inline: "nearest"});
    }


    componentDidMount() {

        let animationFrameId;
        const FPS = 0.5;    // changing background image every 10 sec
        const delay = 1000 / FPS;
        let previous = 0;

        let images = [`url(${background})`, `url(${background2})`];
        let nextImage = 0;

        const render = () => {

            animationFrameId = window.requestAnimationFrame(render);

            const now = Date.now();
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

        // const transition = this.state.mounted ? this.state.transition : 0;

        return (
            <div>
                <div id={"HomePage"}
                     style={{/*transition: transition, backgroundImage: backgroundImg, height: imageHeight*/}}>

                    <div className={"_overflow-hidden"}>
                        <div className={"photo-row"}>
                            <img className={"photo"} src={background} width={"100%"} height={"100%"}/>
                            <img className={"photo"} src={background2} width={"100%"} height={"100%"}/>
                            <img className={"photo"} src={background} width={"100%"} height={"100%"}/>
                            <img className={"photo"} src={background2} width={"100%"} height={"100%"}/>
                        </div>
                    </div>

                    {/*                    <div id={"PresentationCard"}>
                        <div className="container">
                            <img id={"logoAsso"} style={{}}
                                 src={logo_pva} alt={""}/>
                        </div>
                        <h2 style={{fontSize: "40px", color: "#afaf20"}}>Casson J - 1000</h2>
                        <div>
                            <button id={"InscriptionFormButton"}
                                    onClick={() => this.handlerDownloadInscriptionForm()}>Formulaire d'inscription
                            </button>
                        </div>
                        <div>
                            <button id={"DiscoverAssoButton"} onClick={() => this.handlerGoToDescription()}>
                                <div style={{color: "#afaf20"}}>Découvrir l'asso</div>
                                <i style={{color: "#afaf20"}} id={"DecouvrirAssoArrow"} className="fa fa-caret-down"/>
                            </button>
                        </div>
                    </div>*/}
                </div>
                <div ref={ref => {
                    this.$ref = ref
                }} id={"leBonLorem"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quo, saepe!
                    Accusantium animi assumenda consectetur cumque cupiditate debitis dolorem ea exercitationem
                    explicabo fugit illo itaque necessitatibus praesentium quidem quis, quo reiciendis sapiente soluta
                    ullam voluptas! A beatae commodi, culpa debitis dicta dolor earum exercitationem harum inventore
                    ipsum itaque laboriosam modi mollitia nihil obcaecati officiis porro possimus quaerat quibusdam
                    ratione sapiente soluta voluptas voluptatibus? Commodi nisi pariatur quis quisquam. Cum fuga
                    quisquam soluta sunt tempora. Consequatur consequuntur, debitis dolores error esse facere facilis
                    fuga hic id incidunt ipsa labore laudantium maxime modi obcaecati odio omnis quas, qui, quis
                    repellat saepe sit sunt ullam velit veritatis voluptate voluptatem. Corporis doloribus hic in itaque
                    nemo omnis quia, quibusdam quis, quos sit tempora vero voluptatibus. Aut autem debitis distinctio
                    doloremque eum harum impedit natus nihil, porro, possimus quidem repellat tempore, tenetur!
                    Assumenda aut consequuntur corporis culpa deserunt ea ex harum in ipsam laudantium maxime molestias
                    nisi numquam possimus quibusdam recusandae reiciendis sed sint, tempore ut veritatis voluptatem
                    voluptatum. Adipisci animi assumenda blanditiis distinctio earum error facere fugiat fugit harum,
                    iure laboriosam magnam maxime, minus molestias nam nostrum officiis pariatur ut voluptas voluptatem.
                    Consequatur culpa debitis deleniti enim excepturi explicabo itaque quibusdam sint vitae voluptas.
                    Alias asperiores doloribus fugit iusto maxime minus tempore. A beatae laborum minus, obcaecati
                    perspiciatis praesentium reprehenderit rerum saepe soluta ullam? Aliquam cupiditate deleniti est eum
                    laboriosam magnam, nam nemo nesciunt odio, perspiciatis recusandae reprehenderit sequi ut. Atque
                    dignissimos eum ipsam perspiciatis quas quidem quis saepe! Aliquam amet assumenda ea earum ex in
                    magnam minima, nemo nobis nulla odio officiis, optio pariatur quas repellat similique sit tempore
                    veritatis? Amet cupiditate earum, eveniet excepturi minus possimus quae quidem quo! Alias
                    consectetur et expedita illo laborum magni nihil nostrum pariatur quisquam sapiente! Alias culpa
                    expedita explicabo facere facilis impedit, ipsum magnam placeat quasi quod saepe sapiente? Aperiam
                    asperiores delectus dignissimos doloremque doloribus eaque earum est, facere fugit in nemo nesciunt
                    numquam odit perspiciatis quasi quo, tenetur? Consequatur dolorem eos error labore libero magnam,
                    quam quas sed tempore? Dolor dolore enim ex, facere natus quasi ratione voluptatibus! Aperiam
                    assumenda odit vero voluptatibus! Aliquam eligendi fugiat laborum, libero nam quasi tenetur unde
                    voluptatem! Quia repellendus soluta unde! Adipisci architecto commodi delectus doloremque doloribus,
                    excepturi exercitationem fugiat impedit, iste maiores minus optio quae quam sequi ut vel veniam
                    voluptate? Atque beatae commodi delectus dignissimos dolorem ea esse eveniet ipsa itaque libero
                    natus neque odio optio, perspiciatis placeat praesentium, quas quibusdam, reiciendis tempore
                    veritatis. Ab ad aut delectus deserunt laudantium maiores nihil reiciendis rerum sunt tempora?
                    Accusantium blanditiis dolor inventore magnam nisi nulla perspiciatis similique ullam voluptatem?
                    Ducimus eos fugit minus nesciunt odio officia quia quibusdam sapiente voluptas voluptatibus!
                    Consequuntur dolores eaque earum eum, fugit ipsa mollitia natus nihil odio officia perspiciatis sit
                    temporibus ullam? Aliquid assumenda consectetur corporis distinctio dolorem enim, esse ipsa iure
                    minima quis quod sit totam voluptatum. Et id neque voluptatem? Aliquam, consectetur dicta doloremque
                    ducimus ex excepturi facilis iusto laborum magnam, modi molestias sapiente sequi soluta vitae
                    voluptates! A adipisci aspernatur consequuntur, ipsam molestias mollitia officia quibusdam velit!
                    Commodi itaque minus neque ullam. Cumque error eum illum, inventore pariatur recusandae saepe sequi
                    totam. At aut dolores dolorum ex molestiae nam odio officia, quas quidem quo vitae voluptas.
                    Possimus quis sunt voluptas voluptates? Aliquid aperiam consectetur quis tempore! Dolorum eaque eum
                    explicabo illo iste, itaque labore magnam magni minima nemo neque odit possimus quam quia quos
                    recusandae sequi, sit, soluta suscipit tempore totam unde vero voluptate. Illo modi optio
                    perferendis quasi qui tempore, tenetur ut veritatis vitae voluptate. Atque autem blanditiis eum
                    exercitationem facilis, inventore nam nihil quas sequi voluptatem! Ad aliquid assumenda autem,
                    consequatur dolore ea enim et illum in ipsa iste modi nihil porro, repudiandae sapiente tempora
                    voluptatibus. Accusamus aspernatur aut consequuntur cumque distinctio eos error est ipsa laboriosam
                    molestiae molestias nostrum possimus quos reprehenderit, rerum saepe veritatis voluptate voluptatum?
                    Beatae culpa cumque delectus deserunt dolorum ducimus earum enim est eveniet excepturi harum
                    inventore ipsum, libero maiores molestias officiis pariatur placeat praesentium quae quam quas quasi
                    quibusdam quisquam quod rem saepe sed sequi sint temporibus ut vel veritatis voluptatem voluptates.
                    Aliquam assumenda esse expedita, hic illo inventore laborum maiores maxime obcaecati officiis quas,
                    quis repellendus reprehenderit similique sunt temporibus unde, veniam! Accusamus accusantium,
                    aspernatur corporis distinctio enim est iste laudantium libero, necessitatibus nemo placeat
                    temporibus. Aliquid aspernatur commodi cupiditate delectus in labore nisi, pariatur saepe sint vel!
                    At autem, culpa eligendi enim harum ipsum maxime officiis perferendis, placeat provident quia rem
                    sequi similique. Aliquam animi commodi culpa cupiditate deleniti distinctio dolore doloremque,
                    dolores ducimus earum enim, esse et facere facilis illo ipsa iusto laudantium maiores modi molestias
                    nemo nisi, nulla obcaecati odit omnis provident quam quasi repellat soluta sunt temporibus vel vitae
                    voluptas? Aliquam architecto at, beatae blanditiis corporis culpa cumque debitis dolor doloribus ea
                    earum enim error eveniet facere fugiat id illum incidunt ipsum iste itaque laborum magnam maiores
                    maxime molestiae nesciunt nostrum numquam officia omnis perferendis perspiciatis porro repellat
                    soluta tempora vero vitae voluptatibus, voluptatum! Dolor, omnis, velit! Alias blanditiis eum iusto,
                    magni odit praesentium quia repellendus ut. Ad adipisci aliquam animi atque, aut consequatur
                    consequuntur delectus dicta dignissimos dolorem doloribus ducimus eaque eius explicabo facere fugiat
                    harum itaque maiores molestias necessitatibus nisi obcaecati odit porro praesentium quam quas quia,
                    quibusdam repellat repudiandae, saepe sed similique veritatis voluptate. Aliquid assumenda autem
                    blanditiis, corporis debitis esse facilis hic, ipsum iure laborum, porro quae quasi quis quos sit
                    soluta sunt! Ab deleniti earum minus numquam quo quod repellat repudiandae sapiente ullam unde? Ab
                    aliquid amet at commodi cum dolore dolorem earum eveniet excepturi, fugiat, id ipsam laboriosam nam
                    nobis perspiciatis quae quo repellendus saepe sit vitae. Animi consequuntur, debitis deleniti
                    doloremque ea earum esse eveniet facilis itaque iure minima, modi nam neque nesciunt omnis porro,
                    provident quos sed similique suscipit temporibus totam unde ut! Accusantium ad, aut delectus
                    deserunt dignissimos dolor dolores ea eos error et explicabo fugiat id maxime nisi nostrum optio
                    perspiciatis repellat unde veniam voluptatibus! Ab adipisci amet exercitationem fuga iusto libero
                    magnam nulla, qui tempora vitae, voluptas.
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aut beatae dolores eos iusto
                    modi nulla officia officiis perferendis, placeat repellendus. A nostrum, rerum! Dolore ducimus
                    incidunt quam ratione repellendus. Ab distinctio natus nesciunt quisquam repellendus? At autem
                    beatae culpa cupiditate doloremque eveniet incidunt inventore, ipsam iure laudantium magnam, modi
                    nesciunt nulla perferendis quidem quos repellat sed sequi sit vero. A, asperiores ipsam magnam modi
                    officia ullam voluptatem! Ex excepturi in maiores omnis saepe. A asperiores cum delectus deleniti
                    dignissimos dolore doloremque est eum, eveniet ex excepturi expedita illum ipsa labore laboriosam
                    laudantium minima modi nam nemo nobis, nostrum obcaecati odio pariatur perspiciatis provident quam
                    quasi quia, sapiente vero voluptatibus. Adipisci delectus laudantium molestiae necessitatibus
                    officiis recusandae, reiciendis? Dolorem dolorum eaque eos eum incidunt laborum necessitatibus,
                    nesciunt, nulla officia officiis provident tempora. Beatae culpa expedita rem. Animi cupiditate
                    debitis esse temporibus unde! Accusantium aliquid amet aperiam aspernatur, assumenda aut blanditiis
                    corporis cum eius enim eos esse exercitationem facere facilis illum ipsa ipsam iste iure iusto
                    laboriosam laborum laudantium magni optio pariatur praesentium quisquam quod rem repudiandae rerum
                    sit suscipit temporibus ullam voluptatum. Asperiores at doloribus eum iusto, natus non numquam? Amet
                    blanditiis culpa dolorum eligendi, eos fuga fugiat harum inventore magni minus nulla numquam odit
                    quo sed velit! Accusamus animi consequuntur dicta dignissimos dolore dolores doloribus ducimus, eius
                    eligendi esse expedita fugit ipsam iure, laudantium natus neque nihil officia omnis quia quisquam
                    quo quod saepe sunt suscipit ullam vitae voluptatibus! A accusamus ad animi aperiam aspernatur at
                    blanditiis consequuntur cum delectus deleniti deserunt dicta dolor dolore est eveniet facere id in
                    ipsa libero magnam magni maxime natus nesciunt odio pariatur perferendis perspiciatis quasi
                    recusandae reiciendis reprehenderit saepe soluta tempore vero, voluptate voluptates voluptatibus
                    voluptatum? Illo, natus porro! Blanditiis ducimus illum itaque laboriosam magni maiores maxime sunt!
                    Atque fugiat, nobis? Accusantium asperiores aspernatur atque doloremque dolorum ducimus eos fuga
                    fugit impedit incidunt ipsum iusto maiores maxime mollitia, nemo nostrum numquam perspiciatis porro
                    provident quaerat quasi quia quibusdam quod quos reprehenderit tempora temporibus voluptate. Aliquid
                    amet beatae consectetur dolore eos expedita id iusto, minima molestiae quas quis quisquam reiciendis
                    repudiandae rerum soluta! Aliquid cum eveniet ipsa mollitia placeat quam quasi qui quis rem sequi.
                    Deleniti doloremque iusto minima non quam reiciendis voluptate. Alias eos iusto quaerat quibusdam
                    quisquam repellat sunt. Beatae consequatur deserunt dolore ducimus eos facere fuga ipsum molestiae
                    numquam praesentium quaerat quasi quidem quod recusandae sunt, unde ut? Aspernatur consectetur culpa
                    dignissimos doloremque dolorum eius exercitationem illum ipsa magni modi non, nostrum odit quibusdam
                    recusandae, repudiandae, sunt suscipit temporibus tenetur voluptatem voluptatum. A ab aliquam
                    aliquid asperiores autem beatae blanditiis consectetur consequatur cum cumque debitis dolor
                    doloremque doloribus ea eaque, enim expedita facere fuga maxime necessitatibus nesciunt nisi
                    perferendis quis quo quod rem reprehenderit rerum sequi sint temporibus, tenetur totam veritatis
                    vitae! Blanditiis, distinctio doloremque dolorum ducimus eum, eveniet explicabo nulla numquam
                    obcaecati perferendis quidem quod sed tempore! Ad aliquid animi aspernatur beatae consectetur,
                    consequatur consequuntur eligendi eum ex facilis harum illo impedit itaque iure maiores minima
                    molestias mollitia natus necessitatibus neque nulla obcaecati odio officia officiis pariatur
                    praesentium quis quo repudiandae rerum sapiente similique tenetur ullam ut. Adipisci alias aliquid
                    aperiam aspernatur at blanditiis cupiditate dolor dolores eligendi esse est et fuga illum in
                    laudantium minima molestiae natus nobis officia praesentium, quasi quidem quis repellat sequi
                    tenetur unde ut velit, voluptate voluptatibus voluptatum. A adipisci aliquam aperiam asperiores at
                    atque aut, corporis delectus deleniti deserunt dignissimos distinctio dolore ea eos et explicabo
                    fugiat fugit harum illo ipsam iste laudantium maiores minima nemo nisi obcaecati perferendis placeat
                    quidem quis quisquam quod recusandae reiciendis saepe sunt tempore temporibus unde! Accusamus ad
                    alias architecto blanditiis commodi consectetur dicta dolor dolores dolorum eligendi eveniet fugit
                    harum impedit incidunt ipsa ipsum iusto labore, laborum libero maxime natus nostrum odit
                    perspiciatis possimus quidem, quis quo quos reiciendis rem repellat repellendus sed suscipit tempore
                    ullam velit voluptas voluptate! Adipisci aliquam amet architecto asperiores atque blanditiis
                    consequuntur culpa cum dicta distinctio earum, enim eos error excepturi exercitationem id laboriosam
                    modi natus nobis nostrum nulla officia perspiciatis possimus quasi quis ratione recusandae
                    reiciendis repellendus repudiandae, saepe tempore unde, ut velit. Animi architecto aut autem
                    cupiditate eos exercitationem hic libero nam optio quia quod, repellat tempora, ullam voluptatibus
                    voluptatum. Corporis cum quibusdam quisquam. A aliquam asperiores corporis culpa debitis delectus
                    deserunt dignissimos dolor dolore dolorum ea eos esse, eveniet exercitationem, fugit illo ipsam
                    ipsum itaque minima necessitatibus nisi officia omnis perspiciatis quidem ratione repellat, saepe
                    sapiente similique tempore temporibus tenetur ut voluptatibus voluptatum. Aperiam aspernatur autem
                    consectetur consequatur corporis delectus deleniti distinctio eligendi eos eveniet expedita hic
                    impedit inventore libero molestiae necessitatibus nobis, obcaecati optio pariatur perferendis
                    placeat possimus praesentium quasi qui quisquam quo quos reprehenderit, repudiandae rerum sequi
                    suscipit tempora tempore temporibus totam ut vitae voluptatibus. Autem beatae eligendi est facilis
                    illum modi officiis placeat. Minima, odio, tempore. Ab accusamus aliquid aperiam asperiores, at ea
                    eaque fugiat fugit, nobis, odit officia placeat sed velit! Cumque, expedita id iusto laborum libero
                    non perferendis repellat sapiente vero voluptatem! Delectus ex facilis nesciunt ratione soluta.
                    Expedita, nisi obcaecati perferendis porro quam vel veniam. Accusamus aspernatur atque, autem
                    corporis cum debitis delectus dolore dolorum est et ex id illo illum labore maxime mollitia nemo
                    neque officia provident quas quia quod ratione rem sint ut veniam voluptatem? Aliquam aspernatur aut
                    debitis eligendi facilis harum id, nemo officiis, perferendis possimus quaerat quas quidem
                    repellendus reprehenderit rerum tempore unde? Alias error eveniet ex impedit possimus tempora vero
                    voluptate. Ab, asperiores aspernatur aut consectetur doloremque error ex facere id natus neque nobis
                    obcaecati quod repellat sequi similique veniam vitae voluptas voluptatem! A commodi deserunt ex,
                    facere iste maiores mollitia nisi quis quo quos tempora temporibus, velit voluptates! Animi aperiam
                    aut corporis eaque eveniet excepturi, harum laboriosam magnam maxime natus omnis optio, pariatur
                    quae quisquam repudiandae? Aspernatur corporis culpa debitis dicta dolorem dolorum error molestiae,
                    numquam officia officiis optio suscipit. Blanditiis, delectus dolorem ducimus eaque earum error est
                    facere iure, nesciunt obcaecati quae quo quod rerum suscipit, totam! Adipisci cum cupiditate
                    deleniti, doloribus expedita explicabo facilis incidunt itaque libero maxime nesciunt nulla, odit
                    quis quod quos. A ab asperiores aut consequuntur distinctio et expedita, facere iste maxime officia
                    possimus, quam quasi repellat repellendus repudiandae similique sint tempore totam voluptatem
                    voluptatibus! Accusamus animi assumenda aut earum eos, eveniet ex, exercitationem facilis hic id
                    illo illum maxime molestiae molestias nostrum obcaecati odit pariatur, porro quaerat quasi
                    repellendus velit vitae. Alias amet aspernatur maiores praesentium, provident quasi! Ad assumenda
                    eius, eveniet ipsam maiores obcaecati quidem tenetur! A accusamus aliquid amet aspernatur aut
                    consequatur corporis cum deleniti dicta dolorem doloremque dolorum ea eos ex fugit incidunt
                    inventore maiores mollitia, nam, nemo, nobis non numquam odit officia omnis placeat porro provident
                    quae quis recusandae sapiente sed tenetur totam veritatis vero vitae voluptatem? Amet architecto
                    consectetur cum delectus dolor excepturi expedita facilis quaerat quam sequi! Deserunt perferendis
                    sit unde vel voluptatibus! Accusamus ad assumenda beatae consequuntur culpa cum dicta distinctio
                    dolorem doloremque enim eos error esse eum excepturi illum, ipsa ipsam iure laboriosam libero magni
                    mollitia necessitatibus neque nisi non nulla perspiciatis placeat reiciendis rem saepe sequi sint
                    sunt tenetur, unde ut voluptatem voluptates voluptatibus! A alias, architecto debitis dolorum esse
                    eum ipsum iste labore nihil perferendis quas, tenetur voluptas! Consequatur consequuntur earum
                    eveniet iure obcaecati quibusdam repellendus sed soluta, tenetur voluptates. Adipisci alias
                    blanditiis corporis cumque delectus doloremque dolorum ea earum eos excepturi fugiat id ipsa itaque
                    iure laboriosam libero maiores modi nesciunt nihil numquam, officiis omnis perspiciatis quam quod
                    repellat rerum saepe sed tempore unde voluptatem. Accusantium at aut blanditiis consequuntur
                    delectus deserunt dignissimos distinctio eligendi illo illum iste, laudantium maxime mollitia nobis,
                    non nostrum nulla pariatur perferendis quaerat quas quidem repellat repudiandae sed, suscipit
                    voluptas! Inventore nulla, recusandae repellendus reprehenderit tenetur voluptatum? Asperiores
                    beatae deleniti dolorem facilis neque. Deleniti distinctio dolor dolorum eaque ex hic nihil non,
                    odio omnis qui quisquam recusandae rerum veniam veritatis voluptas. Architecto assumenda
                    consequuntur ducimus, eaque eos esse ex facere facilis fuga hic itaque laborum libero natus neque
                    nisi, odio perspiciatis quae quas quia recusandae reiciendis temporibus veniam vero vitae
                    voluptatem? Aliquam blanditiis, consequatur culpa cumque enim iusto laborum perferendis perspiciatis
                    possimus quod ratione rerum saepe sapiente sit veniam veritatis voluptatem? Ad animi asperiores
                    autem cum debitis dolore eos expedita fuga fugit ipsa ipsum labore maiores, maxime minus molestiae
                    neque nobis odio odit placeat praesentium provident quae quam qui quia quo recusandae rem rerum sed
                    soluta ut veniam veritatis vitae voluptate. Assumenda deleniti dolore dolores nulla repudiandae
                    voluptas. Atque consequatur deserunt eius enim ipsa quam ut voluptates voluptatum! A amet asperiores
                    atque aut autem culpa, cupiditate dicta distinctio dolor doloribus ducimus eos error harum illum in
                    ipsum itaque laboriosam magnam magni mollitia nemo nisi officiis pariatur perferendis praesentium
                    provident quaerat quas qui quo ratione recusandae repudiandae saepe sed similique ullam veniam
                    voluptatum? Aliquid amet beatae commodi, delectus dolor doloribus ea fugit illum impedit labore
                    magnam minima natus nemo provident quos rerum saepe sapiente sint sunt tempore temporibus ullam unde
                    ut vero voluptatem? A beatae dicta ea earum officiis omnis quas qui quidem suscipit, temporibus! Ab
                    accusamus, cumque cupiditate eligendi exercitationem illum ipsam ipsum maxime, minima natus nisi non
                    nostrum pariatur perspiciatis reiciendis sapiente sequi sint sit sunt totam unde ut voluptatem?
                    Cupiditate ex laborum nihil provident repudiandae voluptatem. Animi aut, beatae, consectetur
                    distinctio dolore dolorem eveniet ex excepturi explicabo harum labore modi nisi obcaecati, pariatur
                    quia rem reprehenderit sunt unde voluptas voluptate? Ab animi autem beatae cumque debitis delectus
                    expedita illo nesciunt officiis omnis! Ad aliquam blanditiis cum eum fugiat iure magni quam quasi!
                    Ad aut corporis debitis error explicabo in iste natus nobis quod, velit veritatis, vitae. A
                    architecto atque cumque cupiditate distinctio error harum laborum odit provident quas quis quo
                    reprehenderit saepe sequi ut veritatis vero, voluptatibus! Alias atque debitis in odit officia
                    repellat tempore ullam! A ab aperiam aut autem consequuntur cum, cumque delectus deleniti error id
                    modi nam perspiciatis quas saepe sapiente similique voluptate? A aut blanditiis cupiditate itaque,
                    iure maxime quo sapiente! Aliquid commodi cumque ea est et, facere facilis fuga itaque iure
                    laboriosam, mollitia natus obcaecati officiis perferendis quasi repudiandae sapiente tenetur totam
                    vero voluptatem. Aliquid ipsum, iste minus mollitia nemo nisi nobis perferendis quae quia quo quod
                    tempora ut. Aperiam asperiores aut consequatur culpa eaque eius in iste itaque libero magnam natus
                    nisi nobis numquam praesentium quas quos, ratione recusandae reprehenderit repudiandae rerum, saepe
                    sequi suscipit veniam veritatis voluptate. Alias aliquid, at culpa eius et ex maiores nemo nisi
                    nobis numquam pariatur perspiciatis possimus quae quod reiciendis, repellendus sint tempore
                    temporibus voluptas voluptates. Cumque dolor enim, eum harum itaque labore necessitatibus nisi nobis
                    quod repellat sequi tempore ullam vero voluptatem voluptatum. Ab alias amet asperiores beatae
                    blanditiis, cumque eos excepturi facilis inventore laudantium modi nemo nisi officiis optio
                    perspiciatis praesentium quibusdam quidem, quos rem sequi similique voluptas, voluptate voluptatum.
                    Ad amet asperiores corporis dignissimos dolor dolore doloremque doloribus dolorum est eveniet fuga
                    harum hic illum inventore iusto magnam molestiae molestias nam nemo officiis quaerat quos,
                    recusandae repudiandae similique sit totam vel veritatis vero, voluptas voluptatum? At doloremque
                    eos et, itaque laudantium quam velit. Alias cupiditate doloribus ducimus esse incidunt itaque,
                    molestiae non officia quibusdam repellendus, sed similique sit suscipit voluptas, voluptatum. Autem
                    consectetur, deleniti deserunt distinctio dolores eligendi excepturi fuga incidunt ipsum itaque
                    maxime, nam non odio odit praesentium quis quo repellendus reprehenderit tempore, temporibus totam
                    vel vero. Atque dolor eos eveniet fuga itaque, magnam maiores nesciunt quae quas quibusdam, quisquam
                    quod sunt suscipit? Animi aut commodi, corporis delectus dolores earum harum incidunt iste
                    laudantium maxime modi, nam nemo nobis numquam, porro possimus praesentium qui soluta sunt vel.
                    Animi asperiores deleniti libero minus odit quos repellat rerum soluta totam vitae? Aliquam animi
                    aut dicta ex facere labore natus nisi praesentium provident, saepe sapiente tempora totam vero.
                    Blanditiis commodi, consectetur dignissimos eaque earum eius et excepturi explicabo hic ipsa ipsam
                    iste iure iusto laboriosam libero molestias, pariatur qui quo quos repellendus temporibus veritatis
                    voluptatibus voluptatum. Asperiores aspernatur autem, cum, delectus dolore dolorem doloremque et
                    excepturi fuga ipsum molestiae natus nesciunt omnis porro quod recusandae, tempore tenetur unde
                    voluptatibus.
                </div>
            </div>
        );
    }
}

export default Home;