import Image from "next/image";
import BlenderLg from "../Assets/Blender-Logo.png";
import UnityLg from "../Assets/UnityLogo.png";
import CLg from "../Assets/C-sharp.png";
import PhotoshopLg from "../Assets/photoshop.png";
import FireBase from "../Assets/fireBase.png";
export default function About() {
  return (
    <>
      <section className=" bg-slate-500 bg-opacity-20 rounded-2xl ml-24 mb-28 pt-28 pl-28 pb-28 mr-24 pr-24">
        <div>
          <h2 className="text-5xl ml-36 pl-36 pb-6">About Me</h2>
          <p className=" text-xl">
            Hello,I'm Haider Aftab. Mainly a Game & Web developer. I have rich
            experience in Game development and Web development. My experience
            goes up to 3 years of both of these skills carved and honed with
            outmost focus, hard work and responsibility. Why have I chosen this
            path? Because I love creation.
          </p>
        </div>
      </section>
      <section className=" bg-slate-500 bg-opacity-20 rounded-2xl ml-24 mb-28 pt-28 pl-28 pb-28 mr-24 pr-24">
        <h2 className="text-5xl ml-36 pl-36 pb-6">Tech Stack</h2>
        <div className="flex items-center justify-between">
          <Image src={UnityLg} alt="Blender Log" width={100} height={100} />
          <Image src={CLg} alt="C#" width={100} height={100} />
          <Image src={PhotoshopLg} alt="Photoshop" width={100} height={100} />
          <Image src={BlenderLg} alt="Blender Log" width={100} height={100} />
          <Image src={FireBase} alt="firebase" width={100} height={100} />
        </div>
      </section>
    </>
  );
}
