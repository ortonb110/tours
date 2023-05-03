import { useEffect, useState } from "react";
import Tours from "./Components/Tours";
import axios from "axios";


function App() {
  const [tourSites, setTourSites] = useState([])
  
  

  const fetchData= () => {
     axios.get('https://course-api.com/react-tours-project').then((response)=> {
      setTourSites(response.data);
    })
    console.log(tourSites)
  }
 
  useEffect({
    
  }, [tourSites]);

  return (
    <main>
      <button onClick={fetchData}>Load</button>
      <Tours props={tourSites}/>
    </main>
  );
}

export default App;
