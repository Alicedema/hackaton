import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

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
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <img style={{ position: 'absolute', top: 0 }} width={250} height={250} src={coffeeStain1} alt="" />
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
          </header>
          <p>
          </p>
          <p>
            <img src={allTogether} alt="" />
          </p>
          <p>
            <img src={slowEthan} alt="" />
            <img src={alice} alt="" />
          </p>
          <p>
            <img src={aliceNadia} alt="" />
          </p>
          <p>
          <img src={niels} alt="" />
        </p>
        </div>
        {/* <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll> */}
      </div>
      <img style={{ position: 'absolute', top: 900, right: 200 }} width={400} height={350} src={coffeeStain2} alt="" />
    </section>

    <section>
      <div className="container">
        <header className="major">
        </header>
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
