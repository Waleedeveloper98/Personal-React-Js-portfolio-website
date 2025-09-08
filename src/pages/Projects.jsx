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
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray(".grid-item");

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(elems, { opacity: 0, scale: 0.5 });
        gsap.to(elems, {
          opacity: 1,
          scale: 1,
          stagger: 0.18,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 90%",
            scrub: true,
          },
        });
      });
      mm.add("(max-width: 767px)", () => {
        gsap.set(elems, { opacity: 0, scale: 0.8 });
        gsap.to(elems, {
          opacity: 1,
          scale: 1,
          stagger: 0.18,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 90%",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="projects"
      className="w-full min-h-screen pb-20 sm:pb-24 sm:min-h-fit"
    >
      <Heading first={"My"} second={"Projects"} />
      <div className="grid grid-cols-1 grid-rows-6 gap-4 sm:grid-cols-9 sm:grid-rows-3 sm:gap-3 lg:pt-10">
        <div className="group grid-item relative sm:col-span-6 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="one.webp"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={"https://github.com/Waleedeveloper98/Freelancer-Dashboard"}
            />
            <ExternalLink liveLink={"https://freelancer-dashboard-tau.vercel.app/"} />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        <div className="group grid-item relative sm:col-span-3 sm:row-span-2 sm:col-start-7 h-48 lg:min-h-72 sm:h-auto rounded-sm lg:rounded-xl overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover  object-left group-hover:scale-105 transition-transform duration-300"
            src="two.webp"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={"https://github.com/Waleedeveloper98/React-Invoice-Generator"}
            />
            <ExternalLink
              liveLink={"https://react-invoice-generator-iota.vercel.app/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        <div className="group grid-item relative sm:col-span-3 sm:row-start-2 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 object-left"
            src="three.webp"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={
                "https://github.com/Waleedeveloper98/Bus-Route-Finder"
              }
            />
            <ExternalLink liveLink={"https://bus-route-finder.vercel.app/"} />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        <div className="group grid-item relative sm:col-span-3 sm:col-start-4 sm:row-start-2 h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="four.webp"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={"https://github.com/Waleedeveloper98/RecipeHub"}
            />
            <ExternalLink
              liveLink={"https://recipe-hub-drab.vercel.app/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
        <div className="group grid-item relative sm:col-span-4 sm:row-start-3 w-full h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="five.webp"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={
                "https://github.com/Waleedeveloper98/Job-Application-Tracker"
              }
            />
            <ExternalLink
              liveLink={
                "https://job-application-tracker-bice-seven.vercel.app/"
              }
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-fullt ransition-transform duration-500"></div>
        </div>
        <div className="group grid-item relative sm:col-span-5 sm:col-start-5 sm:row-start-3 w-full h-48 sm:h-56 rounded-sm lg:rounded-xl lg:h-72 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="six.webp"
            alt=""
            loading="lazy"
          />
          <div className="icons-holder inset-0 absolute w-full h-full flex items-end justify-end p-4 px-6 gap-10 z-30">
            <GithubIcon
              githubLink={
                "https://github.com/Waleedeveloper98/Quran-explorer"
              }
            />
            <ExternalLink
              liveLink={"https://quran-explorer.vercel.app/"}
            />
          </div>
          <div className="overlay absolute inset-0 bg-black/30 w-full h-full transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
