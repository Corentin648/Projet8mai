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
            this.setState({
                backgroundHeight: Math.max(window.visualViewport.height, presentationPanel.offsetHeight + 85)
            });
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
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloremque ea, ex in ipsum minus
                    mollitia nihil possimus praesentium, quis, sed soluta suscipit voluptatum. Aliquid commodi corporis
                    cupiditate distinctio, hic molestiae possimus quod unde velit. Aperiam asperiores cum dicta eius
                    error excepturi, explicabo laboriosam nihil nobis nostrum quaerat reiciendis, tempore voluptas?
                    Accusantium aliquam assumenda commodi doloremque eos esse ex exercitationem fuga fugiat id illum in,
                    iure laboriosam laudantium libero minima mollitia numquam officiis perspiciatis quam quia, quibusdam
                    ratione vel! Ducimus earum ipsam quis ratione, sapiente temporibus. A ab accusamus ad aliquam amet
                    animi atque beatae consequatur culpa cumque debitis dignissimos doloribus eaque eius excepturi,
                    explicabo hic inventore ipsa laborum magnam magni minus natus nisi nulla numquam odit, quasi, quis
                    recusandae repellat repellendus rerum sed sequi sunt ullam voluptas voluptate voluptates? Ab
                    accusamus adipisci aperiam aspernatur assumenda at blanditiis commodi dicta dolorem error est
                    excepturi explicabo facilis hic ipsa ipsum iure magni minima nemo nihil nulla, officia perferendis
                    perspiciatis placeat possimus quasi qui quisquam quod recusandae reiciendis rerum saepe sequi
                    similique sint temporibus voluptatem voluptatibus. Blanditiis consequatur cupiditate deleniti,
                    distinctio doloremque fuga in iure mollitia nihil nulla quis totam voluptatibus? Dicta enim in
                    soluta. Beatae, debitis deleniti eos ipsa iusto laborum neque quibusdam quisquam recusandae. A
                    accusamus adipisci aliquid amet aspernatur earum eligendi esse et eveniet id ipsum laborum magni
                    maiores, minima mollitia nemo nostrum odit pariatur quia quisquam ratione repellat repudiandae rerum
                    sapiente sequi sit soluta sunt temporibus, ut, voluptate? Cupiditate, distinctio doloremque, dolorum
                    esse eveniet magni, non nostrum possimus qui sint sit totam! A alias autem dolorem inventore ipsam
                    laboriosam minima natus numquam provident sequi. A accusantium aliquid animi aspernatur blanditiis
                    culpa delectus dicta doloribus earum ex excepturi exercitationem facere fuga hic iste iure labore
                    magnam magni maiores molestias mollitia nesciunt nihil, non nostrum obcaecati officia omnis pariatur
                    provident quae quas qui quidem repellat repudiandae sequi sunt voluptas voluptatum! Aperiam atque
                    beatae blanditiis commodi consectetur consequatur consequuntur culpa cum cumque debitis deleniti
                    dolores ducimus enim error est eveniet fuga iure minus, molestias odit officiis possimus praesentium
                    provident qui quibusdam rerum temporibus vel voluptas voluptatem voluptates! Ab atque cum, dolorum
                    et facilis fugit labore libero minus, natus nihil quidem tenetur totam ut velit vitae! Accusantium
                    adipisci aspernatur aut beatae cumque dignissimos distinctio doloribus error, et exercitationem
                    expedita harum hic, in iusto nam nulla odio officiis, porro provident quae quam quasi repudiandae
                    saepe sapiente sint sunt vero voluptates. Animi asperiores assumenda at beatae commodi culpa dolor
                    doloribus dolorum eaque earum enim eos esse facilis fugiat, harum hic in inventore iusto laborum
                    minima modi natus nisi nobis nostrum officia quae quibusdam quos reiciendis sapiente sequi tempora
                    temporibus ullam velit. Alias aut deleniti doloribus enim eos eum excepturi expedita fuga illo illum
                    impedit in laborum libero maxime minima mollitia, nulla odit omnis quae qui quibusdam quis quisquam
                    quos ratione rerum vero, voluptatibus. Obcaecati porro quis repudiandae sequi! Amet autem blanditiis
                    cumque dolore doloremque est harum iure iusto natus necessitatibus nesciunt quam, rerum sed sunt
                    voluptate. Aspernatur excepturi hic, iure laborum magni perspiciatis ullam vel voluptatem? Accusamus
                    aliquam animi cupiditate deleniti enim est eum fuga fugiat harum hic iste laboriosam magnam nam
                    necessitatibus nemo nesciunt nulla perspiciatis placeat, praesentium ratione repellendus veniam
                    veritatis, vitae voluptas voluptates? Alias aperiam atque aut delectus distinctio dolores eaque
                    eligendi esse exercitationem expedita hic impedit iste labore minima natus nihil nisi nobis optio
                    perspiciatis placeat porro quaerat quibusdam quidem quod rem sint tempora, tenetur ullam vel
                    veritatis! Asperiores consectetur ducimus vel? Eveniet iure numquam provident, quisquam sit tempora
                    vel? Consequatur error fuga, harum ipsa iste mollitia nam natus necessitatibus odio odit omnis
                    repellat reprehenderit, voluptatem. At delectus eum fuga hic quisquam sapiente, temporibus. Aliquam
                    aut beatae, blanditiis consequuntur dicta doloremque, ea eaque eligendi hic incidunt laboriosam
                    maxime nobis non nostrum officiis porro possimus provident quae quaerat quod ratione repudiandae sed
                    sequi sint tempore unde veritatis voluptatibus? Accusantium alias aspernatur assumenda atque aut
                    consectetur consequatur debitis dolorem, ducimus eaque earum eligendi eos ex illo impedit incidunt
                    ipsa iste labore laboriosam magni necessitatibus nemo nesciunt nostrum nulla porro possimus
                    praesentium quaerat, quibusdam quo quos ratione repellat similique temporibus unde vero, voluptas
                    voluptates. Asperiores delectus earum eius id incidunt itaque minima, pariatur placeat possimus
                    totam. Alias amet, dolores ex magnam, maxime, nihil nulla quae quos recusandae ullam ut vero? Ab
                    iure magnam qui. Accusantium alias amet, aperiam consequuntur cumque delectus doloremque dolores
                    dolorum eius enim et eum excepturi facilis hic ipsa ipsam iste libero maxime natus nisi non
                    possimus, praesentium quis, quisquam rem repellat reprehenderit saepe sit vel veritatis? A at autem
                    cum dolor eaque enim ex iure laboriosam, magni molestias necessitatibus nisi odio perferendis
                    placeat praesentium quae quasi qui quisquam temporibus, tenetur totam ullam veniam vitae voluptas
                    voluptatibus? Ab at dignissimos ex illo numquam odio provident quod reprehenderit sunt suscipit.
                    Accusamus aliquid autem cupiditate deserunt dolore earum error facilis molestias obcaecati veniam? A
                    ad aliquam aliquid architecto at autem consequatur consequuntur, dignissimos dolorem doloremque eos
                    ex hic illo ipsum iure natus nostrum quo, rem rerum sit soluta vitae voluptatibus. Accusamus
                    aspernatur dolor nam possimus quasi, reiciendis saepe sequi? Aspernatur aut beatae dolor fugiat
                    minima praesentium quo sequi temporibus vel voluptates! Corporis in, pariatur. Alias aliquid, autem
                    consequuntur dicta dolores exercitationem fuga fugiat id ipsa iure magnam molestiae odit placeat
                    quaerat soluta vero voluptates. Ab atque aut corporis delectus enim facere fugit hic iste, obcaecati
                    omnis optio pariatur reprehenderit voluptas voluptatem voluptatibus! Ad eveniet expedita inventore
                    maiores temporibus. Aliquam doloremque doloribus eaque eligendi error esse et expedita hic incidunt
                    ipsa itaque, iusto laborum libero modi nisi perferendis possimus praesentium quidem reiciendis sequi
                    suscipit veniam vitae voluptas, voluptatem voluptatum. Adipisci aliquid amet asperiores aspernatur
                    blanditiis consequuntur cum excepturi, impedit incidunt, inventore laudantium provident quaerat
                    quia, quibusdam rerum soluta tempore ullam. Aliquid asperiores, corporis cum eveniet ipsa
                    praesentium quae saepe voluptatem? Alias aliquid asperiores aspernatur deleniti dignissimos
                    doloremque earum eum harum, illum itaque iusto labore minus nam nesciunt numquam porro quos repellat
                    reprehenderit rerum sed totam voluptate voluptatum. A aliquam asperiores aspernatur eos harum
                    mollitia necessitatibus, nobis non quam quasi rerum saepe sed voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, totam, vel. Asperiores at blanditiis
                    doloribus ea hic ipsum iste officia officiis rerum tempora? Accusantium ad amet corporis dolor
                    ducimus est eveniet fugit harum id incidunt iste iure minima neque nobis perspiciatis placeat
                    provident quia quis quisquam ratione repellat rerum similique, soluta ullam unde ut velit voluptate!
                    Amet atque consequatur distinctio, iste modi mollitia non quasi quis, quos similique, voluptate
                    voluptatem. Ab aliquid aspernatur assumenda aut autem dolor eos esse fuga harum hic illo inventore,
                    iusto labore laudantium libero maxime molestias natus, nesciunt nihil nobis officiis quas recusandae
                    reprehenderit sequi sit suscipit tempora unde velit, vero voluptatem. A ad alias aperiam at autem
                    debitis dolores, doloribus ducimus ea eaque eveniet facere harum id illum in, ipsa ipsum itaque
                    laboriosam laborum libero maiores neque non porro quae quasi qui quisquam repellendus saepe
                    similique suscipit ullam, vel veritatis vero! Ad culpa, enim magni maxime minima minus
                    necessitatibus quae quaerat, quia, quidem quis quos sapiente sed. Ad animi corporis debitis facilis
                    ipsa, maxime mollitia natus odio omnis praesentium quam quasi similique ut velit vitae. Architecto
                    cumque doloremque eligendi fugit ipsum possimus sunt vero? Ad aut dolorum ducimus est in, iure
                    reprehenderit. Animi aperiam asperiores atque commodi consequatur, cupiditate dicta dolor dolorem
                    doloribus ducimus earum expedita explicabo ipsum iste laudantium, magni maiores nam natus officiis
                    perspiciatis quae quo recusandae repellendus tempore tenetur. Accusamus asperiores assumenda at
                    consequatur consequuntur culpa delectus dolorem dolores ducimus ea earum, eveniet facere laboriosam
                    laborum maiores, molestiae molestias odio officiis quam quidem repellendus repudiandae sit tempore
                    tenetur veniam voluptate voluptatibus? Adipisci aliquam atque blanditiis consequatur culpa delectus
                    eaque earum eius exercitationem facilis fuga, hic impedit inventore libero maxime nisi numquam,
                    perferendis, porro unde voluptate! Ea in libero sunt! Consequuntur debitis deserunt inventore,
                    mollitia nemo numquam, officia optio placeat, quod recusandae sed temporibus vel veniam. Ab et in
                    magnam optio placeat! Accusantium ad alias amet at cum deserunt dignissimos, eius facere magnam
                    magni maxime, nihil nisi obcaecati officia officiis optio qui quis quod quos ratione recusandae
                    repellendus repudiandae rerum saepe totam veritatis vitae! Assumenda, dolor dolorem ipsam minus
                    molestias quos reiciendis repellendus! Asperiores aspernatur, commodi culpa deserunt ducimus ipsum
                    iusto laudantium magni, nisi non omnis porro provident quam quia reiciendis sint soluta suscipit
                    ullam veniam vero. Accusamus ad aliquam asperiores assumenda consectetur consequatur deserunt dolore
                    esse est et exercitationem facilis fugit hic, impedit ipsum, laudantium magnam mollitia obcaecati
                    officiis optio quam quisquam quo reiciendis sapiente similique sint tempora vel velit vero
                    voluptatum! Consectetur corporis dicta ipsam ipsum iure minima nisi vel, voluptatibus. Atque earum
                    eos nobis. Accusantium at cum distinctio dolore dolores doloribus ea hic inventore, ipsa, ipsam
                    ipsum, minima molestias natus nemo non odit pariatur quia reiciendis repudiandae suscipit unde ut
                    vel voluptas. Aliquam assumenda, earum error incidunt iste labore laboriosam necessitatibus non odio
                    odit qui quisquam voluptate voluptates? A adipisci alias aliquam dolor dolores doloribus enim eos
                    error et id iusto labore, magnam magni nisi, perferendis quaerat quam quidem quo quod reprehenderit
                    sapiente ut voluptatem voluptates! Alias at, autem consequatur eveniet placeat quos ratione. Aperiam
                    expedita labore qui ratione reiciendis sequi sunt? Aliquid amet commodi, cumque debitis dolore
                    doloremque dolorum eius error illum ipsa iste minus nulla obcaecati repellendus rerum, saepe sed
                    voluptatum! Dolorem, explicabo facere impedit non quidem similique veritatis? Beatae commodi
                    consectetur ducimus eligendi id libero repellat repellendus sed. Ab eaque enim illo, inventore minus
                    necessitatibus numquam soluta tempore. Assumenda deleniti esse inventore labore nihil possimus
                    provident quas sequi. Aliquam, amet, asperiores at culpa dolorem doloremque explicabo fugiat ipsa
                    libero mollitia numquam, obcaecati odit optio quas reiciendis saepe tempore tenetur! Alias
                    asperiores, commodi cum eaque eos eum explicabo facere ipsa labore officiis, perferendis porro
                    quaerat quia, sit voluptatum! Amet aspernatur at aut beatae cum debitis deserunt dicta doloremque
                    dolorum eaque earum error est eum ex expedita explicabo illo inventore laudantium maiores odit porro
                    praesentium quas quisquam reiciendis repellat repellendus, repudiandae tempora tenetur vel vero
                    voluptas voluptate voluptatem voluptatum. Ad architecto at cum eos ex illum ipsum natus nihil odio
                    perferendis quibusdam ratione reprehenderit saepe sapiente, suscipit, ut velit! Aliquam architecto
                    asperiores commodi consectetur consequatur delectus, deleniti deserunt dicta dolor dolore doloribus
                    eos esse ex facere hic inventore nam natus nobis numquam obcaecati odio officia officiis omnis qui
                    quibusdam quisquam reiciendis tenetur unde voluptatem voluptatibus. Animi aspernatur consequatur
                    delectus ducimus enim, eum ex, maxime modi odio officiis quaerat reiciendis similique soluta sunt
                    tenetur veniam voluptatum? At atque cupiditate doloribus et explicabo illo illum iusto molestiae
                    provident, quibusdam quis quo quos, repellat repudiandae sit. Ab accusamus, amet aperiam assumenda
                    beatae blanditiis commodi consequatur consequuntur corporis deleniti dolores enim et facere, iusto
                    maiores minima, molestiae mollitia omnis possimus quaerat quasi qui quidem quisquam ratione rem sed
                    sint sit ut vel voluptatibus! Distinctio dolore, excepturi explicabo hic incidunt, iure laboriosam
                    natus necessitatibus odio sint ullam voluptatum? Blanditiis commodi ducimus sapiente veritatis.
                    Cumque dolores eligendi ipsam ipsum, nostrum odit, perspiciatis quas qui quibusdam quos, repudiandae
                    voluptas voluptatum! Aperiam blanditiis consequatur, eaque eum excepturi nobis nulla officia
                    perferendis veniam. Animi assumenda, autem delectus deserunt doloremque eius eos esse est hic in
                    iusto, laudantium molestias mollitia nemo nesciunt quod, reiciendis rem similique vel voluptatem.
                    Alias aliquam amet cupiditate deleniti dolorum et ex in iste laborum libero, molestiae nihil nisi
                    numquam pariatur perspiciatis porro quae, repellat sed, veritatis vitae? Adipisci beatae dolorem eos
                    est exercitationem facere ipsam iusto maxime necessitatibus nemo perspiciatis quaerat quam quidem,
                    quod recusandae saepe temporibus ut? Aspernatur at atque, cum ea error impedit libero mollitia nemo
                    tempore veniam! Consectetur culpa eaque eligendi excepturi facilis inventore iste iusto laboriosam
                    laborum nam neque numquam, optio repellat tempora vitae, voluptas voluptatum. Accusantium ad aliquid
                    architecto asperiores at autem commodi consequuntur corporis deserunt dolore doloremque dolorum esse
                    est et exercitationem hic impedit iste itaque iusto maiores nihil omnis perspiciatis possimus quae
                    quibusdam repellat sint tempora tempore temporibus ut vel vitae, voluptatibus voluptatum. Illum
                    repellendus tempore vero. Aliquid amet delectus dolorem fugiat harum id ipsa labore minima modi,
                    molestiae molestias nisi quidem quo sed soluta. Aliquam delectus, distinctio dolores harum illo
                    incidunt inventore laboriosam nostrum ut voluptate?
                </div>
            </div>
        );
    }
}