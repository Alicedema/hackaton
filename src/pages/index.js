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
    <section id="one" className="main special">
      <div className="container">
        <img style={{ position: 'absolute', top: 0 }} width={250} height={250} src={coffeeStain1} alt="" />
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h1>The A-Team</h1>
          </header>
          <div>            
            <img src={niels} alt="" />
            </div>
          <div>            
            <img src={allTogether} alt="" />
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div> <img src={slowEthan} alt="" /></div>
          <div>            <img src={alice} alt="" />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <img src={aliceNadia} alt="" />
          </div>
          <div>
          </div>
        </div>
        {/* <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll> */}
      </div>
      <img style={{ position: 'absolute', top: 900, right: 250 }} width={400} height={350} src={coffeeStain2} alt="" />
    </section>
  </Layout>
);

export default IndexPage;
