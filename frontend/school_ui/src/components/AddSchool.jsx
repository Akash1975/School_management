import React, { useState } from "react";
import axios from "axios";

const AddSchool = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
  });

  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "School name is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.latitude) newErrors.latitude = "Latitude required";
    if (!form.longitude) newErrors.longitude = "Longitude required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post("http://localhost:5000/addSchool", form);
      setSuccess("School added successfully 🎉");
      setForm({ name: "", address: "", latitude: "", longitude: "" });
      setErrors({});
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      alert("Error adding school ❌");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE (Brand / Info) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">🏫 School System</h1>
        <p className="text-lg text-center max-w-md">
          Manage and register schools easily with our smart system. Add new
          schools and track them based on location.
        </p>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Add New School</h2>
            <p className="text-sm text-gray-500">Fill in the details below</p>
          </div>

          {/* Success */}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                School Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter school name"
                className={`mt-1 w-full px-4 py-2 border rounded-lg transition 
                ${errors.name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Address *
              </label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter address"
                className={`mt-1 w-full px-4 py-2 border rounded-lg transition 
                ${errors.address ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              />
              {errors.address && (
                <p className="text-xs text-red-500 mt-1">{errors.address}</p>
              )}
            </div>

            {/* Coordinates */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Coordinates *
              </label>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <input
                    name="latitude"
                    value={form.latitude}
                    placeholder="Latitude"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg transition 
                    ${errors.latitude ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                  />
                  {errors.latitude && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.latitude}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="longitude"
                    value={form.longitude}
                    placeholder="Longitude"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg transition 
                    ${errors.longitude ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                  />
                  {errors.longitude && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.longitude}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
            >
              ➕ Add School
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSchool;
