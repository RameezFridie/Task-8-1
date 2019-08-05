// import the react library from react
import React from 'react';
// Exports class to html
export class Landing extends React.Component {
    render() {
        return (
            // Div that holds all the information needed
            <div id='about-page'>
                <h1 id='game-hub'>The GameHub</h1>
                {/* Information */}
                <h4 id='parag-1'>
                Our passion for all things Gaming and need to offer gamers a specialist store has always been our focus. <br/>
                We love gaming and are gamers, and we insist on being knowledgeable and excited about the products we sell. <br/>
                Today we offer a wide range of games, consoles, hardware, accessories and related merchandise, at competitive pricing.
                </h4>
                <div>
                <div id='wwe'><h3><span><strong>Who we are </strong></span></h3></div>
                <div id='header-5'>
                <h5>The GameHub has been around for many years now and is SA's largest Gaming specialist store.</h5>
                <h5>We have many stores in South Africa and one in Namibia, in all the major malls, and this site where you can order your gaming gear.
                    <br/> Orders over R2000 to major centres get FREE DELIVERY to your door, or opt to collect from your nearest post office.
                    <br/> You can also collect in-store. Payments are made safely online.
                </h5>
                </div>
                </div>

            </div>
        );
    }
}