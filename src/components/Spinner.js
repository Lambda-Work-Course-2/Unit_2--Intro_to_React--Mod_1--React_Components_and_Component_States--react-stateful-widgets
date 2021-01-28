import React, { useState } from 'react'; 

export default function Spinner() {
const [spinnerOn,setSpinnerOn] = useState(true);
  const toggleSpinner = () => {
  if (spinnerOn == true){
          setSpinnerOn(false);

  }else{
          setSpinnerOn(true);
  }};

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn == true && <div id='spinner' className='spinner'>--+--</div> /* STEP 2 */
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>
      {spinnerOn == true ? 'Hide' : 'Show'} Spinner {/* STEP 3 */}
      </button>
    </div>
  );
}
