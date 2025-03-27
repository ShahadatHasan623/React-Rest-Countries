import { useState } from 'react';
import './Country.css'
const Countery = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
      // console.log(country)
      const [visit,stateVisited]=useState(false)
      const handleVisit=()=>{
            // if(visit === true){
            //       stateVisited(false)
            // }
            // else{
            //       stateVisited(true)
            // }
            stateVisited(!visit)
            handleVisitedCountry(country)
      }
      return (
            <div className={`Country ${visit && 'country-visited'}`}>
                  <h3>Name: {country.name.common}</h3> 
                  <img src={country.flags.png} alt="" />
                  <p>Independent : {country.independent ? 'Free':'Not Free'} </p>
                  <p>Population : {country.population} </p>
                  <button className={visit ?'btn-visited':'btn-not-visited'} onClick={handleVisit}>{visit ? 'visited':'Not visited'}</button>
                  <button onClick={() => handleVisitedFlag(country.flags.png)}>Add To visited Flag</button>
            </div>
      );
};

export default Countery;