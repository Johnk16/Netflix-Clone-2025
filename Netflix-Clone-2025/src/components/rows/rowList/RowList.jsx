import React from 'react'
import Row from '../row/Row'
import requests from '../../../utils/request';

function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />

      <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES " fetchUrl={requests.fetchHorrorMovies} />
      <Row title=" ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title=" DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
      <Row title= " TV SHOW " fetchUrl={requests.fetchTvShow} />
     
    </>
  );
}

export default RowList