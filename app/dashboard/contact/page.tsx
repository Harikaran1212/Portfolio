"use client";

import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "f6209d9f-1cd7-46f7-94d8-19fc33095dc9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!", {
        style: { fontFamily: "Poppins, sans-serif" },
      });
      (event.target as HTMLFormElement).reset();
    } else {
      toast.error("Failed to send message. Please try again.", {
        style: { fontFamily: "Poppins, sans-serif" },
      });
    }
  }

  const contactInfo = [
    {
      icon: "proicons:call",
      label: "Call Me",
      value: "+91 9843627312",
      href: "tel:+919843627312",
    },
    {
      icon: "proicons:mail",
      label: "Email",
      value: "harikaranrk2003@gmail.com",
      href: "mailto:harikaranrk2003@gmail.com",
    },
    {
      icon: "lucide:map-pin",
      label: "Location",
      value: "India - Tamil Nadu",
      href: undefined,
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen w-full bg-[#f7f8fe] dark:bg-[#10152c] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6928e6]/10 mb-1 sm:mb-2">
            <Icon icon="material-symbols-light:mail-outline-rounded" width="24" height="24" className="text-[#6928e6]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6928e6]">
            Let&apos;s Talk
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] dark:text-white">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Get In Touch</p>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#4219dc] to-[#973af1] mt-1" />
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 lg:gap-16 w-full"
        >
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full md:w-80 flex-shrink-0">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white dark:bg-[#1d2030] p-4 sm:p-5 rounded-2xl shadow-[0_4px_15px_rgba(105,40,230,0.08)] border border-[#6928e6]/10 hover:border-[#6928e6]/25 hover:shadow-[0_8px_25px_rgba(105,40,230,0.15)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f0ebfd] dark:bg-[#6928e6]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#4219dc] group-hover:to-[#973af1] transition-all duration-300">
                  <Icon
                    icon={info.icon}
                    width="22"
                    height="22"
                    className="text-[#6928e6] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#1a1a2e] dark:text-white text-xs sm:text-sm">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5 hover:text-[#6928e6] transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5 truncate">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5 w-full md:max-w-md bg-white dark:bg-[#1d2030] p-5 sm:p-7 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(105,40,230,0.1)] border border-[#6928e6]/10"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-[#f7f8fe] dark:bg-[#10152c] border border-[#6928e6]/15 dark:border-[#6928e6]/25 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6928e6] focus:ring-2 focus:ring-[#6928e6]/20 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@gmail.com"
                  className="w-full bg-[#f7f8fe] dark:bg-[#10152c] border border-[#6928e6]/15 dark:border-[#6928e6]/25 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6928e6] focus:ring-2 focus:ring-[#6928e6]/20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message..."
                className="w-full bg-[#f7f8fe] dark:bg-[#10152c] border border-[#6928e6]/15 dark:border-[#6928e6]/25 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6928e6] focus:ring-2 focus:ring-[#6928e6]/20 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4219dc] to-[#973af1] text-white font-semibold py-3 px-6 rounded-full shadow-[0_4px_15px_rgba(105,40,230,0.35)] hover:shadow-[0_8px_25px_rgba(105,40,230,0.5)] hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm cursor-pointer active:scale-98"
            >
              Send Message
              <Icon icon="proicons:send" width="18" height="18" />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
