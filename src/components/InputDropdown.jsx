import React from "react";
import { Dropdown, Input } from "semantic-ui-react";

const InputDropdown = (props) => {
  const { options, className, placeholder } = props; // get options in props
  return (
    <>
      {options && options.length > 0 && (
        <Input
          className={className}
          label={
            <Dropdown
              basic
              inline
              defaultValue={options[0].key}
              options={options}
            />
          }
          labelPosition="left"
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default InputDropdown;
