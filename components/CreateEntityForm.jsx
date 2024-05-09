import React, { useState } from "react";
import axios from "axios";

const CreateEntityForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://vahan-cms-backend.onrender.com/entity`, {
        attributes: {
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          dateOfBirth: formData.dateOfBirth,
        },
      });
      // Optionally, you can redirect or show a success message upon successful submission
      alert("Entity created successfully!");
    } catch (error) {
      console.error("Error creating entity:", error);
      // Optionally, you can show an error message to the user
      alert("Error creating entity. Please try again.");
    }
  };
  return (
    <div className="container w-fulls">
      <h1 className="text-3xl font-bold text-center my-2">Create Entity</h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="mobile Number"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Enter your mobile number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="dateOfBirth"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date of Birth:
              </label>
              <input
                rows="4"
                name="dateOfBirth"
                id="dateOfBirth"
                type="date"
                placeholder="Type your date of birth"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-blue-800 py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEntityForm;
