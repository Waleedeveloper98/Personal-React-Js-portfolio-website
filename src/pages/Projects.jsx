import React, { useRef } from "react";
import Heading from "../components/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GithubIcon from "../components/GithubIcon";
import ExternalLink from "../components/ExternalLink";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();
  useGSAP(
    () => {
      gsap.from(".grid-item", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 90%",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      id="projects"
      className="w-full min-h-screen pb-20 sm:pb-24 sm:min-h-fit"
    >
      <Heading first={"My"} second={"Projects"} />
      <div className="grid grid-cols-1 grid-rows-6 gap-4 sm:grid-cols-9 sm:grid-rows-3 sm:gap-3 lg:pt-10">
        <div className="group grid-item relative bg-blue-800 sm:col-span-6 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="1.png"
            alt=""
            loading="lazy"
          />
          <div className="overlay absolute inset-0 bg-black/40 w-full h-full opacity-0 group-hover:opacity-100 transition-transform duration-500 flex items-end justify-end gap-10 p-4 px-6">
            <GithubIcon githubLink={"https://github.com/Waleedeveloper98/crypto_trackterr"}/>
            <ExternalLink liveLink={"https://cryptotrackterr.vercel.app/"}/>
          </div>
        </div>
        <div className="group grid-item relative bg-blue-700 sm:col-span-3 sm:row-span-2 sm:col-start-7 h-48 lg:min-h-72 sm:h-auto rounded-sm lg:rounded-xl overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            src="2.png"
            alt=""
            loading="lazy"
          />
          <div className="overlay absolute inset-0 bg-black/40 w-full h-full opacity-0 group-hover:opacity-100 transition-transform duration-500 flex items-end justify-end gap-10 p-4 px-6">
            <GithubIcon githubLink={"https://github.com/Waleedeveloper98/Kismic.ai-Clone"}/>
            <ExternalLink liveLink={"https://waleedeveloper98.github.io/Kismic.ai-Clone/"}/>
          </div>
        </div>
        <div className="group grid-item relative bg-blue-600 sm:col-span-3 sm:row-start-2 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="3.png"
            alt=""
            loading="lazy"
          />
          <div className="overlay absolute inset-0 bg-black/40 w-full h-full opacity-0 group-hover:opacity-100 transition-transform duration-500 flex items-end justify-end gap-10 p-4 px-6">
            <GithubIcon githubLink={"https://github.com/Waleedeveloper98/React-js-project-1"}/>
            <ExternalLink liveLink={"https://react-js-project-1-tau.vercel.app/"}/>
          </div>
        </div>
        <div className="group grid-item relative bg-blue-400 sm:col-span-3 sm:col-start-4 sm:row-start-2 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="4.png"
            alt=""
            loading="lazy"
          />
          <div className="overlay absolute inset-0 bg-black/40 w-full h-full opacity-0 group-hover:opacity-100 transition-transform duration-500 flex items-end justify-end gap-10 p-4 px-6">
            <GithubIcon githubLink={"https://github.com/Waleedeveloper98/Obys-redesign"}/>
            <ExternalLink liveLink={"https://waleedeveloper98.github.io/Obys-redesign/"}/>
          </div>
        </div>
        <div className="group grid-item relative bg-blue-300 sm:col-span-4 sm:row-start-3 w-full h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="5.png"
            alt=""
            loading="lazy"
          />
          <div className="overlay absolute inset-0 bg-black/40 w-full h-full opacity-0 group-hover:opacity-100 transition-transform duration-500 flex items-end justify-end gap-10 p-4 px-6">
            <GithubIcon githubLink={"https://github.com/Waleedeveloper98/sundown-website"}/>
            <ExternalLink liveLink={"https://waleedeveloper98.github.io/sundown-website/"}/>
          </div>
        </div>
        <div className="group grid-item relative bg-blue-200 sm:col-span-5 sm:col-start-5 sm:row-start-3 w-full h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="6.png"
            alt=""
            loading="lazy"
          />
          <div className="overlay absolute inset-0 bg-black/40 w-full h-full opacity-0 group-hover:opacity-100 transition-transform duration-500 flex items-end justify-end gap-10 p-4 px-6">
            <GithubIcon githubLink={"https://github.com/Waleedeveloper98/Topview.ai-Clone"}/>
            <ExternalLink liveLink={"https://waleedeveloper98.github.io/Topview.ai-Clone/"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
