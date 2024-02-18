import React from "react";

const Weather = ({ weatherData }) => {
  // const detailData = [
  //   {
  //     title: "Feels Like",
  //     data: weatherData.main.feels_like.toFixed(),
  //     symbol: "°C",
  //   },
  //   {
  //     title: "Humidity",
  //     data: weatherData.main.humidity.toFixed(),
  //     symbol: "%",
  //   },
  //   {
  //     title: "Wind Speed",
  //     data: weatherData.wind.speed.toFixed(),
  //     symbol: "KPH",
  //   },
  // ];

  return (
    <>
      <div>
        {weatherData.weather ? (
          <div className="w-80 sm:w-96 max-w-full  min-w-0 h-96 bg-gray-300 shadow-lg rounded-xl m-auto realtive px-6 ">
            <div className=" my-4 mx-auto flex justify-between">
              <div className="flex flex-col justify-between h-full mt-3">
                <div className="w-full flex flex-col ">
                  <p className="text-xl space-x-3">
                    <span>{weatherData.name},</span>
                    <span>{weatherData.sys.country}</span>
                  </p>
                  <p className="text-sm">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()} °C
                  </h1>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                  className="w-56"
                />
              </div>
              {/* {weatherData.name !== undefined ? (
                <div className="flex flex-col items-center justify-evenly gap-y-2 my-4 text-sm">
                  <div className="flex justify-between  flex-col gap-x-8 items-center">
                    {detailData.map(({ title, data, symbol }) => {
                      return (
                        <>
                          <div className=" flex items-end gap-x-4 justify-between w-full">
                            <p>{title} </p>
                            <p className="">
                              {data} <span>{symbol}</span>
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              ) : null} */}
            </div>
          </div>
        ) : (<div className="font-bold text-3xl">SEARCH THE <span className="text-sky-400 underline active:text-red-500"><a href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=-6.3799&lon=106.8007&zoom=5">CITY</a></span>!</div>)}
      </div>
    </>
  );
};

export default Weather;
