import React from 'react';
import Navigation from '../components/nav';

const Projects = () => {
  return (
    <div className=" bg-gradient-to-tl from-black via-zinc-800 to-black">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <h1 className="p-4 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
            COMING SOON!
        </h1>
      </div>
    </div>
  );
};

export default Projects;