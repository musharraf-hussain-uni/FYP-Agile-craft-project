import "./sidebar-menu.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SidebarMenu = ({
  title,
  L1,
  L2,
  L3,
  L4,
  link1,
  link2,
  link3,
  link4,
  Icon1,
  Icon2,
  Icon3,
  active,
}) => {
  return (
    <div className="sidebar-menu">
      <h3 className="sidebar-title">{title}</h3>
      <ul className="sidebar-list">
        <li className={`sidebar-list-items ${active}`}>
          <Icon1 className="sidebar-icons" />
          <Link to={link1} className="links">
            {L1}
          </Link>
        </li>
        <li className="sidebar-list-items">
          <Icon2 className="sidebar-icons" />
          <Link to={link2} className="links">
            {L2}
          </Link>
        </li>
        <li className="sidebar-list-items">
          <Icon3 className="sidebar-icons" />
          <Link to={link3} className="links">
            {L3}
          </Link>
        </li>
        {L4 && (
          <li className="sidebar-list-items">
            <Icon1 className="sidebar-icons" />
            <Link to={link4} className="links">
              {L4}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

SidebarMenu.propTypes = {
  title: PropTypes.string.isRequired,
  L1: PropTypes.any,
  L2: PropTypes.any,
  L3: PropTypes.any,
  L4: PropTypes.any,

  link1: PropTypes.any,
  link2: PropTypes.any,
  link3: PropTypes.any,
  link4: PropTypes.any,

  Icon1: PropTypes.any,
  Icon2: PropTypes.any,
  Icon3: PropTypes.any,

  active: PropTypes.any,
};

export default SidebarMenu;
