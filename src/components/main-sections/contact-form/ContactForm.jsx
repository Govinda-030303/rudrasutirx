import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name.trim();
    const email = data.email.trim();
    const userMessage = data.message.trim();

    const message = `Name: ${name}\nEmail: ${email}\nMessage: ${userMessage}`;
    const encodedMessage = encodeURIComponent(message);

    const hiddenPhoneNumber = "917597329559"; // Replace with your WhatsApp number (country code included)
    const whatsappURL = `https://wa.me/${hiddenPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    reset();
  };

  return (
    <section className="py-16 px-6 md:px-20 text-white" id="contact-form">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Get in Touch via WhatsApp
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

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Query</label>
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
              <p className="text-red-400 text-sm mt-1">Query is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
