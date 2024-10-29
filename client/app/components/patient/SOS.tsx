import React from "react";

export default function SOS() {
  return (
    <div>
      <form action="https://api.web3forms.com/submit" method="POST" id="form">
        <input
          type="hidden"
          name="access_key"
          value="7f8564e4-0978-4dc7-924b-211256a7ca44"
        />
        <input
          type="hidden"
          name="subject"
          value="ALERT!! Patient Incoming"
        />
        <div className="flex place-content-center place-items-center w-full">
          <input
            placeholder="Full Name"
            type="text"
            name="name"
            id="name"
            value="Vinayak Srivastava"
            className="hidden"
            required
          />
          <input
            placeholder="Phone Number"
            type="text"
            name="phone"
            id="phone"
            value="9910393289"
            className="hidden"
            required
          />
        </div>
        <input
          placeholder="Message"
          name="message"
          id="message"
          value="ALERT!! Patient Incoming"
          className="hidden"
          required
        />
        <input
          placeholder="ABHA ID:"
          name="ABHA ID:"
          id="abha"
          value="91224440082317"
          className="hidden"
          required
        />
        <button
          type="submit"
          className="h-40 w-40 rounded-full border-4 border-rose-400 bg-rose-500 shadow-[rgba(0,0,0,0.6)_6px_5px_2px_1px] hover:shadow-none transition-all duration-200 hover:translate-y-1 hover:bg-rose-600"
        >
          <span className="text-4xl text-white font-bold">SOS</span>
        </button>
      </form>
    </div>
  );
}
