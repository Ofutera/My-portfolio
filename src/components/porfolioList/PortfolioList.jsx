import "./portfolioList.scss";

const PortfolioList = (props) => {
  return (
    <li
      className={props.active ? "portfolioList active" : "portfolioList"}
      onClick={()=>{props.setSelected(props.id)}}
    >
      {props.title}
    </li>
  );
};

export default PortfolioList;
