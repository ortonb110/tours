import { useEffect, useState } from "react";
import Tours from "./Components/Tours";

function App() {
  const [tourSites, setTourSites] = useState([]);

  const fetchData = async () => {
    let tour;
    try {
      const sites = await fetch("https://course-api.com/react-tours-project");
      tour = await sites.json();
      setTourSites(tour);
    } catch (error) {
      console.log(error);
    }
    console.log(tour);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id)=> {
    const newTours = tourSites.filter((tour) => tour.id !==id);
    setTourSites(newTours);
    const lengtfOfTours = tourSites.length;
  }

  return (
    <main className="px-[5rem] py-[5rem]">
      <h1 className=" text-[3rem] font-bold mb-[4rem] border-b-4 w-fit mx-auto border-green-500">
        {
          tourSites.length < 1 ? "No Tours" : "Our Tours"
        }
      </h1>
     <button onClick={fetchData} className={`${tourSites.length < 1 ? "visible" : "hidden"} mx-auto px-[1rem] text-green-500 border-[1px] border-green-500 hover:text-white hover:bg-green-500 transition-all ease-in-out duration-300 rounded-md`} >Refresh</button>
      <section className="grid grid-cols-3 mx-auto gap-6">
        {tourSites.map((items) => {
          return <Tours key={items.id} items={items} removeTour={removeTour}/>;
        })}
      </section>
    </main>
  );
}

export default App;
