import React from "react";
import ChessKing from "../assets/images/chess.jpg";
import X from "../assets/images/logos/X.png";
import LinkedIn from "../assets/images/logos/Linkedin.png";
import Github from "../assets/images/logos/Github.png";
import ChessLogo from "../assets/images/logos/chesslogo.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 p-8 flex flex-col items-center shadow-md max-w-6xl mx-auto"
    >
      <div className="flex flex-row w-2/3">
        <div className="">
          <header className="text-left mb-12">
            <h1 className="text-4xl text-gray-900 font-bold leading-tight">
              Hello and Wellcome!
            </h1>
          </header>
          <div className="">
            <div className="text-wrap text-left lg:w-2/3">
              <p className="text-gray-500 mb-4">
                I love building digital products and solving problems. Over the
                years, I have been privileged to engage in work that aligns with
                my passion.
              </p>
              <p className="text-gray-500 mb-4">
                With over seven years of experience in software engineering, I
                have built diverse projects in web applications and data
                systems. I am proficient in a variety of programming languages
                and frameworks.
              </p>
              <p className="text-gray-500 mb-4">
                I hold a Barchelor's in Computer Science from Nnamdi Azikiwe
                University and a post graduat in Big Data from Conestoga
                college.
              </p>
              <p className="text-gray-500 mb-4">
                When I'm not coding, I'm playing chess.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3 items-center">
          <img
            src={ChessKing}
            alt="Obinna"
            className=" rotate-3 rounded-lg mb-8 lg:mb-0 lg:w-full"
          />
          <div className="text-center lg:text-left mt-10">
            <ul className="space-y-4 mb-4">
              <li className="flex items-center space-x-2">
                <a href="https://x.com/veryobinna">
                  <img src={X} alt="X logo" className="w-7 h-7 mb-2" />
                </a>
              </li>

              <li className="flex items-center space-x-2">
                <a href="https://github.com/veryobinna">
                  <img
                    src={Github}
                    alt="Github logo"
                    className="w-7 h-7 mb-2"
                  />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://www.linkedin.com/in/obinnaokwuolisa/"
                >
                  <img
                    src={LinkedIn}
                    alt="LinkedIn logo"
                    className="w-7 h-7 mb-2"
                  />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://www.chess.com/obinnaprime"
                >
                  <img
                    src={ChessLogo}
                    alt="Chess logo"
                    className="w-7 h-7 mb-2"
                  />
                </a>
              </li>
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
