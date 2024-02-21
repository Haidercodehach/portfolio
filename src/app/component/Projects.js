import Image from "next/image";
import TenI from "../Assets/TenSecond.jpg";
import DarkI from "../Assets/DarkRiddles.jpg";
export default function Projects() {
  return (
    <section className=" bg-slate-500 bg-opacity-20 rounded-2xl ml-24 mb-28 pt-28 pl-28 pb-28 mr-24 pr-24">
      <div>
        <div>
          <Image src={TenI} alt="TenSecond" />
        </div>
      </div>
    </section>
  );
}
