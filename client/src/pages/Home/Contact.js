import { useState } from "react";
import axios from "axios";
import image4 from "../../images/Banner-2.jpeg";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function Contact() {
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

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 sm:my-40 lg:overflow-visible lg:px-0 max-w-7xl m-auto z-50">
        <div className="mb-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <h1 className="text-black text-6xl lg:px-8 sm:pt-0 pt-10 px-0">
            Get In <span className="font-semibold">Touch</span>
            <hr className="border-2 w-1/3 border-secondary opacity" />
            <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
            <hr className="border-2 w-1/5 border-primary opacity mt-1" />
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col mx-auto max-w-2xl items-center gap-x-8 gap-y-16 lg:px-0 lg:max-w-7xl">
          <div className="isolate bg-white lg:px-8 lg:w-1/2 w-full px-0">
            <form onSubmit={handleSubmit} className="mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      autoComplete="given-name"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      autoComplete="family-name"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Occupation
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="occupation"
                      id="occupation"
                      autoComplete="organization"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-black border-2 shadow-sm focus-visible:outline focus-visible:outline-2 border-gradient focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                >
                  Let's talk
                </button>
              </div>
            </form>

            {success && <p className="text-green-500 mt-4">{success}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>

          {/* <div className="lg:w-1/2 w-full lg:px-8 px-0">
            <div className="mx-auto lg:max-w-4xl sm:inline-block hidden">
              <img
                src="https://i.postimg.cc/sxSrT6xx/Untitled-design.png"
                alt="Contact"
              />
            </div>
          </div> */}
          <div className="lg:w-1/2 w-full  px-0 sm:mb-20 mb-0 sm:shadow-md sm:border-2  border-0 shadow-md ">
            <img
              src={image4}
              alt="Contact Us"
              className=" my-10  lg:my-0 lg:rounded-none rounded-xl w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
