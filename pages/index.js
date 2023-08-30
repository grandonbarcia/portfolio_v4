import Image from 'next/image';
import myPic from '../assets/headshot.PNG';
import myPic2 from '../assets/backshot.jpg';
import myPic3 from '../assets/browser.jpg';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { MdWavingHand } from 'react-icons/md';
import { Maps } from './components/Maps';

const COLOR = 'bg-slate-400';

export default function Home() {
  const dot = <div class="mt-2 ml-4 w-2 h-2 bg-slate-200 rounded-full"></div>;

  let board = Array(16)
    .fill(0)
    .map((row) => new Array(11).fill(dot));

  return (
    <main className="relative px-10 md:px-20 lg:px-40">
      <div className="absolute top-0 right-96">
        {board.map((dots, index) => {
          return (
            <ol className="flex">
              {dots.map((subDots, sIndex) => {
                return subDots;
              })}
            </ol>
          );
        })}
      </div>

      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-2xl font-bold">brandonGarcia</h1>
        <ul className="flex items-center">
          <li>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Resume
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="px-5 md:px-10 lg:px-20">
        <section className="my-auto mx-auto mt-32 mb-32 sm:grid lg:flex ">
          <div className="w-full h-full lg:w-1/4">
            <div className="m:aspect-w-4 sm:aspect-h-3 lg:aspect-w-1 lg:aspect-h-1 ">
              <Image
                className="object-cover shadow-lg rounded-2xl"
                src={myPic}
                alt="headshot"
              ></Image>
            </div>
          </div>
          <div className="text-center lg:ml-5 lg:grid lg:grid-cols-1 lg:gap-4 lg:text-left">
            <div className="flex ">
              <MdWavingHand size={22} color={'green'} />
              <p className="text-xl ml-2">currently looking for work</p>
            </div>
            <div>
              <h1 className="text-8xl font-extrabold">Brandon</h1>
              <h1 className="text-8xl font-extrabold">Garcia</h1>
            </div>
            <p className="text-xl font-semibold  lg:w-4/6 leading-relaxed">
              Ambitious software developer specializing in Front-End
              technologies. Passionate about tech, learning new things, and
              growing as a developer.
            </p>
          </div>
        </section>
        <section className="relative flex justify-between my-auto mx-auto mt-36 mb-36  ">
          <div class="absolute -left-16 -top-12 z-0 w-32 h-32 bg-red-400 rounded-full"></div>
          <div className="w-1/2 z-40 ">
            <h1 className="text-6xl font-extrabold pb-5">About Me</h1>
            <p className="text-xl pb-5 leading-relaxed ">
              Front-end web developer with an interest in React, NextJS, and
              Tailwind. Creating web apps has always fascinated me, that's why I
              decided to turn this interest into a career. Despite acquiring
              considerable knowledge, I do not take it for granted. I constantly
              try to develop, which allows me to level up my code and create
              more dynamic projects.
            </p>
            <p className="text-xl pb-5 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-xl leading-relaxed">
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
        <section className="mt-36 mb-36 flex justify-between ">
          <div className="mb-5 shadow-2xl flex lg:mb-0 w-1/3">
            <Image className="rounded" alt="myPic3" src={myPic3}></Image>
          </div>
          <div className="grid grid-cols-1 gap-4 ml-20 w-1/2">
            <div>
              <h1 className="text-5xl font-extrabold pb-3">Project #1</h1>
              <p className="text-lg ">Tech Stack: Next.JS, Tailwind, Heroku</p>
            </div>
            <p className="text-xl pb-5 leading-relaxed w-3/4">
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

        <section className=" mt-36 mb-36 flex justify-between ">
          <div className="grid grid-cols-1 gap-4  w-1/2">
            <div>
              <h1 className="text-5xl font-extrabold pb-3">Project #1</h1>
              <p className="text-lg ">Tech Stack: Next.JS, Tailwind, Heroku</p>
            </div>
            <p className="text-xl pb-5 leading-relaxed w-3/4">
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
          <div className="mb-5 shadow-2xl flex lg:mb-0 w-1/3">
            <Image className="rounded" alt="myPic3" src={myPic3}></Image>
          </div>
        </section>

        <section className="text-center mt-32 mb-32  my-auto mx-auto lg:flex lg:justify-center lg:text-left">
          <div className="lg:w-1/2">
            <div className="mb-5">
              <h1 className="text-4xl font-extrabold pb-3">Let's Collab!</h1>
              <p className="text-xl">grandonleebarcia@gmail.com</p>
            </div>
            <div>
              <Maps />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2">
                <p className="text-xl">Find Me</p>
                <div className="flex justify-evenly lg:w-1/2 ">
                  <AiFillGithub size={32} />
                  <AiFillLinkedin size={32} />
                  <AiOutlineMail size={32} />
                </div>
              </div>
              <div>
                <p className="text-xl">San Jose, California </p>
                <p className="text-lg">+1 (352) 262-7435</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <form action="#" class="space-y-8">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  href="#_"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
