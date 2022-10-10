import Drumpad from './components/Drumpad';
import Drumpad2 from './components/Drumpad2';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Soundfile1 from './components/my-sounds/Click-Clock.mp3';
import Soundfile2 from './components/my-sounds/Frog.mp3';
import Soundfile3 from './components/my-sounds/Ka-Chunk.mp3';
import Soundfile4 from './components/my-sounds/Pop.mp3';
import Soundfile5 from './components/my-sounds/Quarters.mp3';
import Soundfile6 from './components/my-sounds/Rattle.mp3';
import Soundfile7 from './components/my-sounds/Whistle.mp3';
import Soundfile8 from './components/my-sounds/Zip.mp3';
import Soundfile9 from './components/my-sounds/Zippers.mp3';
import Soundfile10 from './components/my-sounds/Heater-1.mp3';
import Soundfile11 from './components/my-sounds/Heater-2.mp3';
import Soundfile12 from './components/my-sounds/Heater-3.mp3';
import Soundfile13 from './components/my-sounds/Heater-4_1.mp3';
import Soundfile14 from './components/my-sounds/clap.mp3';
import Soundfile15 from './components/my-sounds/open-hh.mp3';
import Soundfile16 from './components/my-sounds/Kick_n_Hat.mp3';
import Soundfile17 from './components/my-sounds/RP4_KICK_1.mp3';
import Soundfile18 from './components/my-sounds/closed-hh.mp3';

const data = [
  {
    id: 'heater-1',
    letter: 'Q',
    src: Soundfile10,
  },
  {
    id: 'heater-2',
    letter: 'W',
    src: Soundfile11,
  },
  {
    id: 'heater-3',
    letter: 'E',
    src: Soundfile12,
  },
  {
    id: 'heater-4',
    letter: 'A',
    src: Soundfile13,
  },
  {
    id: 'clap',
    letter: 'S',
    src: Soundfile14,
  },
  {
    id: 'open-hh',
    letter: 'D',
    src: Soundfile15,
  },
  {
    id: 'kick+hat',
    letter: 'Z',
    src: Soundfile16,
  },
  {
    id: 'kick',
    letter: 'X',
    src: Soundfile17,
  },
  {
    id: 'closed-hh',
    letter: 'C',
    src: Soundfile18,
  },
];

const data2 = [
  {
    id: 'Click-Clock',
    letter: 'Q',
    src: Soundfile1,
  },
  {
    id: 'Frog',
    letter: 'W',
    src: Soundfile2,
  },
  {
    id: 'Ka-Chunk',
    letter: 'E',
    src: Soundfile3,
  },
  {
    id: 'Pop',
    letter: 'A',
    src: Soundfile4,
  },
  {
    id: 'Quarters',
    letter: 'S',
    src: Soundfile5,
  },
  {
    id: 'Rattle',
    letter: 'D',
    src: Soundfile6,
  },
  {
    id: 'Whistle',
    letter: 'Z',
    src: Soundfile7,
  },
  {
    id: 'Zip',
    letter: 'X',
    src: Soundfile8,
  },
  {
    id: 'Zippers',
    letter: 'C',
    src: Soundfile9,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ' ',
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  handleDisplay = (display) => {
    //both arguments must be the same word
    this.setState({ display }); //in curly brackets because its referring to the property of an object
  };

  toggleVisibility() {
    this.setState((state) => {
      if (state.visibility === true) {
        return { visibility: false };
      } else {
        return { visibility: true };
      }
    });
  }

  render() {
    if (this.state.visibility) {
      return (
        <div id='drum-machine'>
          <div id='wrapper'>
            <h1 className='app-name text-center mt-5 display-4  p-3'>
              Beats and Sound FX Machine
            </h1>
            <h1 id='display'>{this.state.display}</h1>
            <div className='d-flex justify-content-center p-3 w-100'>
              <Button className='btn' onClick={this.toggleVisibility}>
                Switch To Drum Beats
              </Button>
            </div>
            <div id='drum-pads2'>
              {data2.map(
                (
                  d2 //mapping over the data from the array above for each drumpad 'd' stands for data, could be item or anything else
                ) => (
                  <Drumpad2
                    key={d2.id}
                    id={d2.id} //passing in the id as props to the Drumpad component
                    letter={d2.letter} //passing in the letter as props to the Drumpad Commponent
                    src={d2.src} //passing in the source as props to the Drumpad Component
                    handleDisplay={this.handleDisplay} //assigning handleDisplay function to a variable of the same name then passing it as props
                  />
                )
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id='drum-machine'>
          <div id='wrapper'>
            <h1 className='app-name text-center display-4 mt-5 p-3'>
              Beats and Sound FX Machine
            </h1>
            <h1 id='display'>{this.state.display}</h1>
            <div className='d-flex justify-content-center p-3 w-100'>
              <Button className='btn' onClick={this.toggleVisibility}>
                Switch To Sound FX
              </Button>
            </div>
            <div id='drum-pads'>
              {data.map(
                (
                  d //mapping over the data from the array above for each drumpad 'd' stands for data, could be item or anything else
                ) => (
                  <Drumpad
                    key={d.id}
                    id={d.id} //passing in the id as props to the Drumpad component
                    letter={d.letter} //passing in the letter as props to the Drumpad Commponent
                    src={d.src} //passing in the source as props to the Drumpad Component
                    handleDisplay={this.handleDisplay} //assigning handleDisplay function to a variable of the same name then passing it as props
                  />
                )
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}
