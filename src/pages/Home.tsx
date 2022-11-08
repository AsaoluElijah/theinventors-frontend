import Hero from "../components/Hero";

import { useState } from "react";

const Home = () => {
  const todos = "Hello";
  return (
    <div>
      Home
      <Hero todos={todos} />
    </div>
  );
};

export default Home;
