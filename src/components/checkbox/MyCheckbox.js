import React from "react";
import { Checkbox } from "antd";

export default function MyCheckbox(props) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return <Checkbox onChange={onChange}>{props.value}</Checkbox>;
}
