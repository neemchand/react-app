import React from "react";
import Proptypes from "prop-types";

const Button= ({name,c_name})=> <button className={c_name}>{name}</button>;

Button.defaultProps={
    name: "mybutton"
}

Button.propTypes = {
    name: Proptypes.string
  };

export default Button;