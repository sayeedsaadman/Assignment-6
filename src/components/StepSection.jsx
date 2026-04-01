import React from "react";
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    image: userImg,
  },
  {
    number: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    image: packageImg,
  },
  {
    number: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    image: rocketImg,
  },
];

const GetStartedSection = () => {
  return (
    <section className="w-full bg-[#f5f5f7] py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 text-center">
          Get Started In 3 Steps
        </h2>

        <p className="mt-4 text-sm md:text-base text-slate-500 text-center max-w-2xl">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white border border-slate-200 rounded-3xl px-8 py-14 min-h-[280px] shadow-sm flex flex-col items-center text-center"
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-violet-600 text-white text-sm font-semibold flex items-center justify-center shadow-sm">
                {step.number}
              </div>

              <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 text-sm md:text-base text-slate-500 max-w-xs leading-6">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;