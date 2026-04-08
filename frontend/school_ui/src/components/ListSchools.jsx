import React, { useState } from "react";
import axios from "axios";

const ListSchools = () => {
  const [schools, setSchools] = useState([]);
  const [coords, setCoords] = useState({
    latitude: "",
    longitude: "",
  });

  const fetchSchools = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/listSchools?latitude=${coords.latitude}&longitude=${coords.longitude}`,
      );
      setSchools(res.data);
    } catch (err) {
      alert("Error fetching schools ❌");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">📍 Nearby Schools</h2>

      <div className="flex gap-3 mb-4">
        <input
          placeholder="Latitude"
          onChange={(e) => setCoords({ ...coords, latitude: e.target.value })}
          className="p-2 border rounded w-1/2"
        />

        <input
          placeholder="Longitude"
          onChange={(e) => setCoords({ ...coords, longitude: e.target.value })}
          className="p-2 border rounded w-1/2"
        />
      </div>

      <button
        onClick={fetchSchools}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
      >
        🔍 Find Schools
      </button>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 border cursor-pointer"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-800">{s.name}</h3>

              {/* Distance Badge */}
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {s.distance.toFixed(2)} km
              </span>
            </div>

            {/* Address */}
            <p className="text-sm text-gray-600 mb-3">📍 {s.address}</p>

            {/* Coordinates */}
            <div className="text-xs text-gray-400 mb-4">
              Lat: {s.latitude} | Lng: {s.longitude}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button className="text-sm text-blue-600 hover:underline cursor-pointer">
                View Details
              </button>

              <button className="text-sm bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition cursor-pointer">
                Navigate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSchools;
