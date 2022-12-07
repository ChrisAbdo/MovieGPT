import React from 'react';
import type { NextPage } from 'next';
import { useAnimation, motion } from 'framer-motion';

const Home: NextPage = () => {
  const [value, setValue] = React.useState<string>('');
  const [prompt, setPrompt] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [completion, setCompletion] = React.useState<string>('');
  const [results, setResults] = React.useState<string[]>([]);

  const handleInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const handleKeyDown = React.useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setPrompt(value);
        setLoading(true);
        const response = await fetch('/api/hello', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: value }),
        });
        const data = await response.json();
        setValue('');
        setLoading(false);
        setCompletion(data.result.choices[0].text);
        setResults(data.result.choices[0].text.split('\n'));
      }
    },
    [value]
  );

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="card flex-shrink-0 w-full  shadow-2xl  mt-4 border-[2px] border-black rounded-3xl">
              <h1 className="text-4xl font-bold body py-2">
                Enter a description and get a list of movies!
              </h1>
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Example: A comedy movie set in new york city"
                    className="h1 input border-[2px] border-black rounded-xl"
                    value={value}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                  />
                  {loading ? (
                    <h1 className="text-2xl font-bold body mt-4">
                      Finding movies related to: {prompt}
                    </h1>
                  ) : (
                    <h1 className="text-2xl font-bold body mt-4"></h1>
                  )}
                </div>

                <div className="form-control mt-6">
                  {/* <button
                    onClick={() => {
                      setPrompt(value);
                      setLoading(true);
                      fetch('/api/hello', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ text: value }),
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          setValue('');
                          setLoading(false);
                          setCompletion(data.result.choices[0].text);
                          setResults(data.result.choices[0].text.split('\n'));
                        });
                    }}
                    className="btn btn-primary"
                  >
                    Generate!
                  </button> */}
                  <div
                    onClick={() => {
                      setPrompt(value);
                      setLoading(true);
                      fetch('/api/hello', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ text: value }),
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          setValue('');
                          setLoading(false);
                          setCompletion(data.result.choices[0].text);
                          setResults(data.result.choices[0].text.split('\n'));
                        });
                    }}
                    className="h1 relative inline-block px-4 py-2 font-medium group cursor-pointer "
                  >
                    <span className="rounded-xl absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#f8dffa] border-black border-[2px] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="rounded-xl absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#f8dffa]"></span>
                    <span className="relative text-black group-hover:text-black font-semibold ">
                      Generate!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {results && results.length > 0 && (
              <div className="card flex-shrink-0 w-full  shadow-2xl  mt-4 space-y-4 border-[2px] border-black rounded-3xl">
                <div className="card-body">
                  <h1 className="text-2xl font-bold body ">
                    Here are some movies you might like:
                  </h1>

                  {results.map((result, index) => {
                    if (result === '') {
                      return null;
                    }
                    return (
                      <motion.div
                        key={index}
                        className="space-y-8 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="alert"
                        transition={{
                          duration: 0.5,
                          ease: 'easeInOut',
                          delay: index * 0.5,
                        }} // Add a delay based on the index
                      >
                        <div className="alert shadow-lg bg-[#f8dffa] space-y-8 border-[2px] border-black rounded-xl">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="stroke-black flex-shrink-0 w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <span className="h1 font-bold">{result}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
