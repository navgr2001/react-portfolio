import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Naveen Grero
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/shalomnaveen" target="_blank" rel="noopener noreferrer">
            <img src={`${import.meta.env.BASE_URL}facebook.png`} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/shalom_naveen?igsh=MXgydHVzeWJsN2hyaw==" target="_blank" rel="noopener noreferrer">
            <img src={`${import.meta.env.BASE_URL}instagram.png`} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/naveen-grero-6a6120207" target="_blank" rel="noopener noreferrer">
            <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="Linkedin" />
          </a>
          <a href="https://github.com/navgr2001" target="_blank" rel="noopener noreferrer">
            <img src={`${import.meta.env.BASE_URL}github.png`} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
