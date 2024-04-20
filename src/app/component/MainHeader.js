"use client";
import Image from "next/image";
import Profilepic from "../Assets/haider.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function MainHeader() {
  useEffect(() => {
    gsap.to(".bounce-me", {
      scrollTrigger: ".bounce-me",
      y: 50, // Move down by 50px
      duration: 2, // Duration of the animation in seconds
      ease: "bounce.out", // Use the bounce easing function
      // repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation each time it repeats
    });
  }, []);
  return (
    <main
      id="home"
      className=" flex justify-between items-center ml-24 mb-28 pt-28 pl-28 pb-28 max-md:p-7 max-md:pt-10 max-md:m-0 bounce-me"
    >
      <h2 className=" text-5xl text-gray-700">
        I am <span className="">Haider Aftab</span>
        <p className=" text-xl text-gray-700">
          Aspiring Game and Web programmer <br /> with strong passion for <br />
          Game and Web development.
        </p>
      </h2>
      <Image
        className="mr-28 rounded-lg"
        src={Profilepic}
        alt="Haider Aftab"
        width={250}
        height={100}
      />
    </main>
  );
}
