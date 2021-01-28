import React, { useState } from 'react'; 

export default function Input() {
  /* STEP 1 */
  const [inputValue,setInputValue] = useState('');
  const changeInput = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;
          setInputValue(value);
  };
  const reset = () => {
     setInputValue('');
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputValue.length > 11 ? 'crimson' : 'royalblue', 
    textTransform: 'uppercase',
}

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={style}>{inputValue}</div>
      <div>
        <input id='input' type='text' value={inputValue} onChange={changeInput} /> {/* STEP 6 */}
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
