import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Portfolio",
    img:`${import.meta.env.BASE_URL}reactportfolio.PNG`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: [ 
      { label: "Github Repo", link: "https://github.com/navgr2001/react-portfolio" },
      { label: "See Demo", link: "https://navgr2001.github.io/react-portfolio/" }]
  },
  {
    id: 2,
    title: "Portfolio",
    img: `${import.meta.env.BASE_URL}portfolio.PNG`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: [{ label: "Github Repo", link: "https://github.com/navgr2001/portfolio" },
      { label: "See Demo", link: "https://navgr2001.github.io/portfolio/" }]
  },
  {
    id: 3,
    title: "SignPal Mobile App",
    img: `${import.meta.env.BASE_URL}signpalmobile.PNG`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: ["Github Repo"]
  },
  {
    id: 4,
    title: "Doctor Consultation Software",
    img: `${import.meta.env.BASE_URL}skinconsultation.png`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: ["Github Repo"]
  },
  {
    id: 5,
    title: "Simple Hangman Game",
    img: `${import.meta.env.BASE_URL}hangman.jpg`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: ["Github Repo"]
  },
  {
    id: 6,
    title: "Cruiseship Boarding",
    img: `${import.meta.env.BASE_URL}cruiseship.png`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: ["Github Repo"]
  },
  {
    id: 7,
    title: "Simple Calculator",
    img: `${import.meta.env.BASE_URL}calculator.jpg`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: ["Github Repo"]
  },
  {
    id: 8,
    title: "NIC detector",
    img: `${import.meta.env.BASE_URL}smartcard.jpg`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    buttons: ["Github Repo"]
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonGroup">
              {item.buttons?.map((label, i) => (
                <button key={i}>{label}</button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
