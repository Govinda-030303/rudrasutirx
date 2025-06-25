import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [phone, setPhone] = useState("");

  // const onSubmit = (data) => {
  //   console.log({ ...data, phone });
  //   alert("Message sent successfully!");
  //   reset();
  //   setPhone("");
  // };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", phone);
    formData.append("message", data.message);
  
    try {
      const response = await fetch("https://getform.io/f/bejlzmqa", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        reset();
        setPhone("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <section className=" py-16 px-6 md:px-20 text-white" id="contact-form">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          Get in Touch
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 bg-[#2C1A3A] p-8 rounded-xl shadow-lg"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className={classNames(
                "w-full px-4 py-3 rounded-lg bg-[#3A2551] text-white outline-none focus:ring-2 focus:ring-purple-500",
                { "border border-red-500": errors.name }
              )}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={classNames(
                "w-full px-4 py-3 rounded-lg bg-[#3A2551] text-white outline-none focus:ring-2 focus:ring-purple-500",
                { "border border-red-500": errors.email }
              )}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Phone</label>
            <PhoneInput
              value={phone}
              onChange={setPhone}
              defaultCountry="IN"
              className="react-phone-input"
              inputStyle={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#3A2551",
                borderRadius: "0.5rem",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              {...register("message", { required: true })}
              className={classNames(
                "w-full px-4 py-3 rounded-lg bg-[#3A2551] text-white outline-none focus:ring-2 focus:ring-purple-500",
                { "border border-red-500": errors.message }
              )}
              placeholder="How can we help you?"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">Message is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
