import React from 'react';
import './Introduction.css';
import imgURL from '../../assets/avatar.jpg';

class Introduction extends React.Component {
  render() {
    return (
      <div className="introduction">
        <img src={imgURL} alt="profile" />
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </div>
    );
  }
}

export default Introduction;