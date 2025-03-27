import React, { use, useState } from 'react';
import Countery from '../Country/Countery';
import './Countries.css';

const Countries = ({ allData }) => {
      const countriesData = use(allData)
      const [visitedCountries,stateVisitedCountries] =useState([])
      const [visitedFlag,setVisitedFlags]=useState([])

      const handleVisitedFlag =(flag)=>{
            const newVisitedFlag=[...visitedFlag,flag];
            setVisitedFlags(newVisitedFlag);
      }

      const handleVisitedCountry =(country)=>{
            console.log("visited country",country)
            const newVisitedCountries =[...visitedCountries,country]
            stateVisitedCountries(newVisitedCountries)
      }
      // console.log(countriesData);
      return (
            <div>
                  <h1>Traveling Countries :{countriesData.length} </h1>
                  <h3>Traveled so far :{visitedCountries.length}</h3>
                  <div className='visited-flag'>
                        {
                              visitedFlag.map(flag=> <img src={flag}></img>)
                        }
                  </div>
                  <ol>
                        {
                              visitedCountries.map(country =><li>{country.name.common}</li>)
                        }
                  </ol>
                  <div className='countries'>
                        {
                              countriesData.map(country => <Countery key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} country={country}></Countery>)
                        }

                 </div>
            </div>
      );
};

export default Countries;