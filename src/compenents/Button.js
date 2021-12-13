// rafc // just write r or ra w4adi ytal3olk
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {

  return (
    <div>
      <button
        onClick={onClick}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.protoTypes = {
  text: PropTypes.string,
  onClick : PropTypes.func
};

export default Button;
