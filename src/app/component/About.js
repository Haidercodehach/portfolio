import Image from "next/image";
import BlenderLg from "../Assets/Blender-Logo.png";
import UnityLg from "../Assets/UnityLogo.png";
import CLg from "../Assets/C-sharp.png";
import PhotoshopLg from "../Assets/photoshop.png";
import FireBase from "../Assets/fireBase.png";

export default function About() {
  return (
    <>
      <section
        id="about"
        className=" text-gray-700 bg-slate-500 bg-opacity-20 rounded-2xl ml-24 mb-28 pt-28 pl-28 pb-28 mr-24 pr-24 max-md:p-2 max-md:m-5"
      >
        <div>
          <div className="flex items-center justify-center">
            <h2 className="text-5xl font-bold pt-4 max-sm:text-3xl">
              About Me
            </h2>
          </div>
          <p className="text-xl">
            Hello,I am Haider Aftab. Mainly a Game & Web developer. I have rich
            experience in Game development and Web development. My experience
            goes up to 3 years of both of these skills carved and honed with
            outmost focus, hard work and responsibility. Why have I chosen this
            path? Because I love creation.
          </p>
        </div>
      </section>
      <section
        id="techStack"
        className=" text-gray-700 bg-slate-500 bg-opacity-20 rounded-2xl ml-24 mb-28 pt-28 pl-28 pb-28 mr-24 pr-24 max-md:p-2 max-md:m-5"
      >
        <div className="flex items-center justify-center">
          <h2 className="text-5xl font-bold max-md:text-3xl ">Stack</h2>
        </div>
        <div className="flex items-center justify-between max-md:justify-center">
          <button className=" bg-slate-500 opacity-50 text-9xl rounded-2xl text-gray-700 hover:opacity-90  ">
            {" "}
            {"<"}{" "}
          </button>
          <Image
            className=" max-md:w-20 max-sm:w-14"
            src={UnityLg}
            alt="Blender Log"
            width={100}
            height={100}
          />
          <Image
            className=" max-md:w-20 max-sm:w-14"
            src={CLg}
            alt="C#"
            width={100}
            height={100}
          />
          <Image
            className=" max-md:w-20 max-sm:w-14"
            src={PhotoshopLg}
            alt="Photoshop"
            width={100}
            height={100}
          />
          <Image
            className=" max-md:w-20 max-sm:w-14"
            src={BlenderLg}
            alt="Blender Log"
            width={100}
            height={100}
          />
          <Image
            className=" max-md:w-20 max-sm:w-14"
            src={FireBase}
            alt="firebase"
            width={100}
            height={100}
          />
          <button className=" bg-slate-500 opacity-50 text-9xl rounded-2xl text-gray-700 hover:opacity-90  ">
            {" "}
            {">"}{" "}
          </button>
        </div>
      </section>
    </>
  );
}
