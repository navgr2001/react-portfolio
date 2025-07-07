import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Portfolio",
    img: `${import.meta.env.BASE_URL}reactportfolio.PNG`,
    desc: "React-based personal portfolio site.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/react-portfolio" },
      { label: "See Demo", link: "https://navgr2001.github.io/react-portfolio" },
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    img: `${import.meta.env.BASE_URL}portfolio.PNG`,
    desc: "Simple portfolio layout design.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/portfolio" },
      { label: "See Demo", link: "https://navgr2001.github.io/portfolio" },
    ],
  },
  {
    id: 3,
    title: "SignPal Mobile App",
    img: `${import.meta.env.BASE_URL}signpalmobile.PNG`,
    desc: "Cross-platform sign language translator.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/SignPal" },
    ],
  },
  {
    id: 4,
    title: "Doctor Consultation Software",
    img: `${import.meta.env.BASE_URL}skinconsultation.png`,
    desc: "Doctor-patient desktop consultation manager.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/skinconsultation" },
    ],
  },
  {
    id: 5,
    title: "Simple Hangman Game",
    img: `${import.meta.env.BASE_URL}hangman.jpg`,
    desc: "Fun Java-based hangman word game.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/hangman" },
    ],
  },
  {
    id: 6,
    title: "Cruiseship Boarding",
    img: `${import.meta.env.BASE_URL}cruiseship.png`,
    desc: "Boarding management simulation for cruise ships.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/cruiseship-boarding" },
    ],
  },
  {
    id: 7,
    title: "Simple Calculator",
    img: `${import.meta.env.BASE_URL}calculator.jpg`,
    desc: "Basic desktop calculator app with UI.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/calculator" },
    ],
  },
  {
    id: 8,
    title: "NIC Detector",
    img: `${import.meta.env.BASE_URL}smartcard.jpg`,
    desc: "Sri Lankan NIC number breakdown tool.",
    buttons: [
      { label: "Github Repo", link: "https://github.com/navgr2001/NIC" },
    ],
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
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonGroup">
              {item.buttons?.map((btn, i) =>
                btn.link ? (
                  <a
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    <button>{btn.label}</button>
                  </a>
                ) : null
              )}
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

