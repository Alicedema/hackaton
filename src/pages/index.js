import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';

// OUR GIFS
import slowEthan from '../assets/images/slow_ethan.gif';
import alice from '../assets/images/alice.gif';
import aliceNadia from '../assets/images/alice_nadia.gif';
import allTogether from '../assets/images/all_together.gif';
import niels from '../assets/images/niels_foodHackaton.gif';

import coffeeStain1 from '../assets/images/coffee-ring-5.png';
import coffeeStain2 from '../assets/images/coffee_stain2.png';

const sections = [
  { id: 'one', bg: require('../assets/images/table.jpg') },
  { id: 'two', bg: require('../assets/images/table.jpg') },
  { id: 'three', bg: require('../assets/images/table.jpg') },
];
const IndexPage = () => (
  <Layout>
    <section id="one" className="main">
      <div className="container">
        <img
          style={{ position: 'absolute', top: 0 }}
          width={250}
          height={250}
          src={coffeeStain1}
          alt=""
        />
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="major">
          <h1>The A-Team</h1>
        </div>

        <div className="content border">
          <div className="article article--disclaimer">Disclaimer</div>
          <div className="article article--bigTitle">Outlook Galore?</div>
          <div className="article article--1">
            <img width="600px" className="image right" src={slowEthan} alt="" />
            Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
            aute iure reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectr adipisci
            elit, sed eiusmod tempor incidunt ut labore et dolore magna
            aliqua.Ut enim ad minim veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur.Quis aute iure reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.Excepteur sint obcaecat
            cupiditat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            <img className="image left" src={aliceNadia} alt="" />
          </div>
          <div className="article article--2">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit nulla
            beatae animi. Corrupti mollitia nihil voluptatum tenetur,
            praesentium, sequi accusamus repellendus fugit dolore perferendis
            vel adipisci quis magni enim, delectus vero obcaecati quibusdam
            ratione ut ipsum sapiente cum iusto? Mollitia placeat minima quidem
            voluptate voluptates aliquam tempora ipsa consectetur! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Ex adipisci, quo quasi
            error, animi voluptatibus consectetur voluptatem corporis sed
            placeat fugit! In inventore neque culpa quod. Quisquam inventore
            quam dolore nostrum praesentium mollitia sequi, molestias sint eos
            odio voluptatibus quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis quis, sequi, iusto debitis dolorum ipsa
            vitae molestias quaerat mollitia, omnis vel ducimus tempore suscipit
            ut. Unde corrupti eaque iusto repellat?
            <img width="300px" className="image right" src={allTogether} />
          </div>
          <div className="article article--3 condensed-article">
            <img className="image right" src={niels} alt="" />
            Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
            aute iure reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </div>
          <div className="article article--4 condensed-article important-article">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            voluptatibus et incidunt aperiam eos quia non deserunt eveniet
            corporis tempora quasi, adipisci impedit nam nihil culpa praesentium
            facere! Exercitationem optio autem eaque modi sapiente voluptatibus
            animi, consequuntur, ab fugit voluptatem suscipit! Soluta debitis
            adipisci quo rem aliquid nesciunt ex, voluptates aliquam quia sunt
            cum quaerat velit magni modi atque nam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magnam illum veniam quo cumque earum,
            explicabo sint perspiciatis officiis, deserunt quaerat quibusdam
            dolores consequatur consectetur repudiandae vero nemo blanditiis
            exercitationem asperiores, alias vel saepe dolore ut soluta laborum.
            Similique numquam incidunt qui in eaque iure accusantium quibusdam
            blanditiis quas, ad nulla? Magnam, sequi. Magni est obcaecati
            cupiditate modi sint exercitationem eius eveniet quis quo explicabo
            itaque tempore porro sit, incidunt, iusto repudiandae, illum
            laudantium veniam recusandae quasi enim! Doloribus aut veniam dolore
            molestiae nesciunt. Dolores voluptate ullam facere vero expedita
            similique? Provident est, numquam aliquid nulla doloribus cum ullam
            sapiente architecto dicta dolorum quisquam placeat voluptatum
            quibusdam unde at itaque nisi officia! Reprehenderit consectetur,
            omnis corrupti dolorum cumque repudiandae fugiat eos quidem aperiam
            amet. Voluptatum ex, id quibusdam perferendis nemo sed. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Magni aut ab ad iusto
            molestias delectus, veniam iste maiores ex eius laborum facere amet,
            quisquam obcaecati harum tempora perspiciatis mollitia, doloribus
            inventore dicta. Totam, ut rerum. Vero eum corporis possimus magnam
            deleniti, esse natus recusandae perspiciatis exercitationem, error
            aut! Officiis assumenda recusandae eveniet necessitatibus distinctio
            quam, repellat nobis totam ducimus consequatur explicabo ut voluptas
            eligendi optio molestias error deleniti ex neque sapiente odit! Sit
            quae iste facere at alias quibusdam quis dolor, sed ab debitis
            reiciendis accusamus doloremque aut delectus doloribus. Nisi
            inventore molestias enim natus laudantium expedita rerum atque sunt
            voluptatem, corrupti hic veritatis quaerat quo ad necessitatibus
            perspiciatis perferendis placeat tempore debitis cumque vitae?
            Minima enim, eaque ratione cum, tempora deserunt iure officia
            voluptatem consequatur minus, maiores laudantium quod! Culpa
            possimus explicabo, cum eligendi ad ullam quisquam? Asperiores quasi
            obcaecati consequatur itaque. A et maiores quo voluptatum
            reprehenderit quidem voluptatem qui magnam, corrupti, architecto
            explicabo laudantium dolore rerum dolores nihil quasi. Commodi
            incidunt dolorem molestias quis facere blanditiis vitae, temporibus
            aperiam voluptatibus voluptates maiores, totam, eaque quod porro
            quibusdam obcaecati culpa delectus possimus accusantium. Repellendus
            voluptatum debitis eius adipisci reiciendis. Odit perferendis hic,
            id voluptas at a consequuntur veniam.
          </div>
          <div className="article  article--5">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="article  article--6">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="article  article--7">
            <img className="image right" src={alice} alt="" />
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div></div>
        </div>
      </div>
      <img
        style={{ position: 'absolute', top: 900, right: 250 }}
        width={400}
        height={350}
        src={coffeeStain2}
        alt=""
      />
    </section>
  </Layout>
);

export default IndexPage;
