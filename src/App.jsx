import axios, { Axios } from "axios";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const searchLocation = event => {
    if(event.key=== "Enter") {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  const API_KEY = "2c79133275cf9a27dccce1a115a5473a"
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  return (
    <>
      <div className="w-full bg-gray-200 flex-col  items-center flex h-screen">
        
        <div className=" text-center p-4">
       <div className="font-bold min-w-0 w-28">
       <h1>Weather - <span className="text-sky-400">ink</span></h1>
       </div>
          <input type="text" className="py-3 min-w-0 relative shadow-md  outline-none rounded-md w-80 sm:w-96 px-2 placeholder:text-lg" placeholder="Search... "
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
          />
          {/* <button onClick={searchLocation}><FiSearch className="text-gray-400 text-xl absolute right-[450px] top-8  -translate-x-14 "/></button> */}
        </div>
        <Weather weatherData={data} />
      </div>
    </>
  );
}

export default App;
