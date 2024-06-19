import logo from './../../image/logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center	">
        <div><img src={logo}  className='max-w-[224.53px]'  alt="logo" /></div>
        <div>
          <ul className="flex">
            <li className="m-2">Home</li>
            <li className="m-2">About Us</li>
            <li className="m-2">Services</li>
            <li className="m-2">Contact Us</li>
          </ul>
        </div>
        <div className="flex ">
          <div className="m-2  border-black border-2 p-3  " style={{ borderRadius: '58% 42% 61% 39% / 61% 32% 68% 39%' }}>
          <FaFacebookF />
          </div>
          <div className="m-2 border-solid border-black border-2 p-3" style={{ borderRadius: '58% 42% 61% 39% / 61% 32% 68% 39%' }}>
          <FaLinkedinIn />
            
          </div>
          <div className="m-2 border-solid border-black border-2 p-3"  style={{ borderRadius: '58% 42% 61% 39% / 61% 32% 68% 39%' }}>
          <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
