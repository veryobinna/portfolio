import React from "react";
import ChessKing from "../assets/images/chess.jpg";
import X from "../assets/images/logos/X.png";
import LinkedIn from "../assets/images/logos/Linkedin.png";
import Github from "../assets/images/logos/Github.png";
import ChessLogo from "../assets/images/logos/chesslogo.png";
import SocialLink from "./SocialLink";

const socialLinks = [
  { href: "https://x.com/veryobinna", src: X, alt: "X logo" },
  { href: "https://github.com/veryobinna", src: Github, alt: "Github logo" },
  {
    href: "https://www.linkedin.com/in/obinnaokwuolisa/",
    src: LinkedIn,
    alt: "LinkedIn logo",
  },
  {
    href: "https://www.chess.com/member/obinnaprime",
    src: ChessLogo,
    alt: "Chess logo",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 p-8 flex flex-col items-center shadow-md max-w-6xl mx-auto"
    >
      <div className="flex flex-col space-x-10 md:flex-row md:w-2/3">
        <div className="md:w-2/3">
          <header className="text-left mb-12">
            <h1 className="text-4xl text-gray-900 font-bold leading-tight">
              Hello and Welcome!
            </h1>
          </header>
          <div>
            <div className=" text-wrap text-lg text-left leading-7">
              <p className="text-gray-500 mb-4">
                I am Obinna Okwuolisa and I am passionate about solving
                problems. Over the years, I have been privileged to engage in
                work that aligns with my passion.
              </p>
              <p className="text-gray-500 mb-4">
                I hold a Bachelor's in Computer Science from Nnamdi Azikiwe
                University, Awka, Nigeria and a post-graduate in Big Data from Conestoga
                College, Kitchener, Ontario, Canada.
              </p>
              <p className="text-gray-500 mb-4">
                With over seven years of experience in software engineering, I
                have built and managed diverse projects in web applications and
                data systems. I am proficient in a variety of programming
                languages and frameworks.
              </p>
              <p className="text-gray-500 mb-4">
                When I'm not coding, I'm playing chess.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:w-1/3 md:items-center md:mt-0 mt-10">
          <img
            src={ChessKing}
            alt="Obinna"
            className="rotate-3 rounded-md mb-8 md:mb-0 md:w-full"
          />
          <div className="text-center md:text-left mt-10">
            <ul className="space-y-4 mb-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </ul>
            {/* <p className="text-gray-500">
              <span>Email</span>{" "}
              <a
                href="mailto:obinna@gmail.com"
                className="text-blue-500 hover:underline"
              >
                obinna@gmail.com
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
