import Image from "next/image";
import TenI from "../Assets/TenSecond.jpg";
import DarkI from "../Assets/DarkRiddles.jpg";
export default function Projects() {
  return (
    <section
      id="projects"
      className=" text-gray-700 bg-slate-500 bg-opacity-20 rounded-2xl ml-24 mb-28 pt-28 pl-28 pb-28 mr-24 pr-24"
    >
      <div className=" flex items-center justify-center">
        <h2 className=" text-5xl">Projects</h2>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={TenI}
            alt="Rapid Dot Dash"
            width={100}
            height={100}
            href="https://drive.usercontent.google.com/download?id=1OAdZwyYhfIEkcYHQE42ev6E4UgtA_dZO&export=download&authuser=0&confirm=t&uuid=d2f1276d-24b8-499e-b040-f345a09833a3&at=APZUnTVlFTMpphY-uQ7wDtUW5zIZ:1708495043895"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="pt-4 text-xl"
            href="https://drive.usercontent.google.com/download?id=1OAdZwyYhfIEkcYHQE42ev6E4UgtA_dZO&export=download&authuser=0&confirm=t&uuid=d2f1276d-24b8-499e-b040-f345a09833a3&at=APZUnTVlFTMpphY-uQ7wDtUW5zIZ:1708495043895"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rapid Dot Dash
          </a>
        </div>
        <div>
          <Image
            src={DarkI}
            alt="DarkRiddles"
            width={100}
            height={100}
            href="https://drive.usercontent.google.com/download?id=1nkm6UiXpzJ7_SJMG3bYngfvsiRj1vQPU&export=download&authuser=0&confirm=t&uuid=5673dfba-c375-417a-9f3d-2f52dd0988f6&at=APZUnTWu3ORRAWqC1jPNJ-Nyok45:1708494965856"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="pt-4 text-xl"
            href="https://drive.usercontent.google.com/download?id=1nkm6UiXpzJ7_SJMG3bYngfvsiRj1vQPU&export=download&authuser=0&confirm=t&uuid=5673dfba-c375-417a-9f3d-2f52dd0988f6&at=APZUnTWu3ORRAWqC1jPNJ-Nyok45:1708494965856"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dark Riddles
          </a>
        </div>
      </div>
    </section>
  );
}
