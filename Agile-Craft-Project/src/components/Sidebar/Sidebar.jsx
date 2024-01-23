import "./sidebar.module.css";
// ICONS
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SidebarMenu from "../Sidebar-menu/Sidebar-menu";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <SidebarMenu
          title="Dashboard"
          L1="Home"
          L2="Analytics"
          // L3="Sales"
          Icon1={LineStyleIcon}
          Icon2={TrendingUpIcon}
          Icon3={TimelineIcon}
          active="active"
          link1="/"
          link2="/dashboard/analytics"
          link3="/"
        />
        <SidebarMenu
          title="Quick Menu"
          L1="Users"
          L2="Products"
          // L3="Transactions"
          Icon1={PersonIcon}
          Icon2={StorefrontIcon}
          Icon3={TrendingUpIcon}
          link1="/user"
          link2="/products"
          link3="/"
          link4="/"
        />
        <SidebarMenu
          title="Notifications"
          // L1="Mail"
          L2="Feedback"
          // L3="Messages"
          Icon1={MailOutlineOutlinedIcon}
          Icon2={DynamicFeedIcon}
          Icon3={ChatBubbleOutlineOutlinedIcon}
          link1="/"
          link2="/"
          link3="/"
          link4="/"
        />
        <SidebarMenu
          title="Services"
          L1="Manage"
          // L2="Analytics"
          L3="Report"
          Icon1={ManageSearchOutlinedIcon}
          Icon2={TrendingUpIcon}
          Icon3={BugReportOutlinedIcon}
          link1="/"
          link2="/analytics"
          link3="/"
        />

        <SidebarMenu
          title="Account"
          L1="setting "
          L2="Logout"
          // L3="Report"
          Icon1={SettingsOutlinedIcon}
          Icon2={LogoutIcon}
          Icon3={BugReportOutlinedIcon}
          link1="/"
          link2="/analytics"
          link3="/"
        />
      </div>
    </div>
  );
};

export default Sidebar;
