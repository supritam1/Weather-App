// import { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [city, setCity] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (city.trim()) {
//     //   onSearch(city);
//     //   setCity(""); // Clear input after searching
//     // }
//       if (!city.trim() || /\d/.test(city)) {
//         toast.error("❌ Please enter a valid city name!", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "dark",
//         });
//         return;
//       }
      
//       onSearch(city);
//       setCity(""); // Clear input after searching
//     };
//   };

//   return (
//     <form 
//       onSubmit={handleSubmit} 
//       className="flex items-center bg-white/10 backdrop-blur-lg p-2 rounded-full shadow-xl w-full max-w-md"
//       style={{ 
//         backdropFilter: "blur(10px)", 
//         border: "1px solid rgba(255, 255, 255, 0.2)"
//       }}
//     >
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name..."
//         className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-3 outline-none rounded-full"
//         style={{
//           boxShadow: "inset 0 0 8px rgba(255, 255, 255, 0.1)",
//         }}
//       />

//       <button
//         className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-6 py-2 ml-2 rounded-full transition-all duration-300 shadow-md hover:from-orange-500 hover:to-yellow-400 hover:scale-105 active:scale-95"
//         style={{
//           borderRadius: "50px", // Makes it even more rounded
//           padding: "10px 20px", // Adjusts button size for a sleek look
//         }}
//       >
//         🔍 Search
//       </button>

//     </form>
//   );
// };

// export default SearchBar;
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!city.trim() || /\d/.test(city)) {
      toast.error("❌ Please enter a valid city name!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    onSearch(city);
    setCity("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center bg-white/10 backdrop-blur-lg p-2 rounded-full shadow-xl w-full max-w-md"
      style={{ 
        backdropFilter: "blur(10px)", 
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-3 outline-none rounded-full"
        style={{
          boxShadow: "inset 0 0 8px rgba(255, 255, 255, 0.1)",
        }}
      />

      <button
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-6 py-2 ml-2 rounded-full transition-all duration-300 shadow-md hover:from-orange-500 hover:to-yellow-400 hover:scale-105 active:scale-95"
        style={{
          borderRadius: "50px", 
          padding: "10px 20px",
        }}
      >
        🔍 Search
      </button>
    </form>
  );
};

export default SearchBar;
