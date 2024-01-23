import VisibilityIcon from "@mui/icons-material/Visibility";
import "./widgetsm.css";

const Widgetsm = () => {
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Members</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-items">
          <img className="user-img" src="" alt="members-joined" />
          <div className="widget-small-user">
            <span className="widget-small-username">Arham Khan</span>
            <span className="widget-small-usertitle">IT Professional</span>
          </div>
          <div>
            <button className="widgets-btn">
              <VisibilityIcon />
              View
            </button>
          </div>
        </li>
        <li className="widget-small-list-items">
          <img className="user-img" src="" alt="members-joined" />
          <div className="widget-small-user">
            <span className="widget-small-username">Arham Khan</span>
            <span className="widget-small-usertitle">IT Professional</span>
          </div>
          <div>
            <button className="widgets-btn">
              <VisibilityIcon />
              View
            </button>
          </div>
        </li>
        <li className="widget-small-list-items">
          <img className="user-img" src="" alt="members-joined" />
          <div className="widget-small-user">
            <span className="widget-small-username">Arham Khan</span>
            <span className="widget-small-usertitle">IT Professional</span>
          </div>
          <div>
            <button className="widgets-btn">
              <VisibilityIcon />
              View
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Widgetsm;
