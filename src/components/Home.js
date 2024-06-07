import React from 'react';
import bgImage from '../assets/images/bg.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center "
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-4xl font-bold text-gray-900">Obinna Okwuolisa</h1>
      <p className="mt-4 text-2xl text-gray-500">Software Engineer</p>
    </section>
  );
};

export default Home;

