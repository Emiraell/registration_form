import React from "react";

export default function Names() {
  return (
    <>
      <div className="relative">
        <label htmlFor="surname">
          Surname <span className="text-red-500 text-sm font-bold">&#42;</span>
        </label>
        <input
          type="text"
          id="surname"
          className="bg-gray-100 outline-none rounded py-2 px-3 w-full"
          placeholder="Joseph"
        />
        <p className="text-red-600 absolute top-2 right-4 text-xs">error</p>
      </div>

      <div className="md:flex gap-4 py-4">
        <div className="relative">
          <label htmlFor="firstname">
            First name
            <span className="text-red-500 text-sm font-bold">&#42;</span>
          </label>
          <input
            type="text"
            id="firstname"
            className="bg-gray-100 outline-none rounded py-2 px-3 w-full"
            placeholder="Chijioke"
          />
          <p className="text-red-600 absolute top-2 right-4 text-xs">error</p>
        </div>

        <div className="relative pt-3 md:pt-0">
          <label htmlFor="middle">Middle name</label>
          <input
            type="text"
            id="middle"
            className="bg-gray-100 outline-none rounded py-1 px-2 w-full"
            placeholder="Banjoko"
          />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="email">
          Email / phone number
          <span className="text-red-500 text-sm font-bold">&#42;</span>
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-100 outline-none rounded py-2 px-3 w-full"
          placeholder="ayflafia@gmail.com"
        />
        <p className="text-red-600 absolute top-2 right-4 text-xs">error</p>
      </div>
    </>
  );
}
