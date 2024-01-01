import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { projects } from "../constants";


const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="projects" className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Projects&nbsp;/&nbsp;Works</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">What I Built</h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projects.map(({ img, title, desc, link, source }, index) => (
            <Card key={index} img={img} title={title} desc={desc} link={link} source={source} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
