import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import InfoCard from "../components/contributors/InfoCard";
import Header from "../components/Header";
import PageHead from "../components/PageHead";
import { getContributors } from "../lib/api";

export default function Home(props) {
  return (
    <div className="bg-gray-900 min-h-screen">
      <PageHead />
      <div className="bg-gray-800 bg-opacity-50">
        <Header />
      </div>
      <section className="bg-gray-900 border-t border-gray-700 ">
        <div className="max-w-6xl mx-auto">
          <div className="border-gray-600 mx-4 xl:mx-0">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
              <div className="lg:col-span-8 space-y-20">
                <div className="pt-20">
                  <div className="mx-auto max-w-7xl">
                    <div className="space-y-12">
                      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-bold text-white tracking-tight sm:text-5xl">
                          What do we do?
                        </h2>
                        <p className="text-xl text-gray-300">
                          CoronaSafe Network is a free and open-source disaster
                          management system that is used by National Health
                          Mission, Government of India and various state
                          governments for reimaging digital war rooms. The
                          solution that students got an opportunity to intern
                          with has supported 3.34Lac patient management and 1.29
                          Lac ambulance shiftings and is approved by the United
                          Nations as a Digital Public Good.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mx-auto">
                    <div className="space-y-12">
                      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-bold text-white tracking-tight sm:text-5xl">
                          Our Contributors
                        </h2>
                        <p className="text-xl text-gray-300">
                          Ornare sagittis, suspendisse in hendrerit quis. Sed
                          dui aliquet lectus sit pretium egestas vel mattis
                          neque.
                        </p>
                      </div>
                      <ul
                        role="list"
                        className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8"
                      >
                        {props.contributors.map((contributor, index) => {
                          return (
                            <InfoCard
                              key={index}
                              contributor={contributor}
                              minimal={true}
                            />
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-0 pt-20">
                  <div className=" text-white rounded-lg bg-gray-800 bg-opacity-50 shadow-lg border border-gray-800">
                    <div className="flex justify-between items-end bg-gray-800 rounded-t-lg px-6 py-4 border-b border-gray-700 ">
                      <p className="text-xl font-medium">Leaderboard</p>
                      <span className="block text-gray-400">
                        18 - 24 May 2022
                      </span>
                    </div>
                    <div className="space-y-2 p-4 ">
                      {props.contributors
                        .filter((contributor) => !contributor.core)
                        .slice(0, 5)
                        .map((contributor, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/contributors/${contributor.github}`}
                            >
                              <span className="flex space-x-3 items-center cursor-pointer bg-gray-900 bg-opacity-75 px-2 py-3 rounded-lg hover:bg-opacity-30 transition">
                                <span className="flex items-center justify-center text-lg h-10 w-10 bg-gray-800 rounded-full">
                                  {index + 1}
                                </span>
                                <span className="text-lg font-medium text-gray-300">
                                  {contributor.name}
                                </span>
                              </span>
                            </Link>
                          );
                        })}

                      <div className="pt-2">
                        <Link
                          className="block px-10 p-3 text-center bg-gradient-to-b from-primary-500 to-primary-700 text-gray-900 border border-primary-500 font-bold rounded shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 hover:text-primary-500 transition"
                          href="/leaderboard"
                        >
                          View Leaderboard
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="">
        <div className="bg-gray-800 p-4 lg:p-10 border-t border-gray-700 h-full">
          <div className="max-w-5xl font-bold text-primary-500 text-center text-sm lg:leading-tight lg:mx-auto">
            <div className="flex items-center justify-center w-full">
              Powered by{" "}
              <span className={"w-20 ml-4"}>
                <img src="/logo.webp" alt="Coronasafe" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const contributors = getContributors();
  return {
    props: {
      contributors: contributors,
    },
  };
}
