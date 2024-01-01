import React, { useContext } from "react";
import { aboutMe, contactLinks, personalInfo } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode ? "bg-gray-100 pt-24 md:h-screen" : "bg-black pt-24 text-white md:h-screen"
      }>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">Contact</h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">Connect with me</h4>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">          
          <div className="w-full flex mt-12 md:mt-6 flex-wrap gap-10 justify-evenly">
            {personalInfo.map(({ title, val }, index) => (
              <div key={index} className="flex flex-col w-full md:w-max mt-12 md:mt-6 ">
                <h1 className="text-3xl font-bold">{title}</h1>
                <a href="hello" className="mb-12 mt-4 font-semibold text-blue-700 block">
                  {val}
                </a>
              </div>
            ))}

            <div className="flex flex-col w-full md:w-max">
              <h1 className="text-3xl  font-bold">Social</h1>
              <div className="flex gap-2">
                {contactLinks.map((el) => (
                  <div className="flex w-12">
                    <a
                      href={el.link}
                      className="cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center">
                      <img alt="" src={el.url} className="w-full" />
                      {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }>
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by {aboutMe.name}
      </div>
    </div>
  );
};

export default Contact;
