import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row min-h-screen p-4 md:px-32 bg-slate-100">
      <div className="md:w-1/2 p-4 bg-white rounded-xl text-black">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2"
              placeholder="Your Phone"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Your Message"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded px-4 py-2"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="md:w-1/2 p-4 bg-white rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Help & Documentation</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Green Carbon Solutions help and documentation section.
          Here, you&apos;ll find answers to frequently asked questions and
          detailed guides on how to use our services.
        </p>
        <p className="text-gray-700 mb-4">
          If you need further assistance, please don&apos;t hesitate to reach
          out to our support team through the contact form. We&apos;re here to
          help you with any issues or questions you may have.
        </p>
        <p className="text-gray-700">
          You can also visit our{" "}
          <a href="/faq" className="text-green-600 underline">
            FAQ
          </a>{" "}
          page for more information.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
