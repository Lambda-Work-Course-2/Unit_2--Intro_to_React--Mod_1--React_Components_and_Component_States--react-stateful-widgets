import React, { useState } from 'react'; 

export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {

     const [person,setPerson] = useState(listOfAwesome);
     const [featured, setFeatured] = useState(null)

     const getNameOfFeatured = () => {
          if (featured != null)
     return(person[featured-1]["name"]);   
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: featured != null ? 'gold': 'royalblue',
  };
  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          person.map(dev =>
            <div className='programmer' key={dev.id}>
              {dev.name} <button onClick={() => {setFeatured(dev.id)}}>Feature</button>
              
            </div>
          )
        }
      </div>
      <div id='featured' style={style}>
        {
          featured != null
            ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
            : 'Pick an awesome programmer'
        } 
      </div>
    </div>
  );
}
