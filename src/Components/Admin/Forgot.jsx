import React, { useState } from "react";
import { motion } from "framer-motion";

function Forgot() {
  const Template = ({ purpose, placeholder, condition }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 2, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <div>
          <form className="grid gap-4 mt-3">
            <input
              type="text"
              placeholder={`${placeholder}`}
              className="border rounded-lg border-gray-400 p-2 focus:outline-none"
              name=""
              id=""
              required
            />
          </form>
          {condition ? (
            <button
              onClick={changeStat}
              className="bg-golden mt-3 text-white w-full p-3 rounded-lg hover:bg-violet-400 font-semibold focus:outline-none"
            >
              {purpose}
            </button>
          ) : (
            <button
              onClick={Alert}
              className="bg-golden mt-3 text-white w-full p-3 rounded-lg hover:bg-violet-400 font-semibold focus:outline-none"
            >
              {purpose}
            </button>
          )}
        </div>
      </motion.div>
    );
  };

  const [username, setUsername] = useState(true);

  const changeStat = () => {
    setUsername(!username);
  };

  const Alert = () => {
    alert("Success", "Password Successfully Changed!", "success");
    setTimeout(() => {
      window.location = "/access/admin";
    }, 3000);
  };

  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12 h-screen items-center justify-center">
      <h3 className="font-semibold text-violet-500 text-2xl mb-4">Forgot Password</h3>

      <div className="w-full max-w-sm">
        {username ? (
          <Template purpose="Submit OTP" placeholder="Submit OTP" condition={true} />
        ) : (
          <>
            <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 2, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <div>
          <form className="grid gap-4 mt-3">
            <input
              type="text"
              placeholder="New Password..."
              className="border rounded-lg border-gray-400 p-2 focus:outline-none"
              name=""
              id=""
              required
            />
            <input
              type="text"
              placeholder="Confirm Password..."
              className="border rounded-lg border-gray-400 p-2 focus:outline-none"
              name=""
              id=""
              required
            />
          </form>
            <button
              onClick={Alert}
              className="bg-golden mt-3 text-white w-full p-3 rounded-lg hover:bg-violet-400 font-semibold focus:outline-none"
            >
              Change Password
            </button>
        </div>
      </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export default Forgot;
