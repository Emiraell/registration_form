import React from "react";
import { Iprops } from "./AgeGender";

export default function Names({ register, errors }: Iprops) {
  return (
    <>
      <div className="relative">
        <label htmlFor="surname">
          Surname <span className="required">&#42;</span>
        </label>
        <input
          // useform register to register this input feild
          {...register("surname")}
          type="text"
          id="surname"
          className="nameInput"
          placeholder="Joseph"
        />
        <p className="error">{errors.surname?.message}</p>
      </div>

      <div className="md:flex gap-4 py-4">
        <div className="relative">
          <label htmlFor="firstname">
            First name
            <span className="required">&#42;</span>
          </label>
          <input
            // useform register to register this input feild
            {...register("firstname")}
            type="text"
            id="firstname"
            className="nameInput"
            placeholder="Chijioke"
          />
          <p className="error">{errors.firstname?.message}</p>
        </div>

        <div className="relative pt-3 md:pt-0">
          <label htmlFor="middle">Middle name</label>
          <input
            // useform register to register this input feild
            {...register("middle")}
            type="text"
            id="middle"
            className="nameInput"
            placeholder="Banjoko"
          />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="email">
          Email / phone number
          <span className="required">&#42;</span>
        </label>
        <input
          // useform register to register this input feild
          {...register("email")}
          type="text"
          id="email"
          className="nameInput"
          placeholder="ayflafia@gmail.com"
        />
        <p className="error">{errors.email?.message}</p>
      </div>
    </>
  );
}
