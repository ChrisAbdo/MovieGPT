import Image from 'next/image';
import React from 'react';

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="rounded-lg"
            src="/movie.png"
            width={500}
            height={500}
            alt="movie"
          />
          <div>
            <div className="h1 mb-4">
              <div className="flex font-bold rounded-full bg-white border-[2px] border-black p-4 w-fit h-12 text-center items-center justify-center mx-auto">
                500+ Curated Movie Lists Generated
              </div>
            </div>
            <h1 className="body text-6xl font-bold max-w-md">
              Find the perfect movie for you!
            </h1>
            <p className="h1 py-6 max-w-md text-2xl">
              MovieGPT is a movie finder that uses GPT-3 to generate a list of
              movies that match your prompt.
            </p>

            {/* 2 buttons next to each other */}
            <div className="flex flex-row">
              <a
                href="/generate-movie"
                className="relative inline-block text-lg group mr-6"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black  transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#a66eff]"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative ">Go to App</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
              <a
                href="https://beta.openai.com/docs/introduction"
                rel="noreferrer"
                target="_blank"
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Learn More</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>

            <h1 className="body text-2xl font-bold max-w-md pt-6">
              Powered by OpenAI's GPT-3 and developed by Chris Abdo
            </h1>
          </div>
        </div>
      </div>

      {/* create a */}
    </div>
  );
};

export default index;
