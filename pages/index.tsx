import styles from "@/styles/Home.module.css";
import axios from "axios";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Brandon Howard&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-122 flex justify-between ">
            <h1 className="text-2xl text-gray-800 dark:text-gray-200">
              <a href="index">Brandon Howard</a>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl dark:text-gray-200"
                />
              </li>
              <li>
                <a
                  href="resume"
                  className="bg-gradient-to-r from-emerald-green to-peacock-blue px-4 py-2 border-none rounded-md ml-8 text-xl text-black"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-peacock-blue font-medium md:text-6xl dark:text-emerald-green">
              Brandon Howard
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200 text-gray-800">
              Student and Future IT Professional
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-200">
              Current student learning the ropes to IT. Look below at some of my
              projects and ramblings.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="basis-1/3 flex-1 rounded-2xl text-center shadow-lg p-10 transition ease-in-out delay-30 bg-peacock-blue hover:-translate-y-1 hover:scale-110 hover:bg-emerald-green duration-300"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
