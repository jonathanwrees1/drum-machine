import '../components/Drumpad.css';

import React, { Component } from 'react';

export default class Drumpad extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown); //event listener takes in the event first and then the function to be executed
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown); //removes event listener each time
  }

  handleKeyDown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      //comparing the keycode to the letter in props (which is being converted to a keycode).
      this.audio.play(); //triggers the sound to be played
      this.audio.currentTime = 0; //makes it so you can play the sound rapid fire
      this.props.handleDisplay(this.props.id);
    } //passing the function as props which will attach to handleKeyDown function. It takes in the id as a prop to display the instrument name associated with it.
  };

  handleClick = () => {
    this.audio.play(); //triggers the sound to be played
    this.audio.currentTime = 0; //makes it so you can play the sound rapid fire
    this.props.handleDisplay(this.props.id); //passing the function as props which will attach to handleclick function. It takes in the id as a prop to display the instrument name associated with it.
  };

  render() {
    return (
      //creating a reusable component which will be mapped through with the data in the main app view
      <div
        className='drum-pad'
        key={this.id}
        id={this.props.id}
        onClick={this.handleClick} //click event attached to the div itself
      >
        <h1>{this.props.letter}</h1>

        <audio
          ref={(ref) => (this.audio = ref)} //this is a dom element making a reference to the dom to make itself as the reference
          className='clip'
          src={this.props.src}
          id={this.props.letter}
        ></audio>
      </div>
    );
  }
}
