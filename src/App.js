import './App.scss';
import song1 from './audio/Heater-1.mp3';
import song2 from './audio/Heater-2.mp3';
import song3 from './audio/Heater-3.mp3';
import song4 from './audio/Heater-4_1.mp3';
import song5 from './audio/Heater-6.mp3';
import song6 from './audio/Cev_H2.mp3';
import song7 from './audio/Dsc_Oh.mp3';
import song8 from './audio/Kick_n_Hat.mp3';
import song9 from './audio/RP4_KICK_1.mp3';

function App() {
  //everything works as it should, all test pass but i get an error
  // ~~~ The play() request was interrupted by a call to pause(). https://goo.gl/LdLk22
  //dont know how too fix
  const playAudio = (id) => {
    const audio = document.getElementById(id);
    if(audio){
      audio.currentTime = 0;
      audio.play();
      console.log(`${audio.parentElement.id}`);
      const displayDiv = document.getElementById("display");
      if(displayDiv){
        displayDiv.textContent = `${audio.parentElement.id}`;
      }
    }
  }

  document.addEventListener('keydown', (event) => {playAudio(event.key.toUpperCase())});

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          Display
        </div>
        <button className="drum-pad" id="Heater-1" onClick={() => playAudio("Q")}>
          Q<audio className="clip" id="Q" src={song1}></audio>
        </button>
        <button className="drum-pad" id="Heater-2" onClick={() => playAudio("W")}>
          W<audio className="clip" id="W" src={song2}></audio>
        </button>
        <button className="drum-pad" id="Heater-3" onClick={() => playAudio("E")}>
          E<audio className="clip" id="E" src={song3}></audio>
        </button>
        <button className="drum-pad" id="Heater-4_1" onClick={() => playAudio("A")}>
          A<audio className="clip" id="A" src={song4}></audio>
        </button>
        <button className="drum-pad" id="Heater-6" onClick={() => playAudio("S")}>
          S<audio className="clip" id="S" src={song5}></audio>
        </button>
        <button className="drum-pad" id="Cev_H2" onClick={() => playAudio("D")}>
          D<audio className="clip" id="D" src={song6}></audio>
        </button>
        <button className="drum-pad" id="Dsc_Oh" onClick={() => playAudio("Z")}>
          Z<audio className="clip" id="Z" src={song7}></audio>
        </button>
        <button className="drum-pad" id="Kick_n_Hat" onClick={() => playAudio("X")}>
          X<audio className="clip" id="X" src={song8}></audio>
        </button>
        <button className="drum-pad" id="RP4_KICK" onClick={() => playAudio("C")}>
          C<audio className="clip" id="C" src={song9}></audio>
        </button>
      </div>
    </div>
  );
}

export default App;
