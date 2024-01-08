import "./widgetlg.css";
import PropTypes from "prop-types";

const Widgetlg = () => {
  const Button = ({ type }) => {
    return <button className={"widget-large-btn " + type}>{type}</button>;
  };
  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Latest transcations</h3>
      <table className="widget-large-table">
        <tr className="widget-large-table-row">
          <th className="widget-large-table-head">Customer</th>
          <th className="widget-large-table-head">Dates</th>
          <th className="widget-large-table-head">Amount</th>
          <th className="widget-large-table-head">Status</th>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="https://i.cbc.ca/1.6654179.1668638502!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1243560848.jpg"
              className="widget-large-img"
            />
            <span className="widget-large-username">Leo Messi</span>
          </td>
          <td className="widget-large-table-date">21-02-2022</td>
          <td className="widget-large-table-amount">$243</td>
          <td className="widget-large-table-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="https://i.cbc.ca/1.6654179.1668638502!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1243560848.jpg"
              className="widget-large-img"
            />
            <span className="widget-large-username">Leo Messi</span>
          </td>
          <td className="widget-large-table-date">21-02-2022</td>
          <td className="widget-large-table-amount">$243</td>
          <td className="widget-large-table-status">
            <Button type="Decline" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="https://i.cbc.ca/1.6654179.1668638502!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1243560848.jpg"
              className="widget-large-img"
            />
            <span className="widget-large-username">Leo Messi</span>
          </td>
          <td className="widget-large-table-date">21-02-2022</td>
          <td className="widget-large-table-amount">$243</td>
          <td className="widget-large-table-status">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

Widgetlg.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Widgetlg;
