"use client";

import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="text-4xl text-center text-gold/70 mt-6 font-roboto">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Software Engineer & Web Developer")
            .changeDelay(150)
            .deleteAll()
            .typeString("HTML | CSS")
            .changeDelay(150)
            .deleteAll()
            .typeString("Javascript | React")
            .changeDelay(150)
            .deleteAll()
            .typeString("PostgreSQL | MySQL")
            .changeDelay(150)
            .deleteAll()
            .typeString("NodeJS | ExpressJS")
            .changeDelay(150)
            .deleteAll()
            .typeString("Git | GitHub")
            .changeDelay(150)
            .deleteAll()
            .typeString("Docker | AWS")
            .changeDelay(150)
            .deleteAll()
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeWriter;
