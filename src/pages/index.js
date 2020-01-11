import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
// import ReactDOM from 'react-dom'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'


const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Web App', description: 'Built with HTML5, CSS3 and JQuery, this really shows what you can do with just Flexbox and Grids.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Graphic Design', description: 'This was a fun exploration of 3D-Lettering mixed with another passion of mine, rock climbing.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'One-page Website', description: 'Built with HTML5, CSS3, Javascript and JQuery, this website is simple and fast, and optimized for the elderly user - using images and large fonts as the primary method of communicating ideas.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: '24-hour Website', description: 'This is a website I built for a client in 24-hours. Built with HTML5, CSS3, flexbox, grids, and minimal Javascript. This is not the live site, rather my dev version with a 1-page design.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Hi-Def Prototype', description: 'My Senior Project at ASU: a "Website Prototype Design and Development" for the livingwithtourette.com website.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Print Media', description: 'A whimsical imagination of our world in the future. Are you ready for it?'}
];
class HomeIndex extends React.Component {

    render() {
        const siteTitle = "art'Teryxx_WDD \| CREATIVE THINKING :: FOCUSED ON RESULTS"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>What? Wahoo! Look out! You're all clear, kid.<br />
                            Now let's blow this thing and go home!</h2>

                        </header>
                        <p>Red Leader... This is Gold Leader. We're starting our attack run. I copy, Gold Leader. Move into position. Stay in attack formation! The exhaust post is... marked and locked in! Switch power to front deflector screens. How many guns do you think, Gold Five. I'd say about twenty guns. Some on the surface, some on the towers. Death Star will be in range in five minutes. Switching to targeting computer. Computer's locked. Getting a signal. The guns...they've stopped! Stabilize your read deflectors. Watch for enemy fighters.</p>
                        

                        <div className="services-container">
                            <div className="box green">
                                <i className="far fa-file-code" title="web / app development services" aria-hidden="true"></i>
                                <p className="workingTitle" tabindex="9">web/app development</p>
                                <p className="servicesDescription">Front-end and App development: I'm always expanding my skill set[s]. I'm comfortable working in VanillaJS and iOS/Swift, and the vue.jS/ Express.jS/ Mongo dB, a modern [MEVN?] stack is coming soon! I hand code all my work.</p>
                            </div>
                            <div className="box yellow">
                                <i className="far fa-object-group" title="web design services" aria-hidden="true"></i>
                                <p className="workingTitle" tabindex="10">web design</p>
                                <p className="servicesDescription">I'm a results-focused Designer/Developer. I love writing [& wrangling] HTML and CSS. FULL web design services provided. I prefer to hand code my work; but, if a CMS, such as Wordpress or Contentful, or a particular framework, works better for you, than that's a better solution.</p>
                            </div>
                            <div className="box red">
                                <i className="far fa-edit" title="ux design" aria-hidden="true"></i>
                                <p className="workingTitle" tabindex="11">ux design</p>
                                <p className="servicesDescription">I love sketching, animating, wireframing, prototyping, and testing. Full gammut UX and Graphic Design services provided. AdobeXD / SketchApp / InVision / Balsamiq, etc. depending on your needs and/or philosophical bent. I always start a project on paper/glassboard, I'm unapologetic on this point... paper is easier and quicker to brainstorm and iterate on, particularly when conceptualizing something completely new. It seems to work better in a group setting, as well. ALL designs are professionially rendered on Cintiq /iPad Pro /MacBook Pro.</p>
                            </div>
                        </div>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>The best way to reach me is via <a href="https://twitter.com/azparrotthead">Twitter</a> or <a href="https://www.linkedin.com/in/patrickjcook">LinkedIn</a>, but I am available through traditional channels. Feel free to check my calendar and schedule an online meeting so we can discuss how I can best help you achieve your goals!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <ul className="actions">
                                    <li><a href="#" className="button2">Check My Calendar</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}
 
export default HomeIndex