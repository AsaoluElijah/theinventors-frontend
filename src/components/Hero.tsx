import React from "react";

type propsType = {
  todos: string;
};

const Hero = ({ todos }: propsType) => {
  return (
    <div>
      Hero
      {todos}
    </div>
  );
};

export default Hero;
