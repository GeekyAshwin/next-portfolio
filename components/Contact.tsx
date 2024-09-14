import React from "react";
import { Button } from "./ui/MovingBorders";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        <span className="text-purple">Send Me a Message</span>
        <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 w-full">
              <form className="w-full">
                <div className="mb-5 w-full">
                  
                  <input
                    type="text"
                    placeholder="Your name"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                 
                  <input
                    type="text"
                    id="large-input"
                    placeholder="Your Email"
                    className="block mt-5 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  
                  <textarea
                    id="large-input"
                    placeholder="Message"
                    className="block mt-5 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <MagicButton
                    title="Send Message"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </div>
              </form>
            </div>
          </Button>
        </div>
      </h1>
    </div>
  );
};

export default Contact;
