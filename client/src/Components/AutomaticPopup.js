import React, { useState, useEffect } from "react";
import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function AutomaticPopup() {
  const [displayPopup, setDisplayPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    phoneNumber: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/api/portfolio/add-contact`,
        formData
      );
      setSuccess(response.data.message);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        occupation: "",
        phoneNumber: "",
        message: "",
      });
      setError(null);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Something went wrong"
      );
      setSuccess(null);
    }
  };

  const handleClose = () => {
    setDisplayPopup(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black/60 z-[10000] ${
          displayPopup ? "block" : "hidden"
        }`}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg text-right max-w-md w-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
          <button
            id="close"
            onClick={handleClose}
            className="text-gray-600 text-2xl"
          >
            &times;
          </button>

          <h2 className="text-md font-bold mb-4 text-left">
            How may I help you?
          </h2>

          <div>
            <form
              className="space-y-2 text-left"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-xs font-medium text-gray-700"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-xs font-medium text-gray-700"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="occupation"
                  className="block text-xs font-medium text-gray-700"
                >
                  Occupation*
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-xs font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 text-white bg-teal-500 rounded-md shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default AutomaticPopup;
