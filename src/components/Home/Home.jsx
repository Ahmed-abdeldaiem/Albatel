import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AddCustomer from "../AddCustomer/AddCustomer";
import Branches from "../Branches/Branches";
import Goal from "../Goal/Goal";
import Manager from "../Manager/Manager";
import Message from "../Message/Message";
import Partners from "../Partners/Partners";
import ServiceDesc from "../ServiceDesc/ServiceDesc";
import Vision from "../Vision/Vision";
import style from "./Home.module.css";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const totalSlides = 3; // Number of slides

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    autoPlayRef.current = goToNextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 6000); // Adjust the interval for auto-moving
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* First Section Caresoul */}
      <div
        id="default-carousel"
        className="relative w-full h-[85vh] mt-16 overflow-hidden bg-slate-100"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative  w-full h-full flex items-center justify-center">
          {/* Slide 1 */}

          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === 0 ? "opacity-100" : "opacity-0"
            } bg-[url('/home1-1.jpg')] bg-cover bg-center`}
            data-carousel-item
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>

            {/* Content for Slide 1 */}
            <div className="relative z-20  flex flex-col items-center justify-center h-full">
              <div className="flex items-center justify-center flex-col md:flex-row-reverse">
                {/* <img
                  src="/logo3.png"
                  alt="logo image in slide 1"
                  className={` w-1/3 md:w-2/12 mt-2 transition-all duration-500  ${
                    currentIndex === 0 ?"transition-all duration-700 -translate-x-0 opacity-100": "-translate-x-80 opacity-0"  }  `}
                /> */}
                <img
                  src="/logo3.png"
                  alt="logo image in slide 1"
                  className={`w-1/3 md:w-2/12 mt-2 transition-all  ${
                    currentIndex === 0 ? "animate-moveIn" : ""
                  }`}
                />

                <div
                  className={`flex flex-col text-center  `}
                >
                  <h1 className="text-white text-xl lg:text-3xl font-semibold">
                    شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                  </h1>
                  <h1 className="text-white text-xl lg:text-2xl font-semibold">
                    Batal Abdullah Al-Batal & Partners for Professional
                    Consultations
                  </h1>
                </div>
              </div>

              <div className={`flex justify-center lg:justify-start  w-3/4 pt-9 ${
                    currentIndex === 0 ? "animate-moveIn2" : ""
                  }`} >
                <Link to={"about"}>
                  <button class="  px-7 py-2 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-full">
                    من نحن
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              currentIndex === 1 ? "opacity-100" : "opacity-0"
            } bg-[url('/home2-2.jpg')] ${style.fit}`}
            data-carousel-item
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>
            {/* Content for Slide 2 */}

            <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
              <h2 className={`text-white  text-2xl lg:text-3xl font-semibold md:text-start  my-10 ${
                    currentIndex === 1 ? "animate-moveIn2" : ""
                  }`}>
                خدماتنا
              </h2>
              <h3 className="text-white text-xl lg:text-2xl my-4">
                <span className="">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>{" "}
                خدمات استشارية مخصصة
              </h3>
              <h3 className="text-white text-xl lg:text-2xl my-4">
                <span className="">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>{" "}
                حلول شاملة لاحتياجات الشركات
              </h3>
              <h3 className="text-white text-xl lg:text-2xl my-4">
                <span className="">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>{" "}
                خدمات للافراد والشركات
              </h3>
              <h3 className="text-white text-xl lg:text-2xl my-4">
                <span className="">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>{" "}
                خدمات مالية ومحاسبية وضريبية في مختلف القطاعات الاقتصادية
              </h3>
              <Link className={`${
                    currentIndex === 1 ? "animate-moveIn2" : ""
                  }`} to={"services"}>
                <button class=" my-2 px-7 py-2 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-full">
                  خدماتنا
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              currentIndex === 2 ? "opacity-100" : "opacity-0"
            } bg-[url('/home3-3.jpg')] ${style.fit}`}
            data-carousel-item
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>
            {/* Content for Slide 3 */}
            <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
              <h2 className={`text-white  text-2xl lg:text-3xl font-semibold md:text-start  my-10 ${
                    currentIndex === 2 ? "animate-moveIn2" : ""
                  }`} >
                فريق العمل
              </h2>
              <h3 className="text-white text-xl lg:text-2xl my-4">
                <span className="">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>{" "}
                خبراء استشارات ادارية واقتصادية وترجمة
              </h3>
              <h3 className="text-white text-xl lg:text-2xl my-4">
                <span className="">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>{" "}
                خبراء استشارات ضريبية وزكوية
              </h3>
              <h3 className="text-white text-xl lg:text-2xl my-4">
                <span className="">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>{" "}
                خبراء استشارات قانونية
              </h3>

              <Link className={`${
                    currentIndex === 2 ? "animate-moveIn2" : ""
                  }`} to={"team"}>
                <button class=" my-2 px-7 py-2 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-full">
                  فريقنا
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute  z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className={`w-5 h-2 rounded-full ${
              currentIndex === 0 ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={currentIndex === 0}
            aria-label="Slide 1"
            onClick={() => setCurrentIndex(0)}
          />
          <button
            type="button"
            className={`w-5 h-2 rounded-full ${
              currentIndex === 1 ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={currentIndex === 1}
            aria-label="Slide 2"
            onClick={() => setCurrentIndex(1)}
          />
          <button
            type="button"
            className={`w-5 h-2 rounded-full ${
              currentIndex === 2 ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={currentIndex === 2}
            aria-label="Slide 3"
            onClick={() => setCurrentIndex(2)}
          />
        </div>

        {/* Slider controls */}

        <button
          type="button"
          className="absolute top-0 left-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:flex"
          data-carousel-prev
          onClick={goToNextSlide}
        >
          <span className="inline-flex border-2 border-transparent items-center justify-center w-10 h-10 transition-all duration-500 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 group-hover:border-white dark:group-hover:bg-gray-800/60">
            <svg
              className="w-4 h-4 text-white group-hover:text-gray-600 transition-all duration-500 dark:text-gray-800 rtl:rotate-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1L1 5l4 4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:flex"
          data-carousel-next
          onClick={goToPrevSlide}
        >
          <span className="inline-flex border-2 border-transparent items-center justify-center w-10 h-10 transition-all duration-500 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 group-hover:border-white dark:group-hover:bg-gray-800/60">
            <svg
              className="w-4 h-4 text-white group-hover:text-gray-600 transition-all duration-500 dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1L1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      </div>
      {/* second Section : Branches */}
      <Branches/>
       {/* 3th Section : our parteners */}

<Partners/>

{/* 4th section : company goal */}
<Goal/>
{/* 5th section : team  */}
<Manager/>
{/* 6th section : company vision */}
<Vision/>
     {/* 7th section : services  */}
<ServiceDesc/>
{/* 8th section : company message */}
<Message/>
     
     
    </>
  );
}
