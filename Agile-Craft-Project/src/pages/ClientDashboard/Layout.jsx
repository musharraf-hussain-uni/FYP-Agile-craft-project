import PropTypes from "prop-types";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className={isOpen ? "sidebar" : "closed"}>
        <button onClick={() => setIsOpen(!isOpen)} className="">
          {isOpen ? "closed" : "Open"}
        </button>
        {isOpen && <Sidebar />}
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
