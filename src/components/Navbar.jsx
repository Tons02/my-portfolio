import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* Logo or other content */}
      </div>
      <div className="m-8 flex items-center justify-start lg:justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/antonio-jr-montilla/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Tons02" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <FaTwitterSquare />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
