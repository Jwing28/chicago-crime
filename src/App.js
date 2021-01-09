import React, { useEffect } from 'react';

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


  )________
  next project (2): create something with a simple backend.

  1 page app. very simple. should be able to finish over the weekend.

*/

function App() {
  useEffect(() => {
    const testURL = 'https://data.cityofchicago.org/resource/ijzp-q8t2.json';
    fetch(testURL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className='App'>
      <Dashboard />
    </div>
  );
}

export default App;
