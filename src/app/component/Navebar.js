import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex item-center justify-between p-4 bg-transparent">
      <Image />
      <ul className="flex items-center justify-between gap-x-8">
        <li>
          <a className="text-xl font-bold hover:text-gray-600" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-xl font-bold hover:text-gray-600" href="#">
            About
          </a>
        </li>
        <li>
          <a className="text-xl font-bold hover:text-gray-600" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="text-xl font-bold hover:text-gray-600" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
