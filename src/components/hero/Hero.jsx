import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NAVEEN GRERO</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            
            {/* Download CV Button - opens in new tab */}
            <motion.a
              href="https://drive.google.com/file/d/1jBq6scv-NxaxO-XQrafCxduNOFpgajbv/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              variants={textVariants}
            >
              <button>Download CV</button>
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={`${import.meta.env.BASE_URL}scroll.png`}
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer
      </motion.div>
      <div className="imageContainer">
        <img src={`${import.meta.env.BASE_URL}heroself.png`} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
