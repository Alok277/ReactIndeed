import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button type="submit" className="border border-black p-2 m-2 bg-gray-300 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
