import Image from 'next/image';
import myPic from '../assets/headshot.PNG';
import myPic2 from '../assets/backshot.jpg';

export default function Home() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-2xl font-semibold">brandonGarcia</h1>
        <ul className="flex items-center">
          <li></li>
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
      <section className="flex justify-center my-auto mx-auto mb-8">
        <div>
          <Image
            className="rounded-2xl"
            src={myPic}
            height={400}
            width={400}
            alt="headshot"
          ></Image>
        </div>
        <div className="ml-5 grid grid-cols-1 gap-4">
          <p className="text-lg">currently looking for work</p>
          <div>
            <h1 className="text-7xl font-extrabold">Brandon</h1>
            <h1 className="text-7xl font-extrabold">Garcia</h1>
          </div>
          <p className="text-xl w-5/6">
            is a producct designer who can code. Passionate about learning,
            collaboration, and empowering people.
          </p>
        </div>
      </section>
      <section className="flex justify-end my-auto mx-auto mb-8">
        <div className="w-1/2 my-auto mx-auto">
          <h1 className="text-5xl font-extrabold pb-3">About Me</h1>
          <p className="text-xl pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <div className="w-1/3">
          <Image
            className="rounded-2xl "
            src={myPic2}
            height={400}
            width={400}
            alt="headshot"
          ></Image>
        </div>
      </section>
    </main>
  );
}
