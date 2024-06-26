import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  return (
    <nav className="flex item-center justify-between p-4 fixed w-full bg-gray-900 z-50 max-sm:p-2">
      <ul className="flex items-center justify-between gap-x-8 max-sm:gap-x-4 text-gray-400">
        <li>
          <a
            className="text-xl font-bold hover:text-gray-600 max-sm:text-lg"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold hover:text-gray-600 max-sm:text-lg"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold hover:text-gray-600 max-sm:text-lg"
            href="#techStack"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold hover:text-gray-600 max-sm:text-lg"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold hover:text-gray-600 max-sm:text-lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEjtTPnnpLF6irQWybP6YS9vBLnpRtzMalG5NbwMFoHPXmqw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
