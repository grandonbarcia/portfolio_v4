'use client';
import Image from 'next/image';
import myPic from '../assets/headshot.jpg';
import myPic2 from '../assets/backshot.jpg';
import myPic3 from '../assets/browser.jpg';
import kanban from '../assets/kanban.jpg';
import generator from '../assets/pwGen.jpg';
import memory from '../assets/memory.jpg';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { MdWavingHand } from 'react-icons/md';
import Maps from './components/Maps';
import Contact from './components/Contact';

export default function Home() {
  const dot = (
    <div className="mt-2 ml-4 w-2 h-2 bg-slate-200 rounded-full"></div>
  );

  let board = Array(16)
    .fill(0)
    .map((row) => new Array(11).fill(dot));

  return (
    <main className="relative px-10 xl:px-40 md:pb-40">
      <div className="hidden xl:block absolute top-0 right-96 ">
        {board.map((dots, index) => {
          return (
            <ol className="flex" key={index}>
              {dots.map((subDots, sIndex) => {
                return <div key={sIndex}>{subDots}</div>;
              })}
            </ol>
          );
        })}
      </div>

      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-2xl font-bold">brandonGarcia</h1>
      </nav>
      <div className="grid col-span-1 space-y-32 md:mx-24 ">
        <section className="grid col-span-1 space-y-5 lg:col-span-0 lg:space-y-0 lg:flex">
          <div className="w-full h-full xl:w-1/4">
            <div className="sm:aspect-h-3 md:aspect-w-5 lg:aspect-w-1 lg:aspect-h-1 ">
              <Image
                className="object-cover shadow-lg rounded-2xl"
                src={myPic}
                alt="headshot"
              ></Image>
            </div>
          </div>
          <div className="text-center grid col-span-1 space-y-1 lg:pl-5  lg:text-left">
            <div className="flex justify-center lg:justify-normal">
              <MdWavingHand size={22} color={'green'} />
              <p className="text-xl ml-2">currently looking for work</p>
            </div>
            <div>
              <h1 className="text-8xl font-extrabold">Brandon</h1>
              <h1 className="text-8xl font-extrabold">Garcia</h1>
            </div>
            <p className="text-xl  xl:w-4/6 leading-relaxed">
              is an ambitious software developer specializing in Front-End
              technologies. Passionate about tech, learning new things, and
              growing as a developer.
            </p>
            <div className="flex justify-center items-center lg:justify-start">
              <a href="https://github.com/grandonbarcia" target="_blank">
                <AiFillGithub size={32} className="hover:text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-garcia-54708516b/"
                target="_blank"
              >
                <AiFillLinkedin size={32} className="hover:text-cyan-700" />
              </a>
              <a
                href="/Brandon_Garcia_Resume.pdf"
                target="_blank"
                rel="noopener"
                noreferrer="true"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Resume
                </span>
              </a>
            </div>
            <div></div>
          </div>
        </section>
        <section className="relative flex justify-between  ">
          <div className="absolute -left-16 -top-12 z-0 w-32 h-32 bg-red-400 rounded-full"></div>
          <div className="w-full lg:w-1/2 z-40 ">
            <h1 className="text-6xl font-extrabold pb-5">About Me</h1>
            <p className="text-xl pb-5 leading-relaxed ">
              Hello there! I'm <span className="font-semibold">Brandon</span>, a
              passionate and aspiring web developer with a focus on creating
              seamless and modern web experiences. While my journey in the world
              of development is just beginning, I bring a fresh perspective and
              a commitment to mastering cutting-edge technologies.
            </p>
            <p className="text-xl pb-5 leading-relaxed">
              My specialization lies in crafting dynamic and responsive web
              applications using React, Next.js, and Tailwind CSS. These
              technologies, known for their efficiency and performance, are the
              cornerstones of my development toolkit.
            </p>
            <p className="text-xl leading-relaxed">
              While my professional experience might be in its early stages, my
              passion for coding, problem-solving, and creating delightful user
              experiences drives me to excel.
            </p>
          </div>
          <div className="hidden lg:flex ">
            <Image
              className="rounded-2xl shadow-lg my-auto"
              src={myPic2}
              height={400}
              width={400}
              alt="backshot"
              priority={true}
            ></Image>
          </div>
        </section>
        <section>
          <div className="text-center xl:text-left xl:flex xl:justify-between ">
            <div className="mb-5 shadow-2xl flex xl:w-1/2 xl:mb-0 relative ">
              <Image className="rounded" alt="myPic3" src={kanban}></Image>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full xl:ml-20  xl:w-1/2">
              <div>
                <h1 className="text-5xl font-extrabold pb-3">Kanban Board</h1>
                <p className="text-lg">
                  Tech Stack: Next.JS, Tailwind, React DnD
                </p>
              </div>
              <p className="text-xl pb-5 leading-relaxed w-full xl:w-3/4">
                A kanban board is one of the tools that can be used to implement
                kanban to manage work at a personal or organizational level.
                Kanban boards visually depict work at various stages of a
                process using cards to represent work items and columns to
                represent each stage of the process.
              </p>
              <div>
                <a
                  href="https://merry-blini-eb0b20.netlify.app/"
                  className="relative inline-block px-4 py-2 font-medium group"
                  target="_blank"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    View the Site
                  </span>
                </a>
                <a
                  href="https://github.com/grandonbarcia/kanban-board"
                  className="relative inline-block px-4 py-2 font-medium group"
                  target="_blank"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid text-center xl:text-left xl:flex xl:justify-between ">
          <div className="order-last grid grid-cols-1 gap-4 w-full xl:order-first xl:w-1/2">
            <div>
              <h1 className="text-5xl font-extrabold pb-3">
                Password Generator
              </h1>
              <p className="text-lg ">Tech Stack: Next.JS, Tailwind, </p>
            </div>
            <p className="text-xl pb-5 leading-relaxed w-full xl:w-3/4">
              A random password generator is software program or hardware device
              that takes input from a random or pseudo-random number generator
              and automatically generates a password. Random passwords can be
              generated manually, using simple sources of randomness such as
              dice or coins, or they can be generated using a computer.
            </p>
            <div>
              <a
                href="https://silly-cheesecake-6453bb.netlify.app/"
                target="_blank"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View the Site
                </span>
              </a>
              <a
                href="https://github.com/grandonbarcia/password-generator"
                className="relative inline-block px-4 py-2 font-medium group"
                target="_blank"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="order-first mb-5 shadow-2xl flex w-full xl:order-last xl:w-1/2 xl:mb-0 ">
            <Image className="rounded" alt="myPic3" src={generator}></Image>
          </div>
        </section>

        <section>
          <div className="text-center xl:text-left xl:flex xl:justify-between ">
            <div className="mb-5 shadow-2xl flex xl:w-1/2 xl:mb-0 ">
              <Image className="rounded" alt="myPic3" src={memory}></Image>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full xl:ml-20  xl:w-1/2">
              <div>
                <h1 className="text-5xl font-extrabold pb-3">Memory Game</h1>
                <p className="text-lg">Tech Stack: Next.JS, Tailwind, </p>
              </div>
              <p className="text-xl pb-5 leading-relaxed w-full xl:w-3/4">
                A fun memory game where users can test their memory skills with
                themselves or with friends. Users can customize their gaming
                experience by choosing between numbers or icons as the matching
                elements. The game allows further personalization by offering
                grid size options, with players selecting either a classic 4 by
                4 grid for a quick challenge or a more intricate 6 by 6 grid for
                a heightened level of difficulty.
              </p>
              <div>
                <a
                  href="https://cheery-scone-e35758.netlify.app"
                  className="relative inline-block px-4 py-2 font-medium group"
                  target="_blank"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    View the Site
                  </span>
                </a>
                <a
                  href="https://github.com/grandonbarcia/memory-game"
                  className="relative inline-block px-4 py-2 font-medium group"
                  target="_blank"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid col-span-1 space-y-32 text-center lg:space-y-2 lg:flex lg:justify-between lg:text-left mb-24">
          <div className="grid col-span-1 space-y-10 lg:w-1/2 ">
            <div className="">
              <h1 className="text-4xl font-extrabold ">Let's Collab!</h1>
              <p className="text-xl">grandonleebarcia@gmail.com</p>
            </div>
            <div>
              <Maps />
            </div>
            <div className="flex justify-between ">
              <div className="w-1/2">
                <p className="text-xl pb-3 font-semibold lg:w-1/2 lg:text-center">
                  Find Me
                </p>
                <div className="flex justify-evenly lg:w-1/2 ">
                  <a href="https://github.com/grandonbarcia" target="_blank">
                    <AiFillGithub size={32} className="hover:text-green-700" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brandon-garcia-54708516b/"
                    target="_blank"
                  >
                    <AiFillLinkedin size={32} className="hover:text-cyan-700" />
                  </a>
                  <a target="_blank">
                    <AiOutlineMail size={32} className="hover:text-red-700" />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xl pb-3 font-semibold">
                  San Jose, California{' '}
                </p>
                <p className="text-lg ">+1 (352) 262-7435</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <Contact />
          </div>
        </section>
      </div>
    </main>
  );
}
