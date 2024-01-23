import PropTypes from "prop-types";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className={isOpen ? "sidebar open" : "sidebar closed"}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "closed" : "open"}
        >
          {isOpen ? "Closed" : "Open"}
        </button>
        {isOpen && <Sidebar>{children}</Sidebar>}
      </div>

      <div className={isOpen ? "content hidden" : "content"}>
        <div>{children}</div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
