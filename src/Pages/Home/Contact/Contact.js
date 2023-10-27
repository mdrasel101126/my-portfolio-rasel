import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMobile, FaInbox } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7n5wtlq",
        "template_k6n6b2f",
        form.current,
        "8uo35zCGIlGn8QL6g"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Email Send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry Something Went Wrong");
        }
      );
  };
  return (
    <div id="contact-me" className="my-8">
      <h1 className="text-4xl font-bold text-primary text-center">
        Contact Me
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Please contact me without any hegitation
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto  bg-slate-900 text-white py-8 px-4 rounded-xl ">
        <div className="flex flex-col justify-center">
          <div className="">
            <div className="flex flex-row items-center">
              <GoLocation className="text-xl mr-2"></GoLocation>
              <p>Sylhet,Bangladesh</p>
            </div>
            <div className="flex flex-row items-center">
              <FaMobile className="text-xl mr-2"></FaMobile>
              <p>+8801798686728</p>
            </div>
            <div className="flex flex-row items-center">
              <FaInbox className="text-xl w-[16px] mr-2"></FaInbox>
              <p>rasel.miah101126@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-primary text-2xl font-bold mb-4">Send Message</h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter Name"
              className="input input-bordered w-full text-black max-w-xs"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter Email"
              className="input text-black input-bordered w-full max-w-xs"
              required
            />
            <textarea
              name="message"
              className="textarea text-black textarea-bordered w-full max-w-xs"
              placeholder="Write Message"
              required
            ></textarea>
            <input
              type="submit"
              className="btn btn-primary text-white font-bold w-full max-w-xs"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
