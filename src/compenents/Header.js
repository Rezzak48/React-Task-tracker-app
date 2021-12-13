import PropTypes from "prop-types"; //click impt with ES7
import Button from "./Button";

export const Header = ({ Title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> {Title} </h1>
      <Button
        color={showAdd ? "Red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

// Default Value
Header.defaultProps = {
  Title: "Task Tracker",
};

// Strict the type pf props // u should import impt first
Header.protoTypes = {
  Title: PropTypes.string,
};

// styling by a var
// const headerStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;
