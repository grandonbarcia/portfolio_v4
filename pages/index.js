import Image from 'next/image';
import myPic from '../assets/headshot.PNG';

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
      <section className="flex justify-center my-auto mx-auto">
        <div>
          <Image
            className="rounded-2xl"
            src={myPic}
            height={400}
            width={400}
            alt="headshot"
          ></Image>
        </div>
        <div className="ml-5 w-1/2  grid grid-cols-1 gap-4">
          <p className="text-lg">currently looking for work</p>
          <div>
            <h1 className="text-7xl font-extrabold">Brandon</h1>
            <h1 className="text-7xl font-extrabold">Garcia</h1>
          </div>
          <p className="text-xl">
            is a producct designer who can code. Passionate about learning,
            collaboration, and empowering people.
          </p>
        </div>
      </section>
    </main>
  );
}
