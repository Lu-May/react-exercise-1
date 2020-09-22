// eslint-disable-next-line
import React, { Component } from 'react';
import './App.scss';
import image from './assets/avatar.jpg';

class App extends Component {
  render() {
    return (
      <main className="main">
        <header>
          <img src={image} className="image" />
          <h1 className="hello">
            HELLO,<h4>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h4>
          </h1>
        </header>
        <section>
          <hr align="center" width="auto" color="lightgray" size="1"></hr>
          <section>
            <h2 className="educationName">ABOUT ME</h2>
            <p className="aboutMe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, exercitationem, totam, dolores iste dolore est aut modi.
            </p>
          </section>
          <section>
            <h2 className="educationName">EDUCATION</h2>
            <section className="component">
              <p className="year">1990</p>
              <p className="text">
                I was born in Katowice Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Sapiente, exercitationem, totam, dolores iste
                dolore est aut modi.
              </p>
            </section>
            <section className="component">
              <p className="year">2005</p>
              <p className="text">
                Secondary school specializing in artistic Eos, explicabo, nam,
                tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam
                quis voluptatibus.
              </p>
            </section>
            <section className="component">
              <p className="year">2009</p>
              <p className="text">
                First level graduation in Graphic Design Aspernatur, mollitia,
                quos maxime eius suscipit sed beatae ducimus quaerat quibusdam
                perferendis? lusto, quibusdam asperiores underepellat.
              </p>
            </section>
            <section className="component">
              <p className="year">2012</p>
              <p className="text">
                Second level graduation in Graphic Design Ducimus, aliquam
                tempore autem itaque et accusantium!
              </p>
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default App;
