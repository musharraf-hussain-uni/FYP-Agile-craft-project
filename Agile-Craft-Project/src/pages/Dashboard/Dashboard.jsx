import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Widgetlg from "../../components/Widgetlg/widgetlg";
import Widgetsm from "../../components/Widgetsm/Widgetsm";
import { data } from "../../data/data";
import Workingcharts from "../../components/Chart/Chart";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Workingcharts
        data={data}
        title="User Analytics"
        grid
        datakey="Active-User"
      />
      <div className="widgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
};

export default Dashboard;
