import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skillsLeft = [
  { skill: "Java", level: 80 },
  { skill: "Python", level: 70 },
  { skill: "HTML", level: 70 },
  { skill: "CSS", level: 60 },
  { skill: "JavaScript", level: 50 },
];

const skillsRight = [
  { skill: "PHP", level: 50 },
  { skill: "MySQL", level: 50 },
  { skill: "R", level: 30 },
  { skill: "Wordpress", level: 80 },
  { skill: "C++", level: 60 },
];

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on designing and developing
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={`${import.meta.env.BASE_URL}people.webp`} alt="people" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Needs.
          </h1>
          <button>TECH STACK</button>
        </div>
      </motion.div>
      {/* <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div> */}
      {/* Progress Bars */}
      <motion.div className="skillsContainer" variants={variants}>
        <div className="column">
          {skillsLeft.map(({ skill, level }, index) => (
            <motion.div className="skill" key={skill}>
              <div className="label">
                <span>{skill}</span>
                <span>{level}%</span>
              </div>
              <motion.div
                className="bar"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
        <div className="column">
          {skillsRight.map(({ skill, level }, index) => (
            <motion.div className="skill" key={skill}>
              <div className="label">
                <span>{skill}</span>
                <span>{level}%</span>
              </div>
              <motion.div
                className="bar"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
