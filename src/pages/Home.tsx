import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Img from "../../public/cairo.jpeg";

function Home({ sectionRefs }: { sectionRefs: any }) {
  const targetNumber = 100;
  const [currentNumber, setCurrentNumber] = useState(0);
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
    1: useScrollFadeIn("down", 2, 0),
    2: useScrollFadeIn("down", 2, 0),
    3: useScrollFadeIn("up", 1, 0),
    4: useScrollFadeIn("up", 1, 0),
    5: useScrollFadeIn("up", 1, 0),
    6: useScrollFadeIn("up", 1, 0),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [currentNumber, targetNumber]);

  return (
    <main className=" font-[Lilita] ">
      <div ref={sectionRefs[0]}>
        <div className="max-w-screen-lg mt-12 mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex max-md:flex-col ">
            <div className=" h-auto m-16">
              <h1 className=" animate-down  leading-[4rem]  text-6xl p-5 font w-auto  m-4 font-extrabold text-gray-900  ">
                Welcome to our NFT
              </h1>
              <h1 className="animate-down  text-6xl p-5 m-4 leading-9 font-extrabold text-gray-900  sm:leading-10">
                Welcome to
              </h1>
              <h1 className="animate-down  text-6xl p-5 m-4 leading-9 font-extrabold text-gray-900  sm:leading-10">
                Welcome
              </h1>
            </div>
            <div className=" animate-wiggle m-16 max-md:mt-4 ">
              <img src={Img} alt="logo" className=" w-96 h-96" />
            </div>
          </div>

          <div className=" flex items-center justify-center mx-auto">
            <h1 className="m-4 text-4xl">발행 개수: </h1>
            <h1 className="m-4 text-4xl"> {currentNumber} 개</h1>
          </div>

          <div className=" max-md:mt-4">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Our Promise
              </h2>
            </div>
            <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              consequat metus vitae enim accumsan, sed congue sapien ultrices.
              Mauris nec ante ante. Maecenas scelerisque, tellus vel fermentum
              eleifend, nisl mi bibendum felis, sed posuere magna nibh at urna.
            </p>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[1]} className="bg-gray-50">
        <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className=" text-center">
            <p className="mt-2 m-auto text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              NFT Story
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="h-[800px] p-20" {...animatedItem[0]}>
            <img src={Img} className="h-[600px]" alt="logo" />
          </div>
          <div className="h-[800px] p-20" {...animatedItem[1]}>
            <img src={Img} className="h-[600px]" alt="logo" />
          </div>
          <div className="h-[800px] p-20" {...animatedItem[2]}>
            <img src={Img} className="h-[600px]" alt="logo" />
          </div>

          <div className="mt-5">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 9l2 2m0 0l7 7 7-7m-7 7V3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Competitive exchange rates
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa libero labore natus.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[2]} className="bg-gray-50">
        <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              RoadMap
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <div className="flex ">
            <div className="mr-8 h-100 w-3 bg-gray-300 relative">
              <div className="h-full w-full bg-blue-500 absolute top-0 left-0 animate-fill"></div>
            </div>

            <div className="mt-10">
              <div className="text-black">
                <h1>Phase 1</h1>
                <h1>Phase 1 Description</h1>
                <div>
                  Phase 1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase
                  1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  Description
                </div>
              </div>
              <div className="text-black">
                <h1>Phase 1</h1>
                <h1>Phase 1 Description</h1>
                <div>
                  Phase 1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase
                  1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  Description
                </div>
              </div>
              <div className="text-black">
                <h1>Phase 1</h1>
                <h1>Phase 1 Description</h1>
                <div>
                  Phase 1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase
                  1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  Description
                </div>
              </div>
              <div className="text-black">
                <h1>Phase 1</h1>
                <h1>Phase 1 Description</h1>
                <div>
                  Phase 1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase
                  1 DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  DescriptionPhase 1 DescriptionPhase 1 DescriptionPhase 1
                  Description
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[3]} className="bg-gray-50">
        <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet our team
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex max-md:flex-col justify-center items-center ml-4">
              <div className="m-14 flex-col">
                <img src={Img} className="w-[300px] h-[300px]" alt="logo" />
                <h1 className=" text-2xl text-black ">Name</h1>
              </div>
              <div className="m-14">
                <img src={Img} className="w-[300px] h-[300px]" alt="logo" />
              </div>
              <div className="m-14">
                <img src={Img} className="w-[300px] h-[300px]" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[4]}>
        <About />
      </div>
    </main>
  );
}

export default Home;
