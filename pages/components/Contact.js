'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const [isEmailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qjtkkq8',
        'template_66gtj6k',
        form.current,
        'FGkYZbHCP05BGpP69'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function ThankYou() {
    return <div>Thank You</div>;
  }

  function Form() {
    return (
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  "
            placeholder="Let me know how I can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Leave a message..."
          ></textarea>
        </div>
        <button
          href="#_"
          className="relative inline-block px-4 py-2 font-medium group"
          type="submit"
          value="Send"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Send Message
          </span>
        </button>
      </form>
    );
  }

  return isEmailSent ? <ThankYou /> : <Form />;
};
