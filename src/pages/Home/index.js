//import './index.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MainBody } from "./styles"
import cienc from '../../img/cienc.svg';

function Home() {

  const [tvshows, setTvshows] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const api = async (req, res) => {
    try {
      const { data } = await axios("https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json")
      setEpisodes([data]);
    } catch (err) {
      //console.log(err)
    }
  }

  const api2 = async (req, res) => {
    try {
      const { data } = await axios("https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json")
      setTvshows([data]);
    } catch (err) {
      //console.log(err)
    }
  }

  useEffect(() => {
    api();
    api2();

  }, []);

  console.log(episodes)
  console.log(tvshows)

  const season = () => {

  }

  return (
    <MainBody bg={tvshows.map(data => (data.Images.Background))}>
      <header>
        <h1>Penny Dreadful</h1>
        <img src={cienc} alt="cienc" color="#000" />
      </header>
      <main>
        <div>
          <div className="boxseason" >
            <button onClick={e => season(1)}><h5>T1</h5></button>
            <button onClick={e => season(2)}><h5>T2</h5></button>
            <button onClick={e => season(3)}><h5>T3</h5></button>
          </div>
          <div className="boxbodyseason">
            <p>1 Nice work</p>

          </div>
        </div>
      </main>
    </MainBody>
  )
}

export default Home;


// {arrayData.map(teste => (
//   <div key={teste[7].ID}>
//     <img src = {teste[7].Image}/>
//   </div>
// ))}

// {
//   arrayData.map(number => (
//     number[4].SeasonNumber
//   ))
// }