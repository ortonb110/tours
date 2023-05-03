import { useEffect, useState } from "react";
import Tours from "./Components/Tours";



function App() {
  const [tourSites, setTourSites] = useState([])
  
  
  const fetchData= async() => {
    let tour;
     try {
      const sites =  await fetch("https://course-api.com/react-tours-project");
      tour = await sites.json();
      setTourSites(tour);
     } catch (error) {
      console.log(error);
     }
    console.log(tour);
  }
 
  useEffect(()=> {
    fetchData();
  }, [])
 

  return (
    <main className="mx-[20rem]">
      <h1 className="text-center">Our Tours</h1>
      <section className="grid gap-2 grid-cols-3">
      {tourSites.map((items)=> {
        return <Tours key={items.id} items={items}/>
      })}
      </section>
    </main>
  );
}

export default App;
