import Image from "next/image";
import Profilepic from "../Assets/haider.png";
export default function MainHeader() {
  return (
    <main
      id="home"
      className=" flex justify-between items-center ml-24 mb-28 pt-28 pl-28 pb-28 max-md:p-7 max-md:pt-10 max-md:m-0 "
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
