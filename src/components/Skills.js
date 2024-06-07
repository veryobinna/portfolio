import React from "react";
import reactLogo from "../assets/images/logos/react.png";
import nextLogo from "../assets/images/logos/next.png";
import typescriptLogo from "../assets/images/logos/ts.png";
import js from "../assets/images/logos/js.png";
import bootstrapLogo from "../assets/images/logos/bootstrap.png";
import cssLogo from "../assets/images/logos/css.png";
import htmlLogo from "../assets/images/logos/html.png";
import jqueryLogo from "../assets/images/logos/jquery.png";
import reduxLogo from "../assets/images/logos/redux.png";
import tailwindLogo from "../assets/images/logos/tailwind.png";
import NodeJS from "../assets/images/logos/node.png";
import Python from "../assets/images/logos/python.png";
import mysql from "../assets/images/logos/mysql.png";
import postgres from "../assets/images/logos/postgres.png";
import mongo from "../assets/images/logos/mongo.png";
import hadoop from "../assets/images/logos/hadoop.jpg";
import sparks from "../assets/images/logos/sparks.png";
import kafka from "../assets/images/logos/kafka.jpg";
import awsLogo from "../assets/images/logos/aws.png";
import jenkinsLogo from "../assets/images/logos/jenkins.png";
import herokuLogo from "../assets/images/logos/heroku.png";
import ansibleLogo from "../assets/images/logos/ansible.png";
import gitLogo from "../assets/images/logos/git.png";
import linuxLogo from "../assets/images/logos/linux.png";
import gcpLogo from "../assets/images/logos/gcp.png";
import Django from "../assets/images/logos/django.jpg";

const logos = {
  Frontend: [
    { name: "JavaScript", src: js },
    { name: "ReactJS", src: reactLogo },
    { name: "NextJS", src: nextLogo },
    { name: "Typescript", src: typescriptLogo },
    { name: "Bootstrap", src: bootstrapLogo },
    { name: "CSS", src: cssLogo },
    { name: "HTML", src: htmlLogo },
    { name: "jQuery", src: jqueryLogo },
    { name: "Redux", src: reduxLogo },
    { name: "Tailwind", src: tailwindLogo },
  ],
  Backend: [
    { name: "NodeJS", src: NodeJS },
    { name: "Python", src: Python },
    { name: "Django", src: Django },
  ],
  DataBase: [
    { name: "Postgres", src: postgres },
    { name: "MongoDB", src: mongo },
    { name: "MySQL", src: mysql },
  ],
  BigData: [
    { name: "Hadoop", src: hadoop },
    { name: "Apache Sparks", src: sparks },
    { name: "Apache Kafka", src: kafka },
  ],
  "DevOps/Cloud": [
    { name: "AWS", src: awsLogo },
    { name: "Jenkins", src: jenkinsLogo },
    { name: "Heroku", src: herokuLogo },
    { name: "Ansible", src: ansibleLogo },
    { name: "Git", src: gitLogo },
    { name: "Linux", src: linuxLogo },
    { name: "GCP", src: gcpLogo },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-50 p-8 rounded-lg shadow-md max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="space-y-8">
        {Object.entries(logos).map(([category, skillsList]) => (
          <div key={category} className="border-b-2 pb-4">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap justify-center space-x-4">
              {skillsList.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center skill-logo">
                  <img
                    src={skill.src}
                    alt={`${skill.name} logo`}
                    className="w-16 h-16 mb-2  hover-spin7"
                  />
                  <span className="text-lg text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
