import React from "react";
import { Select } from 'semantic-ui-react'

const MySelect = (props) => {
  const { options, placeholder, className } = props;
  return <Select className={className} placeholder={placeholder} options={options} />;
};

export default MySelect;
