import { useState , useEffect} from 'react';
import './App.css';

const App = () => {
  const [matches , setMatches] = useState([]);


  useEffect(() => {
    fetch("https://api.cricapi.com/v1/currentMatches?apikey=a25db733-50f2-4de9-985b-ec78d351772f&offset=0")
    .then(data => data.json())
    .then((res) => setMatches(res.data))
    .then(async res => await console.log(res))
      .catch((error) => console.log(error))
  }, []);


   
  return (
    <div className="text-red">
      <h1 className='heading'>Live Cricket Scores</h1>
      <div className='section'>
      {matches?.map((match , index) => {
        return <div className='card' key={index}>
          <div className='pad'>Team: {match.name}</div>
          { match.matchStarted ? <div className='pad'>Team-1 Score: R-{match.score[0]?.r} W-{match.score[0]?.w} O-{match.score[0]?.o} </div> : ""}
          { match.matchStarted ? <div className='pad'>Team-2 Score: R-{match.score[1]?.r} W-{match.score[1]?.w} O-{match.score[1]?.o} </div> : ""}
          <div className='pad'>Date : {match.dateTimeGMT}</div>
          <div className='pad'>Status : {match.status}</div>
          <div className='pad'>Venue : {match.venue}</div>
          </div>
        
})}

    </div>
    </div>
  );
}

export default App;
