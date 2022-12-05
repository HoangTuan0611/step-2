import React from "react";
import { Dropdown } from "semantic-ui-react";

const MyDropdown = (props) => {
  const { options } = props;
  return (
    <Dropdown fluid selection defaultValue={options[0].key} options={options} />
  );
};

export default MyDropdown;
