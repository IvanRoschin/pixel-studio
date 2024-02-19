"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mail@pixel-studio.com.ua?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div
      className="
      h-screen 
    flex
    flex-col
    relative
    text-center
    md:text-left
    md:flex-row
    max-w-7xl
    px-10
    justify-evenly
    mx-auto
    items-center
    overlfow-hidden"
    >
      {" "}
      <h3
        className="
        absolute
        top-24
        uppercase
        tracking-[20px]
        text-gray-500
        text-2xl
        hover:text-[#F7AB0A]/50
        "
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-10 pt-[120px]">
        <h4 className="text-4xl font-semibold text-center">
          We have got just what you need{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let`s talk</span>
        </h4>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Email must be correctly",
                },
              })}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
           <div className="flex items-center justify-center pt-5">
          <Button type="submit" label="Submit" />
        </div>
          {/* <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:scale-105 transition"
            type="submit"
          >
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
