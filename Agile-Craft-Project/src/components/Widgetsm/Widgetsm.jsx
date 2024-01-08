import VisibilityIcon from "@mui/icons-material/Visibility";
import "./widgetsm.css";

const Widgetsm = () => {
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Members</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-items">
          <img
            className="user-img"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5648e027198a434f/64162a3012c1f4425a6f02e0/Cristiano_Ronaldo_2022-23.jpg?auto=webp&format=jpg&quality=80"
            alt="members-joined"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Arham Khan</span>
            <span className="widget-small-usertitle">IT Professional</span>
          </div>
          <button className="widgets-btn">
            <VisibilityIcon />
            View
          </button>
        </li>
        <li className="widget-small-list-items">
          <img
            className="user-img"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5648e027198a434f/64162a3012c1f4425a6f02e0/Cristiano_Ronaldo_2022-23.jpg?auto=webp&format=jpg&quality=80"
            alt="members-joined"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Arham Khan</span>
            <span className="widget-small-usertitle">IT Professional</span>
          </div>
          <button className="widgets-btn">
            <VisibilityIcon />
            View
          </button>
        </li>
        <li className="widget-small-list-items">
          <img
            className="user-img"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5648e027198a434f/64162a3012c1f4425a6f02e0/Cristiano_Ronaldo_2022-23.jpg?auto=webp&format=jpg&quality=80"
            alt="members-joined"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Arham Khan</span>
            <span className="widget-small-usertitle">IT Professional</span>
          </div>
          <button className="widgets-btn">
            <VisibilityIcon className="widgets-btn-icon" />
            View
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Widgetsm;
