import "./works.scss";
import {useState} from 'react';

const Works = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      icon: "/assets/pencil.png",
      title: "Title 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac interdum mauris. Morbi nec tempor ligula.",
      img: "/assets/FoodApp.png",
      altIcon: "pencil-img",
      alt: "foodapp-img",
    },
    {
      id: 1,
      icon: "./assets/iphone.png",
      title: "Title 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac interdum mauris. Morbi nec tempor ligula.",
      img: "/assets/ExpenseTracker.png",
      altIcon: "iphone-img",
      alt: "tracker-img",
    },
    {
      id: 1,
      icon: "../assets/globe.png",
      title: "Title 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac interdum mauris. Morbi nec tempor ligula.",
      img: "/assets/DrumKit.png",
      altIcon: "globe-img",
      alt: "drumkit-img",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length- 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works" onClick={props.menuClose}>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt={d.altIcon} />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt={d.alt} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="/assets/arrow.png"
        alt="arrow-img"
        className="arrow right"
        onClick={() => handleClick("left")}
      />
      <img
        src="/assets/arrow.png"
        alt="arrow-img"
        className="arrow left"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
