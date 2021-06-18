import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
    <Nav />
    <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

/*
API Key (v3 auth)
6f1ad9c0ed9a14973ee50277962aaf23
Example API Request
https://api.themoviedb.org/3/movie/550?api_key=6f1ad9c0ed9a14973ee50277962aaf23
*/

export default App;