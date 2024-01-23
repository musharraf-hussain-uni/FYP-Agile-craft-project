import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./featuredinfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured-items">
        <span className="featured-title">Renevue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2</span>
          <span className="featured-moneyRate">
            -$2 <ArrowDownwardIcon className="featured-Icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-items">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$20.22</span>
          <span className="featured-moneyRate">
            -4.21 <ArrowDownwardIcon className="featured-Icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-items">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$2.546</span>
          <span className="featured-moneyRate">
            +11.2 <ArrowUpwardIcon className="featured-Icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
