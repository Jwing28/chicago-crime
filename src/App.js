import React, { useEffect, useState } from 'react';

import Dashboard from './containers/Dashboard';

import './App.scss';

/*
  Mini project 1
  create a pretty dashboard

  on load, 1 load, get ALL data (of course have a loading bar)
  once all data is available, have a dashboard that a user can store

  we want to persist the data for the session - create a useSession hook to store the data
  on initial load. 

  Then the data fetching on filtering by user will be fast
  no storing.


  textfield
  dropdown


  what data do you want to show in the table?
  year, date, district, description, ward, arrest made?, 

  primary_type - type of crime
  ward - district? location of crime
  year - year occurred
  arrest - was an arrest made
  date - maybe a calendar of searchable dates??
  domestic - y/n
  district
  some have location: { latitude, longitutde, human_address }
  district
  fbi code - can you find what these are?
  description

  Monday - get charts working. 
         - add some tests (RTL)
         - Done
  )________
  next project (2): create something with a simple backend.

  1 page app. very simple. should be able to finish over the weekend.

*/

function App() {
  const [data, setData] = useState(undefined);
  const [chartData, setChartData] = useState(undefined);

  // // build a function to split all the data out into years.
  // const splitCrimeByYears = (data) => {
  //   const result = {}; // { 2020: [], 2021: [], etc. }
  //   data.forEach((crimes) => {
  //     crimes.forEach((crime) => {
  //       if (crime.year in result) {
  //         result[crime.year].push(crime);
  //       } else {
  //         result[`data${crime.year}`] = [crime];
  //       }
  //     });
  //   });
  //   return result;
  // };

  // // data is array of arrays of objects
  // // [ [ { arrest, year, etc. } ] ]
  // const transFormToChart = (data, year) =>
  //   data
  //     .filter((crime) => crime.year == year)
  //     .reduce((accum, crime) => {
  //       // attempt to find index of crime.
  //       const crimeIndex = accum.findIndex(
  //         (accumCrime) => accumCrime.name === crime.type
  //       );

  //       // if crime already added, update the value
  //       if (accum[crimeIndex]) {
  //         accum[crimeIndex] = {
  //           name: crime.type,
  //           value: accum[crimeIndex].value + 1,
  //         };
  //         return accum;
  //       }

  //       // new crime
  //       return accum.concat([{ name: crime.type, value: 1 }]);
  //     }, []);

  useEffect(() => {
    const url = 'https://data.cityofchicago.org/resource/ijzp-q8t2.json';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const result = data.reduce((accum, crime) => {
          // determine whether crime already exists in result
          const crimeIndex = accum.findIndex(
            (aCrime) => aCrime.name == crime.primary_type
          );

          // if so increment that crime
          if (crimeIndex >= 0 && accum[crimeIndex]) {
            accum[crimeIndex] = {
              name: accum[crimeIndex].name,
              value: accum[crimeIndex].value + 1,
            };
            return accum;
          }
          // otherwise, add it to the store
          accum = accum.concat([{ name: crime.primary_type, value: 1 }]);
          return accum;
        }, []);
        setChartData({
          data2021: result,
        });
        setData(data);
      });

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log({ data });

    //     const { data2020, data2021 } = splitCrimeByYears(data);

    //     // chart data requires transformation
    //     const chartReadyData2021 = transFormToChart(data, '2021');
    //     const chartReadyData2020 = transFormToChart(data, '2020');
    //     console.log({ chartReadyData2020, chartReadyData2021 });
    //     setChartData({
    //       data2021: chartReadyData2021,
    //       data2020: chartReadyData2020,
    //     });
    //     setData(data);
    //   });
  }, []);

  return (
    <div className='App'>
      <Dashboard data={data} chartData={chartData} />
    </div>
  );
}

export default App;
