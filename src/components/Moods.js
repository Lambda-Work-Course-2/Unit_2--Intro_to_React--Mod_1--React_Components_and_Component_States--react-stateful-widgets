import React, { useState } from 'react'; 

export default function Moods() {
const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

const [mood,setMood] = useState(initialMood);


const makeHappy = () => {
     setMood(happyMood);
  };
  const makeSad = () => {
     setMood(sadMood);
  };
  const reset = () => {
    setMood(initialMood);
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood == happyMood ? 'royalblue' : 'crimson',
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
