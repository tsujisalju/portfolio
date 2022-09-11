import { url } from "inspector";
import { Parallax } from "react-scroll-parallax";
import Hero from "./Hero";

const style = {
  bg1: {
    backgroundImage: "url('/img/home-bg/portfolio-bg1.png')",
  },
  bg2: {
    backgroundImage: "url('/img/home-bg/portfolio-bg2.png')",
  },
  bg3: {
    backgroundImage: "url('/img/home-bg/portfolio-bg3.png')",
  },
  bg4: {
    backgroundImage: "url('/img/home-bg/portfolio-bg4.png')",
  },
  bg5: {
    backgroundImage: "url('/img/home-bg/portfolio-bg5.png')",
  },
};

export default function HomeBackground() {
  return (
    <div>
      <div className="w-full h-screen transition duration-200">
        <Parallax
          speed={-20}
          style={style.bg1}
          className="absolute inset-0 bg-cover bg-center"
        ></Parallax>
        <Parallax
          speed={-15}
          style={style.bg2}
          className="absolute inset-0 bg-cover bg-center"
        ></Parallax>
        <Parallax
          speed={-20}
          className="absolute flex flex-col justify-center items-center inset-0 -top-[550px]"
        >
          <h1 className=" text-stone-900 font-display text-5xl">
            Welcome to the consortium.
          </h1>
          <p className="text-stone-900 font-sans text-lg">
            This is pretty cool!
          </p>
        </Parallax>
        <Parallax
          speed={-10}
          style={style.bg3}
          className="absolute inset-0 bg-cover bg-center"
        ></Parallax>
        <Parallax
          speed={-5}
          style={style.bg4}
          className="absolute inset-0 bg-cover bg-center"
        ></Parallax>
        <Parallax
          speed={0}
          style={style.bg5}
          className="absolute inset-0 bg-cover bg-center"
        ></Parallax>
      </div>
    </div>
  );
}
