import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const Topbar = (props) => {

  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MyPortfolio.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+31629249964</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>ondra.futera@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={props.setMenuOpen}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
