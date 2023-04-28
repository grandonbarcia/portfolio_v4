import Image from 'next/image';
import myPic from '../assets/headshot.PNG';
import myPic2 from '../assets/backshot.jpg';
import myPic3 from '../assets/browser.jpg';

export default function Home() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-2xl font-semibold">brandonGarcia</h1>
        <ul className="flex items-center">
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="px-5 md:px-10 lg:px-20">
        <section className="my-auto mx-auto mb-8 sm:grid lg:flex">
          <div className=" w-full">
            <div className="sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 ">
              <Image
                className="shadow-lg rounded-2xl"
                src={myPic}
                alt="headshot"
              ></Image>
            </div>
          </div>
          <div className="text-center lg:ml-5 lg:grid lg:grid-cols-1 lg:gap-4 lg:text-left">
            <p className="text-xl sm:mb-5">currently looking for work</p>
            <div>
              <h1 className="text-7xl font-extrabold">Brandon</h1>
              <h1 className="text-7xl font-extrabold">Garcia</h1>
            </div>
            <p className="text-xl lg:w-5/6">
              Ambitious software developer specializing in Front-End
              technologies. Passionate about tech, learning new things, and
              growing as a developer.
            </p>
          </div>
        </section>
        <section className="flex my-auto mx-auto mb-8">
          <div className="my-auto mx-auto">
            <h1 className="text-5xl font-extrabold pb-3">About Me</h1>
            <p className="text-xl pb-5">
              Front-end web developer with an interest in React, NextJS, and
              Tailwind. Creating web apps has always fascinated me, that's why I
              decided to turn this interest into a career. Despite acquiring
              considerable knowledge, I do not take it for granted. I constantly
              try to develop, which allows me to level up my code and create
              more dynamic projects.
            </p>
            <p className="text-xl pb-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-xl">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              className="rounded-2xl shadow-lg "
              src={myPic2}
              height={400}
              width={400}
              alt="headshot"
            ></Image>
          </div>
        </section>
        <section className="mb-10 my-auto mx-auto lg:flex ">
          <div className="mb-5 shadow-2xl">
            <Image className="rounded" alt="myPic3" src={myPic3}></Image>
          </div>
          <div className="ml-5 grid grid-cols-1 gap-4">
            <div>
              <h1 className="text-5xl font-extrabold pb-3">Project #1</h1>
              <p className="text-lg ">Tech Stack: Next.JS, Tailwind, Heroku</p>
            </div>
            <p className="text-xl pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View the Site
                </span>
              </a>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="mb-10 my-auto mx-auto lg:flex">
          <div className="mb-5 shadow-2xl">
            <Image className="rounded" alt="myPic3" src={myPic3}></Image>
          </div>
          <div className="ml-5  grid grid-cols-1 gap-4">
            <h1 className="text-5xl font-extrabold">Project #2</h1>
            <p className="text-lg">Tech Stack: Next.JS, Tailwind, Heroku</p>
            <p className="text-xl pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View the Site
                </span>
              </a>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="mb-10 my-auto mx-auto lg:flex ">
          <div className="mb-5 rounded shadow-2xl">
            <Image className=" rounded " alt="myPic3" src={myPic3}></Image>
          </div>
          <div className="ml-5 grid grid-cols-1 gap-4">
            <div>
              <h1 className="text-5xl font-extrabold pb-3">Project #3</h1>
              <p className="text-lg">Tech Stack: Next.JS, Tailwind, Heroku</p>
            </div>
            <p className="text-xl pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View the Site
                </span>
              </a>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
