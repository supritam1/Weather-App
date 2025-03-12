import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components//WeatherCard";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { fetchWeather } from "./services/weatherService";
import "./App.css";


const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
      if (data.cod !== 200) {
        toast.error("❌ City not found! Please enter a valid city name.");
        return;
      }
      setWeather({
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].description,
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between text-white">
      <ToastContainer />

      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-4xl font-bold mb-6">Weather App</h1>

        <SearchBar onSearch={handleSearch} />

        {weather && <WeatherCard weather={weather} />}
      </div>

      <footer className="w-full text-center py-4 text-white">
        This application is made by <span className="text-blue-400">Supritam Mohanty</span>
      </footer>
    </div>
  );
};

export default App;
