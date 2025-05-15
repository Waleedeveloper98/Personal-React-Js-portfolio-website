import React, { useState } from "react";
import Heading from "../components/Heading";
import ColoredButton from "../components/ColoredButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";
gsap.registerPlugin(ScrollTrigger);

const Form = ({ fullWidth, centered }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data, event) => {
    const formData = new FormData(event.target);
    formData.append("access_key", "fe945987-65e2-4a96-ba68-190ae8c098ed");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        reset();
      } else {
        console.error("Error from Web3Forms:", responseData);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useGSAP(() => {
    gsap.from("#form-container", {
      opacity: 0,
      scale: 0.75,
      duration: 1,
      scrollTrigger: {
        trigger: "#form",
        start: "top 80%",
        end: "top 25%",
        scrub: true,
      },
    });
  }, {});

  return (
    <div id="form" className="w-full pb-24">
      <Heading first={"Contact"} second={"Me"} />
      <div
        id="form-container"
        className="form-border relative w-full sm:max-w-[500px] sm:mx-auto sm:rounded-lg lg:min-w-[536px] p-[2px] py bg-[linear-gradient(to_right,_#007BFF_0%,_#007BFF_85%,_#00F9A6_100%)] rounded-sm"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full pt-6 pb-10 p-4 flex flex-col gap-5 h-full bg-white rounded-sm sm:rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <label className="font-[poppins] sm:text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="bg-gray-100 shadow-sm px-2 py-2 border border-gray-300 outline-none rounded-sm font-[roboto] sm:text-lg sm:rounded-lg sm:p-3"
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
            />
            {errors.name && (
              <p className="font-[roboto] text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-[poppins] sm:text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-100 shadow-sm  px-2 py-2 border border-gray-300 outline-none rounded-sm font-[roboto] sm:text-lg sm:rounded-lg sm:p-3"
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="font-[roboto] text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-[poppins] sm:text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-gray-100 shadow-sm  px-2 py-2 border border-gray-300 outline-none rounded-sm font-[roboto] min-h-36 resize-none sm:p-3 sm:text-lg sm:rounded-lg hide-scrollbar"
              id="message"
              placeholder="message"
              name="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
            ></textarea>
            {errors.message && (
              <p className="font-[roboto] text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            className={`colored-btn w-full sm:w-fit sm:px-8 h-11 bg-[linear-gradient(to_right,_#007BFF_0%,_#007BFF_85%,_#00F9A6_100%)] rounded-sm text-lg font-medium text-white ${
              fullWidth && "sm:w-full"
            } ${
              centered && "sm:mx-auto sm:px-10 "
            } lg:rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 mx-auto flex items-center justify-center gap-1`}
            disabled={isSubmitting}
            type="submit" 
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
            ) : (
              "Submit"
            )}
            {isSubmitting ? "Submitting" : ""}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
