import { useEffect, useState } from "react";
import PortfolioList from "../porfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  brandingPortfolio,
} from "../../projectData";

const Portfolio = (props) => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio" onClick={props.menuClose}>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((data) => {
          return (
            <div className="item">
              <img src={data.img} alt={data.title} />
              <h3>{data.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
