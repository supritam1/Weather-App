const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-transparent bg-opacity-50 backdrop-blur-md p-6 rounded-xl shadow-lg text-center mt-9 w-80">
      <h2 className="text-2xl font-bold">{weather.city}</h2>
      <p className="text-lg mt-2">🌡 Temperature: {weather.temperature}°C</p>
      <p className="text-lg">☁️ Condition: {weather.condition}</p>
    </div>
  );
};
//bg-gray-800
export default WeatherCard;
